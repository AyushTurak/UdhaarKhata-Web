import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const title = "KiranaSaathi — Digital Udhaar Khata for Kirana Shops";
const description = "KiranaSaathi is an Android app for kirana shop owners in India to keep a digital udhaar ledger, record customer payments and track outstanding balances.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title, description,
  openGraph: { title, description, url: "/", siteName: site.name, locale: "en_IN", type: "website" },
  twitter: { card: "summary", title, description },
};
export const viewport: Viewport = { themeColor: "#14532D", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
