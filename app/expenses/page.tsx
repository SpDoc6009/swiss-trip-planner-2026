import { ExpenseTracker } from "@/components/ExpenseTracker";

export default function ExpensesPage() {
  return (
    <section className="min-h-screen bg-slate-100 py-8 dark:bg-[#071923]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ExpenseTracker />
      </div>
    </section>
  );
}
