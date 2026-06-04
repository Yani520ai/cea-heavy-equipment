import React, { useState } from 'react'
import { ArrowRight, MessageCircle, Mic, Ship, ShieldCheck, Search } from 'lucide-react'
import { hero, quickMachineTypes } from '../data/siteData'
import { openWhatsApp } from '../utils/whatsapp'

const labels = {
  en: {
    representative:
      'Representative category image · current machines sent after request',
    whatsappNow: 'WhatsApp Now',
    sendAvailable: 'Send Me Available Machines',
    requestCif: 'Request CIF Price',
    whatsappFirst: 'WhatsApp first',
    voiceWelcome: 'Voice message welcome',
    inspectionSupport: 'Inspection support',
    cifQuotation: 'CIF quotation',
    quickRequest: 'Quick Request',
    quickText: 'Only 3 fields. Details can be discussed later on WhatsApp.',
    machineType: 'Machine type',
    country: 'Country / destination',
    countryPlaceholder: 'Nigeria / Lagos',
    yourWhatsapp: 'Your WhatsApp',
    whatsappPlaceholder: '+234...',
    sendRequest: 'Send Request by WhatsApp',
    note:
      'You do not need to complete a long form. Tell us machine type and country first. We will ask for model, year, budget and port on WhatsApp.',
    mainMessage:
      'Hello. I am looking for used heavy equipment from China.',
    availableMessage:
      'Hello. Please send me available used machines from China. I will share my model, budget and port.',
    cifMessage:
      'Hello. I need CIF price for used heavy equipment from China. My destination port is:',
    pleaseSend:
      'Please send current available machines with photos, videos and CIF options.',
    contactingHere: 'I am contacting here',
  },

  fr: {
    representative:
      'Image représentative · les machines disponibles sont envoyées après demande',
    whatsappNow: 'Discuter sur WhatsApp',
    sendAvailable: 'Envoyez-moi les machines disponibles',
    requestCif: 'Demander un Prix CIF',
    whatsappFirst: 'WhatsApp en priorité',
    voiceWelcome: 'Message vocal accepté',
    inspectionSupport: 'Inspection possible',
    cifQuotation: 'Devis CIF',
    quickRequest: 'Demande Rapide',
    quickText: 'Seulement 3 champs. Les détails peuvent être discutés ensuite sur WhatsApp.',
    machineType: 'Type de machine',
    country: 'Pays / destination',
    countryPlaceholder: 'Bénin / Cotonou',
    yourWhatsapp: 'Votre WhatsApp',
    whatsappPlaceholder: '+229...',
    sendRequest: 'Envoyer la demande sur WhatsApp',
    note:
      'Vous n’avez pas besoin de remplir un long formulaire. Indiquez d’abord le type de machine et le pays. Nous demanderons ensuite le modèle, l’année, le budget et le port sur WhatsApp.',
    mainMessage:
      'Bonjour. Je recherche des équipements d’occasion en provenance de Chine.',
    availableMessage:
      'Bonjour. Merci de m’envoyer les machines disponibles en Chine. Je peux ensuite préciser le modèle, le budget et le port.',
    cifMessage:
      'Bonjour. Je souhaite recevoir un prix CIF pour des équipements d’occasion en provenance de Chine. Mon port de destination est :',
    pleaseSend:
      'Merci de m’envoyer les machines disponibles avec photos, vidéos et options CIF.',
    contactingHere: 'Je vous contacte ici',
  },
}

export default function Hero({ lang = 'en' }) {
  console.log('Hero language = ', lang)

  
  const [machineType, setMachineType] = useState('Excavator')
  const [country, setCountry] = useState(lang === 'fr' ? 'Benin' : 'Nigeria')
  const [whatsapp, setWhatsapp] = useState('')

  const t = labels[lang] || labels.en
  const h = hero[lang] || hero.en

  const message =
    `${t.mainMessage}\n` +
    `${t.machineType}: ${machineType}\n` +
    `${t.country}: ${country}\n` +
    `${t.yourWhatsapp}: ${whatsapp || t.contactingHere}\n` +
    `${t.pleaseSend}`

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-brand-navy pt-40 lg:pt-44">
      <div className="absolute inset-0 bg-hero-pattern opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-steel/50" />

      <div className="absolute right-0 top-32 hidden h-[650px] w-[48vw] overflow-hidden lg:block">
        <img
          src="/images/hero.jpg"
          alt="Representative used heavy equipment yard in China"
          className="h-full w-full object-cover opacity-78"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
        <div className="absolute bottom-5 right-5 bg-brand-navy-dark/80 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-widest text-brand-slate backdrop-blur">
          {t.representative}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.04fr_0.76fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 font-body text-xs font-black uppercase tracking-[0.24em] text-brand-gold">
            <span className="h-2 w-2 rounded-full bg-brand-gold" /> {h.eyebrow}
          </div>

          <h1 className="font-heading text-5xl font-black uppercase leading-[0.92] tracking-wide text-white sm:text-6xl lg:text-7xl">
            {h.title} <span className="text-brand-gold">{h.highlight}</span>
          </h1>

          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-brand-slate-light">
            {h.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => openWhatsApp(message, 'hero_whatsapp_now', lang)}
              className="btn-green px-8 py-5 text-base shadow-xl shadow-green-950/30"
            >
              <MessageCircle size={22} /> {t.whatsappNow}
            </button>

            <button
              onClick={() => openWhatsApp(t.availableMessage, 'hero_available_machines, lang')}
              className="btn-gold px-8 py-5 text-base"
            >
              {t.sendAvailable} <ArrowRight size={18} />
            </button>

            <button
              onClick={() => openWhatsApp(t.cifMessage, 'hero_cif', lang)}
              className="btn-outline px-8 py-5 text-base"
            >
              {t.requestCif}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-brand-slate">
            <div className="flex items-center gap-2">
              <MessageCircle size={17} className="text-green-400" /> {t.whatsappFirst}
            </div>
            <div className="flex items-center gap-2">
              <Mic size={17} className="text-brand-gold" /> {t.voiceWelcome}
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-brand-gold" /> {t.inspectionSupport}
            </div>
            <div className="flex items-center gap-2">
              <Ship size={17} className="text-brand-gold" /> {t.cifQuotation}
            </div>
          </div>
        </div>

        <div
          id="quick-request"
          className="rounded-sm border border-brand-gold/25 bg-brand-navy-dark/92 p-5 shadow-2xl backdrop-blur lg:mt-4"
        >
          <div className="mb-5">
            <div className="font-heading text-3xl font-black uppercase text-white">
              {t.quickRequest}
            </div>
            <p className="mt-1 font-body text-sm text-brand-slate">
              {t.quickText}
            </p>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="label">{t.machineType}</span>
              <select
                value={machineType}
                onChange={(e) => setMachineType(e.target.value)}
                className="input"
              >
                {quickMachineTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="label">{t.country}</span>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="input"
                placeholder={t.countryPlaceholder}
              />
            </label>

            <label className="block">
              <span className="label">{t.yourWhatsapp}</span>
              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="input"
                placeholder={t.whatsappPlaceholder}
              />
            </label>

            <button
              onClick={() => openWhatsApp(message, 'hero_quick_request', lang)}
              className="btn-green w-full py-5 text-base"
            >
              <Search size={20} /> {t.sendRequest}
            </button>
          </div>

          <p className="mt-4 border-t border-white/10 pt-4 font-body text-xs leading-relaxed text-brand-slate">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  )
}