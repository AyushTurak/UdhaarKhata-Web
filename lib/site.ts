export const site = {
  name: "KiranaSaathi",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // PLACEHOLDER: replace via NEXT_PUBLIC_CONTACT_EMAIL before publishing
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com",
  emailIsPlaceholder: !process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "",
  // PLACEHOLDERS for legal pages: replace with real details
  legalOwner: "[Your full name or registered business name]",
  jurisdiction: "[Your state/country, e.g. India]",
  lastUpdated: "[Date]",
};
