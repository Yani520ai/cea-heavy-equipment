import React from 'react'
import { MessageCircle, Route } from 'lucide-react'
import { exportScenarios } from '../data/siteData'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function ExportScenarios() {
  return (
    <section className="bg-brand-navy-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="section-label">Common sourcing scenarios</span>
          </div>
          <h2 className="section-title text-4xl sm:text-5xl">Common Buyer Routes We Support</h2>
          <p className="mt-5 body-copy text-base">
            These are typical international sourcing scenarios, not fixed live stock. Send your destination and machine requirement to receive current options.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {exportScenarios.map((item) => (
            <a
              key={item.route}
              href={buildWhatsAppUrl(item.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 bg-brand-navy/80 p-6 transition hover:border-brand-gold/60 hover:bg-brand-steel/25"
            >
              <Route className="mb-5 text-brand-gold" size={25} />
              <h3 className="font-heading text-2xl font-black uppercase text-white">{item.route}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-brand-slate-light">{item.detail}</p>
              <div className="mt-5 inline-flex items-center gap-2 font-body text-xs font-black uppercase tracking-widest text-brand-gold">
                <MessageCircle size={15} /> {item.cta}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
