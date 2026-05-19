import { methodologyContent } from "@/constants/landing-content";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ContentSectionTitle } from "@/components/sections/content-section-title";

export function MethodologySection() {
  return (
    <section id="metodologia" className="bg-mist/60 py-14 sm:py-16">
      <Container>
        <ContentSectionTitle
          label={methodologyContent.title}
          title={methodologyContent.headline}
          description={methodologyContent.intro}
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {methodologyContent.steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="flex min-h-[310px] flex-col rounded-lg p-6">
                <span className="bg-mist text-navy grid size-14 place-items-center rounded-full">
                  <Icon className="size-7 stroke-[1.7]" aria-hidden="true" />
                </span>
                <h3 className="text-navy mt-6 text-lg font-black">{step.title}</h3>
                <div className="text-navy/82 mt-4 space-y-3 text-sm leading-6">
                  {step.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {step.items.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-800"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-line/80 bg-white p-6 shadow-[0_14px_34px_rgba(16,35,69,0.06)]">
          <h3 className="text-navy text-lg font-black">{methodologyContent.principlesTitle}</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {methodologyContent.principles.map((principle) => (
              <li key={principle} className="text-navy/84 rounded-lg bg-mist/70 px-4 py-3 text-sm font-bold">
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
