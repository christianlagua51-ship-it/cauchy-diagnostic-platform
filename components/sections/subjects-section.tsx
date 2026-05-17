import { subjects } from "@/constants/site";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function SubjectsSection() {
  return (
    <section id="programas" className="pt-2 pb-14">
      <Container>
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-navy text-2xl font-black tracking-tight uppercase">
              Nuestras areas
            </h2>
            <span className="mt-3 block h-0.5 w-8 bg-blue-700" />
          </div>
          <a
            href="#programas"
            className="hidden items-center gap-3 text-sm font-black text-blue-700 sm:flex"
          >
            Ver todas las areas
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <Card key={subject.title} className="flex min-h-[292px] flex-col p-6">
                <div className="text-navy grid size-14 place-items-center">
                  <Icon className="size-12 stroke-[1.45]" aria-hidden="true" />
                </div>
                <h3 className="text-navy mt-10 text-xl font-black">{subject.title}</h3>
                <p className="text-navy/85 mt-4 text-base leading-7">{subject.description}</p>
                <a
                  href="#contacto"
                  className="mt-auto inline-flex items-center gap-4 text-sm font-black text-blue-700"
                >
                  Ver mas
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
