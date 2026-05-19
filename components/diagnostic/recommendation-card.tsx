import { ArrowUpRight } from "lucide-react";

type RecommendationCardProps = {
  title: string;
  description: string;
  score: number;
};

export function RecommendationCard({ title, description, score }: RecommendationCardProps) {
  return (
    <article className="border-line/80 rounded-lg border bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-navy text-base font-black">{title}</h3>
          <p className="text-steel mt-1 text-sm">{score}% alcanzado</p>
        </div>
        <span className="bg-mist text-navy grid size-9 shrink-0 place-items-center rounded-full">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
      <p className="text-navy/82 mt-4 text-sm leading-6">{description}</p>
    </article>
  );
}
