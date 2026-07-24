import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Cake,
  Car,
  Code,
  Database,
  Eye,
  Factory,
  Film,
  Gamepad2,
  Globe,
  GraduationCap,
  Hammer,
  Heart,
  Instagram,
  LayoutTemplate,
  Megaphone,
  MessageSquare,
  Monitor,
  Package,
  Palette,
  PenTool,
  PieChart,
  Rocket,
  Route,
  Scale,
  Search,
  Shirt,
  ShieldCheck,
  Stethoscope,
  Store,
  Sun,
  Target,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  Video,
  Zap,
} from "lucide-react";

/* =========================================================================
   Site
   ========================================================================= */

export const SITE = {
  name: "M|P Assessoria",
  url: "https://mppartners.com.br",
  domainLabel: "www.mppartners.com.br",
  tagline: "Assessoria de Marketing e Vendas",
  city: "Goiânia — GO",
  foundedYear: 2021,
  instagramHandle: "@mp_assessoriadigital",
  instagramUrl: "https://instagram.com/mp_assessoriadigital",
} as const;

/** Número a definir — trocar APENAS esta linha quando o cliente informar. */
export const WHATSAPP_NUMBER = "5562900000000";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da M|P e gostaria de saber mais sobre a assessoria de marketing e vendas.";

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* =========================================================================
   Navegação
   ========================================================================= */

export const NAV_LINKS = [
  { label: "Sobre", href: "/sobre" },
  { label: "Metodologia", href: "/metodologia" },
  { label: "Serviços", href: "/servicos" },
  { label: "IA", href: "/inteligencia-artificial" },
  { label: "Clientes", href: "/clientes" },
  { label: "Processo Comercial", href: "/processo-comercial" },
  { label: "Blog", href: "/blog" },
] as const;

export const CTA_LABEL = "DIAGNÓSTICO GRATUITO";
export const CTA_HREF = "/diagnostico";

/* =========================================================================
   Home
   ========================================================================= */

export const HERO_SELOS = [
  "+170 empresas atendidas",
  "+4 anos de mercado",
  "+15 segmentos com resultado",
] as const;

export type Counter = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const COUNTERS: Counter[] = [
  { value: 170, suffix: "+", label: "Empresas atendidas" },
  { value: 4, suffix: "+", label: "Anos de experiência" },
  { value: 15, suffix: "+", label: "Segmentos com resultado" },
  { value: 1, prefix: "R$", suffix: "M+", label: "Gerado para clientes" },
];

export type PainPoint = { quote: string; resposta: string };

export const PAIN_POINTS: PainPoint[] = [
  {
    quote: "Já contratei agência e não tive resultado.",
    resposta:
      "A maioria das agências entrega lead — mas não entrega venda. Sem processo comercial, o lead esfria e o investimento é perdido.",
  },
  {
    quote:
      "Tenho uma pessoa que cuida das redes sociais, mas não vejo retorno.",
    resposta:
      "Postar não é marketing. Marketing é gerar demanda qualificada, com estratégia, segmentação e mensuração de resultado.",
  },
  {
    quote: "Não sei de onde vêm as minhas vendas.",
    resposta:
      "Se você não tem CRM e não controla o processo comercial, cada venda é surpresa — e cada perda é invisível.",
  },
  {
    quote: "Impulsionei posts e não veio nada.",
    resposta:
      "Impulsionar post sem estratégia é gastar dinheiro sem direção. Tráfego pago profissional exige estudo, segmentação e acompanhamento constante.",
  },
];

export type Segmento = { icon: LucideIcon; label: string };

export const SEGMENTOS: Segmento[] = [
  { icon: Hammer, label: "Materiais de construção" },
  { icon: Scale, label: "Escritórios de advocacia" },
  { icon: Car, label: "Concessionárias" },
  { icon: Package, label: "Atacado e distribuição" },
  { icon: Store, label: "Varejo físico" },
  { icon: Heart, label: "Saúde e odontologia" },
  { icon: Stethoscope, label: "Medicina e estética" },
  { icon: Cake, label: "Confeitaria e alimentação" },
  { icon: Sun, label: "Energia solar" },
  { icon: Gamepad2, label: "Games e tecnologia" },
  { icon: Shirt, label: "Moda e vestuário" },
  { icon: Trophy, label: "Automotivo premium" },
  { icon: Factory, label: "Indústria" },
  { icon: Briefcase, label: "Serviços em geral" },
];

