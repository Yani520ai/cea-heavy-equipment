// Central content file for CEA Heavy Equipment.
// Most business/content changes should be made here, not inside component files.

export const contact = {
  brandName: 'CEA Heavy Equipment',
  parentName: 'CEA Trade Bridge',
  domain: 'ceatradebridge.com',
  // WhatsApp number must be international format, digits only. No plus sign, spaces or hyphens.
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '34613021897',
  email: import.meta.env.VITE_EMAIL_ADDRESS || 'yani@linkace.es',
}

export const analytics = {
  // Optional and free tracking tools. Add these in Vercel Environment Variables,
  // or replace the empty strings below. Leave empty if you are not ready.
  googleAnalyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
  microsoftClarityId: import.meta.env.VITE_CLARITY_PROJECT_ID || '',
  enableWhatsAppClickTracking: true,
}

export const defaultWhatsAppMessage = {
  en: 'Hello. I am looking for used construction equipment from China. Please send current available machines with photos, videos and CIF options.',

  fr: 'Bonjour. Je recherche des équipements de construction d’occasion en provenance de Chine. Merci de m’envoyer les machines disponibles avec photos, vidéos et prix CIF.'
}

export const hero = {
  en: {
    eyebrow: 'China used-equipment sourcing for global buyers',
    title: 'Looking For Used Construction Equipment From China?',
    highlight: 'Tell Us What Machine You Need.',
    subtitle:
      'CEA helps global buyers source used excavators, loaders, cranes, forklifts and heavy equipment through major China equipment markets.',
    proofPoints: [
      'WhatsApp first',
      'Voice message welcome',
      'Current photos & videos',
      'CIF options by port',
      'No fake stock list',
    ],
  },

  fr: {
    eyebrow: 'Approvisionnement en équipements d’occasion depuis la Chine',
    title: 'Vous recherchez des équipements de construction d’occasion en provenance de Chine ?',
    highlight: 'Dites-nous quelle machine vous recherchez.',
    subtitle:
      'CEA aide les acheteurs internationaux à trouver des excavatrices, chargeuses, grues, chariots élévateurs et autres équipements grâce aux principaux marchés chinois.',
    proofPoints: [
      'WhatsApp en priorité',
      'Message vocal accepté',
      'Photos et vidéos actuelles',
      'Options CIF par port',
      'Pas de fausse liste de stock',
    ],
  },
}
export const quickMachineTypes = [
  'Excavator',
  'Wheel Loader',
  'Truck Crane',
  'Crawler Crane',
  'Forklift',
  'Bulldozer',
  'Road Roller',
  'Motor Grader',
  'Dump Truck',
  'Concrete Pump Truck',
  'Mining Equipment',
  'Other / Not Sure',
]

export const buyerShortcuts = [
  {
    title: 'I need a machine now',
    text: 'Send only machine type and country. Details can be discussed on WhatsApp.',
    cta: 'WhatsApp Now',
    message: 'Hello. I need used heavy equipment from China. Please help me find current available machines.',
  },
  {
    title: 'I need photos & videos',
    text: 'Request current photos, working video, nameplate, hour meter and engine view.',
    cta: 'Request Videos',
    message: 'Hello. Please send current machine photos, working video, nameplate and hour meter photos before quotation.',
  },
  {
    title: 'I need CIF price',
    text: 'Send your destination port. We help discuss machine price plus shipping route options.',
    cta: 'Request CIF Price',
    message: 'Hello. I need CIF price for used heavy equipment from China. My destination port is:',
  },
  {
    title: 'I want inspection first',
    text: 'Video inspection, buyer inspection or third-party inspection can be arranged or discussed.',
    cta: 'Discuss Inspection',
    message: 'Hello. I want inspection support before buying used equipment from China. Please explain the process.',
  },
]

