import { readFile, mkdir, writeFile } from 'node:fs/promises'

const origin = 'https://www.ceatradebridge.com'
let html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const title = 'Used Crane Catalogue | CEA Heavy Equipment'
const description = 'Browse 64 crane listings with actual photos, models, years and references. Contact CEA for price, availability, inspection and shipping options.'
html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  .replace(/(<meta name="description" content=")[^"]*("\s*\/>)/, `$1${description}$2`)
  .replace(/(<meta property="og:title" content=")[^"]*("\s*\/>)/, `$1${title}$2`)
  .replace(/(<meta property="og:description" content=")[^"]*("\s*\/>)/, `$1${description}$2`)
  .replace(/(<meta property="og:url" content=")[^"]*("\s*\/>)/, `$1${origin}/stock$2`)
  .replace(/(<meta property="og:image" content=")[^"]*("\s*\/>)/, `$1${origin}/catalogue-images/122430_0.webp$2`)
  .replace('</head>', `  <link rel="canonical" href="${origin}/stock" />\n  </head>`)
await mkdir(new URL('../dist/stock/', import.meta.url), { recursive: true })
await writeFile(new URL('../dist/stock/index.html', import.meta.url), html)
console.log('Built /stock with catalogue share metadata.')
