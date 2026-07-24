import { Play, Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  video?: boolean;
  className?: string;
};

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  video = false,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("flex flex-col", className)}>
      {video && (
        <ImagePlaceholder
          label={`Vídeo de depoimento — ${company ?? author}`}
          icon={Play}
          ratio="16/9"
          className="mb-6"
        />
      )}
      <Quote className="h-8 w-8 text-mp-gold" aria-hidden />
      <p className="mt-4 flex-1 text-lg italic leading-relaxed text-mp-body">
        “{quote}”
      </p>
      <div className="mt-6 border-t border-mp-line pt-4">
        <p className="font-heading font-bold text-mp-ink">{author}</p>
        {(role || company) && (
          <p className="text-sm text-mp-mid">
            {[role, company].filter(Boolean).join(" — ")}
          </p>
        )}
      </div>
    </Card>
  );
}
