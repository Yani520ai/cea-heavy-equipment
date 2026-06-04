import React from 'react'
import { Database, RefreshCw, Send, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { networkReasons } from '../data/siteData'

export default function NetworkModel() {
  return (
    <section id="network" className="relative overflow-hidden bg-brand-navy py-24 lg:py-28">
      <div className="absolute inset-0 bg-hero-pattern opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="section-label">Important sourcing model</span>
            </div>
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">
              Why We Do Not List Thousands Of Machines Online
            </h2>
            <p className="mt-6 body-copy text-base text-brand-slate-light">
              This is not a weakness. It is how serious used-equipment sourcing works. We do not want buyers to waste time on expired or misleading inventory pages.
            </p>
            <div className="mt-7 space-y-4">
              {networkReasons.map((reason) => (
                <div key={reason} className="flex gap-3 border-l-2 border-brand-gold/50 bg-brand-navy-dark/60 p-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                  <p className="font-body text-sm leading-relaxed text-brand-slate-light">{reason}</p>
                </div>
              ))}
            </div>
            <a href={buildWhatsAppUrl('Hello. Please help me find current available machines from China.')} target="_blank" rel="noopener noreferrer" className="btn-green mt-8">
              <MessageCircle size={20} /> Send Requirement on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { icon: Database, title: 'Large China Network', text: 'Access to major used-equipment markets, partner yards and supplier channels.' },
              { icon: RefreshCw, title: 'Daily Changing Inventory', text: 'Used machines move fast. Current options are confirmed after request.' },
              { icon: Send, title: 'Matched to Your Request', text: 'Machine type, model, budget, country and port guide the sourcing.' },
              { icon: MessageCircle, title: 'WhatsApp Delivery', text: 'Photos, videos, inspection details and CIF options are sent directly.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-dark p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-brand-gold/10 text-brand-gold">
                  <Icon size={23} />
                </div>
                <h3 className="font-heading text-2xl font-black uppercase text-white">{title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-slate">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
