"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BLOG_CATEGORIAS, BLOG_POSTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Categoria = (typeof BLOG_CATEGORIAS)[number];

export function BlogList() {
  const [categoria, setCategoria] = useState<Categoria>("Todos");

  const posts =
    categoria === "Todos"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.categoria === categoria);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar artigos por categoria"
      >
        {BLOG_CATEGORIAS.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategoria(cat)}
            aria-pressed={categoria === cat}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors duration-200",
              categoria === cat
                ? "border-mp-gold bg-mp-gold text-mp-ink-deep"
                : "border-mp-line bg-white text-mp-mid hover:border-mp-gold/60 hover:text-mp-ink"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.titulo} hover className="flex h-full flex-col p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge color="gold" className="normal-case">
                {post.categoria}
              </Badge>
              <Badge color="neutral">Em breve</Badge>
            </div>
            <h2 className="mt-4 font-heading text-xl font-bold leading-snug text-mp-ink">
              {post.titulo}
            </h2>
            <p className="mt-3 flex-1 text-base leading-relaxed text-mp-mid">
              {post.resumo}
            </p>
            <p className="mt-5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-mp-mid">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.tempoLeitura} de leitura
            </p>
          </Card>
        ))}
        {posts.length === 0 && (
          <p className="text-base text-mp-mid md:col-span-2">
            Nenhum artigo nessa categoria ainda.
          </p>
        )}
      </div>
    </div>
  );
}
