import React from 'react'
import { ShieldCheck, AlertTriangle } from 'lucide-react'
import { buyerSafety } from '../data/siteData'

export default function BuyerSafety() {
  return (
    <section className="bg-brand-navy-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3"><div className="h-px w-12 bg-brand-gold" /><span className="section-label">Buyer safety</span></div>
            <h2 className="section-title text-4xl sm:text-5xl">Clear Rules For Used Equipment Buyers</h2>
            <p className="mt-5 body-copy">A serious used-equipment website must be transparent. We do not want buyers to believe representative website images are live stock.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {buyerSafety.map((item, index) => (
              <div key={item} className="border border-white/10 bg-brand-steel/20 p-5">
                {index === 0 ? <AlertTriangle className="mb-4 text-brand-gold" size={24} /> : <ShieldCheck className="mb-4 text-brand-gold" size={24} />}
                <p className="font-body text-sm font-semibold leading-relaxed text-brand-slate-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
