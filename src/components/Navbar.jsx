import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Equipment', href: '#equipment' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Markets', href: '#markets' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-navy-dark/95 backdrop-blur-md shadow-xl shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-gold flex items-center justify-center font-heading font-bold text-brand-navy text-lg">
              CEA
            </div>
            <div>
              <div className="font-heading font-bold text-white text-lg leading-tight tracking-wide">
                HEAVY EQUIPMENT
              </div>
              <div className="text-brand-gold text-xs font-body tracking-widest uppercase">
                by CEA Trade Bridge
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-slate-light hover:text-brand-gold font-body text-sm font-medium tracking-wider uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="btn-primary text-xs">
              Request Equipment List
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-brand-navy-dark/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-brand-slate-light hover:text-brand-gold font-body text-sm font-medium tracking-widest uppercase py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-center mt-2">
            Request Equipment List
          </a>
        </div>
      </div>
    </nav>
  )
}
