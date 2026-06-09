import { DocumentVault } from "@/components/DocumentVault";
import { FlightTransferSummary } from "@/components/FlightTransferSummary";

export default function DocumentsPage() {
  return (
    <section className="min-h-screen bg-slate-100 py-8 dark:bg-[#071923]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-5">
          <FlightTransferSummary />
          <DocumentVault />
        </div>
      </div>
    </section>
  );
}
