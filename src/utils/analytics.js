import { analytics } from '../data/siteData'

let loaded = false

export function loadAnalytics() {
  if (loaded || typeof window === 'undefined') return
  loaded = true

  const gaId = analytics.googleAnalyticsId
  if (gaId) {
    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', gaId, { anonymize_ip: true })

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)
  }

  const clarityId = analytics.microsoftClarityId
  if (clarityId) {
    ;(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}
      t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)
    })(window, document, 'clarity', 'script', clarityId)
  }
}

export function attachConversionTracking() {
  if (typeof window === 'undefined') return () => {}

  const handler = (event) => {
    const link = event.target.closest?.('a')
    if (!link) return
    const href = link.getAttribute('href') || ''

    if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'whatsapp_click',
        click_text: (link.textContent || '').trim().slice(0, 80),
        click_url: href.slice(0, 200),
      })
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'whatsapp_click', {
          link_text: (link.textContent || '').trim().slice(0, 80),
          transport_type: 'beacon',
        })
      }
      if (typeof window.clarity === 'function') {
        window.clarity('event', 'whatsapp_click')
      }
    }

    if (href.startsWith('mailto:')) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'email_click', click_url: href.slice(0, 200) })
      if (typeof window.gtag === 'function') window.gtag('event', 'email_click')
      if (typeof window.clarity === 'function') window.clarity('event', 'email_click')
    }
  }

  document.addEventListener('click', handler)
  return () => document.removeEventListener('click', handler)
}
