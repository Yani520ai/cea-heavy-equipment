import React, { useState } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'

const categories = [
  {
    id: 'truck-cranes',
    title: 'Used Truck Cranes',
    subtitle: '20T – 500T',
    description: 'Reliable mobile lifting solutions for construction, infrastructure and industrial projects. Available in a wide range of capacities.',
    image: '/images/all-terrain-crane.jpg',
    tags: ['XCMG', 'Zoomlion', 'SANY', 'Tadano'],
    accent: '#C8952A',
  },
  {
    id: 'crawler-cranes',
    title: 'Used Crawler Cranes',
    subtitle: '50T – 1200T',
    description: 'Heavy lifting capacity for ports, bridges, energy projects and large-scale infrastructure. Superior stability on soft ground.',
    image: '/images/crane 20.jpg',
    tags: ['XCMG', 'Zoomlion', 'SANY', 'Liebherr'],
    accent: '#1E8FC4',
  },
  {
    id: 'all-terrain',
    title: 'All Terrain Cranes',
    subtitle: '60T – 400T',
    description: 'Flexible lifting equipment engineered for multiple job site conditions. Combines road mobility with off-road capability.',
    image: '/images/port-equipment.jpg',
    tags: ['XCMG', 'Grove', 'Liebherr', 'Terex'],
    accent: '#2EA87E',
  },
  {
    id: 'mining-equipment',
    title: 'Mining Equipment',
    subtitle: 'Heavy Duty',
    description: 'Equipment solutions for mining operations, quarrying and industrial projects. Excavators, bulldozers and drilling equipment.',
    image: '/images/mining-equipment.jpg',
    tags: ['Excavators', 'Bulldozers', 'Loaders', 'Drilling'],
    accent: '#C84B28',
  },
  {
    id: 'port-equipment',
    title: 'Port Equipment',
    subtitle: 'Terminal Ready',
    description: 'Reach stackers, forklifts, terminal tractors and heavy container handling machinery for port and logistics operations.',
    image: '/images/truck-crane.jpg',
    tags: ['Reach Stackers', 'Forklifts', 'RTG Cranes', 'Handlers'],
    accent: '#7B48C8',
  },
]

export default function Equipment() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="equipment" className="relative py-24 lg:py-32 bg-brand-navy-dark">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="section-label">What We Source</span>
          </div>
          <h2 className="section-title text-5xl md:text-6xl lg:text-7xl">
            EQUIPMENT <span className="text-brand-gold">CATEGORIES</span>
          </h2>
          <p className="font-body text-brand-slate max-w-xl mt-4 text-base">
            We specialize in sourcing used and refurbished heavy equipment directly from China's top manufacturers and equipment pools.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ${
                i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ minHeight: '340px' }}
            >
              {/* Background image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/70 to-brand-navy/20" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top, ${cat.accent}40, transparent)` }}
              />

              {/* Left border accent on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: cat.accent }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {cat.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-body text-xs px-2 py-0.5 text-white/70 border border-white/20"
                      style={{ background: 'rgba(0,0,0,0.4)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Capacity badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-body text-xs font-medium px-2 py-0.5 uppercase tracking-wider"
                    style={{ background: cat.accent + '25', color: cat.accent, border: `1px solid ${cat.accent}40` }}
                  >
                    {cat.subtitle}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-2xl lg:text-3xl leading-tight mb-2">
                  {cat.title}
                </h3>
                <p className="font-body text-brand-slate text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {cat.description}
                </p>

                <a
                  href="#contact"
                  className="flex items-center gap-2 font-body text-sm font-medium tracking-wider uppercase group/link"
                  style={{ color: cat.accent }}
                >
                  <span>Request Info</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 p-6 bg-brand-steel/20">
          <div>
            <p className="font-heading font-semibold text-white text-xl">
              Don't see what you need?
            </p>
            <p className="font-body text-brand-slate text-sm mt-1">
              We can source any heavy equipment category from China. Send us your specification.
            </p>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap flex items-center gap-2 group">
            Send Equipment Spec
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
