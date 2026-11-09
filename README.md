# CEA Heavy Equipment

Used-equipment sourcing site for `www.ceatradebridge.com`, with a crane catalogue at `/stock`.

## Catalogue

- 64 dated November 2026 listing records and 91 actual photographs.
- Search by model, year or reference; filter by brand and capacity; sort and paginate results.
- English/French catalogue controls follow the existing language switch. Reported listing details remain in English.
- Share a unit with `/stock?stock=122430`; enquiries include the reference, model, year and machine link.
- Unknown capacities stay `null`. `releaseRequired` flags identify units requiring finance/title release before handover.
- This is a curated catalogue, not an automatic live feed. Confirm current availability, nameplate, condition, included accessories and load chart per quotation.

Records: `src/data/stock.json`. Photos: `public/catalogue-images/`. UI: `src/components/StockCatalogue.jsx` and its CSS.

The homepage retains the existing sourcing content and adds six featured units. Representative category illustrations remain distinct from actual catalogue photos.

## Contact

`src/data/siteData.js` defines the default WhatsApp `34613021897` and email `yani@linkace.es`. Vercel environment overrides remain supported.

## Development

```sh
npm ci
npm run dev
npm run build
```

The build also generates `dist/stock/index.html` with catalogue-specific share metadata. `vercel.json` routes both `/stock` and `/stock/` to it and retains the existing SPA fallback.

## Publishing

Vercel project `cea-heavy-equipment-2d35` serves `www.ceatradebridge.com` from this repository's `main` branch. The similarly named second Vercel project also tracks the repository but has no custom domain.

Preserve the existing Porkbun DNS. Content updates require repository changes, not IP or domain changes.
