import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Terms of Service — KiranaSaathi" };
export default function Terms() {
  return (
    <Legal title="Terms of Service">
      <p>Last updated: {site.lastUpdated}</p>
      <h2>About these terms</h2>
      <p>These terms apply to your use of this website and the KiranaSaathi app, provided by {site.legalOwner}. KiranaSaathi is an early-stage, independently developed project and is not an incorporated or registered company unless stated otherwise here. [Update if that changes.]</p>
      <h2>What the app is</h2>
      <p>KiranaSaathi is a record-keeping tool for shopkeepers. It is not a bank, lender or payment provider, and it does not provide legal, tax or financial advice.</p>
      <h2>Your responsibilities</h2>
      <ul><li>Enter accurate information and keep your own backups of important records.</li><li>Get any required consent before contacting your customers, including for reminders.</li><li>Use the service lawfully.</li></ul>
      <h2>Availability and changes</h2>
      <p>Features may change, and the service is provided &ldquo;as is&rdquo; without guarantees. [Have a professional review the liability wording.]</p>
      <h2>Contact and governing law</h2>
      <p>Questions: {site.email}. These terms are governed by the laws of {site.jurisdiction}.</p>
    </Legal>
  );
}
