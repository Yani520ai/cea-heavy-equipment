// Safe tracking helper. It works even if Google Analytics / Microsoft Clarity is not installed.
export function trackEvent(eventName, payload = {}) {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: eventName, ...payload })
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, payload)
      }
      if (typeof window.clarity === 'function') {
        window.clarity('event', eventName)
      }
    }
  } catch (_) {
    // Tracking must never block conversion actions.
  }
}
