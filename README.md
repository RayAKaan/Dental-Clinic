# White Pearl Dental Studio - Premium Dental Clinic Website

A production-ready, conversion-optimized website for a luxury dental clinic in Bangalore, built with React, TypeScript, Vite, Tailwind CSS, and Shadcn/UI components.

## Design Philosophy

- **Ultra-clean, minimal aesthetic** - No gradients, no AI clichés
- **Premium healthcare brand** - Inspired by Apple-level spacing and Scandinavian design
- **Trust and professionalism** - Clean typography, generous whitespace
- **Fully responsive** - Optimized for desktop, tablet, and mobile

## Features

### 🎯 Conversion-Focused Design

**WhatsApp Integration**
- Floating WhatsApp button (bottom-right)
- Mobile sticky CTA bar (Call + WhatsApp)
- WhatsApp CTAs throughout the journey
- Direct booking via WhatsApp with pre-filled message

**Trust Signals**
- 4.9★ Google rating prominently displayed
- 850+ verified reviews section
- NABH Accreditation & ISO Certification badges
- Real patient testimonials with avatars

**Transparent Pricing**
- Starting prices for all treatments (₹4,999 - ₹1,24,999)
- Clear "Book Consultation" CTAs

### 🎨 Visual Experience

- **Before/After Gallery** with interactive slider
- **Scroll-triggered animations** using Intersection Observer
- **Scroll progress indicator** (top bar)
- **Animated counters** (years experience, patients, etc.)
- Smooth CSS transitions throughout

### ⚡ Performance

- Built with Vite for instant HMR and optimized builds
- Lazy-loaded components via React.lazy
- Minimal dependencies (only shadcn/ui, tailwind-merge, clsx)
- TypeScript for type safety

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 |
| UI Components | Shadcn/UI (Radix primitives) |
| Animations | CSS + Intersection Observer |
| Icons | Lucide React |
| Deployment | Static build (dist/) |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Shadcn/UI primitives
│   ├── BeforeAfter.tsx
│   ├── Counter.tsx
│   ├── MobileCTA.tsx
│   ├── ScrollProgress.tsx
│   ├── ScrollReveal.tsx
│   └── WhatsAppButton.tsx
├── hooks/
│   └── useScrollAnimation.tsx
├── utils/
│   └── cn.ts
├── App.tsx
├── index.css
└── main.tsx
```
