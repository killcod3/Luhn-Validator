import LuhnCalculator from "@/components/LuhnCalculator";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-3xl mx-auto">
        <LuhnCalculator />
      </div>
    </main>
  );
}