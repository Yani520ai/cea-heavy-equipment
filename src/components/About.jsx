import React from 'react'
import { Building2, Target, Globe2, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-brand-navy overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute inset-0 bg-hero-pattern opacity-15" />

      {/* Large background text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-bold text-white/3 text-[12rem] leading-none select-none pointer-events-none hidden xl:block">
        CEA
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main image */}
            <div className="relative overflow-hidden" style={{ paddingBottom: '75%' }}>
              <img
                src="/images/about.jpg"
                alt="Industrial crane operations"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 to-transparent" />
            </div>

            {/* Floating info card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-brand-navy-dark border border-brand-gold/30 p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <Globe2 size={16} className="text-brand-gold" />
                </div>
                <span className="font-heading font-semibold text-white text-base">CEA Trade Bridge</span>
              </div>
              <p className="font-body text-brand-slate text-xs leading-relaxed">
                International B2B commercial bridge connecting China with Africa, Europe and the Middle East.
              </p>
              <div className="mt-3 flex gap-4">
                <div>
                  <div className="font-heading font-bold text-brand-gold text-xl">China</div>
                  <div className="font-body text-brand-slate text-xs">Supply Base</div>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <div className="font-heading font-bold text-brand-gold text-xl">Africa</div>
                  <div className="font-body text-brand-slate text-xs">Primary Market</div>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <div className="font-heading font-bold text-brand-gold text-xl">EU</div>
                  <div className="font-body text-brand-slate text-xs">& Middle East</div>
                </div>
              </div>
            </div>

            {/* Gold border accent */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-brand-gold/40" />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="section-label">Who We Are</span>
            </div>

            <h2 className="section-title text-5xl md:text-6xl mb-8">
              ABOUT CEA<br />
              <span className="text-brand-gold">HEAVY EQUIPMENT</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="font-body text-brand-slate-light text-base leading-relaxed">
                <strong className="text-white font-medium">CEA Heavy Equipment</strong> is a specialized business division of CEA Trade Bridge — 
                an international commercial bridge operating between China, Africa and Europe.
              </p>
              <p className="font-body text-brand-slate text-base leading-relaxed">
                We focus on helping international buyers connect with equipment opportunities, 
                machinery suppliers and sourcing solutions across China's vast industrial supply base.
              </p>
              <p className="font-body text-brand-slate text-base leading-relaxed border-l-2 border-brand-gold/40 pl-4">
                <em className="text-brand-slate-light not-italic font-medium">
                  "Our objective is simple: help serious buyers identify suitable equipment and 
                  reliable supply sources for their projects — directly from China."
                </em>
              </p>
            </div>

            {/* Three pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Building2, title: 'China Base', desc: 'Direct access to Chinese equipment manufacturers and dealers' },
                { icon: Target, title: 'B2B Focus', desc: 'Exclusively serving professional buyers and companies' },
                { icon: Globe2, title: 'International', desc: 'Africa, Europe, and Middle East market experience' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-4 bg-brand-steel/20 border border-white/5">
                  <Icon size={20} className="text-brand-gold mb-3" />
                  <div className="font-heading font-semibold text-white text-base mb-1">{title}</div>
                  <div className="font-body text-brand-slate text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                Work With Us
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:yani@linkace.es" className="btn-outline flex items-center justify-center gap-2">
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
