import React from 'react'
import { Camera, Video, BadgeCheck, Gauge, Wrench, Armchair, Truck, ClipboardCheck } from 'lucide-react'
import { evidenceItems } from '../data/siteData'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const icons = [Camera, Video, BadgeCheck, Gauge, Wrench, Armchair, ClipboardCheck, Truck]

export default function EvidencePack() {
  return (
    <section id="evidence" className="relative overflow-hidden bg-brand-navy py-24 lg:py-28">
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3"><div className="h-px w-12 bg-brand-gold" /><span className="section-label">Before you decide</span></div>
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl">Machine Evidence Pack</h2>
            <p className="mt-5 body-copy text-base text-brand-slate-light">
              Used heavy equipment buyers need evidence, not promises. For current available machines, we can request or provide the following information before you continue price and inspection discussion.
            </p>
            <a href={buildWhatsAppUrl('Hello. Please send machine evidence pack: photos, video, nameplate, hour meter and inspection details.')} target="_blank" rel="noopener noreferrer" className="btn-green mt-8">
              Request Photos & Videos
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {evidenceItems.map((item, index) => {
              const Icon = icons[index]
              return (
                <div key={item} className="card-dark p-5">
                  <Icon className="mb-4 text-brand-gold" size={24} />
                  <div className="font-heading text-xl font-black uppercase text-white">{item}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
