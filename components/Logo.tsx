import { BookOpenText } from "lucide-react";
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight">
      <span className={`grid h-9 w-9 place-items-center rounded-xl ${light ? "bg-mint text-brand" : "bg-brand text-white"}`}><BookOpenText size={20} aria-hidden /></span>
      <span className={light ? "text-white" : "text-brand"}>KiranaSaathi</span>
    </span>
  );
}
