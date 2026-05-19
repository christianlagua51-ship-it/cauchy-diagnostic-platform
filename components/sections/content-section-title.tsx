import { cn } from "@/lib/cn";

type ContentSectionTitleProps = {
  label: string;
  title: string;
  description?: string[];
  align?: "left" | "center";
};

export function ContentSectionTitle({
  label,
  title,
  description,
  align = "left",
}: ContentSectionTitleProps) {
  return (
    <div className={cn("max-w-[700px]", align === "center" && "mx-auto text-center")}>
      <p className="text-blue-700 text-sm font-black tracking-[0.16em] uppercase">{label}</p>
      <h2 className="text-navy mt-4 text-3xl leading-tight font-black tracking-tight sm:text-4xl">
        {title}
      </h2>
      <span
        className={cn("mt-5 block h-0.5 w-10 bg-blue-700", align === "center" && "mx-auto")}
      />
      {description ? (
        <div className="text-navy/84 mt-6 space-y-3 text-base leading-7">
          {description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
