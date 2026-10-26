import Link from "next/link";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div><Logo light /><p className="mt-3 max-w-xs text-sm text-white/75">Digital udhaar khata for India&rsquo;s local shopkeepers.</p></div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li><Link className="underline-offset-4 hover:underline" href="/privacy">Privacy Policy</Link></li>
          <li><Link className="underline-offset-4 hover:underline" href="/terms">Terms of Service</Link></li>
          <li><Link className="underline-offset-4 hover:underline" href="/#contact">Contact</Link></li>
        </ul>
      </div>
      <p className="border-t border-white/15 px-5 py-4 text-center text-xs text-white/70">&copy; {new Date().getFullYear()} KiranaSaathi. All rights reserved.</p>
    </footer>
  );
}
