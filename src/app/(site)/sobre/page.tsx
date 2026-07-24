import Image from "next/image";
import { CheckCircle2, User } from "lucide-react";
import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EQUIPE_ROLES, IMAGES, SOCIOS, VALORES } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sobre a M|P Assessoria | Marketing e Vendas em Goiânia",
  description:
    "Conheça a M|P Assessoria. Fundada por Marcos e Pedro Goulart, somos uma assessoria de marketing e vendas em Goiânia focada em resultado comprovado.",
  path: "/sobre",
  absoluteTitle: true,
});

const DIFERENCIAIS = [
  "Atender menos clientes, com mais profundidade.",
  "Cuidar do marketing e das vendas de ponta a ponta.",
  "Atendimento direto com os donos — sem intermediários.",
  "Foco 100% em geração de receita comprovada.",
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        overline="Sobre a M|P"
        title="Nascemos de uma inquietação: por que empresas boas não conseguem crescer?"
        center
      />

      {/* Nossa história */}
      <Section bg="white">
        <Reveal>
          <SectionHeading overline="Nossa história" title="Do escritório de advocacia à assessoria de marketing e vendas" />
        </Reveal>

        {/* Bloco 1 */}
        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-4 text-base leading-relaxed text-mp-body sm:text-lg">
              <p>
                Em 2020, Marcos Goulart era advogado. Trabalhava em escritório,
                seguia o caminho tradicional. Mas sempre quis empreender.
              </p>
              <p>
                Quando a pandemia chegou, Marcos abriu uma loja online — e
                precisou aprender tudo sobre marketing digital na prática:
                tráfego pago, criação de site, público-alvo, copywriting, funil
                de vendas, CRM. Aprendeu vendendo. Aprendeu errando. Aprendeu
                fazendo.
              </p>
              <p>
                Um ano depois, começou a prestar serviço de tráfego pago para
                pequenas e médias empresas de Goiânia. A carência era enorme:
                empresários que precisavam vender mais, mas não sabiam nada
                sobre marketing digital.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ImagePlaceholder
              label="Foto antiga / evolução do Marcos"
              icon={User}
              ratio="4/3"
            />
          </Reveal>
        </div>

        {/* Bloco 2 */}
        <Reveal className="mt-14 lg:mt-20">
          <div className="mx-auto max-w-3xl rounded-r-lg border-l-4 border-mp-gold bg-mp-soft p-8 lg:p-10">
            <div className="space-y-4 text-base leading-relaxed text-mp-body sm:text-lg">
              <p>
                Com dois sócios, Marcos montou uma agência de publicidade.
                Chegaram a ter 13 colaboradores, 40 clientes ativos e
                faturamento acima de R$100 mil por mês.{" "}
                <strong className="text-mp-ink">
                  Mas algo não funcionava.
                </strong>
              </p>
              <p>
                Muitos intermediários. Entregas genéricas. Colaboradores
                desqualificados. E a grande lacuna: nenhuma agência cuidava do
                comercial dos clientes. Geravam leads — mas ninguém ensinava a
                converter.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bloco 3 */}
        <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <p className="text-xl font-semibold leading-relaxed text-mp-ink sm:text-2xl">
              Foi aí que Marcos tomou a decisão que mudou tudo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mp-body sm:text-lg">
              Rompeu a sociedade, se especializou em processo comercial e
              fundou a M|P Assessoria ao lado do seu irmão gêmeo Pedro Goulart
              — com uma proposta radicalmente diferente:
            </p>
            <ul className="mt-6 space-y-3">
              {DIFERENCIAIS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-mp-gold"
                    aria-hidden
                  />
                  <span className="text-base leading-relaxed text-mp-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-mp-body sm:text-lg">
              Desde julho de 2021, a M|P Assessoria já ajudou{" "}
              <strong className="text-mp-ink">mais de 170 empresas</strong> de
              Goiânia e Goiás a crescerem, venderem mais e terem
              previsibilidade de receita.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="lg:order-1">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.sociosEscura}
                alt="Marcos e Pedro Goulart juntos no escritório da M|P"
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Sócios */}
      <Section bg="soft">
        <Reveal>
          <SectionHeading
            overline="Quem está à frente"
            title="Marcos e Pedro Goulart"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16">
          {SOCIOS.map((socio, i) => (
            <Reveal key={socio.nome} delay={i * 0.1}>
              <Card className="h-full">
                <ImagePlaceholder
                  label={`Foto profissional — ${socio.nome.split(" ")[0]}`}
                  icon={User}
                  ratio="4/3"
                  className="mb-6"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-heading text-2xl font-bold text-mp-ink">
                    {socio.nome}
                  </h3>
                  <Badge color="gold">{socio.cargo}</Badge>
                </div>
                <p className="mt-4 text-base leading-relaxed text-mp-body">
                  {socio.bio}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Equipe */}
      <Section bg="white">
        <Reveal>
          <SectionHeading
            title="Uma assessoria com estrutura de verdade."
            subtitle="Quando você contrata a M|P, sua empresa passa a contar com uma equipe completa e especializada:"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {EQUIPE_ROLES.map((role, i) => {
            const Icon = role.icon;
            return (
              <Reveal key={role.titulo} delay={(i % 4) * 0.06}>
                <Card hover className="h-full p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-mp-gold-soft">
                    <Icon className="h-6 w-6 text-mp-gold-deep" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-mp-ink">
                    {role.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mp-mid">
                    {role.desc}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Valores */}
      <Section bg="dark">
        <Reveal>
          <SectionHeading
            title="Três pilares que definem quem somos."
            align="center"
            dark
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {VALORES.map((valor, i) => {
            const Icon = valor.icone;
            return (
              <Reveal key={valor.titulo} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 p-8 transition-colors duration-300 hover:border-mp-gold/60">
                  <Icon className="h-8 w-8 text-mp-gold" aria-hidden />
                  <h3 className="mt-5 font-heading text-xl font-bold text-white">
                    {valor.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-mp-muted-dark">
                    {valor.descricao}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
