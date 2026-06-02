import React from 'react'
import { Search, Package, Eye, Ship, Globe, ArrowRight } from 'lucide-react'

const advantages = [
  {
    icon: Search,
    title: 'Direct Access to China Supply',
    description: 'We connect buyers with reliable equipment suppliers and machinery sources directly in China — bypassing intermediaries and reducing cost.',
    stat: 'Direct',
    statLabel: 'China Access',
  },
  {
    icon: Package,
    title: 'Equipment Sourcing Support',
    description: 'We help identify suitable equipment according to your project requirements, capacity specifications and budget constraints.',
    stat: '100%',
    statLabel: 'Spec-Based',
  },
  {
    icon: Eye,
    title: 'Inspection Assistance',
    description: 'Photo documentation, video walkthroughs and equipment condition verification support before any purchase commitment.',
    stat: 'Pre-Buy',
    statLabel: 'Inspection',
  },
  {
    icon: Ship,
    title: 'Export Coordination',
    description: 'Support for supplier communication, logistics coordination and export documentation preparation from China to your destination.',
    stat: 'Full',
    statLabel: 'Coordination',
  },
  {
    icon: Globe,
    title: 'International Market Experience',
    description: 'Operational experience working across China, Africa and Europe — understanding local regulatory, commercial and logistical requirements.',
    stat: '3+',
    statLabel: 'Continents',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-brand-navy overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      {/* Diagonal accent */}
      <div className="absolute right-0 top-0 bottom-0 w-64 lg:w-96 opacity-5"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, #C8952A 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="section-label">Our Value</span>
            </div>
            <h2 className="section-title text-5xl md:text-6xl lg:text-7xl">
              WHY INTERNATIONAL<br />
              <span className="text-brand-gold">BUYERS CHOOSE US</span>
            </h2>
          </div>
          <div>
            <p className="font-body text-brand-slate text-base leading-relaxed">
              We're not a listing platform. We're a specialized sourcing partner that works on your behalf — 
              identifying suitable equipment, verifying condition and coordinating the export process 
              from China to your project location.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="font-body text-brand-slate text-xs uppercase tracking-widest">B2B Only</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`card-dark p-8 group ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Icon + stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                    <Icon size={22} className="text-brand-gold" />
                  </div>
                  <div className="text-right">
                    <div className="font-heading font-bold text-brand-gold text-2xl">{item.stat}</div>
                    <div className="font-body text-brand-slate text-xs uppercase tracking-wider">{item.statLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-white text-xl mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-brand-slate text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover line */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-brand-gold/40 transition-all duration-500" />
              </div>
            )
          })}

          {/* Extra CTA card */}
          <div className="relative bg-brand-gold p-8 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-10" />
            <div className="relative">
              <div className="font-heading font-bold text-brand-navy text-3xl leading-tight mb-4">
                READY TO SOURCE<br />EQUIPMENT?
              </div>
              <p className="font-body text-brand-navy/70 text-sm leading-relaxed mb-8">
                Tell us what you need. We'll identify options within China's equipment supply and connect you with verified sources.
              </p>
            </div>
            <a
              href="#contact"
              className="relative flex items-center gap-2 font-body font-semibold text-brand-navy text-sm uppercase tracking-wider group"
            >
              <span>Start Sourcing Now</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Target customers bar */}
        <div className="mt-16 border border-white/5 p-6 bg-brand-steel/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <span className="section-label whitespace-nowrap">We Work With</span>
            <div className="flex flex-wrap gap-3">
              {[
                'Crane Rental Companies',
                'Construction Contractors',
                'Port Operators',
                'Mining Companies',
                'Equipment Dealers',
                'Infrastructure Project Developers',
                'Industrial Companies',
              ].map(type => (
                <span
                  key={type}
                  className="font-body text-xs text-brand-slate-light border border-white/10 px-3 py-1.5 hover:border-brand-gold/40 hover:text-brand-gold transition-all cursor-default"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
