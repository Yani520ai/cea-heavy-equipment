import React from 'react'
import { CheckCircle2, MessageCircle, Mic } from 'lucide-react'
import { fastestReplyChecklist } from '../data/siteData'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function FastestReply() {
  return (
    <section className="bg-brand-navy-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="section-label">Fastest reply</span>
            </div>
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">Send 3 Items First. We Ask The Rest.</h2>
            <p className="mt-5 body-copy text-base text-brand-slate-light">
              Many buyers do not want to fill a long form. That is fine. Send a short WhatsApp message or voice note with the machine type, destination country and budget range. We will continue the conversation from there.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={buildWhatsAppUrl('Hello. I need used equipment from China. Machine type: Country: Budget: Please send current options.')} target="_blank" rel="noopener noreferrer" className="btn-green">
                <MessageCircle size={20} /> Send Short Request
              </a>
              <a href={buildWhatsAppUrl('Hello. I will send a voice message about the machine I need from China.')} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Mic size={20} /> Voice Message Welcome
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {fastestReplyChecklist.map((item) => (
              <div key={item.title} className="border border-white/10 bg-brand-navy/80 p-5">
                <CheckCircle2 className="mb-3 text-green-400" size={22} />
                <h3 className="font-heading text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-brand-slate">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
