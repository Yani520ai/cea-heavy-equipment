import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Camera, Check, ChevronLeft, ChevronRight, MessageCircle, Search, Share2, X } from 'lucide-react'
import stock from '../data/stock.json'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import './StockCatalogue.css'

const labels = {
  en: {
    eyebrow: 'REAL MACHINE PHOTOS · CHINA SOURCING', title: 'Find your next crane.',
    intro: 'Compare equipment, open the actual photos and send the stock reference directly to our team.',
    note: 'Availability and condition confirmed on request.',
    catalogue: 'Crane catalogue', all: 'View all machines', details: 'View details', quote: 'Ask price & availability',
    reference: 'Reference', year: 'Year', capacity: 'Capacity class', confirm: 'To confirm', listed: 'Listed',
    search: 'Search model, year or reference', placeholder: 'e.g. XCA300, 2022 or 122430',
    brand: 'Brand', allBrands: 'All brands', allCapacities: 'All capacities', sort: 'Sort by',
    recent: 'Catalogue order', newest: 'Newest year', asc: 'Capacity: low to high', desc: 'Capacity: high to low',
    small: 'Up to 25 t', medium: '26–70 t', heavy: '71–130 t', large: 'Above 130 t',
    clear: 'Clear filters', plural: 'machines', singular: 'machine', empty: 'No matching machines.',
    emptyText: 'Try another filter, or tell us the model and destination you need.',
    previous: 'Previous', next: 'Next', home: 'Back to CEA home', photos: 'Actual listing photos',
    prevPhoto: 'Previous photo', nextPhoto: 'Next photo', photo: 'Photo', close: 'Close details',
    reported: 'Reported listing details', release: 'Title release must be completed before handover.',
    caveat: 'Hours and configuration are reported listing data. Request current photos, nameplate, condition, included accessories and the relevant load chart before confirmation.',
    share: 'Share this machine', copied: 'Link copied', copyLink: 'Copy this machine link:',
    featured: 'A closer look at the machines.', featuredText: 'Start with these crane listings, or browse the complete catalogue.',
    needOther: 'Need another model or machine type?', otherText: 'Send the model, budget and destination port. We will discuss suitable options from our China network.',
    brief: 'Send your requirement', quoteNote: 'Send your destination port for a shipping or CIF quotation.',
  },
  fr: {
    eyebrow: 'PHOTOS RÉELLES · APPROVISIONNEMENT EN CHINE', title: 'Trouvez votre prochaine grue.',
    intro: 'Comparez les machines, consultez leurs photos et envoyez la référence directement à notre équipe.',
    note: 'Disponibilité et état à confirmer sur demande.',
    catalogue: 'Catalogue de grues', all: 'Voir toutes les machines', details: 'Voir les détails', quote: 'Demander prix et disponibilité',
    reference: 'Référence', year: 'Année', capacity: 'Classe de capacité', confirm: 'À confirmer', listed: 'Ajoutée le',
    search: 'Rechercher un modèle, une année ou une référence', placeholder: 'Ex. XCA300, 2022 ou 122430',
    brand: 'Marque', allBrands: 'Toutes les marques', allCapacities: 'Toutes les capacités', sort: 'Trier par',
    recent: 'Ordre du catalogue', newest: 'Année décroissante', asc: 'Capacité croissante', desc: 'Capacité décroissante',
    small: 'Jusqu’à 25 t', medium: '26–70 t', heavy: '71–130 t', large: 'Plus de 130 t',
    clear: 'Effacer les filtres', plural: 'machines', singular: 'machine', empty: 'Aucune machine correspondante.',
    emptyText: 'Essayez un autre filtre ou indiquez le modèle et la destination souhaités.',
    previous: 'Précédent', next: 'Suivant', home: 'Retour à l’accueil CEA', photos: 'Photos réelles de l’annonce',
    prevPhoto: 'Photo précédente', nextPhoto: 'Photo suivante', photo: 'Photo', close: 'Fermer les détails',
    reported: 'Détails déclarés dans l’annonce', release: 'La levée du financement doit être finalisée avant la remise de la machine.',
    caveat: 'Les heures et la configuration proviennent de l’annonce. Demandez les photos actuelles, la plaque signalétique, l’état, les accessoires inclus et le tableau de charges avant confirmation.',
    share: 'Partager cette machine', copied: 'Lien copié', copyLink: 'Copiez le lien de cette machine :',
    featured: 'Découvrez les machines en détail.', featuredText: 'Commencez par ces annonces de grues ou consultez le catalogue complet.',
    needOther: 'Vous cherchez un autre modèle ou type de machine ?', otherText: 'Envoyez le modèle, le budget et le port de destination. Nous rechercherons des options adaptées dans notre réseau chinois.',
    brief: 'Envoyer votre demande', quoteNote: 'Indiquez votre port pour un devis de transport ou CIF.',
  },
}

