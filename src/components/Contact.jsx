import React, { useState } from 'react'
import { MessageSquare, Mail, Phone, MapPin, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

const equipmentTypes = [
  'Used Truck Cranes',
  'Used Crawler Cranes',
  'All Terrain Cranes',
  'Tower Cranes',
  'Mining Equipment',
  'Port Equipment',
  'Excavators / Bulldozers',
  'Other / Multiple Categories',
]

const capacities = [
  'Under 50 Tons',
  '50T – 100T',
  '100T – 200T',
  '200T – 500T',
  'Over 500T',
  'Not sure / Multiple',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', country: '', whatsapp: '', email: '',
    equipment: '', capacity: '', location: '', message: ''
  })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
      setLoading(false)
      setStatus('success')
    }, 1500)
  }

  if (status === 'success') {
    return (
      <section id="contact" className="relative py-24 bg-brand-navy-dark">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-brand-gold" />
          </div>
          <h2 className="font-heading font-bold text-white text-4xl mb-4">REQUEST RECEIVED</h2>
          <p className="font-body text-brand-slate text-base mb-8 leading-relaxed">
            Thank you. We've received your equipment request and will review it promptly.
            Our team will contact you via WhatsApp or email within 24–48 hours with available options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn-outline"
              onClick={() => { setStatus(null); setForm({ name:'',company:'',country:'',whatsapp:'',email:'',equipment:'',capacity:'',location:'',message:'' }) }}
            >
              Submit Another Request
            </button>
            <a href={`https://wa.me/34613021897`} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-brand-navy-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute inset-0 bg-hero-pattern opacity-15" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="section-label">Get in Touch</span>
            </div>
            <h2 className="section-title text-5xl md:text-6xl mb-6">
              REQUEST<br />
              <span className="text-brand-gold">EQUIPMENT</span>
            </h2>
            <p className="font-body text-brand-slate text-base leading-relaxed mb-10">
              Tell us what equipment you need, your required capacity and project location. 
              We'll identify available options from China and respond within 48 hours.
            </p>

            {/* Contact methods */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 p-4 bg-brand-steel/20 border border-white/5">
                <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={18} className="text-brand-gold" />
                </div>
                <div>
                  <div className="font-body text-brand-slate text-xs uppercase tracking-wider mb-0.5">WhatsApp (Preferred)</div>
                  <a
                    href="https://wa.me/34613021897"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading font-semibold text-white text-lg hover:text-brand-gold transition-colors"
                  >
                    +34 613 021 897
                  </a>
<div className="mt-3">
  <div className="font-body text-brand-slate text-xs uppercase tracking-wider mb-0.5">
    China Procurement Office
  </div>

  <a
    href="tel:+8615197081015"
    className="font-heading font-semibold text-white text-lg hover:text-brand-gold transition-colors"
  >
    +86 151 9708 1015
  </a>
</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-brand-steel/20 border border-white/5">
                <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-brand-gold" />
                </div>
                <div>
                  <div className="font-body text-brand-slate text-xs uppercase tracking-wider mb-0.5">Email</div>
                  <a
                    href="mailto:yani@linkace.es"
                    className="font-heading font-semibold text-white text-lg hover:text-brand-gold transition-colors"
                  >
                    yani@linkace.es
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-brand-steel/20 border border-white/5">
                <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-gold" />
                </div>
                <div>
                  <div className="font-body text-brand-slate text-xs uppercase tracking-wider mb-0.5">Based in</div>
                  <div className="font-heading font-semibold text-white text-lg">Madrid, Spain · China Operations</div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="border border-brand-gold/20 p-5 bg-brand-gold/5">
              <div className="font-heading font-semibold text-brand-gold text-lg mb-2">Our Commitment</div>
              <div className="space-y-2">
                {['48-hour response to all inquiries', 'No obligation, no upfront fees', 'Equipment options with real photos', 'B2B buyers only — serious inquiries'].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-brand-gold rounded-full" />
                    <span className="font-body text-brand-slate text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-brand-steel/20 border border-white/5 p-8">
              <h3 className="font-heading font-semibold text-white text-2xl mb-6">
                Request Current Equipment Availability
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-brand-slate text-xs uppercase tracking-wider mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-brand-navy border border-white/10 focus:border-brand-gold/50 text-white placeholder-brand-slate font-body text-sm px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-brand-slate text-xs uppercase tracking-wider mb-2 block">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-brand-navy border border-white/10 focus:border-brand-gold/50 text-white placeholder-brand-slate font-body text-sm px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-brand-slate text-xs uppercase tracking-wider mb-2 block">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      placeholder="Your country"
                      value={form.country}
                      onChange={handleChange}
                      className="w-full bg-brand-navy border border-white/10 focus:border-brand-gold/50 text-white placeholder-brand-slate font-body text-sm px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-brand-slate text-xs uppercase tracking-wider mb-2 block">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      placeholder="+1 234 567 890"
                      value={form.whatsapp}
                      onChange={handleChange}
                      className="w-full bg-brand-navy border border-white/10 focus:border-brand-gold/50 text-white placeholder-brand-slate font-body text-sm px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-brand-slate text-xs uppercase tracking-wider mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-brand-navy border border-white/10 focus:border-brand-gold/50 text-white placeholder-brand-slate font-body text-sm px-4 py-3 outline-none transition-colors"
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-brand-slate text-xs uppercase tracking-wider mb-2 block">
                      Equipment Needed *
                    </label>
                    <select
                      name="equipment"
                      required
                      value={form.equipment}
                      onChange={handleChange}
                      className="w-full bg-brand-navy border border-white/10 focus:border-brand-gold/50 text-white font-body text-sm px-4 py-3 outline-none transition-colors appearance-none"
                    >
                      <option value="" disabled>Select equipment type</option>
                      {equipmentTypes.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-brand-slate text-xs uppercase tracking-wider mb-2 block">
                      Required Capacity
                    </label>
                    <select
                      name="capacity"
                      value={form.capacity}
                      onChange={handleChange}
                      className="w-full bg-brand-navy border border-white/10 focus:border-brand-gold/50 text-white font-body text-sm px-4 py-3 outline-none transition-colors appearance-none"
                    >
                      <option value="">Select capacity range</option>
                      {capacities.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Location */}
                <div>
                  <label className="font-body text-brand-slate text-xs uppercase tracking-wider mb-2 block">
                    Project Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Country / City where equipment will be used"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full bg-brand-navy border border-white/10 focus:border-brand-gold/50 text-white placeholder-brand-slate font-body text-sm px-4 py-3 outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-brand-slate text-xs uppercase tracking-wider mb-2 block">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your project requirements, budget range, timeline or any other relevant details..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-brand-navy border border-white/10 focus:border-brand-gold/50 text-white placeholder-brand-slate font-body text-sm px-4 py-3 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full btn-primary flex items-center justify-center gap-2 group py-4 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-navy/30 border-t-brand-navy rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Request Current Equipment Availability
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="font-body text-brand-slate text-xs text-center">
                  We respond within 48 hours · B2B inquiries only · No spam
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