/* =========================================================================
   Cases e clientes
   ========================================================================= */

export type Case = {
  cliente: string;
  segmento: string;
  resultadoPrincipal: string;
  destaque: string;
  descricao: string;
  provas: string[];
  temVideo: boolean;
  logo?: string;
  /** presença no grid da home: ordem (1-4) + resultado resumido */
  home?: { ordem: number; resultado: string };
};

export const CASES: Case[] = [
  {
    cliente: "Telhas Coral",
    segmento: "Venda de telhas — referência em Goiás",
    resultadoPrincipal: "+R$250.000 a R$350.000/mês",
    destaque: "R$270.000 em um único mês via Google Ads",
    descricao:
      "Referência em venda de telhas no estado de Goiás. Os anúncios de Google Ads gerenciados pela M|P são responsáveis por faturamento adicional entre R$250 mil e R$350 mil por mês — comprovado via prints de WhatsApp e dados de CRM.",
    provas: ["Print WhatsApp R$270K"],
    temVideo: false,
    logo: "/images/logos/clientes/telhas-coral.png",
    home: { ordem: 1, resultado: "+R$270 mil em um único mês via Google Ads" },
  },
  {
    cliente: "Master Carnes",
    segmento: "Atacado e distribuição de carnes",
    resultadoPrincipal: "+R$180.000 a R$240.000/mês",
    destaque: "Depoimento em vídeo confirmando R$300K de retorno",
    descricao:
      "Um dos maiores atacadistas de Goiânia. A M|P estruturou tráfego pago, CRM e treinamento comercial. Faturamento adicional consistente com reconhecimento do próprio dono em vídeo.",
    provas: ["Depoimento em vídeo"],
    temVideo: true,
    logo: "/images/logos/clientes/master-carne.webp",
    home: { ordem: 2, resultado: "+R$300 mil de retorno comprovado" },
  },
  {
    cliente: "Pacheco Solar",
    segmento: "Estruturas metálicas para energia solar",
    resultadoPrincipal: "+20% de faturamento mensal",
    destaque: "R$579K em 4 meses | R$70K com R$2K de investimento",
    descricao:
      "Aumento de 20% no faturamento mensal e R$579 mil em vendas nos primeiros 4 meses. ROI excepcional: R$70 mil faturados com apenas R$2 mil de investimento.",
    provas: ["Depoimento em vídeo", "Print WhatsApp R$70K"],
    temVideo: true,
    logo: "/images/logos/clientes/pacheco-solar.png",
    home: { ordem: 4, resultado: "+R$579 mil em vendas em 4 meses" },
  },
  {
    cliente: "Grupo Sorriso",
    segmento: "5 clínicas odontológicas em Goiás",
    resultadoPrincipal: "De 1 para 5 clínicas",
    destaque: "R$40/dia → R$100/dia | 2 novas unidades em 2026",
    descricao:
      "9 meses de parceria com estruturação digital completa: Google Ads, Meta Ads, conteúdo. Demanda previsível de pacientes e expansão acelerada — incluindo a 5ª clínica inaugurada em julho de 2026.",
    provas: ["Fotos das clínicas"],
    temVideo: false,
    logo: "/images/logos/clientes/sorriso-campinas.webp",
    home: { ordem: 3, resultado: "De 1 para 5 clínicas em 9 meses" },
  },
  {
    cliente: "Rodrigo Tintas",
    segmento: "Tintas e ferragens — 10+ anos",
    resultadoPrincipal: "+R$45.000 no 1º mês",
    destaque: "Resultado rápido desde o início",
    descricao:
      "Aumento de R$45 mil no faturamento já no primeiro mês de parceria. Prova de que o método funciona desde o início.",
    provas: [],
    temVideo: false,
  },
  {
    cliente: "Dr. Benício",
    segmento: "Cirurgias corporais (lipedema, emagrecimento)",
    resultadoPrincipal: "R$150K em 6 meses",
    destaque: "Alto ticket — cirurgia plástica",
    descricao:
      "R$150 mil em faturamento com cirurgias plásticas em 6 meses. Prova de que o método funciona para vendas de alto valor em mercados competitivos.",
    provas: [],
    temVideo: false,
  },
  {
    cliente: "Ciaasa (Ford)",
    segmento: "Concessionária automotiva",
    resultadoPrincipal: "Recorde de vendas da Ranger",
    destaque: "Vários meses consecutivos de recorde",
    descricao:
      "Recorde de vendas da Ford Ranger em vários meses consecutivos com leads gerados pela M|P. Estratégia de Google Ads com segmentação específica.",
    provas: [],
    temVideo: false,
  },
];

