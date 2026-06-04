import React from 'react'
import { howItWorks } from '../data/siteData'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-navy-dark py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3"><div className="h-px w-12 bg-brand-gold" /><span className="section-label">Simple buying process</span></div>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">From WhatsApp Message To Machine Options</h2>
          <p className="mt-5 body-copy text-base">The website only needs to capture your requirement. The real sourcing process happens fast through WhatsApp, photos, videos, inspection and CIF discussion.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {howItWorks.map((step) => (
            <div key={step.step} className="relative border border-white/10 bg-brand-steel/20 p-6">
              <div className="mb-5 font-heading text-5xl font-black text-brand-gold/30">{step.step}</div>
              <h3 className="font-heading text-2xl font-black uppercase text-white">{step.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-brand-slate">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
