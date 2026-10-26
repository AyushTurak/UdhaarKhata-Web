import Link from "next/link";
export default function NotFound() {
  return <div className="mx-auto max-w-xl px-5 py-24 text-center"><h1 className="font-display text-4xl font-bold text-brand">Page not found</h1><p className="mt-3 text-muted">This page does not exist. Go back to the home page.</p><Link href="/" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white">Back to home</Link></div>;
}
