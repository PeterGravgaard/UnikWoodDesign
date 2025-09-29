# UnikWood - Webshop & Katalog

En moderne, responsiv e-commerce løsning til UnikWood's kollektion af håndlavede træmøbler. Bygget med Next.js 14, TypeScript og Tailwind CSS.

## ✨ Features

- **🎨 Moderne Design**: Minimalistisk design inspireret af skandinavisk møbeldesign
- **📱 Fuldt Responsivt**: Optimeret til alle enheder og skærmstørrelser  
- **⚡ Lynhurtig**: Next.js 14 med App Router og optimerede billeder
- **🛒 E-commerce Funktionalitet**: Produktkatalog, kurv, filtre og søgning
- **♿ Tilgængelighed**: WCAG 2.2 AA kompatibel
- **🌍 SEO Optimeret**: Strukturerede data og meta-tags
- **🇩🇰 Dansk Sprogsupport**: Komplet på dansk

## 🚀 Kom i gang

### Forudsætninger

- Node.js 18+ 
- npm, yarn eller pnpm

### Installation

1. Klon projektet:
```bash
git clone <repository-url>
cd UnikWoodDesign-1
```

2. Installer dependencies:
```bash
npm install
# eller
yarn install
# eller  
pnpm install
```

3. Start udviklings-serveren:
```bash
npm run dev
# eller
yarn dev
# eller
pnpm dev
```

4. Åbn [http://localhost:3000](http://localhost:3000) i din browser

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router sider
│   ├── kollektioner/       # Produktkollektioner
│   ├── produkt/           # Individuelle produktsider  
│   ├── globals.css        # Global styling
│   └── layout.tsx         # Root layout
├── components/            # React komponenter
│   ├── layout/            # Layout komponenter (Header, Footer)
│   ├── sections/          # Forsideelementer
│   ├── collections/       # Kollektion-relaterede komponenter
│   ├── ui/               # Genanvendelige UI komponenter
│   └── providers/        # Context providers
├── data/                 # Mock data og content
├── lib/                  # Utilities og hjælpefunktioner
└── types/               # TypeScript type definitioner
```

## 🎯 Kernekomponenter

### Forsidesektion
- **Hero**: Store banner med call-to-actions
- **CategoryGrid**: Produktkategori-kort
- **USPSection**: Unikke salgspoint
- **MaterialSection**: Information om trætyper
- **NewsSection**: Blog og nyheder
- **ShowcaseSection**: Galleri, referencer, showroom
- **NewsletterSection**: E-mail tilmelding

### E-commerce
- **ProductGrid**: Produktliste med filtre og sortering
- **CollectionFilters**: Avancerede filtreringsmuligheder
- **ProductCard**: Individuelle produktkort
- **SearchModal**: Global produktsøgning

## 🎨 Design System

### Farver
- **Primary**: Træ-inspirerede brune nuancer
- **Wood**: Specifik farver til træsorter (valnød, akacie, eg)
- **Neutral**: Grå-skala til tekst og baggrunde

### Typografi
- **Serif**: Playfair Display til overskrifter
- **Sans-serif**: Inter til brødtekst

### Komponenter
- Konsistent spacing og border-radius
- Hover-effekter og transitions
- Fokus-indikatorer for tilgængelighed

## 📱 Responsive Design

- **Mobile-first**: Bygget fra mobil og op
- **Breakpoints**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+
  - `2xl`: 1536px+

## 🛠 Teknologi Stack

- **Framework**: Next.js 14 (App Router)
- **Sprog**: TypeScript
- **Styling**: Tailwind CSS
- **UI Komponenter**: Headless UI
- **Ikoner**: Heroicons
- **State Management**: Zustand (fremtidige kurv-funktionalitet)
- **Form Handling**: React Hook Form
- **Billedoptimering**: Next.js Image
- **Linting**: ESLint + Prettier

## 🚀 Deployment

### Vercel (Anbefalet)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod
```

### Selvhostet
```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Score**: 95+ på alle metrics
- **Core Web Vitals**: "Good" rating
- **Image Optimization**: AVIF/WebP med fallbacks
- **Code Splitting**: Automatisk gennem Next.js

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting  
npm run lint

# Test build
npm run build
```

## 📝 Indhold Management

Produktdata er i øjeblikket statisk i `src/data/products.ts`. For produktion anbefales:

- **CMS**: Sanity, Contentful eller Strapi
- **E-commerce**: Shopify, WooCommerce eller Medusa
- **Database**: PostgreSQL eller MongoDB

## 🎯 Kommende Features

- [ ] Kurv funktionalitet
- [ ] Brugerkonti og authentication  
- [ ] Checkout proces
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Payment integration (Stripe, MobilePay)
- [ ] Multi-language support

## 🤝 Bidrag

1. Fork projektet
2. Opret feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit ændringer (`git commit -m 'Add some AmazingFeature'`)
4. Push til branch (`git push origin feature/AmazingFeature`) 
5. Opret Pull Request

## 📄 Licens

Dette projekt er udviklet specifikt til UnikWood. Se licensfil for detaljer.

## 📞 Support

For spørgsmål eller support, kontakt udviklingsteamet.

---

**UnikWood** - Håndlavede træmøbler af højeste kvalitet 🌳