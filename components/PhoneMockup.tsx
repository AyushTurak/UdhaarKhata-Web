import { Plus, Search } from "lucide-react";
const rows = [
  { n: "Customer A", note: "Last entry: 2 days ago", amt: "₹1,250", due: true },
  { n: "Customer B", note: "Payment recorded today", amt: "₹0", due: false },
  { n: "Customer C", note: "Last entry: 5 days ago", amt: "₹480", due: true },
  { n: "Customer D", note: "Last entry: 1 week ago", amt: "₹2,100", due: true },
];
export default function PhoneMockup() {
  return (
    <figure className="mx-auto w-full max-w-[300px]" aria-label="Illustration of the KiranaSaathi ledger screen with sample data">
      <div className="rounded-[2.4rem] border-[10px] border-ink bg-paper shadow-2xl shadow-brand/25">
        <div className="rounded-[1.7rem] bg-paper p-4">
          <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-ink/20" />
          <div className="rounded-2xl bg-brand p-4 text-white">
            <p className="text-xs text-white/75">Total outstanding (sample)</p>
            <p className="font-display text-3xl font-bold">₹3,830</p>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-brand/15 bg-white px-3 py-2 text-sm text-muted"><Search size={16} aria-hidden />Search customer</div>
          <ul className="mt-3 space-y-2">
            {rows.map((r) => (
              <li key={r.n} className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-sm">
                <div><p className="text-sm font-semibold">{r.n}</p><p className="text-[11px] text-muted">{r.note}</p></div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${r.due ? "bg-amber-100 text-amber-900" : "bg-mint text-brand"}`}>{r.amt}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-end"><span className="inline-flex items-center gap-1 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white"><Plus size={14} aria-hidden />Add entry</span></div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">Illustrative design with sample data</figcaption>
    </figure>
  );
}
