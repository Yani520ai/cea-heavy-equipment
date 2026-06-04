# CEA Heavy Equipment V6 Conversion Final

This is the final WhatsApp-first lead-generation site for `ceatradebridge.com`.

## Strategy

This website is not a live-stock marketplace. It is a used-equipment sourcing website:

1. Buyer tells us what machine they need.
2. CEA searches major China used-equipment markets and partner yards.
3. Current photos, videos, nameplate, hour meter, inspection details and CIF options are sent by WhatsApp.
4. Buyer can request video inspection, third-party inspection and shipping discussion.

## Main conversion action

Every major CTA opens WhatsApp with a pre-filled message.

No long form is required. The fastest request only needs:

- Machine type
- Destination country / port
- WhatsApp number or direct WhatsApp chat

## Most important file

Edit most content here:

```txt
src/data/siteData.js
```

Update:

- WhatsApp number
- Email
- Equipment categories
- Buyer regions
- Popular requests
- Text content
- Tracking IDs

## WhatsApp number

In `src/data/siteData.js`:

```js
whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '34613021897'
```

Use digits only. No plus sign, spaces or hyphens.

## Free analytics / tracking

V6 supports:

- Google Analytics 4
- Microsoft Clarity
- WhatsApp click tracking
- Email click tracking

Set these in Vercel Environment Variables if available:

```txt
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CLARITY_PROJECT_ID=xxxxxxxxxx
VITE_WHATSAPP_NUMBER=34613021897
VITE_EMAIL_ADDRESS=yani@linkace.es
```

Search Console is configured from Google and does not require code changes unless Google asks for a verification tag.

## Deploy through GitHub → Vercel

1. Replace current project files with this package.
2. Do not modify DNS in Porkbun.
3. Push to the GitHub branch connected to Vercel.
4. Vercel automatically builds and deploys.

Local test:

```bash
npm install
npm run build
npm run dev
```

## Image policy

Current images are representative category images.

Safe wording:

- Representative category image
- Current machines sent after request
- Inventory changes daily

Avoid wording unless verified:

- Available now
- In stock
- Exact machine available
- Recently exported

## V6 additions

- Stronger hero: “Looking For Used Construction Equipment From China?”
- Fastest Reply module: send 3 items first
- Common sourcing scenarios instead of fake “recently exported” claims
- Global buyer regions
- No fake stock list model
- WhatsApp-first form
- Free analytics readiness
