import React from 'react'
import { Globe2, MessageCircle, Ship } from 'lucide-react'
import { marketExamples, marketRegions } from '../data/siteData'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function Markets() {
  return (
    <section id="markets" className="bg-brand-navy py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-4xl">
          <div className="mb-4 flex items-center gap-3"><div className="h-px w-12 bg-brand-gold" /><span className="section-label">Global buyer regions</span></div>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">Serving Buyers Worldwide</h2>
          <p className="mt-5 body-copy">Our strongest buyer regions include Africa, Southeast Asia, the Middle East, Latin America and Central Asia. If your country is not listed, send the machine type and destination country by WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {marketRegions.map((market) => (
            <a
              key={market.region}
              href={buildWhatsAppUrl(`Hello. I need used heavy equipment from China. Region: ${market.region}. Destination country/port: `)}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 bg-brand-navy-dark/80 p-6 transition hover:border-brand-gold/60 hover:bg-brand-steel/25"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="text-4xl">{market.flag}</div>
                <Globe2 size={22} className="text-brand-gold" />
              </div>
              <h3 className="font-heading text-3xl font-black uppercase text-white">{market.region}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-brand-slate-light">{market.summary}</p>
              <p className="mt-3 font-body text-sm text-brand-slate"><span className="text-brand-gold">Examples:</span> {market.examples}</p>
              <p className="mt-2 font-body text-sm text-brand-slate"><span className="text-brand-gold">Ports/routes:</span> {market.ports}</p>
              <div className="mt-5 inline-flex items-center gap-2 font-body text-xs font-black uppercase tracking-widest text-brand-gold">
                <MessageCircle size={15} /> Ask for current machines
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 border border-brand-gold/20 bg-brand-steel/20 p-6 sm:p-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="section-label mb-2">Example destination markets</div>
              <h3 className="font-heading text-4xl font-black uppercase text-white">Request CIF Options By Country</h3>
            </div>
            <div className="font-body text-xs font-black uppercase tracking-widest text-brand-gold">More countries supported by request</div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {marketExamples.map((market) => (
              <a
                key={market.country}
                href={buildWhatsAppUrl(`Hello. I need used heavy equipment from China to ${market.country}. Destination port: ${market.ports}. Please send suitable machines and CIF options.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/10 bg-brand-navy-dark/80 p-5 transition hover:border-brand-gold/60 hover:bg-brand-steel/25"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-3xl">{market.flag}</div>
                  <Ship size={19} className="text-brand-gold" />
                </div>
                <h4 className="font-heading text-2xl font-black uppercase text-white">{market.country}</h4>
                <p className="mt-2 font-body text-sm text-brand-slate"><span className="text-brand-gold">Ports:</span> {market.ports}</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-brand-slate"><span className="text-brand-gold">Common requests:</span> {market.need}</p>
                <div className="mt-4 inline-flex items-center gap-2 font-body text-xs font-black uppercase tracking-widest text-brand-gold">
                  <MessageCircle size={15} /> Request CIF
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