export const CASES_HOME: Case[] = CASES.filter((c) => c.home).sort(
  (a, b) => (a.home?.ordem ?? 0) - (b.home?.ordem ?? 0)
);

export type Cliente = { nome: string; logo?: string };

export const CLIENTES: Cliente[] = [
  { nome: "Telhas Coral", logo: "/images/logos/clientes/telhas-coral.png" },
  { nome: "Master Carnes", logo: "/images/logos/clientes/master-carne.webp" },
  { nome: "Pacheco Solar", logo: "/images/logos/clientes/pacheco-solar.png" },
  {
    nome: "Grupo Sorriso",
    logo: "/images/logos/clientes/sorriso-campinas.webp",
  },
  { nome: "Rodrigo Tintas" },
  { nome: "Ciaasa (Ford)" },
  { nome: "Navesa (Ford)" },
  { nome: "Doce Paladar" },
  { nome: "Zai Wear" },
  { nome: "Mundo das Bombas" },
  { nome: "Dr. Benício" },
  { nome: "Alencastro e Veiga" },
  { nome: "Solarium Motel" },
  { nome: "Primus Construção" },
  { nome: "Go Cars" },
  { nome: "IBT" },
  { nome: "Life Games" },
  { nome: "Fava & Vitorino" },
  { nome: "Indenização em Foco" },
  { nome: "Arantes de Pádua" },
];

/* =========================================================================
   Metodologia
   ========================================================================= */

export type Etapa = {
  numero: number;
  titulo: string;
  descricao: string;
  icone: LucideIcon;
};

export const METODOLOGIA_ETAPAS: Etapa[] = [
  {
    numero: 1,
    titulo: "Diagnóstico do Negócio",
    descricao:
      "Antes de criar um único anúncio, sentamos com o empresário para entender tudo: o produto, o cliente, a concorrência, o processo de vendas atual, os pontos fortes e as lacunas. Fazemos uma análise completa do negócio para identificar onde está o dinheiro sendo perdido e onde estão as oportunidades que ninguém explorou.",
    icone: Search,
  },
  {
    numero: 2,
    titulo: "Estudo de Mercado e Persona",
    descricao:
      "Estudamos o mercado do cliente a fundo: quem é o público-alvo, como ele compra, por quais canais ele pesquisa, o que a concorrência está fazendo. Definimos a persona ideal e mapeamos toda a jornada do consumidor — da descoberta até a decisão de compra.",
    icone: Users,
  },
  {
    numero: 3,
    titulo: "Estruturação Digital",
    descricao:
      "Organizamos toda a presença digital da empresa: Instagram profissional com estratégia de conteúdo, site otimizado para conversão, Google Meu Negócio configurado, landing pages para campanhas específicas. Tudo pensado para gerar credibilidade e atrair o cliente certo.",
    icone: LayoutTemplate,
  },
  {
    numero: 4,
    titulo: "Geração de Demanda",
    descricao:
      "Com a estrutura montada, ativamos as campanhas de tráfego pago (Meta Ads e Google Ads) com segmentação cirúrgica. Produzimos conteúdo estratégico que educa, engaja e gera autoridade. Cada real investido é rastreado e otimizado para maximizar o retorno.",
    icone: TrendingUp,
  },
  {
    numero: 5,
    titulo: "Processo Comercial e CRM",
    descricao:
      "Aqui é onde a maioria das agências para — e onde a M|P se destaca. Implementamos o CRM, configuramos o funil de vendas, treinamos o time comercial para fazer follow-up, definimos scripts de abordagem e criamos um processo que transforma lead em venda de forma previsível.",
    icone: Target,
  },
  {
    numero: 6,
    titulo: "Acompanhamento e Otimização",
    descricao:
      "Relatórios periódicos com dados reais de retorno. Reuniões semanais, quinzenais ou mensais conforme o plano. Análise contínua de métricas e ajuste de estratégia. O empresário sabe exatamente quanto investiu, quanto retornou e o que vai mudar no próximo ciclo.",
    icone: BarChart3,
  },
];

