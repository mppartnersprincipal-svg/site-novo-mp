/**
 * Converte os assets originais de brand-assets/ para public/images/
 * com slugs limpos e tamanhos adequados para a web.
 *
 * Uso: npm run images
 * Novos logos de clientes: adicionar uma entrada em `jobs` e rodar de novo.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.join(process.cwd(), "brand-assets");
const OUT = path.join(process.cwd(), "public", "images");

const jobs = [
  {
    in: "fotos-socios/ChatGPT Image 15 de jun. de 2026, 18_15_29.png",
    out: "socios/socios-escritorio-01.webp",
    webp: { quality: 82 },
  },
  {
    in: "fotos-socios/ChatGPT Image 15 de jun. de 2026, 18_19_37.png",
    out: "socios/socios-escritorio-02.webp",
    webp: { quality: 82 },
  },
  {
    // original tem 22.951px de largura — precisa caber no limite de 8192px do otimizador da Vercel
    in: "logos-clientes/Logo Master Carne.png",
    out: "logos/clientes/master-carne.webp",
    resize: { width: 800 },
    webp: { quality: 90 },
  },
  {
    in: "logos-clientes/Logo Telhas Coral.png",
    out: "logos/clientes/telhas-coral.png",
    png: { compressionLevel: 9 },
  },
  {
    in: "logos-clientes/Logo Vector Orange (1).png",
    out: "logos/clientes/pacheco-solar.png",
    png: { compressionLevel: 9 },
  },
  {
    in: "logos-clientes/Logo-Sorriso-Campinas.webp",
    out: "logos/clientes/sorriso-campinas.webp",
    webp: { quality: 90 },
  },
];

for (const job of jobs) {
  const src = path.join(SRC, job.in);
  const dest = path.join(OUT, job.out);
  await mkdir(path.dirname(dest), { recursive: true });

  let img = sharp(src);
  if (job.resize) img = img.resize(job.resize);
  if (job.webp) img = img.webp(job.webp);
  if (job.png) img = img.png(job.png);

  const info = await img.toFile(dest);
  console.log(
    `${job.out} — ${info.width}x${info.height} — ${(info.size / 1024).toFixed(0)} KB`
  );
}
