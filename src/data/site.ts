export const SITE = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://portfolio-hub-rawid.vercel.app",
  fiverrUrl:
    process.env.NEXT_PUBLIC_FIVERR_URL ?? "https://www.fiverr.com/",
  githubUrl:
    process.env.NEXT_PUBLIC_GITHUB_URL ??
    "https://github.com/RawidAslanov",
  gymUrl:
    process.env.NEXT_PUBLIC_GYM_URL ?? "https://iron-body-gym.vercel.app",
  /** View-only Google Sheets link — clients see demo bookings appear */
  barberDemoSheetsUrl:
    process.env.NEXT_PUBLIC_BARBER_DEMO_SHEETS_URL ?? "",
  developerName: "Rawid Aslanov",
  email: "aslanovrawid2006@gmail.com",
  tagline: "Next.js developer · business websites & e-commerce",
} as const;
