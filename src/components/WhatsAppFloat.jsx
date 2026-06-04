import React from 'react'
import { MessageCircle, Search, Ship, Video } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function WhatsAppFloat() {
  return (
    <>
      <div className="fixed bottom-6 right-5 z-50 hidden flex-col gap-3 sm:flex">
        <a href={buildWhatsAppUrl('Hello. I am looking for used construction equipment from China. Please send current available machines.')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-body text-sm font-black uppercase tracking-wider text-white shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-green-400">
          <MessageCircle size={20} /> WhatsApp Us
        </a>
        <a href={buildWhatsAppUrl('Hello. Please send current machine videos before quotation.')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full bg-brand-steel px-5 py-3 font-body text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-black/20 transition hover:bg-brand-steel-light">
          <Video size={18} /> Request Videos
        </a>
        <a href={buildWhatsAppUrl('Hello. Please send CIF price options for used heavy equipment from China. My destination port is:')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full bg-brand-gold px-5 py-3 font-body text-xs font-black uppercase tracking-wider text-brand-navy shadow-xl shadow-black/20 transition hover:bg-brand-gold-light">
          <Ship size={18} /> CIF Price
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 bg-brand-navy-dark sm:hidden">
        <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 bg-green-500 px-2 py-3 text-[11px] font-black uppercase tracking-wide text-white"><MessageCircle size={19} /> WhatsApp</a>
        <a href="#find-machine" className="flex flex-col items-center gap-1 bg-brand-gold px-2 py-3 text-[11px] font-black uppercase tracking-wide text-brand-navy"><Search size={19} /> Find</a>
        <a href={buildWhatsAppUrl('Hello. I need CIF price for used heavy equipment from China.')} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 bg-brand-steel px-2 py-3 text-[11px] font-black uppercase tracking-wide text-white"><Ship size={19} /> CIF</a>
      </div>
    </>
  )
}
