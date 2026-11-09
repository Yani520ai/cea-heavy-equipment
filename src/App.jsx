import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BuyerShortcuts from './components/BuyerShortcuts'
import MachineCategories from './components/MachineCategories'
import NetworkModel from './components/NetworkModel'
import PopularRequests from './components/PopularRequests'
import FastestReply from './components/FastestReply'
import HowItWorks from './components/HowItWorks'
import EvidencePack from './components/EvidencePack'
import BuyerSafety from './components/BuyerSafety'
import Markets from './components/Markets'
import ExportScenarios from './components/ExportScenarios'
import TrustSection from './components/TrustSection'
import LeadForm from './components/LeadForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { attachConversionTracking, loadAnalytics } from './utils/analytics'
import StockCatalogue, { FeaturedStock } from './components/StockCatalogue'

export default function App() {
  const [lang, setLang] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get('lang')
    if (requested === 'en' || requested === 'fr') return requested
    try { return window.localStorage.getItem('cea-language') === 'fr' ? 'fr' : 'en' } catch { return 'en' }
  })
  const cataloguePage = window.location.pathname.replace(/\/+$/, '') === '/stock'

  useEffect(() => {
    document.documentElement.lang = lang
    try { window.localStorage.setItem('cea-language', lang) } catch { /* Optional preference. */ }
    if (cataloguePage) document.title = lang === 'fr' ? 'Catalogue de grues | CEA Heavy Equipment' : 'Used Crane Catalogue | CEA Heavy Equipment'
  }, [lang, cataloguePage])

  useEffect(() => {
    loadAnalytics()
    return attachConversionTracking()
  }, [])

  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <Header lang={lang} setLang={setLang} />
      <main>
        {cataloguePage ? <StockCatalogue lang={lang} /> : <>
        <Hero lang={lang} />
        <FeaturedStock lang={lang} />
        <BuyerShortcuts lang={lang} />
        <MachineCategories />
        <NetworkModel />
        <PopularRequests />
        <FastestReply />
        <HowItWorks />
        <EvidencePack />
        <BuyerSafety />
        <Markets />
        <ExportScenarios />
        <TrustSection />
        <LeadForm />
        <FAQ />
        </>}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
