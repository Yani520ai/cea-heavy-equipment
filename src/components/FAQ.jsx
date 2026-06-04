import React from 'react'
import { faqs } from '../data/siteData'
import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function FAQ() {
  return (
    <section className="bg-brand-navy-dark py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="section-label mb-3">Buyer questions</div>
          <h2 className="section-title text-4xl sm:text-5xl">Fast Answers Before WhatsApp</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="border border-white/10 bg-brand-navy/70 p-5">
              <h3 className="font-heading text-2xl font-black uppercase text-white">{item.q}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-slate-light">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={buildWhatsAppUrl('Hello. I have a question about sourcing used equipment from China.')} target="_blank" rel="noopener noreferrer" className="btn-green">
            <MessageCircle size={20} /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
