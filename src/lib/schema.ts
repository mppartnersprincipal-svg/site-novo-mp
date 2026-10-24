import { z } from "zod";

export const diagnosticoSchema = z.object({
  nome: z
    .string()
    .min(2, "Informe seu nome completo")
    .max(100, "Nome muito longo"),
  empresa: z
    .string()
    .min(2, "Informe o nome da empresa")
    .max(100, "Nome muito longo"),
  segmento: z
    .string()
    .min(2, "Informe o segmento de atuação")
    .max(100, "Segmento muito longo"),
  faturamento: z.enum(["ate-50k", "50k-100k", "100k-300k", "acima-300k"], {
    message: "Selecione a faixa de faturamento",
  }),
  whatsapp: z
    .string()
    .min(1, "Informe seu WhatsApp")
    .max(30, "WhatsApp inválido — use DDD + número")
    .transform((v) => v.replace(/\D/g, ""))
    .refine(
      (v) => /^(?:55)?[1-9]\d{9,10}$/.test(v),
      "WhatsApp inválido — use DDD + número"
    ),
});

export type DiagnosticoInput = z.input<typeof diagnosticoSchema>;
export type DiagnosticoData = z.output<typeof diagnosticoSchema>;
