export default function Legal({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 leading-relaxed [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand [&_li]:mt-1 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
      <h1 className="font-display text-4xl font-bold text-brand">{title}</h1>
      <p className="mt-3 rounded-lg bg-amber-100 px-3 py-2 text-sm text-amber-900">Draft for an early-stage project. Items in [square brackets] are placeholders to replace, and this text has not been legally reviewed. Have it checked by a qualified professional before relying on it.</p>
      {children}
    </article>
  );
}
