import { contact, defaultWhatsAppMessage } from '../data/siteData'
import { trackEvent } from './tracking'

export function cleanPhoneNumber(number) {
  return String(number || '').replace(/[^0-9]/g, '')
}

export function getDefaultWhatsAppMessage(lang = 'en') {
  if (typeof defaultWhatsAppMessage === 'string') {
    return defaultWhatsAppMessage
  }

  return defaultWhatsAppMessage[lang] || defaultWhatsAppMessage.en || ''
}

export function buildWhatsAppUrl(message, lang = 'en') {
  const phone = cleanPhoneNumber(contact.whatsapp)
  const finalMessage = message || getDefaultWhatsAppMessage(lang)

  return `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`
}

export function openWhatsApp(message, source = 'unknown', lang = 'en') {
  const finalMessage = message || getDefaultWhatsAppMessage(lang)

  trackEvent('whatsapp_click', {
    source,
    message_preview: String(finalMessage || '').slice(0, 120),
  })

  window.open(buildWhatsAppUrl(finalMessage, lang), '_blank', 'noopener,noreferrer')
}

export function buildEmailUrl(subject, body) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}