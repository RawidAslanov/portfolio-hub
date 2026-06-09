export type Package = {
  name: string;
  price: string;
  for: string;
  items: readonly string[];
  featured?: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: "Basic",
    price: "$50",
    for: "Landing page — get online fast",
    items: [
      "One-page site, 5–7 sections (Hero, Services, About, Gallery, Contact, FAQ)",
      "Fully responsive — mobile, tablet, desktop",
      "Contact block: form, WhatsApp, Telegram, phone, email",
      "Basic SEO: page titles, meta description, Open Graph preview",
      "Fast load: Next.js, optimized images, clean layout",
      "Deploy to your domain or hosting (I handle setup)",
      "1 revision round",
    ],
  },
  {
    name: "Standard",
    price: "$120",
    for: "Business site + booking — most orders start here",
    featured: true,
    items: [
      "Everything in Basic",
      "Multi-page site (up to 5 pages: Home, Services, Team, Gallery, Contact)",
      "Premium UI + scroll animations (Framer Motion)",
      "Google Maps embed + business hours & address block",
      "Multi-language (up to 2: EN / TR / RU / etc.)",
      "Online booking flow — pick service, barber/staff, date & time",
      "Every booking saved to Google Sheets (your live admin table)",
      "Telegram notification when a new booking arrives",
      "Branded 404 page + JSON-LD for local business SEO",
      "2 revision rounds",
    ],
  },
  {
    name: "Premium",
    price: "$400",
    for: "Full product — accounts, admin, stats, payments",
    items: [
      "Everything in Standard",
      "User accounts: sign up, login, password reset",
      "Admin dashboard with secure login & roles (owner / staff)",
      "Manage bookings, services, team & gallery inside admin — not only Sheets",
      "Statistics dashboard: bookings over time, revenue overview, top services",
      "Online payments — Stripe, Iyzico, or PayPal (what works in your country)",
      "E-commerce or product catalog + cart + checkout (beauty, retail, etc.)",
      "Full Telegram bot: book, status updates, optional reminders",
      "Email notifications (booking confirmations & admin alerts)",
      "Database backend (PostgreSQL / Turso + Prisma) — scalable, not spreadsheet-only",
      "Multi-language (3+ languages)",
      "CMS-style editing: update text, images & prices from admin panel",
      "3 revision rounds + handover walkthrough",
    ],
  },
] as const;
