import React from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { contact } from '../data/siteData'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark">
      <div className="bg-brand-gold py-6 text-brand-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 lg:px-8">
          <div>
            <div className="font-heading text-3xl font-black uppercase">Ready to receive current machines?</div>
            <div className="font-body text-sm font-bold">Send one WhatsApp message. We will ask the rest.</div>
          </div>
          <a href={buildWhatsAppUrl('Hello. Please send current available used heavy equipment from China.')} target="_blank" rel="noopener noreferrer" className="bg-brand-navy px-6 py-4 font-body text-sm font-black uppercase tracking-wider text-brand-gold hover:bg-brand-steel">
            WhatsApp Now
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-brand-gold font-heading text-xl font-black text-brand-navy">CEA</div>
            <div>
              <div className="font-heading text-xl font-black uppercase text-white">{contact.brandName}</div>
              <div className="font-body text-xs font-black uppercase tracking-[0.24em] text-brand-gold">Used equipment sourcing from China</div>
            </div>
          </div>
          <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-brand-slate">
            We help buyers source used excavators, loaders, cranes, forklifts, trucks and construction machinery through major China equipment markets and partner yards. We send current photos, videos, inspection details and CIF options after request.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-brand-slate">
            <a className="flex items-center gap-2 hover:text-brand-gold" href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} className="text-green-400" /> +{contact.whatsapp}</a>
            <a className="flex items-center gap-2 hover:text-brand-gold" href={`mailto:${contact.email}`}><Mail size={17} className="text-brand-gold" /> {contact.email}</a>
          </div>
        </div>

        <div>
          <div className="footer-title">Website</div>
          <ul className="footer-list">
            <li><a href="#categories">Equipment Categories</a></li>
            <li><a href="#network">Why No Stock List</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#evidence">Evidence Pack</a></li>
            <li><a href="#markets">Markets</a></li>
            <li><a href="#find-machine">Find My Machine</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-title">Core Actions</div>
          <ul className="footer-list">
            <li><a href={buildWhatsAppUrl('Hello. Please send available used excavators from China.')} target="_blank" rel="noopener noreferrer">Request Excavators</a></li>
            <li><a href={buildWhatsAppUrl('Hello. Please send current crane options from China.')} target="_blank" rel="noopener noreferrer">Request Cranes</a></li>
            <li><a href={buildWhatsAppUrl('Hello. Please send CIF price options for used equipment from China.')} target="_blank" rel="noopener noreferrer">Request CIF Price</a></li>
            <li><a href={buildWhatsAppUrl('Hello. Please send machine videos before quotation.')} target="_blank" rel="noopener noreferrer">Request Videos</a></li>
            <li><a href={buildWhatsAppUrl('Hello. I want inspection before buying used equipment from China.')} target="_blank" rel="noopener noreferrer">Discuss Inspection</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 font-body text-xs text-brand-slate sm:flex-row sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} {contact.parentName} · {contact.domain}</span>
          <span>Representative category images only. Current machine photos are sent after request.</span>
        </div>
      </div>
    </footer>
  )
}
