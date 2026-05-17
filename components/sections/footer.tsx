import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-line border-t py-8">
      <Container className="text-steel flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-navy font-semibold">{siteConfig.fullName}</p>
        <p>Aprendizaje moderno para resultados medibles.</p>
      </Container>
    </footer>
  );
}
