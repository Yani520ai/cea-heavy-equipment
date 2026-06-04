import React from 'react'
import { Clock, MessageCircle } from 'lucide-react'
import { popularRequests } from '../data/siteData'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function PopularRequests() {
  return (
    <section className="bg-brand-navy py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="section-label">High-demand requests</span>
            </div>
            <h2 className="section-title text-4xl sm:text-5xl">Popular Buyer Requests This Week</h2>
            <p className="mt-5 body-copy">
              These are common machine requests from international buyers. Actual availability changes daily. Contact us and we will send current options for your target model, budget and port.
            </p>
            <a href={buildWhatsAppUrl('Hello. Please send current available machines this week. My required machine is:')} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">
              <MessageCircle size={19} /> Get This Week's Options
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {popularRequests.map((item) => (
              <a
                key={item}
                href={buildWhatsAppUrl(`Hello. I am looking for ${item} from China. Please send current available machines with photos and videos.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-white/10 bg-brand-navy-dark/80 p-5 transition hover:border-brand-gold/50 hover:bg-brand-steel/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-gold/10 text-brand-gold">
                  <Clock size={19} />
                </div>
                <div>
                  <div className="font-heading text-xl font-black uppercase text-white">{item}</div>
                  <div className="mt-1 font-body text-xs font-black uppercase tracking-widest text-brand-gold">Ask current options</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
