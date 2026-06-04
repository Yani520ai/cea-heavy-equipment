import { contact, defaultWhatsAppMessage } from '../data/siteData'
import { trackEvent } from './tracking'

export function cleanPhoneNumber(number) {
  return String(number || '').replace(/[^0-9]/g, '')
}

export function buildWhatsAppUrl(message = defaultWhatsAppMessage) {
  const phone = cleanPhoneNumber(contact.whatsapp)
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message, source = 'unknown') {
  trackEvent('whatsapp_click', { source, message_preview: String(message || '').slice(0, 120) })
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}

export function buildEmailUrl(subject, body) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
