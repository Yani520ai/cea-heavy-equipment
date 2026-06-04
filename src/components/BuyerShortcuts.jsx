import React from 'react'
import { MessageCircle, Video, Ship, ShieldCheck } from 'lucide-react'
import { buyerShortcuts } from '../data/siteData'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const icons = [MessageCircle, Video, Ship, ShieldCheck]

export default function BuyerShortcuts() {
  return (
    <section className="bg-brand-navy-dark py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {buyerShortcuts.map((item, index) => {
          const Icon = icons[index]
          return (
            <a
              key={item.title}
              href={buildWhatsAppUrl(item.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 bg-brand-steel/25 p-5 transition hover:border-brand-gold/50 hover:bg-brand-steel/45"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy">
                <Icon size={22} />
              </div>
              <h3 className="font-heading text-2xl font-black uppercase text-white">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-brand-slate">{item.text}</p>
              <div className="mt-4 font-body text-xs font-black uppercase tracking-widest text-brand-gold">{item.cta}</div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