export const machineCategories = [
  { title: 'Used Excavators', subtitle: 'CAT, Komatsu, Hitachi, SANY, XCMG', image: '/images/hero.jpg', prompt: 'I am looking for used excavators from China. Please send current available machines.' },
  { title: 'Wheel Loaders', subtitle: '3–5 ton loaders, SDLG, LiuGong, XCMG, CAT', image: '/images/IMG_1553.jpg', prompt: 'I am looking for used wheel loaders from China. Please send current available machines.' },
  { title: 'Truck Cranes', subtitle: '25T–200T mobile cranes, XCMG, SANY, Zoomlion', image: '/images/truck-crane.jpg', prompt: 'I am looking for used truck cranes from China. Please send current available machines.' },
  { title: 'Crawler Cranes', subtitle: 'Heavy lifting and project crane requests', image: '/images/crawler-crane.jpg', prompt: 'I am looking for used crawler cranes from China. Please send current available machines.' },
  { title: 'All Terrain Cranes', subtitle: 'Mobile lifting equipment for project work', image: '/images/all-terrain-crane.jpg', prompt: 'I am looking for used all terrain cranes from China. Please send current available machines.' },
  { title: 'Forklifts', subtitle: 'Warehouse, yard and port handling units', image: '/images/IMG_1551.jpg', prompt: 'I am looking for used forklifts from China. Please send current available machines.' },
  { title: 'Bulldozers', subtitle: 'Crawler dozers for earthmoving projects', image: '/images/IMG_1554.JPG', prompt: 'I am looking for used bulldozers from China. Please send current available machines.' },
  { title: 'Road Rollers', subtitle: 'Compaction equipment for road projects', image: '/images/IMG_1557.jpg', prompt: 'I am looking for used road rollers from China. Please send current available machines.' },
  { title: 'Motor Graders', subtitle: 'Road construction and maintenance machines', image: '/images/IMG_1560%202.jpg', prompt: 'I am looking for used motor graders from China. Please send current available machines.' },
  { title: 'Dump Trucks', subtitle: 'Mining, construction and haulage trucks', image: '/images/IMG_1561%202.jpg', prompt: 'I am looking for used dump trucks from China. Please send current available machines.' },
  { title: 'Concrete Pump Trucks', subtitle: 'Concrete pumps and placing equipment', image: '/images/IMG_1563.jpg', prompt: 'I am looking for used concrete pump trucks from China. Please send current available machines.' },
  { title: 'Mining Equipment', subtitle: 'Quarry and mining operation machinery', image: '/images/mining-equipment.jpg', prompt: 'I am looking for used mining equipment from China. Please send current available machines.' },
  { title: 'Port Equipment', subtitle: 'Handling, lifting and yard equipment', image: '/images/port-equipment.jpg', prompt: 'I am looking for used port equipment from China. Please send current available machines.' },
  { title: 'Drilling Rigs', subtitle: 'Foundation and construction drilling units', image: '/images/IMG_1565.jpg', prompt: 'I am looking for used drilling rigs from China. Please send current available machines.' },
  { title: 'Backhoe Loaders', subtitle: 'Multi-purpose construction machines', image: '/images/IMG_1566.jpg', prompt: 'I am looking for used backhoe loaders from China. Please send current available machines.' },
  { title: 'Aerial Work Platforms', subtitle: 'Boom lifts and scissor lifts', image: '/images/IMG_1568.jpg', prompt: 'I am looking for used aerial work platforms from China. Please send current available machines.' },
  { title: 'Equipment Yards', subtitle: 'Machine sourcing across China yards', image: '/images/about.jpg', prompt: 'Please help me source used equipment from China yards. I will send my requirement.' },
  { title: 'Shipping & Loading', subtitle: 'Container, flat rack and bulk shipment support', image: '/images/crane%2020.jpg', prompt: 'I need used equipment with shipping support from China. Please send available options.' },
  { title: 'Inspection Support', subtitle: 'Photos, videos, nameplate and hour meter check', image: '/images/IMG_1571.jpg', prompt: 'I need inspection support before buying used equipment from China.' },
  { title: 'Spare Parts Support', subtitle: 'Parts sourcing for selected equipment', image: '/images/IMG_1570.jpg', prompt: 'I am looking for heavy equipment spare parts support from China. Please advise.' },
]

export const popularRequests = [
  'CAT 320 / 330 / 336 Excavators',
  'Komatsu PC200 / PC300 Excavators',
  'SANY SY215 / SY365 Excavators',
  'XCMG & SANY 25T–100T Truck Cranes',
  '3–5 Ton Wheel Loaders',
  'Used Forklifts for Warehouse / Yard',
  'Road Rollers & Motor Graders',
  'Dump Trucks & Concrete Pump Trucks',
]

