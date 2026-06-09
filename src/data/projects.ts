import { SITE } from "./site";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  url: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  tags: string[];
  accent: string;
  border: string;
  badge: string;
  live?: boolean;
  /** Show "View Google Sheets admin" when SITE.barberDemoSheetsUrl is set */
  hasSheetsDemo?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "premium-barber",
    title: "Eskişehir Premium Berber",
    subtitle: "Premium men's barbershop · Eskişehir, Turkey",
    description:
      "Full barbershop landing with online booking, Telegram bot, and Google Sheets as a lightweight admin panel — no CRM. Content, prices, schedule, and portfolio are managed from the spreadsheet.",
    highlights: [
      "One-page site: hero (video on desktop), services, team, booking, portfolio, FAQ, contact",
      "Booking: barber → services → calendar → live slots → writes to Google Sheets",
      "Telegram bot: full booking flow, cancel, prices, location, admin /bugun & /portfolio",
      "Languages: TR · EN · RU",
      "Stack: Next.js 16, React 19, Tailwind 4, Framer Motion, grammY, Vercel",
    ],
    url: "https://premium-barbershop-red.vercel.app/",
    image: "/projects/premium-barber.webp",
    imageWidth: 2560,
    imageHeight: 1440,
    tags: [
      "Online booking",
      "Google Sheets",
      "Telegram bot",
      "i18n TR/EN/RU",
      "SEO",
    ],
    accent: "from-red-500/20 to-orange-400/10",
    border: "border-red-500/30",
    badge: "Barbershop + Automation",
    hasSheetsDemo: true,
  },
  {
    id: "lumiere",
    title: "LUMIÈRE",
    subtitle: "Luxury fragrance e-commerce · demo / portfolio case",
    description:
      "Editorial luxury perfume store (Maison Margiela × Byredo mood): multi-page shop with catalog, product pages, cart, demo checkout, Scent Finder quiz, and admin analytics dashboard.",
    highlights: [
      "Pages: home, shop, new, sale, product, support, login, register, account, checkout",
      "12 products with EN/RU translations, filters, search, wishlist, volume selector",
      "Admin panel: orders, revenue, product analytics (NextAuth + Prisma / Turso)",
      "UX: GSAP scroll, Lenis smooth scroll, page transitions, mobile-first",
      "Stack: Next.js 14, TypeScript, Tailwind, Framer Motion, GSAP, next-intl, Zustand",
    ],
    url: "https://lumiere-parfume.vercel.app/",
    image: "/projects/lumiere.webp",
    imageWidth: 2560,
    imageHeight: 1195,
    tags: [
      "E-commerce",
      "Admin panel",
      "EN / RU",
      "Animations",
      "Demo checkout",
    ],
    accent: "from-amber-200/20 to-rose-300/10",
    border: "border-amber-500/25",
    badge: "Beauty & E-commerce",
  },
  {
    id: "iron-blade",
    title: "IRON & BLADE",
    subtitle: "Premium barbershop · English UI · related case",
    description:
      "Same product family as Eskişehir Premium Berber: online booking, Telegram bot, Google Sheets admin, portfolio, and full barbershop landing — implemented with a darker English-first brand. Slightly lighter polish than the Turkish flagship, but the same core functionality.",
    highlights: [
      "Same stack & features: website booking → Sheets, Telegram bot, Sheets as admin",
      "One-page flow: hero, services, team, booking, portfolio, FAQ, contact",
      "Per-barber portfolio gallery, WhatsApp / Telegram CTAs",
      "English UI (separate brand demo — not the Eskişehir client site)",
    ],
    url: "https://barber-site-mocha.vercel.app/",
    image: "/projects/iron-blade.webp",
    imageWidth: 2560,
    imageHeight: 1440,
    tags: [
      "Same as Premium Barber",
      "Booking",
      "Telegram bot",
      "Google Sheets",
      "English UI",
    ],
    accent: "from-stone-400/15 to-amber-900/20",
    border: "border-stone-500/25",
    badge: "Barbershop · Variant",
    hasSheetsDemo: true,
  },
  {
    id: "iron-body-gym",
    title: "IRON BODY GYM",
    subtitle: "Fitness club landing · Neon Glass edition",
    description:
      "High-energy one-page gym website: cyber glassmorphism UI (purple + cyan), bento hero, programs, trainers, pricing with monthly/annual toggle, testimonials, and contact map. Frontend showcase — no backend.",
    highlights: [
      "Sections: hero (bento + stats), marquee, programs, trainers, pricing, testimonials, CTA, footer",
      "Languages: EN · RU · TR (header switcher)",
      "Animations: Framer Motion, count-up stats, mobile testimonial carousel",
      "SEO: OG image, sitemap, JSON-LD, WhatsApp CTA",
      "Stack: Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Vercel",
    ],
    url: SITE.gymUrl,
    image: "/projects/iron-body-gym.webp",
    imageWidth: 2560,
    imageHeight: 1440,
    live: true,
    tags: ["Fitness", "Landing page", "i18n EN/RU/TR", "Glass UI", "Animations"],
    accent: "from-violet-500/25 to-cyan-500/15",
    border: "border-violet-500/30",
    badge: "Fitness · Landing",
  },
];
