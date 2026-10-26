"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const links = [["Home", "/"], ["Features", "/#features"], ["How It Works", "/#how-it-works"], ["Contact", "/#contact"]];
const cta = site.appUrl || "/#contact";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-brand/10 bg-paper/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" aria-label="KiranaSaathi home"><Logo /></Link>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map(([l, h]) => <li key={l}><Link href={h} className="text-sm font-medium text-muted hover:text-brand">{l}</Link></li>)}
          <li><a href={cta} className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">Get Started</a></li>
        </ul>
        <button className="grid h-11 w-11 place-items-center rounded-xl border border-brand/20 text-brand md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-brand/10 px-5 pb-4 pt-2 md:hidden">
          {links.map(([l, h]) => <li key={l}><Link href={h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-mint">{l}</Link></li>)}
          <li><a href={cta} onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-brand px-5 py-3 text-center font-semibold text-white">Get Started</a></li>
        </ul>
      )}
    </header>
  );
}
