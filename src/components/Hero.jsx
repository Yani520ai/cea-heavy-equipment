import React, { useState } from 'react'
import { ArrowRight, MessageCircle, Mic, Ship, ShieldCheck, Search } from 'lucide-react'
import { hero, quickMachineTypes } from '../data/siteData'
import { openWhatsApp } from '../utils/whatsapp'

export default function Hero() {
  const [machineType, setMachineType] = useState('Excavator')
  const [country, setCountry] = useState('Nigeria')
  const [whatsapp, setWhatsapp] = useState('')

  const message = `Hello. I am looking for used heavy equipment from China.\nMachine type: ${machineType}\nCountry / destination: ${country}\nMy WhatsApp: ${whatsapp || 'I am contacting here'}\nPlease send current available machines with photos, videos and CIF options.`

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-brand-navy pt-40 lg:pt-44">
      <div className="absolute inset-0 bg-hero-pattern opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-steel/50" />
      <div className="absolute right-0 top-32 hidden h-[650px] w-[48vw] overflow-hidden lg:block">
        <img src="/images/hero.jpg" alt="Representative used heavy equipment yard in China" className="h-full w-full object-cover opacity-78" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
        <div className="absolute bottom-5 right-5 bg-brand-navy-dark/80 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-widest text-brand-slate backdrop-blur">
          Representative category image · current machines sent after request
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.04fr_0.76fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 font-body text-xs font-black uppercase tracking-[0.24em] text-brand-gold">
            <span className="h-2 w-2 rounded-full bg-brand-gold" /> {hero.eyebrow}
          </div>

          <h1 className="font-heading text-5xl font-black uppercase leading-[0.92] tracking-wide text-white sm:text-6xl lg:text-7xl">
            {hero.title} <span className="text-brand-gold">{hero.highlight}</span>
          </h1>

          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-brand-slate-light">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button onClick={() => openWhatsApp(message, 'hero_whatsapp_now')} className="btn-green px-8 py-5 text-base shadow-xl shadow-green-950/30">
              <MessageCircle size={22} /> WhatsApp Now
            </button>
            <button onClick={() => openWhatsApp('Hello. Please send me available used machines from China. I will share my model, budget and port.', 'hero_available_machines')} className="btn-gold px-8 py-5 text-base">
              Send Me Available Machines <ArrowRight size={18} />
            </button>
            <button onClick={() => openWhatsApp('Hello. I need CIF price for used heavy equipment from China. My destination port is:', 'hero_cif')} className="btn-outline px-8 py-5 text-base">
              Request CIF Price
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-brand-slate">
            <div className="flex items-center gap-2"><MessageCircle size={17} className="text-green-400" /> WhatsApp first</div>
            <div className="flex items-center gap-2"><Mic size={17} className="text-brand-gold" /> Voice message welcome</div>
            <div className="flex items-center gap-2"><ShieldCheck size={17} className="text-brand-gold" /> Inspection support</div>
            <div className="flex items-center gap-2"><Ship size={17} className="text-brand-gold" /> CIF quotation</div>
          </div>
        </div>

        <div id="quick-request" className="rounded-sm border border-brand-gold/25 bg-brand-navy-dark/92 p-5 shadow-2xl backdrop-blur lg:mt-4">
          <div className="mb-5">
            <div className="font-heading text-3xl font-black uppercase text-white">Quick Request</div>
            <p className="mt-1 font-body text-sm text-brand-slate">Only 3 fields. Details can be discussed later on WhatsApp.</p>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="label">Machine type</span>
              <select value={machineType} onChange={(e) => setMachineType(e.target.value)} className="input">
                {quickMachineTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="label">Country / destination</span>
              <input value={country} onChange={(e) => setCountry(e.target.value)} className="input" placeholder="Nigeria / Lagos" />
            </label>
            <label className="block">
              <span className="label">Your WhatsApp</span>
              <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="input" placeholder="+234..." />
            </label>
            <button onClick={() => openWhatsApp(message, 'hero_quick_request')} className="btn-green w-full py-5 text-base">
              <Search size={20} /> Send Request by WhatsApp
            </button>
          </div>

          <p className="mt-4 border-t border-white/10 pt-4 font-body text-xs leading-relaxed text-brand-slate">
            You do not need to complete a long form. Tell us machine type and country first. We will ask for model, year, budget and port on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  )
}
