import { stats } from "@/constants/site";
import { Container } from "@/components/ui/container";

export function StatsSection() {
  return (
    <section aria-label="Resultados" className="relative z-10 -mt-1 pb-12">
      <Container>
        <div className="border-line/70 grid rounded-xl border bg-white shadow-[0_18px_42px_rgba(16,35,69,0.08)] md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-line/70 flex items-start gap-5 border-b px-7 py-7 text-left last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0 lg:px-8 lg:py-9"
            >
              <item.icon className="text-navy size-12 shrink-0 stroke-[1.7]" aria-hidden="true" />
              <div>
                <p className="text-navy text-2xl leading-tight font-black">{item.value}</p>
                <p className="text-navy/90 mt-1 text-lg leading-tight font-black">{item.label}</p>
                <p className="text-navy/72 mt-3 text-sm leading-6">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
