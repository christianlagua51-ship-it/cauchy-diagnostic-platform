import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-accent mb-3 text-xs font-bold tracking-[0.18em] uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-navy text-3xl leading-tight font-bold sm:text-4xl">{title}</h2>
      {description ? <p className="text-steel mt-4 text-base leading-7">{description}</p> : null}
    </div>
  );
}
