import React, { useState } from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

const markets = [
  {
    region: 'North Africa',
    countries: ['Morocco', 'Algeria'],
    flag: '🇲🇦',
    description: 'Active infrastructure investment with growing demand for construction machinery.',
    color: '#C8952A',
  },
  {
    region: 'West Africa',
    countries: ['Ghana', 'Benin', 'Senegal', "Côte d'Ivoire"],
    flag: '🌍',
    description: 'Expanding port and construction sector across the Gulf of Guinea.',
    color: '#2EA87E',
  },
  {
    region: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Kuwait', 'Qatar'],
    flag: '🕌',
    description: 'Major infrastructure projects and industrial development requiring heavy lifting.',
    color: '#1E8FC4',
  },
  {
    region: 'Europe',
    countries: ['Spain', 'Portugal', 'France', 'Belgium'],
    flag: '🇪🇺',
    description: 'Secondary equipment market and industrial procurement for established contractors.',
    color: '#7B48C8',
  },
]

export default function Markets() {
  const [active, setActive] = useState(0)

  return (
    <section id="markets" className="relative py-24 lg:py-32 bg-brand-navy-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="section-label">Our Reach</span>
          </div>
          <h2 className="section-title text-5xl md:text-6xl lg:text-7xl">
            MARKETS <span className="text-brand-gold">WE SERVE</span>
          </h2>
          <p className="font-body text-brand-slate max-w-xl mt-4 text-base">
            We actively source equipment for buyers across Africa, the Middle East and Europe, 
            with China as our primary supply base.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map SVG */}
          <div className="relative">
            <div className="relative w-full" style={{ paddingBottom: '70%' }}>
              <svg
                viewBox="0 0 800 560"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ocean background */}
                <rect width="800" height="560" fill="#071428" rx="8" />

                {/* Grid lines */}
                {[1,2,3,4,5,6,7].map(i => (
                  <line key={`h${i}`} x1="0" y1={i*80} x2="800" y2={i*80} stroke="#1E3A5F" strokeWidth="0.5" />
                ))}
                {[1,2,3,4,5,6,7,8,9].map(i => (
                  <line key={`v${i}`} x1={i*80} y1="0" x2={i*80} y2="560" stroke="#1E3A5F" strokeWidth="0.5" />
                ))}

                {/* Europe - simplified */}
                <path
                  d="M320 80 L340 75 L360 70 L380 72 L400 68 L420 70 L430 85 L425 100 L415 115 L400 120 L385 125 L370 130 L355 135 L340 130 L325 120 L310 110 L305 95 Z"
                  fill={active === 3 ? '#7B48C8' : '#1E3A5F'}
                  stroke={active === 3 ? '#9B68E8' : '#2D4F7C'}
                  strokeWidth="1"
                  className="cursor-pointer transition-colors duration-300"
                  onClick={() => setActive(3)}
                />

                {/* North Africa */}
                <path
                  d="M300 155 L320 145 L360 140 L400 138 L440 140 L480 145 L490 160 L488 180 L480 200 L460 215 L440 220 L420 222 L400 225 L380 220 L360 215 L340 205 L320 195 L305 180 L298 165 Z"
                  fill={active === 0 ? '#C8952A' : '#1E3A5F'}
                  stroke={active === 0 ? '#E0A830' : '#2D4F7C'}
                  strokeWidth="1"
                  className="cursor-pointer transition-colors duration-300"
                  onClick={() => setActive(0)}
                />

                {/* West Africa */}
                <path
                  d="M300 225 L320 220 L340 225 L360 240 L365 260 L360 285 L350 305 L335 315 L315 310 L300 295 L292 275 L290 255 L295 235 Z"
                  fill={active === 1 ? '#2EA87E' : '#1E3A5F'}
                  stroke={active === 1 ? '#3EC88E' : '#2D4F7C'}
                  strokeWidth="1"
                  className="cursor-pointer transition-colors duration-300"
                  onClick={() => setActive(1)}
                />

                {/* East Africa */}
                <path
                  d="M440 225 L480 220 L490 235 L492 260 L485 290 L470 315 L450 330 L430 325 L415 308 L410 280 L415 255 L425 235 Z"
                  fill="#132A4E"
                  stroke="#2D4F7C"
                  strokeWidth="1"
                />

                {/* Middle East */}
                <path
                  d="M490 145 L530 140 L560 142 L580 150 L585 165 L578 185 L560 195 L540 200 L520 198 L500 190 L488 175 Z"
                  fill={active === 2 ? '#1E8FC4' : '#1E3A5F'}
                  stroke={active === 2 ? '#2EAFD4' : '#2D4F7C'}
                  strokeWidth="1"
                  className="cursor-pointer transition-colors duration-300"
                  onClick={() => setActive(2)}
                />

                {/* China */}
                <path
                  d="M600 100 L650 90 L690 95 L710 108 L715 125 L708 145 L690 158 L665 162 L640 160 L615 150 L598 135 L595 115 Z"
                  fill="#C8952A"
                  stroke="#E0A830"
                  strokeWidth="1.5"
                />
                <text x="655" y="130" fill="#E0A830" fontSize="9" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" textAnchor="middle">CHINA</text>
                <text x="655" y="141" fill="#C8952A" fontSize="7" fontFamily="DM Sans, sans-serif" textAnchor="middle">Supply Base</text>

                {/* Pins */}
                {[
                  { x: 355, y: 98, label: 'Europe', active: active === 3, onClick: () => setActive(3) },
                  { x: 395, y: 180, label: 'Morocco', active: active === 0, onClick: () => setActive(0) },
                  { x: 325, y: 270, label: 'West Africa', active: active === 1, onClick: () => setActive(1) },
                  { x: 535, y: 165, label: 'Middle East', active: active === 2, onClick: () => setActive(2) },
                ].map((pin, i) => (
                  <g key={i} className="cursor-pointer" onClick={pin.onClick}>
                    <circle cx={pin.x} cy={pin.y} r="10" fill="none" stroke={pin.active ? '#C8952A' : '#2D4F7C'} strokeWidth="1.5" opacity={pin.active ? 1 : 0.6} />
                    <circle cx={pin.x} cy={pin.y} r="4" fill={pin.active ? '#C8952A' : '#94A3B8'} />
                    {pin.active && (
                      <circle cx={pin.x} cy={pin.y} r="14" fill="none" stroke="#C8952A" strokeWidth="1" opacity="0.4">
                        <animate attributeName="r" from="10" to="20" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                ))}

                {/* Connection lines from China to markets */}
                {[
                  { x2: 355, y2: 98 },
                  { x2: 395, y2: 180 },
                  { x2: 325, y2: 270 },
                  { x2: 535, y2: 165 },
                ].map((line, i) => (
                  <line
                    key={i}
                    x1="655" y1="128"
                    x2={line.x2} y2={line.y2}
                    stroke="#C8952A"
                    strokeWidth="0.8"
                    strokeDasharray="5,5"
                    opacity="0.25"
                  />
                ))}

                {/* Legend */}
                <rect x="10" y="500" width="12" height="8" fill="#C8952A" rx="2" />
                <text x="26" y="508" fill="#94A3B8" fontSize="9" fontFamily="DM Sans, sans-serif">Supply Base (China)</text>
                <rect x="160" y="500" width="12" height="8" fill="#1E3A5F" rx="2" />
                <text x="176" y="508" fill="#94A3B8" fontSize="9" fontFamily="DM Sans, sans-serif">Active Markets</text>
              </svg>
            </div>

            <p className="text-center font-body text-brand-slate text-xs mt-3 tracking-wider uppercase">
              Click region to explore → 
            </p>
          </div>

          {/* Market cards */}
          <div className="flex flex-col gap-4">
            {markets.map((market, i) => (
              <div
                key={market.region}
                className={`p-6 border cursor-pointer transition-all duration-300 ${
                  active === i
                    ? 'border-brand-gold/40 bg-brand-steel/30'
                    : 'border-white/5 bg-brand-steel/10 hover:border-white/10'
                }`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-start gap-4">
                  {/* Indicator */}
                  <div
                    className="w-2 flex-shrink-0 mt-2 rounded-full transition-all duration-300"
                    style={{
                      height: active === i ? '100%' : '8px',
                      background: active === i ? market.color : '#1E3A5F',
                      minHeight: '8px',
                      maxHeight: active === i ? '60px' : '8px',
                    }}
                  />

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{market.flag}</span>
                        <h3 className="font-heading font-semibold text-white text-xl">{market.region}</h3>
                      </div>
                      {active === i && (
                        <span className="font-body text-xs uppercase tracking-wider px-2 py-0.5" style={{ color: market.color, borderColor: market.color + '40', border: `1px solid ${market.color}40` }}>
                          Active
                        </span>
                      )}
                    </div>

                    {active === i && (
                      <div className="mt-3">
                        <p className="font-body text-brand-slate text-sm leading-relaxed mb-3">
                          {market.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {market.countries.map(country => (
                            <span key={country} className="flex items-center gap-1 font-body text-xs text-brand-slate-light border border-white/10 px-2 py-1">
                              <MapPin size={10} />
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {active !== i && (
                      <p className="font-body text-brand-slate text-xs mt-1">
                        {market.countries.join(' · ')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <a href="#contact" className="btn-primary flex items-center justify-center gap-2 mt-2 group">
              Inquire for Your Market
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
