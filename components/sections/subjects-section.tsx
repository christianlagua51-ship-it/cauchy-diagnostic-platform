import { subjects } from "@/constants/site";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function SubjectsSection() {
  return (
    <section id="programas" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Programas"
          title="Refuerzo academico con estructura"
          description="Cada area se trabaja con fundamentos, practica guiada y seguimiento para que el estudiante entienda que hacer y por que."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <Card key={subject.title} className="min-h-56">
                <div className="bg-mist text-navy grid size-12 place-items-center rounded-2xl">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-navy mt-6 text-lg font-bold">{subject.title}</h3>
                <p className="text-steel mt-3 text-sm leading-6">{subject.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
