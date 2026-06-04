import React from 'react'
import { MessageCircle } from 'lucide-react'
import { machineCategories } from '../data/siteData'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function MachineCategories() {
  return (
    <section id="categories" className="bg-brand-navy-dark py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="section-label">Representative categories</span>
          </div>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">What Machine Are You Looking For?</h2>
          <p className="mt-5 body-copy text-base">
            These images show representative equipment categories. They are not promoted as live stock. Click a category to request current available machines by WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {machineCategories.map((item) => (
            <a
              key={item.title}
              href={buildWhatsAppUrl(item.prompt)}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden border border-white/10 bg-brand-navy transition hover:border-brand-gold/60"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={`${item.title} representative image`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/20 to-transparent" />
                <div className="absolute left-3 top-3 bg-brand-navy-dark/80 px-3 py-1 font-body text-[9px] font-black uppercase tracking-widest text-brand-slate backdrop-blur">
                  Representative image
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-brand-slate">{item.subtitle}</p>
                <div className="mt-5 inline-flex items-center gap-2 font-body text-xs font-black uppercase tracking-widest text-brand-gold">
                  <MessageCircle size={16} /> Request Available Machines
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
