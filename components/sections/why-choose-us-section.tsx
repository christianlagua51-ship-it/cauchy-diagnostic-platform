import { features } from "@/constants/site";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";

export function WhyChooseUsSection() {
  return (
    <section id="metodo" className="pt-14 pb-10">
      <Container className="grid gap-8 lg:grid-cols-[1.13fr_1fr] lg:items-start">
        <div>
          <h2 className="text-navy text-2xl font-black tracking-tight uppercase">
            Por que elegir Cauchy?
          </h2>
          <span className="mt-3 block h-0.5 w-8 bg-blue-700" />
          <div className="mt-9 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="flex items-start gap-5">
                  <div className="bg-mist text-navy grid size-16 shrink-0 place-items-center rounded-full">
                    <Icon className="size-8 stroke-[1.7]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-navy text-lg font-black">{feature.title}</h3>
                    <p className="text-navy/85 mt-2 text-sm leading-6">{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <CTASection />
      </Container>
    </section>
  );
}