export const METODOLOGIA_CHECKS = [
  "Diagnóstico personalizado para cada negócio",
  "Estudo de público-alvo e concorrência do segmento",
  "Estruturação digital sob medida",
  "Tráfego pago com segmentação específica para o nicho",
  "Processo comercial adaptado ao ciclo de venda do segmento",
  "Acompanhamento com métricas relevantes para aquele mercado",
] as const;

/* =========================================================================
   Serviços
   ========================================================================= */

export type Servico = {
  icone: LucideIcon;
  titulo: string;
  subtitulo: string;
  descricao: string;
  porqueImporta: string;
};

export const SERVICOS: Servico[] = [
  {
    icone: Megaphone,
    titulo: "Tráfego Pago",
    subtitulo: "Meta Ads + Google Ads",
    descricao:
      "Campanhas profissionais de anúncios no Instagram, Facebook e Google com segmentação estratégica. Não é impulsionar post — é investir com método, rastreamento de conversão e otimização constante.",
    porqueImporta:
      "O tráfego pago é o motor da geração de demanda. Mas sem estratégia e sem processo, ele só queima dinheiro.",
  },
  {
    icone: Instagram,
    titulo: "Gestão de Instagram",
    subtitulo: "Conteúdo Estratégico",
    descricao:
      "Estratégia de conteúdo completa: planejamento editorial, roteiros de Reels, briefings de carrosséis e peças estáticas, gravação e edição com videomaker próprio.",
    porqueImporta:
      "Seu Instagram é seu cartão de visita digital. Se ele é amador, o cliente desconfia.",
  },
  {
    icone: Globe,
    titulo: "Sites e Landing Pages",
    subtitulo: "Design + Conversão",
    descricao:
      "Sites institucionais otimizados para conversão e landing pages para campanhas específicas. Design profissional, responsivo, rápido e com SEO integrado.",
    porqueImporta:
      "O site é a base da presença digital. Sem ele, você depende 100% de redes sociais que você não controla.",
  },
  {
    icone: Search,
    titulo: "SEO",
    subtitulo: "Otimização para Google",
    descricao:
      "Estratégia para sua empresa aparecer organicamente nas buscas. Google Meu Negócio, palavras-chave e conteúdo indexável.",
    porqueImporta:
      "85% das buscas por serviços locais começam no Google. Quem não aparece, perde venda.",
  },
  {
    icone: UserCheck,
    titulo: "Consultoria Comercial",
    subtitulo: "Treinamento de Vendas",
    descricao:
      "Análise do processo de vendas, definição de scripts, treinamento de follow-up e técnicas de fechamento.",
    porqueImporta:
      "Se o comercial não sabe conduzir o processo, o lead esfria e o investimento é perdido.",
  },
  {
    icone: Database,
    titulo: "CRM",
    subtitulo: "Implementação e Treinamento",
    descricao:
      "Configuração do CRM ideal, criação do funil de vendas, treinamento completo da equipe e acompanhamento.",
    porqueImporta: "Sem CRM, cada venda é surpresa e cada perda é invisível.",
  },
  {
    icone: PenTool,
    titulo: "Copywriting",
    subtitulo: "Textos Persuasivos",
    descricao:
      "Textos para anúncios, sites, landing pages, e-mails e redes sociais. Copy baseada em frameworks comprovados e na realidade do público.",
    porqueImporta:
      "A palavra certa no momento certo pode ser a diferença entre um clique e uma venda.",
  },
  {
    icone: Bot,
    titulo: "Automações e IA",
    subtitulo: "Inteligência Artificial",
    descricao:
      "Chatbots comerciais, agentes de IA, automações de e-mail/WhatsApp, análise de métricas com IA e desenvolvimento de sistemas próprios.",
    porqueImporta: "IA não é tendência — é vantagem competitiva.",
  },
];

/* =========================================================================
   Soluções com IA
   ========================================================================= */

export type SolucaoIA = {
  titulo: string;
  descricao: string;
  icone: LucideIcon;
};