const featured = ['122430', '122339', '122461', '122445', '122386', '122457']
const brands = [...new Set(stock.map(m => m.make))].sort()
const pageSize = 12

function machinePath(machine, lang) {
  const params = new URLSearchParams({ stock: machine.code })
  if (lang === 'fr') params.set('lang', 'fr')
  return `/stock?${params}`
}

function enquiry(machine, lang) {
  const url = `https://www.ceatradebridge.com${machinePath(machine, lang)}`
  return buildWhatsAppUrl(lang === 'fr'
    ? `Bonjour Yani, je suis intéressé(e) par la machine #${machine.code} : ${machine.year} ${machine.make} ${machine.model}.\nMerci de confirmer la disponibilité, le prix et l’état, et de m’envoyer une vidéo actuelle.\nPays / port de destination :\n${url}`
    : `Hello Yani, I am interested in stock #${machine.code}: ${machine.year} ${machine.make} ${machine.model}.\nPlease confirm availability, price and condition, and send a current working video.\nDestination country / port:\n${url}`, lang)
}

function MachineCard({ machine, lang, onOpen }) {
  const t = labels[lang] || labels.en
  const open = e => {
    if (onOpen && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) { e.preventDefault(); onOpen(machine) }
  }
  const href = machinePath(machine, lang)
  return <article className="cea-machine-card">
    <a className="cea-machine-image" href={href} onClick={open} aria-label={`${t.details}: ${machine.year} ${machine.make} ${machine.model}, #${machine.code}`}>
      <img src={machine.images[0]} alt={`${machine.year} ${machine.make} ${machine.model}, #${machine.code}`} loading="lazy" decoding="async" width="900" height="675" />
      <span className="cea-year">{machine.year}</span><span className="cea-photo-count"><Camera size={13} />{machine.images.length}</span>
    </a>
    <div className="cea-machine-body">
      <div className="cea-machine-kicker"><span>{machine.make.includes('CONFIRM') ? t.confirm : machine.make}</span><span>#{machine.code}</span></div>
      <h3><a href={href} onClick={open}>{machine.model}</a></h3><p className="cea-machine-brief">{machine.brief}</p>
      <div className="cea-machine-spec"><span>{machine.capacity ? <><strong>{machine.capacity}</strong> t</> : t.confirm}</span><a href={href} onClick={open}>{t.details}<ArrowRight size={15} /></a></div>
      <a className="cea-machine-quote" href={enquiry(machine, lang)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />{t.quote}</a>
    </div>
  </article>
}

export function FeaturedStock({ lang = 'en' }) {
  const t = labels[lang] || labels.en
  return <section className="cea-stock cea-featured" id="stock"><div className="cea-stock-wrap">
    <div className="cea-stock-heading"><div><p className="cea-stock-eyebrow">{t.catalogue}</p><h2>{t.featured}</h2><p className="cea-stock-intro">{t.featuredText}</p></div><a className="btn-gold" href="/stock">{t.all}<ArrowRight size={17} /></a></div>
    <p className="cea-listing-note">{t.note}</p><div className="cea-machine-grid">{featured.map(code => <MachineCard key={code} machine={stock.find(m => m.code === code)} lang={lang} />)}</div>
  </div></section>
}

export default function StockCatalogue({ lang = 'en' }) {
  const t = labels[lang] || labels.en
  const [query, setQuery] = useState('')
  const [brand, setBrand] = useState('')
  const [capacity, setCapacity] = useState('')
  const [sort, setSort] = useState('recent')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState(null)
  const [photo, setPhoto] = useState(0)
  const [shareState, setShareState] = useState('')
  const dialog = useRef(null)
  const resultsTop = useRef(null)
  const opener = useRef(null)

  useEffect(() => {
    const sync = () => {
      const code = new URLSearchParams(window.location.search).get('stock')
      setSelected(stock.find(m => m.code === code) || null); setPhoto(0); setShareState('')
    }
    sync(); window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])
  useEffect(() => {
    const element = dialog.current
    if (selected) {
      if (!element.open) element.showModal()
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = previous }
    }
    if (element.open) element.close()
    opener.current?.focus()
  }, [selected])
  useEffect(() => { setPage(1) }, [query, brand, capacity, sort])

  const filtered = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    const matches = stock.filter(m => {
      const text = `${m.make} ${m.model} ${m.year} ${m.code} ${m.brief} ${m.note}`.toLowerCase()
      if (!words.every(word => text.includes(word)) || (brand && m.make !== brand)) return false
      if (capacity === 'unknown') return !m.capacity
      if (capacity && !m.capacity) return false
      if (capacity === '25' && m.capacity > 25) return false
      if (capacity === '70' && (m.capacity <= 25 || m.capacity > 70)) return false
      if (capacity === '130' && (m.capacity <= 70 || m.capacity > 130)) return false
      if (capacity === 'large' && m.capacity <= 130) return false
      return true
    })
    if (sort === 'year') matches.sort((a, b) => Number(b.year) - Number(a.year))
    if (sort === 'asc') matches.sort((a, b) => (a.capacity ?? Infinity) - (b.capacity ?? Infinity))
    if (sort === 'desc') matches.sort((a, b) => (b.capacity ?? -Infinity) - (a.capacity ?? -Infinity))
    return matches
  }, [query, brand, capacity, sort])
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pages)
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const clear = () => { setQuery(''); setBrand(''); setCapacity(''); setSort('recent'); setPage(1) }
  const open = machine => {
    opener.current = document.activeElement
    setPhoto(0); setShareState(''); setSelected(machine)
    const url = new URL(window.location.href); url.searchParams.set('stock', machine.code)
    window.history.replaceState(null, '', url)
  }
  const close = () => {
    setSelected(null)
    const url = new URL(window.location.href); url.searchParams.delete('stock')
    window.history.replaceState(null, '', url)
  }
  const movePhoto = delta => setPhoto(i => (i + delta + selected.images.length) % selected.images.length)
  const share = async () => {
    const url = `https://www.ceatradebridge.com${machinePath(selected, lang)}`
    try {
      if (navigator.share) { await navigator.share({ title: `${selected.make} ${selected.model} · #${selected.code}`, url }); return }
      await navigator.clipboard.writeText(url); setShareState('copied')
    } catch (error) { if (error.name !== 'AbortError') setShareState(url) }
  }
  const paginate = value => { setPage(value); resultsTop.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }

  return <div className="cea-stock cea-catalogue-page">
    <section className="cea-stock-hero"><div className="cea-stock-wrap"><a className="cea-back" href="/"><ArrowLeft size={16} />{t.home}</a><p className="cea-stock-eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="cea-stock-intro">{t.intro}</p>
      <div className="cea-stock-proof"><span><strong>{stock.length}</strong> {t.plural}</span><span>XCMG / SANY / ZOOMLION</span><span>{t.photos}</span></div><p className="cea-listing-note">{t.note}</p>
    </div></section>
    <section className="cea-stock-wrap cea-stock-results" ref={resultsTop} aria-label={t.catalogue}>
      <div className="cea-stock-filters">
        <label className="cea-stock-search"><span>{t.search}</span><div><Search size={18} /><input type="search" placeholder={t.placeholder} value={query} onChange={e => setQuery(e.target.value)} /></div></label>
        <label><span>{t.brand}</span><select value={brand} onChange={e => setBrand(e.target.value)}><option value="">{t.allBrands}</option>{brands.map(b => <option key={b} value={b}>{b.includes('CONFIRM') ? `${t.confirm} (${b})` : b}</option>)}</select></label>
        <label><span>{t.capacity}</span><select value={capacity} onChange={e => setCapacity(e.target.value)}><option value="">{t.allCapacities}</option><option value="25">{t.small}</option><option value="70">{t.medium}</option><option value="130">{t.heavy}</option><option value="large">{t.large}</option><option value="unknown">{t.confirm}</option></select></label>
        <label><span>{t.sort}</span><select value={sort} onChange={e => setSort(e.target.value)}><option value="recent">{t.recent}</option><option value="year">{t.newest}</option><option value="asc">{t.asc}</option><option value="desc">{t.desc}</option></select></label>
      </div>
      <div className="cea-stock-count"><p role="status" aria-live="polite"><strong>{filtered.length}</strong> {filtered.length === 1 ? t.singular : t.plural}</p>{(query || brand || capacity) && <button onClick={clear}>{t.clear}<X size={14} /></button>}</div>
      {visible.length ? <div className="cea-machine-grid">{visible.map(m => <MachineCard key={m.code} machine={m} lang={lang} onOpen={open} />)}</div> : <div className="cea-stock-empty"><Search size={30} /><h2>{t.empty}</h2><p>{t.emptyText}</p><button className="btn-gold" onClick={clear}>{t.clear}</button></div>}
      {pages > 1 && <nav className="cea-stock-pagination" aria-label="Catalogue pagination"><button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}><ChevronLeft size={17} />{t.previous}</button><span>{currentPage} / {pages}</span><button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pages}>{t.next}<ChevronRight size={17} /></button></nav>}
    </section>
    <section className="cea-stock-brief"><div className="cea-stock-wrap"><div><h2>{t.needOther}</h2><p>{t.otherText}</p></div><a className="btn-green" href={buildWhatsAppUrl(undefined, lang)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />{t.brief}</a></div></section>
    <dialog className="cea-stock-dialog" ref={dialog} aria-labelledby="cea-machine-title" onCancel={e => { e.preventDefault(); close() }} onClick={e => { if (e.target === dialog.current) close() }} onKeyDown={e => { if (selected && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { e.preventDefault(); movePhoto(e.key === 'ArrowLeft' ? -1 : 1) } }}>
      {selected && <div className="cea-dialog-shell"><button className="cea-dialog-close" onClick={close} aria-label={t.close}><X size={23} /></button>
        <div className="cea-dialog-gallery"><div className="cea-dialog-photo"><img src={selected.images[photo]} alt={`${selected.make} ${selected.model}, #${selected.code}, ${t.photo} ${photo + 1}`} />{selected.images.length > 1 && <><button className="cea-photo-prev" onClick={() => movePhoto(-1)} aria-label={t.prevPhoto}><ChevronLeft size={24} /></button><button className="cea-photo-next" onClick={() => movePhoto(1)} aria-label={t.nextPhoto}><ChevronRight size={24} /></button></>}<span className="cea-photo-index">{photo + 1} / {selected.images.length}</span></div>
          {selected.images.length > 1 && <div className="cea-photo-thumbs">{selected.images.map((src, i) => <button key={src} onClick={() => setPhoto(i)} aria-label={`${t.photo} ${i + 1}`} aria-pressed={i === photo}><img src={src} alt="" loading="lazy" /></button>)}</div>}<p className="cea-photo-caption"><Camera size={14} />{t.photos}</p>
        </div>
        <div className="cea-dialog-info"><p className="cea-stock-eyebrow">{selected.make.includes('CONFIRM') ? t.confirm : selected.make}</p><h2 id="cea-machine-title">{selected.model}</h2><p className="cea-dialog-reference">{t.reference} #{selected.code}</p>
          {selected.listedOn && (
            <p className="cea-dialog-note">
              {t.listed} <time dateTime={selected.listedOn}>{selected.listedOn}</time>
            </p>
          )}
          <dl className="cea-dialog-metrics"><div><dt>{t.year}</dt><dd>{selected.year}</dd></div><div><dt>{t.capacity}</dt><dd>{selected.capacity ? `${selected.capacity} t` : t.confirm}</dd></div></dl><h3>{t.reported}</h3><p className="cea-dialog-brief">{selected.brief}</p><p className="cea-dialog-note">{selected.note}</p>
          {selected.releaseRequired && <p className="cea-release-note">{t.release}</p>}
          <a className="btn-green cea-dialog-quote" href={enquiry(selected, lang)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />{t.quote}</a><p className="cea-quote-note">{t.quoteNote}</p>
          <button className="cea-dialog-share" onClick={share}>{shareState === 'copied' ? <Check size={16} /> : <Share2 size={16} />}{shareState === 'copied' ? t.copied : t.share}</button>{shareState.startsWith('https:') && <label className="cea-share-fallback">{t.copyLink}<input readOnly value={shareState} onFocus={e => e.target.select()} /></label>}<p className="cea-dialog-caveat">{t.caveat}</p>
        </div>
      </div>}
    </dialog>
  </div>
}
