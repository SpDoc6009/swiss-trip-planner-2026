import { CostComparison } from "@/components/CostComparison";

export default function CostsPage() {
  return (
    <section className="min-h-screen bg-slate-100 py-8 dark:bg-[#071923]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CostComparison />
      </div>
    </section>
  );
}