export const SOLUCOES_IA: SolucaoIA[] = [
  {
    titulo: "Chatbots Comerciais",
    descricao:
      "Atendimento automático no WhatsApp e site que qualifica leads, responde dúvidas frequentes e agenda reuniões — 24h por dia, 7 dias por semana.",
    icone: MessageSquare,
  },
  {
    titulo: "Agentes de IA para Atendimento",
    descricao:
      "Sistemas inteligentes que atendem, encaminham e resolvem demandas de clientes com naturalidade. Reduzem o tempo de resposta sem aumentar a equipe.",
    icone: Bot,
  },
  {
    titulo: "Análise de Métricas com IA",
    descricao:
      "Dashboards inteligentes que cruzam dados de tráfego, CRM e vendas para identificar padrões, prever resultados e recomendar ajustes.",
    icone: Brain,
  },
  {
    titulo: "Sistemas Próprios",
    descricao:
      "Sistemas e aplicativos personalizados para necessidades específicas do negócio. Tecnologia sob medida para resolver problemas reais.",
    icone: Code,
  },
  {
    titulo: "Automações de Marketing e Vendas",
    descricao:
      "Fluxos automatizados de e-mail, WhatsApp e notificações que acompanham o lead em cada etapa do funil.",
    icone: Zap,
  },
];

/* =========================================================================
   Processo Comercial
   ========================================================================= */

export type ProcessoBloco = {
  titulo: string;
  descricao: string;
  icone: LucideIcon;
};

export const PROCESSO_BLOCOS: ProcessoBloco[] = [
  {
    titulo: "Implementação de CRM",
    descricao:
      "Escolhemos e configuramos o CRM ideal. Criamos o funil de vendas com todas as etapas: lead novo, primeiro contato, qualificação, proposta, negociação, fechamento. Cada lead tem dono, prazo e status. Nada se perde.",
    icone: Database,
  },
  {
    titulo: "Treinamento de Vendas",
    descricao:
      "Treinamos o time comercial: primeira abordagem, momento de avançar, objeções, follow-up. Vendas não é talento — é técnica.",
    icone: GraduationCap,
  },
  {
    titulo: "Automações Comerciais",
    descricao:
      "Fluxos automáticos que acompanham o lead: e-mail de boas-vindas, lembrete de follow-up, notificação de inatividade, alerta de oportunidade quente.",
    icone: Zap,
  },
  {
    titulo: "Clareza Total: De Onde Vêm os Leads",
    descricao:
      "Com CRM integrado ao tráfego pago, o empresário sabe exatamente: quantos leads entraram, de qual canal vieram, em qual etapa estão, quantos viraram venda e qual o valor gerado.",
    icone: Eye,
  },
  {
    titulo: "Mapeamento da Jornada de Compra",
    descricao:
      "Mapeamos toda a jornada: da pesquisa no Google ao fechamento. Cada ponto de contato é otimizado para aumentar a taxa de conversão.",
    icone: Route,
  },
];

export type Comparativo = { antes: string; depois: string };

export const COMPARATIVO: Comparativo[] = [
  {
    antes: "Leads perdidos no WhatsApp",
    depois: "Cada lead registrado no CRM com dono e prazo",
  },
  {
    antes: 'Faturamento "descoberto" no fim do mês',
    depois: "Previsibilidade de receita com dados em tempo real",
  },
  {
    antes: "Dependência de uma pessoa para vender",
    depois: "Processo documentado que qualquer vendedor segue",
  },
  {
    antes: "Sem follow-up — lead esfria em 24h",
    depois: "Automações que acompanham o lead automaticamente",
  },
  {
    antes: '"Não sei de onde veio essa venda"',
    depois: "Rastreamento completo: canal, campanha e custo por venda",
  },
  {
    antes: "Cada um vende do seu jeito",
    depois: "Scripts, etapas e treinamento padronizado",
  },
];

/* =========================================================================
   Sobre
   ========================================================================= */

export type EquipeRole = {
  icon: LucideIcon;
  titulo: string;
  desc: string;
};

export const EQUIPE_ROLES: EquipeRole[] = [
  { icon: Video, titulo: "Videomaker", desc: "Produção audiovisual profissional" },
  {
    icon: Instagram,
    titulo: "Social Media",
    desc: "Estratégia de conteúdo e gestão de redes",
  },
  { icon: Film, titulo: "Editor de Vídeo", desc: "Edição e pós-produção" },
  {
    icon: Palette,
    titulo: "Designer",
    desc: "Identidade visual, peças gráficas e criativos",
  },
  {
    icon: Monitor,
    titulo: "Web Designer",
    desc: "Sites, landing pages e experiência digital",
  },
  {
    icon: BarChart3,
    titulo: "Gestor de Tráfego",
    desc: "Meta Ads e Google Ads com estratégia",
  },
  {
    icon: PieChart,
    titulo: "Analista de Dados",
    desc: "Métricas, relatórios e otimização",
  },
  {
    icon: Bot,
    titulo: "Especialistas em IA",
    desc: "Automações, chatbots e sistemas inteligentes",
  },
];

