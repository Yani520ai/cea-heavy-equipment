import React from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Heavy construction cranes"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy/85 to-brand-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
      </div>

      {/* Gold accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">

          {/* Pre-label */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="section-label">CEA Heavy Equipment</span>
          </div>

          {/* Main headline */}
          <h1 className="font-heading font-bold text-white leading-none mb-6 opacity-0 animate-fade-in-up delay-100">
            <span className="block text-5xl md:text-7xl lg:text-8xl">
              RELIABLE HEAVY
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-brand-gold">
              EQUIPMENT
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-white/80 font-medium mt-2">
              FROM CHINA
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-brand-slate-light text-lg md:text-xl leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-in-up delay-200">
            Helping contractors, ports, mining companies and equipment dealers source 
            reliable used cranes, construction equipment and industrial machinery from China — 
            for Africa, Europe and the Middle East.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in-up delay-300">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
              Request Equipment List
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#equipment" className="btn-outline flex items-center justify-center gap-2">
              View Equipment Categories
            </a>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-8 opacity-0 animate-fade-in-up delay-400">
            {[
              { num: '5+', label: 'Equipment Categories' },
              { num: '3', label: 'Continents Served' },
              { num: '10+', label: 'Markets Active' },
              { num: 'B2B', label: 'Buyers Only' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-heading font-bold text-brand-gold text-3xl">{stat.num}</span>
                <span className="font-body text-brand-slate text-xs uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#equipment"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-brand-slate hover:text-brand-gold transition-colors"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>

      {/* Right edge accent */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent hidden lg:block" />
    </section>
  )
}
