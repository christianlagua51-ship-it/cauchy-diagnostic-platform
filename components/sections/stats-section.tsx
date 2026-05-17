import { stats } from "@/constants/site";
import { Container } from "@/components/ui/container";

export function StatsSection() {
  return (
    <section id="nosotros" aria-label="Resultados" className="relative z-10 -mt-1 pb-12">
      <Container>
        <div className="border-line/70 grid rounded-xl border bg-white shadow-[0_18px_42px_rgba(16,35,69,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="lg:border-line/70 flex items-center gap-6 px-8 py-9 text-left lg:border-r lg:last:border-r-0"
            >
              <item.icon className="text-navy size-12 shrink-0 stroke-[1.7]" aria-hidden="true" />
              <div>
                <p className="text-navy text-2xl font-black">{item.value}</p>
                <p className="text-navy/85 mt-2 text-sm font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