export const networkReasons = [
  'Used equipment inventory changes every day.',
  'A machine shown online may already be sold, repainted, moved or reserved.',
  'Instead of showing outdated stock, we match your exact request across China yards and supplier channels.',
  'After your request, we send current machine photos, videos, nameplate, hour meter, condition details and CIF options directly by WhatsApp.',
]

export const howItWorks = [
  { step: '01', title: 'Tell Us What You Need', text: 'Send machine type, brand/model, budget and destination country. A voice message on WhatsApp is also welcome.' },
  { step: '02', title: 'We Match Current Options', text: 'We search across major China used-equipment markets, yards and partner suppliers according to your request.' },
  { step: '03', title: 'Receive Photos & Videos', text: 'We send current machine photos, working videos, nameplate, hour meter and key condition details where available.' },
  { step: '04', title: 'Inspection & Price Discussion', text: 'You can request video inspection, buyer inspection or third-party inspection before final confirmation.' },
  { step: '05', title: 'CIF & Export Support', text: 'Send your port. We help discuss shipping route, loading plan and CIF quotation options where possible.' },
]

export const evidenceItems = [
  'Current machine exterior photos',
  'Working video / startup video',
  'Nameplate photo',
  'Hour meter photo',
  'Engine compartment view',
  'Cabin and control panel photos',
  'Undercarriage / tire / boom condition',
  'Loading and shipping discussion',
]

export const trustItems = [
  { title: 'Access to Major China Equipment Markets', text: 'We source through a wide equipment network instead of relying on one small yard.' },
  { title: 'No Fake Online Inventory', text: 'Representative website images are not promoted as live stock. Current machines are sent after request.' },
  { title: 'WhatsApp-First Sales Process', text: 'Buyers can contact directly, send voice messages and receive options without a long form.' },
  { title: 'Photos & Videos Before Confirmation', text: 'We can send current photos, videos, nameplate and hour meter details before price confirmation.' },
  { title: 'Inspection Welcome', text: 'Video inspection, buyer inspection and third-party inspection can be discussed before shipment.' },
  { title: 'CIF Price Support', text: 'Send your destination port and we help discuss machine price plus shipping options.' },
]

export const marketRegions = [
  {
    region: 'Africa',
    summary: 'Strong demand for excavators, loaders, cranes, road equipment and trucks.',
    examples: 'Nigeria, Ghana, Kenya, Tanzania, Côte d’Ivoire, Benin, Morocco, South Africa',
    ports: 'Lagos, Tema, Mombasa, Dar es Salaam, Abidjan, Cotonou, Casablanca',
    flag: '🌍',
  },
  {
    region: 'Southeast Asia',
    summary: 'Fast-moving demand for construction machinery, forklifts, road equipment and project machines.',
    examples: 'Indonesia, Philippines, Vietnam, Thailand, Malaysia, Cambodia',
    ports: 'Jakarta, Manila, Ho Chi Minh City, Laem Chabang, Port Klang',
    flag: '🌏',
  },
  {
    region: 'Middle East',
    summary: 'Trading, re-export and project machinery requests for cranes, loaders, excavators and forklifts.',
    examples: 'UAE, Saudi Arabia, Qatar, Oman, Iraq, Jordan',
    ports: 'Jebel Ali, Dammam, Doha, Sohar, Umm Qasr',
    flag: '🕌',
  },
  {
    region: 'Latin America',
    summary: 'Construction, mining and infrastructure equipment requests with CIF port quotation needs.',
    examples: 'Peru, Colombia, Chile, Ecuador, Mexico, Brazil',
    ports: 'Callao, Cartagena, Buenaventura, San Antonio, Guayaquil, Veracruz',
    flag: '🌎',
  },
  {
    region: 'Central Asia',
    summary: 'Equipment requests for mining, construction, logistics and road projects.',
    examples: 'Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Mongolia',
    ports: 'Rail / land transport routes discussed case by case',
    flag: '🚚',
  },
  {
    region: 'Global Buyers',
    summary: 'We can discuss used equipment sourcing requests from buyers worldwide.',
    examples: 'If your country is not listed, send the destination country and port by WhatsApp.',
    ports: 'CIF / FOB / shipment discussion depends on machine and route',
    flag: '🌐',
  },
]

