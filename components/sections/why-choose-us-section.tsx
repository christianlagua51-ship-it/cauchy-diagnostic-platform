import { features } from "@/constants/site";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUsSection() {
  return (
    <section id="metodo" className="bg-white/55 py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          align="left"
          eyebrow="Metodo Cauchy"
          title="Una experiencia academica precisa, cercana y premium"
          description="El aprendizaje no se improvisa. Diseñamos un camino claro, medimos progreso y convertimos cada error en informacion util para avanzar."
        />
        <div className="grid gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="flex gap-5 p-5">
                <div className="bg-navy grid size-12 shrink-0 place-items-center rounded-2xl text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-navy text-lg font-bold">{feature.title}</h3>
                  <p className="text-steel mt-2 text-sm leading-6">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
