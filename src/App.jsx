import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Equipment from './components/Equipment'
import WhyUs from './components/WhyUs'
import Markets from './components/Markets'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <Equipment />
        <WhyUs />
        <Markets />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
