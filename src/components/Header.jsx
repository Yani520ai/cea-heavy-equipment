import React, { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const labels = {
  en: {
    needNow: 'Need equipment now?',
    voiceWelcome: 'WhatsApp directly — voice message welcome',
    categories: 'Categories',
    noStock: 'Why no stock list',
    howItWorks: 'How it works',
    inspection: 'Inspection',
    markets: 'Markets',
    findMachine: 'Find Machine',
    whatsapp: 'WhatsApp',
    whatsappNow: 'WhatsApp Now',
    brandSub: 'China sourcing network',
    message: 'Hello. I need used heavy equipment from China. Please send current available machines.',
  },

  fr: {
    needNow: 'Besoin d’une machine maintenant ?',
    voiceWelcome: 'WhatsApp direct — message vocal accepté',
    categories: 'Catégories',
    noStock: 'Pourquoi pas de liste de stock',
    howItWorks: 'Comment ça fonctionne',
    inspection: 'Inspection',
    markets: 'Marchés',
    findMachine: 'Trouver une machine',
    whatsapp: 'WhatsApp',
    whatsappNow: 'Contacter sur WhatsApp',
    brandSub: 'Réseau d’approvisionnement en Chine',
    message: 'Bonjour. Je recherche des équipements d’occasion en provenance de Chine. Merci de m’envoyer les machines disponibles.',
  },
}

export default function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false)
  const t = labels[lang] || labels.en

  const links = [
    { label: t.categories, href: '#categories' },
    { label: t.noStock, href: '#network' },
    { label: t.howItWorks, href: '#how-it-works' },
    { label: t.inspection, href: '#evidence' },
    { label: t.markets, href: '#markets' },
    { label: t.findMachine, href: '#find-machine' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-navy-dark/95 backdrop-blur-xl">
      <div className="bg-brand-gold text-brand-navy">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center font-body text-[11px] font-black uppercase tracking-[0.16em] sm:text-xs">
          <span>{t.needNow}</span>
          <a
            className="underline underline-offset-2"
            href={buildWhatsAppUrl(t.message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.voiceWelcome}
          </a>
        </div>
      </div>

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="CEA Heavy Equipment home">
          <div className="flex h-11 w-11 items-center justify-center bg-brand-gold font-heading text-xl font-black text-brand-navy">
            CEA
          </div>
          <div>
            <div className="font-heading text-xl font-black uppercase tracking-wider text-white">
              Heavy Equipment
            </div>
            <div className="font-body text-[11px] font-black uppercase tracking-[0.22em] text-brand-gold">
              {t.brandSub}
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold text-brand-slate hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="fixed right-4 top-28 z-[9999] flex items-center gap-2 rounded bg-brand-navy-dark/95 p-2 shadow-lg lg:static lg:bg-transparent lg:p-0 lg:shadow-none">
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`rounded border px-2 py-1 text-xs font-bold ${
              lang === 'en'
                ? 'border-brand-gold bg-brand-gold text-brand-navy'
                : 'border-white/20 text-white hover:border-brand-gold'
            }`}
          >
            EN
          </button>

          <button
            type="button"
            onClick={() => setLang('fr')}
            className={`rounded border px-2 py-1 text-xs font-bold ${
              lang === 'fr'
                ? 'border-brand-gold bg-brand-gold text-brand-navy'
                : 'border-white/20 text-white hover:border-brand-gold'
            }`}
          >
            FR
          </button>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={buildWhatsAppUrl(t.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green py-3"
          >
            <MessageCircle size={18} /> {t.whatsapp}
          </a>
          <a href="#find-machine" className="btn-gold py-3">
            {t.findMachine}
          </a>
        </div>

        <button className="text-white sm:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-navy-dark px-4 py-5 sm:hidden">
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded border px-3 py-2 text-xs font-bold ${
                lang === 'en'
                  ? 'border-brand-gold bg-brand-gold text-brand-navy'
                  : 'border-white/20 text-white'
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`rounded border px-3 py-2 text-xs font-bold ${
                lang === 'fr'
                  ? 'border-brand-gold bg-brand-gold text-brand-navy'
                  : 'border-white/20 text-white'
              }`}
            >
              FR
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-3 font-body text-sm font-bold uppercase tracking-wider text-brand-slate-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl(t.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green w-full"
            >
              {t.whatsappNow}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}