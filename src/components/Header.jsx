import React, { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const links = [
  { label: 'Categories', href: '#categories' },
  { label: 'Why no stock list', href: '#network' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Inspection', href: '#evidence' },
  { label: 'Markets', href: '#markets' },
  { label: 'Find Machine', href: '#find-machine' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-navy-dark/95 backdrop-blur-xl">
      <div className="bg-brand-gold text-brand-navy">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center font-body text-[11px] font-black uppercase tracking-[0.16em] sm:text-xs">
          <span>Need equipment now?</span>
          <a className="underline underline-offset-2" href={buildWhatsAppUrl('Hello. I need used heavy equipment from China. Please send current available machines.')} target="_blank" rel="noopener noreferrer">
            WhatsApp directly — voice message welcome
          </a>
        </div>
      </div>

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="CEA Heavy Equipment home">
          <div className="flex h-11 w-11 items-center justify-center bg-brand-gold font-heading text-xl font-black text-brand-navy">CEA</div>
          <div>
            <div className="font-heading text-xl font-black uppercase tracking-wider text-white">Heavy Equipment</div>
            <div className="font-body text-[11px] font-black uppercase tracking-[0.22em] text-brand-gold">China sourcing network</div>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="font-body text-sm font-semibold text-brand-slate hover:text-brand-gold">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a href={buildWhatsAppUrl('Hello. I am looking for used construction equipment from China.')} target="_blank" rel="noopener noreferrer" className="btn-green py-3">
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a href="#find-machine" className="btn-gold py-3">Find Machine</a>
        </div>

        <button className="text-white sm:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-navy-dark px-4 py-5 sm:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/10 pb-3 font-body text-sm font-bold uppercase tracking-wider text-brand-slate-light">
                {link.label}
              </a>
            ))}
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-green w-full">WhatsApp Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
