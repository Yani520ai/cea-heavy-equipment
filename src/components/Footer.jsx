import React from 'react'
import { MessageSquare, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-brand-navy-dark border-t border-white/5">
      {/* Top CTA bar */}
      <div className="bg-brand-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-heading font-bold text-brand-navy text-xl">
                Ready to source equipment from China?
              </span>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-brand-navy text-brand-gold font-body font-semibold text-sm px-6 py-3 hover:bg-brand-navy-dark transition-colors group"
            >
              Request Equipment List
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold flex items-center justify-center font-heading font-bold text-brand-navy text-lg">
                CEA
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg leading-tight tracking-wide">
                  HEAVY EQUIPMENT
                </div>
                <div className="text-brand-gold text-xs font-body tracking-widest uppercase">
                  by CEA Trade Bridge
                </div>
              </div>
            </div>
            <p className="font-body text-brand-slate text-sm leading-relaxed max-w-sm mb-8">
              Connecting Equipment Opportunities Across China, Africa and Europe.
              Specialized B2B heavy equipment sourcing — cranes, construction machinery, 
              mining equipment and port equipment.
            </p>

            {/* Social/contact quick */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/34613021897"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-slate hover:text-brand-gold transition-colors group"
              >
                <div className="w-8 h-8 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                  <MessageSquare size={14} className="text-brand-gold" />
                </div>
                <span className="font-body text-sm">+34 613 021 897</span>
              </a>
              <a
                href="mailto:yani@linkace.es"
                className="flex items-center gap-3 text-brand-slate hover:text-brand-gold transition-colors group"
              >
                <div className="w-8 h-8 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                  <Mail size={14} className="text-brand-gold" />
                </div>
                <span className="font-body text-sm">yani@linkace.es</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-heading font-semibold text-white text-lg mb-6 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'Equipment', href: '#equipment' },
                { label: 'Why Us', href: '#why-us' },
                { label: 'Markets', href: '#markets' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-brand-slate text-sm hover:text-brand-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <div className="font-heading font-semibold text-white text-lg mb-6 uppercase tracking-wider">
              Equipment
            </div>
            <ul className="space-y-3">
              {[
                'Used Truck Cranes',
                'Used Crawler Cranes',
                'All Terrain Cranes',
                'Mining Equipment',
                'Port Equipment',
                'Custom Sourcing',
              ].map(item => (
                <li key={item}>
                  <a
                    href="#equipment"
                    className="font-body text-brand-slate text-sm hover:text-brand-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-brand-slate text-xs">
            © {currentYear} CEA Heavy Equipment · Powered by CEA Trade Bridge · ceatradebridge.com
          </p>
          <p className="font-body text-brand-slate text-xs">
            China · Africa · Europe · Middle East
          </p>
        </div>
      </div>
    </footer>
  )
}
