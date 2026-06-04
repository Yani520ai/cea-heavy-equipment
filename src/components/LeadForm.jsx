import React, { useMemo, useState } from 'react'
import { MessageCircle, Mail, Ship, Video } from 'lucide-react'
import { quickMachineTypes } from '../data/siteData'
import { buildEmailUrl, openWhatsApp } from '../utils/whatsapp'

const budgetRanges = ['Not sure yet', 'Under $20,000', '$20,000–$50,000', '$50,000–$100,000', '$100,000–$300,000', 'Above $300,000']
const timelines = ['Urgent / this week', 'Within 2 weeks', 'Within 1 month', 'Planning only']
const conditions = ['Ready to work', 'Low hours preferred', 'Original paint preferred', 'Repaint accepted', 'Need inspection first', 'Not sure']

export default function LeadForm() {
  const [form, setForm] = useState({
    machineType: 'Excavator',
    country: 'Nigeria',
    whatsapp: '',
    model: '',
    budget: 'Not sure yet',
    port: '',
    condition: 'Ready to work',
    timeline: 'Within 2 weeks',
    message: '',
  })

  const message = useMemo(() => {
    return `Hello. Please help me source used heavy equipment from China.\n\nMachine type: ${form.machineType}\nModel / size: ${form.model || 'Not specified yet'}\nCountry: ${form.country}\nDestination port: ${form.port || 'Not specified yet'}\nBudget: ${form.budget}\nCondition preference: ${form.condition}\nTimeline: ${form.timeline}\nMy WhatsApp: ${form.whatsapp || 'I am contacting here'}\nExtra message: ${form.message || 'Please send current available machines with photos, videos, nameplate, hour meter and CIF options.'}`
  }, [form])

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  return (
    <section id="find-machine" className="relative overflow-hidden bg-brand-navy py-24 lg:py-28">
      <div className="absolute inset-0 bg-hero-pattern opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <div className="mb-4 flex items-center gap-3"><div className="h-px w-12 bg-brand-gold" /><span className="section-label">Main conversion action</span></div>
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">Find My Machine</h2>
            <p className="mt-5 body-copy text-base text-brand-slate-light">
              The fastest way is WhatsApp. Fill only machine type, country and WhatsApp if you are in a hurry. All other fields are optional and can be discussed later.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: MessageCircle, title: 'WhatsApp first', text: 'No long form required. Voice messages are welcome.' },
                { icon: Video, title: 'Request videos', text: 'Ask for current machine videos and photos before moving forward.' },
                { icon: Ship, title: 'Ask CIF price', text: 'Send destination port for machine + shipping discussion.' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 border border-white/10 bg-brand-navy-dark/70 p-4">
                  <Icon className="shrink-0 text-brand-gold" size={24} />
                  <div>
                    <div className="font-heading text-xl font-black uppercase text-white">{title}</div>
                    <p className="font-body text-sm leading-relaxed text-brand-slate">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-dark p-5 sm:p-7">
            <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="font-heading text-3xl font-black uppercase text-white">Request Current Machines</div>
                <p className="mt-1 font-body text-sm text-brand-slate">Required fields are minimal. Optional fields improve matching speed.</p>
              </div>
              <div className="font-body text-[11px] font-black uppercase tracking-widest text-green-400">WhatsApp generated</div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label><span className="label">Machine type *</span><select className="input" value={form.machineType} onChange={(e) => update('machineType', e.target.value)}>{quickMachineTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
              <label><span className="label">Country / destination *</span><input className="input" value={form.country} onChange={(e) => update('country', e.target.value)} placeholder="Nigeria / Ghana / Peru" /></label>
              <label><span className="label">Your WhatsApp *</span><input className="input" value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} placeholder="+234..." /></label>
              <label><span className="label">Model / size optional</span><input className="input" value={form.model} onChange={(e) => update('model', e.target.value)} placeholder="CAT 320D / 25T crane" /></label>
              <label><span className="label">Budget optional</span><select className="input" value={form.budget} onChange={(e) => update('budget', e.target.value)}>{budgetRanges.map((value) => <option key={value}>{value}</option>)}</select></label>
              <label><span className="label">Destination port optional</span><input className="input" value={form.port} onChange={(e) => update('port', e.target.value)} placeholder="Lagos / Tema / Callao" /></label>
              <label><span className="label">Condition optional</span><select className="input" value={form.condition} onChange={(e) => update('condition', e.target.value)}>{conditions.map((value) => <option key={value}>{value}</option>)}</select></label>
              <label><span className="label">Timeline optional</span><select className="input" value={form.timeline} onChange={(e) => update('timeline', e.target.value)}>{timelines.map((value) => <option key={value}>{value}</option>)}</select></label>
              <label className="sm:col-span-2"><span className="label">Extra message optional</span><textarea className="input min-h-[110px]" value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us year, hours, brand preference, inspection needs or shipping requirements." /></label>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button onClick={() => openWhatsApp(message, 'lead_form_whatsapp')} className="btn-green sm:col-span-2">
                <MessageCircle size={20} /> Send by WhatsApp
              </button>
              <a href={buildEmailUrl('Used equipment sourcing request', message)} className="btn-outline">
                <Mail size={18} /> Email
              </a>
            </div>

            <p className="mt-4 font-body text-xs leading-relaxed text-brand-slate">
              This form does not force a backend submission. It generates a structured WhatsApp message so your team receives the request directly in WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
