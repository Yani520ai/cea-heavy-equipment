import React from 'react'
import { Search, BadgeCheck, MessageCircle, Video, ShieldCheck, Ship } from 'lucide-react'
import { trustItems } from '../data/siteData'

const icons = [Search, BadgeCheck, MessageCircle, Video, ShieldCheck, Ship]

export default function TrustSection() {
  return (
    <section className="bg-brand-navy-dark py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3"><div className="h-px w-12 bg-brand-gold" /><span className="section-label">Why buyers choose us</span></div>
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">Designed For Fast International Equipment Sourcing</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, index) => {
            const Icon = icons[index]
            return (
              <div key={item.title} className="card-dark p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-brand-gold/10 text-brand-gold">
                  <Icon size={23} />
                </div>
                <h3 className="font-heading text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-slate">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