export type Socio = { nome: string; cargo: string; bio: string };

export const SOCIOS: Socio[] = [
  {
    nome: "Marcos Goulart",
    cargo: "Co-fundador",
    bio: "30 anos. Formado em Direito. Estrategista digital e comercial há mais de 4 anos. Ex-advogado que largou tudo para empreender no marketing digital. Já gerenciou mais de 170 empresas e desenvolveu a metodologia própria da M|P. Especialista em tráfego pago, processo comercial e inteligência artificial aplicada a negócios.",
  },
  {
    nome: "Pedro Goulart",
    cargo: "Co-fundador",
    bio: "30 anos. Irmão gêmeo do Marcos. Mesma bagagem técnica em marketing digital e vendas. Atua diretamente na estratégia e no relacionamento com clientes. Responsável pela implementação de processos comerciais e treinamentos de equipes de vendas.",
  },
];

export type Valor = { icone: LucideIcon; titulo: string; descricao: string };

export const VALORES: Valor[] = [
  {
    icone: Award,
    titulo: "Autoridade",
    descricao:
      "Somos pagos para sermos os melhores no que fazemos. Estudamos cada negócio, cada mercado, cada concorrente. Não entregamos trabalho genérico.",
  },
  {
    icone: ShieldCheck,
    titulo: "Responsabilidade",
    descricao:
      "Honramos cada compromisso. Se prometemos resultado, mostramos com dados. Se algo não funciona, ajustamos. Transparência total.",
  },
  {
    icone: Rocket,
    titulo: "Agilidade",
    descricao:
      "Execução rápida e com excelência. Não ficamos semanas planejando sem agir. Aqui, resultado vem de ação inteligente com velocidade.",
  },
];

/* =========================================================================
   Blog
   ========================================================================= */

export const BLOG_CATEGORIAS = [
  "Todos",
  "Marketing Digital",
  "Vendas",
  "CRM",
  "Tráfego Pago",
  "IA",
  "Cases",
] as const;

export type BlogPost = {
  titulo: string;
  categoria: (typeof BLOG_CATEGORIAS)[number];
  resumo: string;
  tempoLeitura: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    titulo: "Por que tráfego pago sozinho não funciona mais",
    categoria: "Tráfego Pago",
    resumo:
      "Gerar lead é fácil. Converter lead em venda é o que separa empresas que crescem de empresas que queimam dinheiro em anúncio.",
    tempoLeitura: "6 min",
  },
  {
    titulo: "Quanto custa um profissional de marketing ruim",
    categoria: "Marketing Digital",
    resumo:
      "O barato sai MUITO mais caro: o custo real de uma operação amadora não está no salário — está nas vendas que nunca aconteceram.",
    tempoLeitura: "5 min",
  },
  {
    titulo: "Assessoria vs. Agência: qual a diferença",
    categoria: "Marketing Digital",
    resumo:
      "Agência entrega post e lead. Assessoria entrega processo, CRM e venda. Entenda por que essa diferença muda o resultado do seu negócio.",
    tempoLeitura: "7 min",
  },
  {
    titulo: "5 sinais de que sua empresa precisa de um CRM",
    categoria: "CRM",
    resumo:
      "Leads esquecidos no WhatsApp, faturamento surpresa no fim do mês, follow-up que não existe. Se você se identificou, esse artigo é pra você.",
    tempoLeitura: "4 min",
  },
];

/* =========================================================================
   Diagnóstico
   ========================================================================= */

export const FATURAMENTO_OPTIONS = [
  { value: "ate-50k", label: "Até R$50K" },
  { value: "50k-100k", label: "R$50K - R$100K" },
  { value: "100k-300k", label: "R$100K - R$300K" },
  { value: "acima-300k", label: "Acima de R$300K" },
] as const;

export const DIAGNOSTICO_BULLETS = [
  "Analisar sua presença digital atual",
  "Identificar o que não está sendo explorado",
  "Mostrar onde sua empresa está perdendo dinheiro",
  "Apresentar oportunidades reais de crescimento",
  "Explicar como nossa metodologia se aplica ao seu negócio",
] as const;

/* =========================================================================
   Imagens
   ========================================================================= */

export const IMAGES = {
  sociosClara: "/images/socios/socios-escritorio-01.webp",
  sociosEscura: "/images/socios/socios-escritorio-02.webp",
} as const;
