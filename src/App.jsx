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

export default function App() {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    loadAnalytics()
    return attachConversionTracking()
  }, [])

  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <Header lang={lang} setLang={setLang} />
<main>
  <Hero lang={lang} />
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
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
