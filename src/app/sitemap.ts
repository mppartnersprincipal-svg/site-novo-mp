import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const ROUTES = [
  "",
  "/sobre",
  "/metodologia",
  "/servicos",
  "/inteligencia-artificial",
  "/clientes",
  "/processo-comercial",
  "/blog",
  "/diagnostico",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/diagnostico" ? 0.9 : 0.7,
  }));
}
