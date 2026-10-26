import Link from "next/link";
import { BookOpenText, Wallet, Users, BellRing, LayoutDashboard, ShieldCheck, UserPlus, ReceiptText, ListChecks, Mail } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import { site } from "@/lib/site";

const features = [
  { i: BookOpenText, t: "Digital Udhaar Ledger", d: "Maintain customer-wise outstanding balances in one place instead of paper registers." },
  { i: Wallet, t: "Payment Tracking", d: "Record payments as they arrive and review what each customer still owes." },
  { i: Users, t: "Customer Management", d: "Keep your customer records organised so you can find anyone quickly." },
  { i: BellRing, t: "Payment Reminders", d: "Helps you remind customers about outstanding payments. Availability depends on the features enabled and the communication permissions granted." },
  { i: LayoutDashboard, t: "Simple Dashboard", d: "See the most important ledger information together on one screen." },
  { i: ShieldCheck, t: "Privacy and Security", d: "Customer information should be handled with care and kept secure. We do not claim any security certifications." },
];
const steps = [
  { i: UserPlus, t: "Add a customer", d: "Save the customer's name and details in your ledger." },
  { i: ReceiptText, t: "Record udhaar or a payment", d: "Note what was given on credit or what was paid back." },
  { i: ListChecks, t: "Track balances and follow up", d: "Check outstanding amounts and follow up with customers." },
];

export default function Home() {
  return (
    <>
      <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div className="rise">
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-brand sm:text-5xl lg:text-6xl">Your Digital Udhaar Khata, Made Simple</h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">Keep track of customer balances, record payments, and manage your shop&rsquo;s udhaar digitally with KiranaSaathi.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#features" className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white hover:bg-brand-dark">Explore Features</Link>
            <Link href="#contact" className="rounded-full border-2 border-brand px-7 py-3 font-semibold text-brand hover:bg-mint">Contact Us</Link>
          </div>
          <p className="mt-6 inline-block rounded-full bg-mint px-4 py-2 text-sm font-medium text-brand">Designed for India&rsquo;s local shopkeepers</p>
        </div>
        <div className="rise" style={{ animationDelay: ".15s" }}><PhoneMockup /></div>
      </section>

      <section id="features" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl font-bold text-brand md:text-4xl">What KiranaSaathi helps you do</h2>
          <p className="mt-3 max-w-xl text-muted">Everyday credit tracking for a kirana shop, without the paperwork.</p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ i: Icon, t, d }) => (
              <li key={t} className="rounded-3xl border border-brand/10 bg-paper p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-brand"><Icon size={24} aria-hidden /></span>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl font-bold text-brand md:text-4xl">How it works</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(({ i: Icon, t, d }, n) => (
            <li key={t} className="relative rounded-3xl bg-mint p-6">
              <span className="absolute right-5 top-4 font-display text-5xl font-bold text-brand/15" aria-hidden>{n + 1}</span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white"><Icon size={24} aria-hidden /></span>
              <h3 className="mt-4 text-lg font-bold"><span className="sr-only">Step {n + 1}: </span>{t}</h3>
              <p className="mt-2 text-sm text-brand-dark/80">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" className="bg-brand py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-display text-3xl font-bold md:text-4xl">About KiranaSaathi</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">KiranaSaathi is being developed to make everyday credit tracking simpler for India&rsquo;s local shopkeepers. Our goal is to provide an easy-to-use digital alternative to maintaining udhaar records manually.</p>
          <p className="mt-4 text-sm text-white/70">KiranaSaathi is an early-stage, independently developed project.</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl font-bold text-brand md:text-4xl">Contact</h2>
        <div className="mt-6 rounded-3xl border border-brand/15 bg-white p-6 md:p-8">
          <p className="text-sm text-muted">Business name</p>
          <p className="font-bold">KiranaSaathi</p>
          <p className="mt-4 text-sm text-muted">Email</p>
          <p className="font-bold break-all">{site.email}</p>
          {site.emailIsPlaceholder && <p className="mt-2 rounded-lg bg-amber-100 px-3 py-2 text-sm text-amber-900">Placeholder email. Set NEXT_PUBLIC_CONTACT_EMAIL before publishing.</p>}
          <a href={`mailto:${site.email}?subject=KiranaSaathi%20enquiry`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"><Mail size={18} aria-hidden />Email us</a>
        </div>
      </section>
    </>
  );
}
