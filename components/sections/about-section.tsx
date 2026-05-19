import { CheckCircle2 } from "lucide-react";

import { aboutContent } from "@/constants/landing-content";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ContentSectionTitle } from "@/components/sections/content-section-title";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-14 sm:py-16">
      <Container className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <ContentSectionTitle
          label={aboutContent.title}
          title={aboutContent.headline}
          description={aboutContent.intro}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {aboutContent.sections.map((section) => (
            <Card key={section.title} className="rounded-lg p-6">
              <h3 className="text-navy text-xl font-black">{section.title}</h3>
              <div className="text-navy/82 mt-4 space-y-3 text-sm leading-6">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items.length > 0 ? (
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-semibold text-navy/86">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-700" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
