import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy Policy — KiranaSaathi" };
export default function Privacy() {
  return (
    <Legal title="Privacy Policy">
      <p>Last updated: {site.lastUpdated}</p>
      <h2>Who we are</h2>
      <p>KiranaSaathi is an early-stage, independently developed digital udhaar khata app. The data controller is {site.legalOwner}. Contact: {site.email}.</p>
      <h2>This website</h2>
      <p>This website does not have accounts or a contact form. If you email us, we receive your email address and message, and use them only to reply. [Add analytics or cookie details here if you add them later.]</p>
      <h2>The app</h2>
      <p>The app lets a shopkeeper record customer names, balances and payments. [Describe exactly what is stored, where (on the device or on a server), who can access it, and how long it is kept. Describe any permissions the app requests, such as contacts, SMS or notifications.]</p>
      <h2>How we protect information</h2>
      <p>We aim to handle customer information securely and limit access to it. No system is perfectly secure, and we do not hold any security certification.</p>
      <h2>Sharing</h2>
      <p>[State whether you share data with anyone, such as hosting or messaging providers. If you do not, say so.]</p>
      <h2>Your choices</h2>
      <p>You may ask to access, correct or delete your information by emailing {site.email}. [Describe how requests are handled.]</p>
      <h2>Governing law</h2>
      <p>This policy is governed by the laws of {site.jurisdiction}. [Confirm which laws apply, such as India&rsquo;s Digital Personal Data Protection Act, 2023.]</p>
    </Legal>
  );
}
