"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <div className="mx-auto max-w-xl px-5 py-24 text-center"><h1 className="font-display text-4xl font-bold text-brand">Something went wrong</h1><p className="mt-3 text-muted">Try loading the page again.</p><button onClick={reset} className="mt-6 rounded-full bg-brand px-6 py-3 font-semibold text-white">Try again</button></div>;
}
