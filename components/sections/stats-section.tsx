import { stats } from "@/constants/site";
import { Container } from "@/components/ui/container";

export function StatsSection() {
  return (
    <section aria-label="Resultados" className="py-8">
      <Container>
        <div className="grid gap-4 rounded-[2rem] border border-white bg-white/86 p-4 shadow-[0_22px_60px_rgba(24,38,60,0.08)] sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl bg-[#f8fafc] px-6 py-7 text-center">
              <p className="text-navy text-4xl font-bold">{item.value}</p>
              <p className="text-steel mt-2 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