export const marketExamples = [
  { country: 'Nigeria', ports: 'Lagos / Apapa / Tincan', need: 'Excavators, loaders, cranes, trucks', flag: '🇳🇬' },
  { country: 'Ghana', ports: 'Tema / Takoradi', need: 'Excavators, loaders, forklifts, rollers', flag: '🇬🇭' },
  { country: 'Tanzania', ports: 'Dar es Salaam', need: 'Construction and road equipment', flag: '🇹🇿' },
  { country: 'Kenya', ports: 'Mombasa', need: 'Excavators, graders, rollers', flag: '🇰🇪' },
  { country: 'Indonesia', ports: 'Jakarta / Surabaya', need: 'Excavators, loaders, forklifts, road machinery', flag: '🇮🇩' },
  { country: 'Philippines', ports: 'Manila / Cebu', need: 'Excavators, forklifts, trucks, cranes', flag: '🇵🇭' },
  { country: 'UAE', ports: 'Jebel Ali', need: 'Trading, re-export and project equipment', flag: '🇦🇪' },
  { country: 'Peru', ports: 'Callao', need: 'Construction, mining and road machines', flag: '🇵🇪' },
]


export const fastestReplyChecklist = [
  { title: 'Machine type', example: 'Excavator / crane / loader / forklift' },
  { title: 'Model or size', example: 'CAT 320D / 25T crane / 5 ton loader' },
  { title: 'Destination', example: 'Country + port, e.g. Lagos, Tema, Callao' },
  { title: 'Budget range', example: 'Optional, but helps us filter faster' },
  { title: 'Condition preference', example: 'Ready to work / low hours / original paint / repaint accepted' },
  { title: 'Inspection need', example: 'Video inspection / third-party inspection / visit yard' },
]

export const exportScenarios = [
  {
    route: 'Excavator request → West Africa',
    detail: 'Common requests: CAT, Komatsu, SANY and XCMG excavators for construction, mining and rental businesses.',
    cta: 'Ask Excavator Options',
    message: 'Hello. I need used excavators from China for West Africa. Please send current available machines with videos and CIF options.',
  },
  {
    route: 'Wheel loader request → Africa / Southeast Asia',
    detail: 'Common requests: 3–5 ton wheel loaders for yards, ports, construction sites and material handling.',
    cta: 'Ask Loader Options',
    message: 'Hello. I need used wheel loaders from China. Please send current available machines with photos, videos and CIF options.',
  },
  {
    route: 'Truck crane request → Middle East / Africa',
    detail: 'Common requests: 25T–100T truck cranes from XCMG, SANY, Zoomlion and other China channels.',
    cta: 'Ask Crane Options',
    message: 'Hello. I need used truck cranes from China. Please send current available cranes with photos, videos and CIF options.',
  },
  {
    route: 'Forklift request → global warehouse buyers',
    detail: 'Common requests: forklifts for warehouses, yards, ports, factories and trading customers.',
    cta: 'Ask Forklift Options',
    message: 'Hello. I need used forklifts from China. Please send current available units with photos, videos and price options.',
  },
]

export const buyerSafety = [
  'Representative website images are for category illustration only.',
  'Current machine photos and videos are sent after request.',
  'Buyer inspection or third-party inspection can be discussed.',
  'We recommend confirming machine condition, serial details, loading method and destination port before payment decisions.',
]

export const faqs = [
  { q: 'Do you list all available machines online?', a: 'No. Used-equipment inventory changes daily. We source based on your request and send current options by WhatsApp.' },
  { q: 'Can I just contact by WhatsApp without filling the form?', a: 'Yes. WhatsApp is the fastest way. You can send one short message or a voice note with machine type and country. We will ask the rest.' },
  { q: 'Can you send videos before quotation?', a: 'Yes. For available machines, we can request or provide current photos, working video, nameplate, hour meter and condition details where available.' },
  { q: 'Can you quote CIF to my port?', a: 'Send your destination port. We can help discuss machine price and shipping route options where possible.' },
  { q: 'Can I inspect before buying?', a: 'Video inspection, buyer inspection or third-party inspection can be discussed before shipment confirmation.' },
]
