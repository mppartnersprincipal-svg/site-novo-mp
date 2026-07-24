# PRD — SITE INSTITUCIONAL M|P ASSESSORIA

## 1. VISÃO GERAL DO PROJETO

**Projeto:** Site institucional da M|P Assessoria
**Tipo:** Site multi-página institucional com foco em conversão (agendamento de diagnóstico)
**Domínio atual:** mppartners.com.br
**Cliente:** M|P Assessoria — Assessoria de Marketing e Vendas em Goiânia-GO

### Objetivo principal
Apresentar a M|P Assessoria como referência em marketing e vendas para empresários de Goiânia que faturam acima de R$80K/mês. O site deve gerar credibilidade, mostrar resultados comprovados e converter visitantes em agendamentos de diagnóstico gratuito.

### Público-alvo
Empresários de Goiânia-GO, 30-65 anos, faturamento acima de R$80K/mês, negócio físico (varejo, atacado, serviço). Já tentaram marketing antes e se frustraram. Buscam parceiro confiável.

---

## 2. STACK TÉCNICO

```
Framework:    Next.js 14 (App Router)
Styling:      Tailwind CSS 4
Animations:   Framer Motion
Ícones:       Lucide React
Fontes:       Google Fonts — Montserrat (headings) + Inter (body)
Formulário:   React Hook Form + envio para API/webhook
Deploy:       Vercel
```

> **Nota de implementação (2026-07-24):** stack efetiva usa Next.js 15 + React 19 + Tailwind v4 com tokens em CSS (`@theme`), espelhando o projeto `briefing-digital` da M|P. Cor primária ajustada para o amarelo real do logo (ver §3.1).

### Estrutura de pastas do projeto

```
site-novo-mp/
├── public/
│   ├── images/
│   │   ├── socios/          ← Fotos dos Sócios (copiar de "Fotos dos Sócios - Marcos e Pedro")
│   │   ├── logos/
│   │   │   ├── mp/          ← Logo da MP (copiar de "Logo da MP")
│   │   │   └── clientes/   ← Logos dos clientes (copiar de "Logos Clientes")
│   │   ├── equipe/          ← Fotos da equipe (a adicionar)
│   │   ├── escritorio/      ← Fotos do escritório/bastidores (a adicionar)
│   │   └── cases/           ← Prints de resultado, screenshots de CRM (a adicionar)
│   ├── videos/              ← Depoimentos em vídeo (a adicionar ou embed YouTube)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    ← HOME
│   │   ├── sobre/page.tsx             ← SOBRE A M|P
│   │   ├── metodologia/page.tsx       ← NOSSA METODOLOGIA
│   │   ├── servicos/page.tsx          ← SERVIÇOS
│   │   ├── inteligencia-artificial/page.tsx  ← SOLUÇÕES COM IA
│   │   ├── clientes/page.tsx          ← CLIENTES E RESULTADOS
│   │   ├── processo-comercial/page.tsx ← PROCESSO COMERCIAL
│   │   ├── blog/page.tsx             ← BLOG (estrutura)
│   │   ├── diagnostico/page.tsx      ← DIAGNÓSTICO GRATUITO
│   │   └── diagnostico/obrigado/page.tsx  ← THANK YOU PAGE
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── CTABanner.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Counter.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── PainPoints.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── NumbersBar.tsx
│   │   │   ├── CasesCarousel.tsx
│   │   │   ├── SegmentsGrid.tsx
│   │   │   ├── MethodologyTimeline.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── TeamGrid.tsx
│   │   │   ├── ClientLogos.tsx
│   │   │   ├── BeforeAfterTable.tsx
│   │   │   └── DiagnosticForm.tsx
│   │   └── icons/
│   │       └── MPLogo.tsx
│   ├── lib/
│   │   └── constants.ts         ← cores, dados de clientes, cases, serviços
│   └── styles/
│       └── globals.css
├── tailwind.config.ts
├── next.config.js
├── package.json
└── PRD.md                      ← ESTE ARQUIVO
```

---

## 3. DESIGN SYSTEM

### 3.1 Paleta de Cores

```ts
// lib/constants.ts
export const colors = {
  gold:       '#F5A623',  // Primária — dourado M|P (CTAs, destaques, acentos)
  black:      '#1A1A1A',  // Fundos escuros, textos de título
  dark:       '#333333',  // Texto corpo
  mid:        '#666666',  // Texto secundário, captions
  light:      '#F5F5F5',  // Backgrounds alternados de seção
  white:      '#FFFFFF',  // Backgrounds claros
  red:        '#CC3333',  // "Antes" em comparativos, alertas
  green:      '#339933',  // "Depois" em comparativos, sucesso
  goldLight:  '#FFF8E7',  // Background sutil dourado (hover, badges)
}
```

> **Nota de implementação:** o dourado primário foi ajustado para o amarelo real do logo M|P (≈`#FFC93C`, extraído do PDF oficial) por decisão do cliente em 2026-07-24. Token único em `globals.css` (`--mp-gold`).

### 3.2 Tipografia

```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
```

| Papel | Fonte | Pesos |
|-------|-------|-------|
| Headings (H1-H3) | Montserrat | 700, 800 |
| Body / Parágrafos | Inter | 400, 500 |
| CTAs / Buttons | Montserrat | 600, 700 |
| Captions / Small | Inter | 400 |

### Escala tipográfica

| Elemento | Desktop | Mobile |
|----------|---------|--------|
| H1 (Hero) | 56px / 64px lh | 36px / 42px lh |
| H2 (Seção) | 36px / 44px lh | 28px / 34px lh |
| H3 (Sub-seção) | 24px / 32px lh | 20px / 28px lh |
| Body | 18px / 28px lh | 16px / 26px lh |
| Small / Caption | 14px / 20px lh | 13px / 18px lh |
| Button | 16px | 15px |

### 3.3 Espaçamento

- Seções: `py-20 lg:py-28` (80px / 112px)
- Entre blocos dentro de seção: `space-y-12 lg:space-y-16`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Border radius padrão: `rounded-lg` (8px) ou `rounded-2xl` (16px) para cards grandes

### 3.4 Componentes visuais

**Botão Primário (CTA):**
```
bg-[gold] text-black font-semibold px-8 py-4 rounded-lg
hover:bg-[gold-deep] transition-all duration-300
text-base tracking-wide uppercase
```

**Botão Secundário:**
```
border-2 border-[gold] text-[gold] font-semibold px-8 py-4 rounded-lg
hover:bg-[gold] hover:text-black transition-all duration-300
```

**Card de Case/Serviço:**
```
bg-white rounded-2xl p-8 shadow-sm border border-gray-100
hover:shadow-md hover:border-[gold]/30 transition-all duration-300
```

**Separador/Accent Line:**
```
w-16 h-1 bg-[gold] rounded-full
```

### 3.5 Direção de design

- **Tom visual:** Sóbrio, profissional, premium. Preto e dourado como identidade.
- **Fundos alternados:** Seções alternam entre `bg-white` e `bg-[#1A1A1A]` (escuro) ou `bg-[#F5F5F5]` (cinza claro). Seções de impacto (hero, CTA, números) usam fundo escuro.
- **Imagens:** Todas reais, nunca banco de imagens. Se não houver foto disponível, usar placeholder cinza com ícone indicando o tipo de foto necessária.
- **Animações:** Fade-in suave ao scroll (Framer Motion, `whileInView`). Contadores animados na seção de números. Sem excessos — elegância > efeitos.

---

## 4. COMPONENTES GLOBAIS

### 4.1 Header (`components/layout/Header.tsx`)

```
Comportamento: Sticky top, transparente no topo, bg-black/95 backdrop-blur ao scrollar
Altura: h-20 (80px)
Layout: Logo à esquerda | Menu center | CTA à direita
Mobile: Hamburger menu com drawer lateral (bg-black)
```

**Itens do menu:**
```ts
const menuItems = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Metodologia', href: '/metodologia' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'IA', href: '/inteligencia-artificial' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Processo Comercial', href: '/processo-comercial' },
  { label: 'Blog', href: '/blog' },
]
```

**CTA no header:**
```
Texto: "DIAGNÓSTICO GRATUITO"
Link: /diagnostico
Estilo: botão primário (dourado) — sempre visível, inclusive no mobile
```

**Logo:**
- Usar arquivo de `/public/images/logos/mp/` — versão branca/dourada para header escuro
- Link para home (/)

### 4.2 Footer (`components/layout/Footer.tsx`)

```
Background: bg-[#1A1A1A]
Layout: 3 colunas no desktop, stack no mobile
Padding: py-16
```

**Coluna 1 — Sobre:**
```
Logo M|P
"Assessoria de Marketing e Vendas"
"Goiânia — GO"
"+170 empresas atendidas | Desde 2021"
```

**Coluna 2 — Páginas:**
```
Links para todas as páginas do menu
```

**Coluna 3 — Contato:**
```
Instagram: @mp_assessoriadigital (link externo)
Site: www.mppartners.com.br
WhatsApp: [número a definir] (link wa.me)
```

**Linha final:**
```
"© 2026 M|P Assessoria. Todos os direitos reservados."
Cor: text-gray-500, text-sm
Borda superior: border-t border-gray-800
```

### 4.3 Botão flutuante WhatsApp (`components/layout/WhatsAppButton.tsx`)

```
Posição: fixed bottom-6 right-6 z-50
Visual: w-14 h-14 rounded-full bg-[#25D366] shadow-lg
Ícone: WhatsApp (SVG branco)
Hover: scale-110 com transition
Link: https://wa.me/55XXXXXXXXXX?text=Olá! Vim pelo site da M|P e gostaria de saber mais sobre a assessoria de marketing e vendas.
Animação: leve bounce ao aparecer (delay 2s)
```

---

## 5. PÁGINAS — COPY E ESPECIFICAÇÕES

---

### 5.1 HOME (`app/page.tsx`)

**Meta:**
```ts
title: "M|P Assessoria | Marketing e Vendas com Método para Empresas de Goiânia"
description: "Assessoria de marketing e vendas que gera receita previsível para empresas de Goiânia. Tráfego pago, CRM, treinamento comercial e IA. Resultado comprovado em +15 segmentos."
```

#### SEÇÃO 1 — HERO
```
Layout: full-width, min-h-screen, flex items-center
Background: bg-[#1A1A1A] com imagem do escritório (overlay escuro 70%) ou gradiente sutil
Texto: alinhado à esquerda, max-w-2xl
```

**Conteúdo:**
```
Badge superior (opcional): "Assessoria de Marketing & Vendas em Goiânia"

H1: "Sua empresa vende. Mas será que ela cresce?"

Sub-headline (text-lg text-gray-300):
"A M|P Assessoria estrutura o marketing e as vendas da sua empresa com método, dados e previsibilidade de receita. Sem improviso. Sem promessa. Com resultado comprovado."

CTA primário: "AGENDAR DIAGNÓSTICO GRATUITO" → /diagnostico
Texto sob CTA (text-sm text-gray-400): "Atendimento direto com os sócios. Sem intermediários."

Selos abaixo (flex gap-8, text-sm text-gray-400):
• "+170 empresas atendidas"
• "+4 anos de mercado"
• "+15 segmentos com resultado"
```

**Imagem/Visual:**
```
Opção A: Foto do Marcos e Pedro (de /public/images/socios/) como imagem à direita em desktop (grid 2 cols)
Opção B: Background com foto do escritório + overlay
Opção C: Se não houver foto adequada, usar gradiente escuro com partículas sutis ou pattern geométrico dourado
```

#### SEÇÃO 2 — IDENTIFICAÇÃO COM A DOR
```
Layout: bg-white, py-20
4 cards em grid (2x2 desktop, 1 col mobile)
Cada card: border-l-4 border-[gold], bg-[#F5F5F5], p-6, rounded-r-lg
```

**Título da seção:**
```
H2: "Isso soa familiar?"
Accent line dourada abaixo
```

**Cards:**

| Quote (itálico, text-lg) | Resposta (text-base, text-gray-600) |
|---|---|
| "Já contratei agência e não tive resultado." | A maioria das agências entrega lead — mas não entrega venda. Sem processo comercial, o lead esfria e o investimento é perdido. |
| "Tenho uma pessoa que cuida das redes sociais, mas não vejo retorno." | Postar não é marketing. Marketing é gerar demanda qualificada, com estratégia, segmentação e mensuração de resultado. |
| "Não sei de onde vêm as minhas vendas." | Se você não tem CRM e não controla o processo comercial, cada venda é surpresa — e cada perda é invisível. |
| "Impulsionei posts e não veio nada." | Impulsionar post sem estratégia é gastar dinheiro sem direção. Tráfego pago profissional exige estudo, segmentação e acompanhamento constante. |

**Frase de transição (após os cards, centralizada, font-semibold):**
```
"Se você se identificou com alguma dessas situações, o problema não é o marketing. É a falta de método."
```

#### SEÇÃO 3 — O QUE É A M|P
```
Layout: bg-[#F5F5F5], py-20
Grid 2 cols desktop: texto à esquerda, imagem à direita
```

**Conteúdo:**
```
H2: "Não somos agência. Somos assessoria de marketing e vendas."
Accent line dourada

Parágrafos:
"A M|P Assessoria existe para uma coisa: fazer sua empresa vender mais com previsibilidade."

"Não vendemos promessa. Vendemos processo. Estruturamos o marketing, organizamos o comercial, implementamos CRM, treinamos seu time de vendas e acompanhamos cada resultado com dados."

"Tudo isso com atendimento direto dos sócios Marcos e Pedro Goulart — sem intermediário, sem estagiário."

"Atendemos um número reduzido e selecionado de empresas, porque personalização e resultado real não existem quando você tem 40, 50 clientes na carteira."

CTA secundário: "CONHEÇA NOSSA METODOLOGIA" → /metodologia
```

**Imagem:** Foto do escritório ou do Marcos explicando algo. Usar de `/public/images/socios/` ou `/public/images/escritorio/`

#### SEÇÃO 4 — NÚMEROS
```
Layout: bg-[#1A1A1A], py-16
Contadores animados em linha (flex, justify-around)
Números grandes em text-[gold], labels em text-gray-400
Animar com Framer Motion (count up de 0 ao valor quando visível)
```

**Contadores:**
```ts
const counters = [
  { value: 170, suffix: '+', label: 'Empresas atendidas' },
  { value: 4, suffix: '+', label: 'Anos de experiência' },
  { value: 15, suffix: '+', label: 'Segmentos com resultado' },
  { value: 1, prefix: 'R$', suffix: 'M+', label: 'Gerado para clientes' },
]
```

#### SEÇÃO 5 — CASES RESUMIDOS
```
Layout: bg-white, py-20
Grid 4 cols desktop (2 cols tablet, 1 col mobile)
Cada card: logo do cliente + segmento + número principal
Hover: eleva com shadow
```

**Cases:**
```ts
const casesDestaque = [
  {
    cliente: 'Telhas Coral',
    segmento: 'Telhas',
    resultado: '+R$270 mil em um único mês via Google Ads',
    logo: '/images/logos/clientes/telhas-coral.png'
  },
  {
    cliente: 'Master Carnes',
    segmento: 'Atacado de carnes',
    resultado: '+R$300 mil de retorno comprovado',
    logo: '/images/logos/clientes/master-carne.webp'
  },
  {
    cliente: 'Grupo Sorriso',
    segmento: 'Odontologia',
    resultado: 'De 1 para 5 clínicas em 9 meses',
    logo: '/images/logos/clientes/sorriso-campinas.webp'
  },
  {
    cliente: 'Pacheco Solar',
    segmento: 'Energia Solar',
    resultado: '+R$579 mil em vendas em 4 meses',
    logo: '/images/logos/clientes/pacheco-solar.png'
  },
]
```

**Botão abaixo:** "VER TODOS OS CASES E CLIENTES" → /clientes

#### SEÇÃO 6 — SEGMENTOS
```
Layout: bg-[#F5F5F5], py-20
Grid de ícones (Lucide) com label — 4 cols desktop, 2 mobile
Ícones: color text-[gold]
```

**Título:**
```
H2: "Nossa metodologia funciona para qualquer segmento."
Subtítulo: "Foram 4 anos e mais de 50 segmentos atendidos para validar isso."
```

**Segmentos:**
```ts
const segmentos = [
  { icon: 'Hammer', label: 'Materiais de construção' },
  { icon: 'Scale', label: 'Escritórios de advocacia' },
  { icon: 'Car', label: 'Concessionárias' },
  { icon: 'Package', label: 'Atacado e distribuição' },
  { icon: 'Store', label: 'Varejo físico' },
  { icon: 'Heart', label: 'Saúde e odontologia' },
  { icon: 'Stethoscope', label: 'Medicina e estética' },
  { icon: 'Cake', label: 'Confeitaria e alimentação' },
  { icon: 'Sun', label: 'Energia solar' },
  { icon: 'Gamepad2', label: 'Games e tecnologia' },
  { icon: 'Shirt', label: 'Moda e vestuário' },
  { icon: 'Trophy', label: 'Automotivo premium' },
  { icon: 'Factory', label: 'Indústria' },
  { icon: 'Briefcase', label: 'Serviços em geral' },
]
```

#### SEÇÃO 7 — CTA FINAL
```
Layout: bg-[#1A1A1A], py-20, text-center
```

**Conteúdo:**
```
H2 (text-white): "Sua empresa merece mais do que improviso."

Parágrafo (text-gray-300, max-w-2xl mx-auto):
"Agende um diagnóstico gratuito com os sócios da M|P. Vamos analisar seu negócio, identificar oportunidades que você não está explorando e te mostrar exatamente onde sua empresa está perdendo dinheiro."

CTA primário: "AGENDAR DIAGNÓSTICO GRATUITO" → /diagnostico
Texto sob CTA (text-sm text-gray-500): "Sem compromisso. Sem custo. Direto com os donos."
```

---

### 5.2 SOBRE A M|P (`app/sobre/page.tsx`)

**Meta:**
```ts
title: "Sobre a M|P Assessoria | Marketing e Vendas em Goiânia"
description: "Conheça a M|P Assessoria. Fundada por Marcos e Pedro Goulart, somos uma assessoria de marketing e vendas em Goiânia focada em resultado comprovado."
```

#### SEÇÃO 1 — HERO
```
Layout: banner full-width com foto da equipe + overlay escuro
H1 (text-white, text-center): "Nascemos de uma inquietação: por que empresas boas não conseguem crescer?"
```
**Imagem:** Foto da equipe completa ou do escritório. Buscar em `/public/images/socios/` ou `/public/images/escritorio/`

#### SEÇÃO 2 — NOSSA HISTÓRIA
```
Layout: bg-white, py-20
Texto intercalado com fotos (alternando lados)
```

**Blocos de texto (cada um com foto ao lado):**

**Bloco 1:**
```
"Em 2020, Marcos Goulart era advogado. Trabalhava em escritório, seguia o caminho tradicional. Mas sempre quis empreender."

"Quando a pandemia chegou, Marcos abriu uma loja online — e precisou aprender tudo sobre marketing digital na prática: tráfego pago, criação de site, público-alvo, copywriting, funil de vendas, CRM. Aprendeu vendendo. Aprendeu errando. Aprendeu fazendo."

"Um ano depois, começou a prestar serviço de tráfego pago para pequenas e médias empresas de Goiânia. A carência era enorme: empresários que precisavam vender mais, mas não sabiam nada sobre marketing digital."
```
📷 Foto antiga/evolução do Marcos

**Bloco 2:**
```
"Com dois sócios, Marcos montou uma agência de publicidade. Chegaram a ter 13 colaboradores, 40 clientes ativos e faturamento acima de R$100 mil por mês. Mas algo não funcionava."

"Muitos intermediários. Entregas genéricas. Colaboradores desqualificados. E a grande lacuna: nenhuma agência cuidava do comercial dos clientes. Geravam leads — mas ninguém ensinava a converter."
```

**Bloco 3 (destaque):**
```
Texto em destaque (text-xl font-semibold):
"Foi aí que Marcos tomou a decisão que mudou tudo."

"Rompeu a sociedade, se especializou em processo comercial e fundou a M|P Assessoria ao lado do seu irmão gêmeo Pedro Goulart — com uma proposta radicalmente diferente:"

Lista (com check icons em dourado):
• Atender menos clientes, com mais profundidade.
• Cuidar do marketing e das vendas de ponta a ponta.
• Atendimento direto com os donos — sem intermediários.
• Foco 100% em geração de receita comprovada.

"Desde julho de 2021, a M|P Assessoria já ajudou mais de 170 empresas de Goiânia e Goiás a crescerem, venderem mais e terem previsibilidade de receita."
```
📷 Foto do Marcos e Pedro juntos

#### SEÇÃO 3 — MARCOS E PEDRO
```
Layout: bg-[#F5F5F5], py-20
Grid 2 cols com foto + bio de cada sócio
```

**Marcos Goulart — Co-fundador**
```
Bio: "30 anos. Formado em Direito. Estrategista digital e comercial há mais de 4 anos. Ex-advogado que largou tudo para empreender no marketing digital. Já gerenciou mais de 170 empresas e desenvolveu a metodologia própria da M|P. Especialista em tráfego pago, processo comercial e inteligência artificial aplicada a negócios."
```
📷 Foto profissional de `/public/images/socios/`

**Pedro Goulart — Co-fundador**
```
Bio: "30 anos. Irmão gêmeo do Marcos. Mesma bagagem técnica em marketing digital e vendas. Atua diretamente na estratégia e no relacionamento com clientes. Responsável pela implementação de processos comerciais e treinamentos de equipes de vendas."
```
📷 Foto profissional de `/public/images/socios/`

#### SEÇÃO 4 — NOSSA EQUIPE
```
Layout: bg-white, py-20
```

**Título:**
```
H2: "Uma assessoria com estrutura de verdade."
Subtítulo: "Quando você contrata a M|P, sua empresa passa a contar com uma equipe completa e especializada:"
```

**Grid de funções (com ícone Lucide):**
```ts
const equipe = [
  { icon: 'Video', titulo: 'Videomaker', desc: 'Produção audiovisual profissional' },
  { icon: 'Instagram', titulo: 'Social Media', desc: 'Estratégia de conteúdo e gestão de redes' },
  { icon: 'Film', titulo: 'Editor de Vídeo', desc: 'Edição e pós-produção' },
  { icon: 'Palette', titulo: 'Designer', desc: 'Identidade visual, peças gráficas e criativos' },
  { icon: 'Monitor', titulo: 'Web Designer', desc: 'Sites, landing pages e experiência digital' },
  { icon: 'BarChart3', titulo: 'Gestor de Tráfego', desc: 'Meta Ads e Google Ads com estratégia' },
  { icon: 'PieChart', titulo: 'Analista de Dados', desc: 'Métricas, relatórios e otimização' },
  { icon: 'Bot', titulo: 'Especialistas em IA', desc: 'Automações, chatbots e sistemas inteligentes' },
]
```

#### SEÇÃO 5 — VALORES
```
Layout: bg-[#1A1A1A], py-20
3 cards em linha (1 col mobile)
Cada card: bg-[#1A1A1A] border border-gray-800, hover:border-[gold]
```

**Título:** "Três pilares que definem quem somos."

| Pilar | Descrição |
|-------|-----------|
| Autoridade | Somos pagos para sermos os melhores no que fazemos. Estudamos cada negócio, cada mercado, cada concorrente. Não entregamos trabalho genérico. |
| Responsabilidade | Honramos cada compromisso. Se prometemos resultado, mostramos com dados. Se algo não funciona, ajustamos. Transparência total. |
| Agilidade | Execução rápida e com excelência. Não ficamos semanas planejando sem agir. Aqui, resultado vem de ação inteligente com velocidade. |

---

### 5.3 METODOLOGIA (`app/metodologia/page.tsx`)

**Meta:**
```ts
title: "Nossa Metodologia | M|P Assessoria — Marketing e Vendas com Método"
description: "Conheça a metodologia da M|P: validada em +50 segmentos ao longo de 4 anos. Processo completo de marketing e vendas para empresas que querem crescer com previsibilidade."
```

#### SEÇÃO 1 — HERO
```
H1: "4 anos. +50 segmentos. 1 metodologia validada."

Sub:
"A M|P desenvolveu uma metodologia própria de marketing e vendas que funciona para 95% dos segmentos do mercado. Não foi criada da noite pro dia — foram 4 anos atendendo mais de 170 empresas, testando, ajustando e validando em segmentos que vão de telhas a concessionárias, de confeitarias a clínicas odontológicas."

"O resultado? Um processo replicável que gera receita previsível para qualquer empresa que tenha um bom produto ou serviço e vontade de crescer."
```

#### SEÇÃO 2 — POR QUE METODOLOGIA PRÓPRIA
```
H2: "Marketing genérico não funciona. Por isso criamos o nosso método."

"A maioria das agências aplica a mesma fórmula para todos os clientes: faz um anúncio, gera uns leads e reza para alguém comprar. Isso não é marketing. É sorte."

"Na M|P, percebemos que cada empresa tem um público diferente, uma jornada de compra diferente e um processo de vendas diferente. Por isso, desenvolvemos uma metodologia que se adapta ao negócio — mas mantém a estrutura que garante resultado."

"Ao longo de 4 anos, atendemos mais de 50 segmentos diferentes. De varejo a indústria, de serviço a atacado. Testamos, validamos e refinamos cada etapa. Hoje, podemos afirmar: nossa metodologia funciona para 95% dos segmentos."
```

#### SEÇÃO 3 — 6 ETAPAS (Timeline vertical)
```
Layout: timeline vertical com alternância esquerda/direita no desktop
Cada etapa: número em circle dourado + título + descrição
Linha conectora dourada entre etapas
```

```ts
const etapas = [
  {
    numero: 1,
    titulo: 'Diagnóstico do Negócio',
    descricao: 'Antes de criar um único anúncio, sentamos com o empresário para entender tudo: o produto, o cliente, a concorrência, o processo de vendas atual, os pontos fortes e as lacunas. Fazemos uma análise completa do negócio para identificar onde está o dinheiro sendo perdido e onde estão as oportunidades que ninguém explorou.',
    icone: 'Search'
  },
  {
    numero: 2,
    titulo: 'Estudo de Mercado e Persona',
    descricao: 'Estudamos o mercado do cliente a fundo: quem é o público-alvo, como ele compra, por quais canais ele pesquisa, o que a concorrência está fazendo. Definimos a persona ideal e mapeamos toda a jornada do consumidor — da descoberta até a decisão de compra.',
    icone: 'Users'
  },
  {
    numero: 3,
    titulo: 'Estruturação Digital',
    descricao: 'Organizamos toda a presença digital da empresa: Instagram profissional com estratégia de conteúdo, site otimizado para conversão, Google Meu Negócio configurado, landing pages para campanhas específicas. Tudo pensado para gerar credibilidade e atrair o cliente certo.',
    icone: 'Layout'
  },
  {
    numero: 4,
    titulo: 'Geração de Demanda',
    descricao: 'Com a estrutura montada, ativamos as campanhas de tráfego pago (Meta Ads e Google Ads) com segmentação cirúrgica. Produzimos conteúdo estratégico que educa, engaja e gera autoridade. Cada real investido é rastreado e otimizado para maximizar o retorno.',
    icone: 'TrendingUp'
  },
  {
    numero: 5,
    titulo: 'Processo Comercial e CRM',
    descricao: 'Aqui é onde a maioria das agências para — e onde a M|P se destaca. Implementamos o CRM, configuramos o funil de vendas, treinamos o time comercial para fazer follow-up, definimos scripts de abordagem e criamos um processo que transforma lead em venda de forma previsível.',
    icone: 'Target'
  },
  {
    numero: 6,
    titulo: 'Acompanhamento e Otimização',
    descricao: 'Relatórios periódicos com dados reais de retorno. Reuniões semanais, quinzenais ou mensais conforme o plano. Análise contínua de métricas e ajuste de estratégia. O empresário sabe exatamente quanto investiu, quanto retornou e o que vai mudar no próximo ciclo.',
    icone: 'BarChart'
  },
]
```

#### SEÇÃO 4 — POR QUE FUNCIONA
```
H2: "De telhas a cirurgia plástica. De confeitaria a concessionária Ford."

"Nossa metodologia não é específica para um nicho. Ela é uma arquitetura de marketing e vendas que se adapta à realidade de cada empresa."

Lista com check icons dourados:
• Diagnóstico personalizado para cada negócio
• Estudo de público-alvo e concorrência do segmento
• Estruturação digital sob medida
• Tráfego pago com segmentação específica para o nicho
• Processo comercial adaptado ao ciclo de venda do segmento
• Acompanhamento com métricas relevantes para aquele mercado

"É por isso que geramos resultado vendendo telhas, carnes, bombas d'água, roupas, consultas odontológicas, cirurgias plásticas, carros e estruturas metálicas — com a mesma metodologia."

CTA: "QUERO UM DIAGNÓSTICO DO MEU NEGÓCIO" → /diagnostico
```

---

### 5.4 SERVIÇOS (`app/servicos/page.tsx`)

**Meta:**
```ts
title: "Nossos Serviços | M|P Assessoria — Marketing, Vendas e IA para Empresas"
description: "Tráfego pago, gestão de Instagram, CRM, treinamento comercial, sites, SEO e soluções com IA. Conheça todos os serviços da M|P Assessoria em Goiânia."
```

**Hero:**
```
H1: "Tudo que sua empresa precisa para vender mais. Em uma assessoria só."
Sub: "A M|P centraliza marketing, vendas e tecnologia em uma entrega única. Sem precisar contratar 5 fornecedores diferentes que não conversam entre si."
```

**Grid de serviços (cards com ícone + título + descrição + "por que importa"):**

```ts
const servicos = [
  {
    icone: 'Megaphone',
    titulo: 'Tráfego Pago',
    subtitulo: 'Meta Ads + Google Ads',
    descricao: 'Campanhas profissionais de anúncios no Instagram, Facebook e Google com segmentação estratégica. Não é impulsionar post — é investir com método, rastreamento de conversão e otimização constante.',
    porqueImporta: 'O tráfego pago é o motor da geração de demanda. Mas sem estratégia e sem processo, ele só queima dinheiro.'
  },
  {
    icone: 'Instagram',
    titulo: 'Gestão de Instagram',
    subtitulo: 'Conteúdo Estratégico',
    descricao: 'Estratégia de conteúdo completa: planejamento editorial, roteiros de Reels, briefings de carrosséis e peças estáticas, gravação e edição com videomaker próprio.',
    porqueImporta: 'Seu Instagram é seu cartão de visita digital. Se ele é amador, o cliente desconfia.'
  },
  {
    icone: 'Globe',
    titulo: 'Sites e Landing Pages',
    subtitulo: 'Design + Conversão',
    descricao: 'Sites institucionais otimizados para conversão e landing pages para campanhas específicas. Design profissional, responsivo, rápido e com SEO integrado.',
    porqueImporta: 'O site é a base da presença digital. Sem ele, você depende 100% de redes sociais que você não controla.'
  },
  {
    icone: 'Search',
    titulo: 'SEO',
    subtitulo: 'Otimização para Google',
    descricao: 'Estratégia para sua empresa aparecer organicamente nas buscas. Google Meu Negócio, palavras-chave e conteúdo indexável.',
    porqueImporta: '85% das buscas por serviços locais começam no Google. Quem não aparece, perde venda.'
  },
  {
    icone: 'UserCheck',
    titulo: 'Consultoria Comercial',
    subtitulo: 'Treinamento de Vendas',
    descricao: 'Análise do processo de vendas, definição de scripts, treinamento de follow-up e técnicas de fechamento.',
    porqueImporta: 'Se o comercial não sabe conduzir o processo, o lead esfria e o investimento é perdido.'
  },
  {
    icone: 'Database',
    titulo: 'CRM',
    subtitulo: 'Implementação e Treinamento',
    descricao: 'Configuração do CRM ideal, criação do funil de vendas, treinamento completo da equipe e acompanhamento.',
    porqueImporta: 'Sem CRM, cada venda é surpresa e cada perda é invisível.'
  },
  {
    icone: 'PenTool',
    titulo: 'Copywriting',
    subtitulo: 'Textos Persuasivos',
    descricao: 'Textos para anúncios, sites, landing pages, e-mails e redes sociais. Copy baseada em frameworks comprovados e na realidade do público.',
    porqueImporta: 'A palavra certa no momento certo pode ser a diferença entre um clique e uma venda.'
  },
  {
    icone: 'Bot',
    titulo: 'Automações e IA',
    subtitulo: 'Inteligência Artificial',
    descricao: 'Chatbots comerciais, agentes de IA, automações de e-mail/WhatsApp, análise de métricas com IA e desenvolvimento de sistemas próprios.',
    porqueImporta: 'IA não é tendência — é vantagem competitiva.'
  },
]
```

**CTA final:**
```
"Não sabe por onde começar? A gente analisa seu negócio e te mostra o que faz sentido para sua realidade."
CTA: "AGENDAR DIAGNÓSTICO GRATUITO" → /diagnostico
```

---

### 5.5 INTELIGÊNCIA ARTIFICIAL (`app/inteligencia-artificial/page.tsx`)

**Meta:**
```ts
title: "Soluções com IA para Empresas | M|P Assessoria"
description: "Chatbots comerciais, agentes de IA, automações e sistemas próprios. A M|P aplica inteligência artificial no marketing e nas vendas da sua empresa."
```

**Hero:**
```
H1: "IA não é mais tendência. É vantagem competitiva."
Sub: "A maioria dos empresários sabe que inteligência artificial existe — mas não faz ideia de como aplicar no próprio negócio. A M|P resolve isso."
```

**Soluções (cards ou seções alternadas):**

```ts
const solucoesIA = [
  {
    titulo: 'Chatbots Comerciais',
    descricao: 'Atendimento automático no WhatsApp e site que qualifica leads, responde dúvidas frequentes e agenda reuniões — 24h por dia, 7 dias por semana.',
    icone: 'MessageSquare'
  },
  {
    titulo: 'Agentes de IA para Atendimento',
    descricao: 'Sistemas inteligentes que atendem, encaminham e resolvem demandas de clientes com naturalidade. Reduzem o tempo de resposta sem aumentar a equipe.',
    icone: 'Bot'
  },
  {
    titulo: 'Análise de Métricas com IA',
    descricao: 'Dashboards inteligentes que cruzam dados de tráfego, CRM e vendas para identificar padrões, prever resultados e recomendar ajustes.',
    icone: 'Brain'
  },
  {
    titulo: 'Sistemas Próprios',
    descricao: 'Sistemas e aplicativos personalizados para necessidades específicas do negócio. Tecnologia sob medida para resolver problemas reais.',
    icone: 'Code'
  },
  {
    titulo: 'Automações de Marketing e Vendas',
    descricao: 'Fluxos automatizados de e-mail, WhatsApp e notificações que acompanham o lead em cada etapa do funil.',
    icone: 'Zap'
  },
]
```

**Frase de impacto:**
```
"A diferença entre usar e não usar IA não é tecnológica — é financeira."
```

**CTA:** "QUERO SABER COMO A IA PODE AJUDAR MEU NEGÓCIO" → /diagnostico

---

### 5.6 CLIENTES E RESULTADOS (`app/clientes/page.tsx`)

**Meta:**
```ts
title: "Nossos Clientes e Resultados | M|P Assessoria — Cases de Sucesso"
description: "Cases de sucesso com dados reais: Telhas Coral, Master Carnes, Grupo Sorriso, Pacheco Solar e mais. Resultado comprovado em +15 segmentos."
```

**Hero:**
```
H1: "Resultado não se promete. Se comprova."
Sub: "Esses são alguns dos resultados reais que a M|P gerou para empresas de Goiânia e Goiás. Com dados, depoimentos e prints — porque aqui, cada número tem dono."
```

#### SEÇÃO — LOGOS DOS CLIENTES
```
Layout: grid de logos, 4-5 por linha desktop
Efeito: logos em grayscale, hover colorido (filter: grayscale(100%) → grayscale(0%))
Logos de: /public/images/logos/clientes/
```

```ts
const todosClientes = [
  'Telhas Coral', 'Master Carnes', 'Pacheco Solar', 'Grupo Sorriso',
  'Rodrigo Tintas', 'Ciaasa (Ford)', 'Navesa (Ford)', 'Doce Paladar',
  'Zai Wear', 'Mundo das Bombas', 'Dr. Benício', 'Alencastro e Veiga',
  'Solarium Motel', 'Primus Construção', 'Go Cars', 'IBT',
  'Life Games', 'Fava & Vitorino', 'Indenização em Foco', 'Arantes de Pádua'
]
```

#### SEÇÃO — CASES DETALHADOS

```ts
const cases = [
  {
    cliente: 'Telhas Coral',
    segmento: 'Venda de telhas — referência em Goiás',
    resultadoPrincipal: '+R$250.000 a R$350.000/mês',
    destaque: 'R$270.000 em um único mês via Google Ads',
    descricao: 'Referência em venda de telhas no estado de Goiás. Os anúncios de Google Ads gerenciados pela M|P são responsáveis por faturamento adicional entre R$250 mil e R$350 mil por mês — comprovado via prints de WhatsApp e dados de CRM.',
    provas: ['Print WhatsApp R$270K'],
    temVideo: false
  },
  {
    cliente: 'Master Carnes',
    segmento: 'Atacado e distribuição de carnes',
    resultadoPrincipal: '+R$180.000 a R$240.000/mês',
    destaque: 'Depoimento em vídeo confirmando R$300K de retorno',
    descricao: 'Um dos maiores atacadistas de Goiânia. A M|P estruturou tráfego pago, CRM e treinamento comercial. Faturamento adicional consistente com reconhecimento do próprio dono em vídeo.',
    provas: ['Depoimento em vídeo'],
    temVideo: true
  },
  {
    cliente: 'Pacheco Solar',
    segmento: 'Estruturas metálicas para energia solar',
    resultadoPrincipal: '+20% de faturamento mensal',
    destaque: 'R$579K em 4 meses | R$70K com R$2K de investimento',
    descricao: 'Aumento de 20% no faturamento mensal e R$579 mil em vendas nos primeiros 4 meses. ROI excepcional: R$70 mil faturados com apenas R$2 mil de investimento.',
    provas: ['Depoimento em vídeo', 'Print WhatsApp R$70K'],
    temVideo: true
  },
  {
    cliente: 'Grupo Sorriso',
    segmento: '5 clínicas odontológicas em Goiás',
    resultadoPrincipal: 'De 1 para 5 clínicas',
    destaque: 'R$40/dia → R$100/dia | 2 novas unidades em 2026',
    descricao: '9 meses de parceria com estruturação digital completa: Google Ads, Meta Ads, conteúdo. Demanda previsível de pacientes e expansão acelerada — incluindo a 5ª clínica inaugurada em julho de 2026.',
    provas: ['Fotos das clínicas'],
    temVideo: false
  },
  {
    cliente: 'Rodrigo Tintas',
    segmento: 'Tintas e ferragens — 10+ anos',
    resultadoPrincipal: '+R$45.000 no 1º mês',
    destaque: 'Resultado rápido desde o início',
    descricao: 'Aumento de R$45 mil no faturamento já no primeiro mês de parceria. Prova de que o método funciona desde o início.',
    provas: [],
    temVideo: false
  },
  {
    cliente: 'Dr. Benício',
    segmento: 'Cirurgias corporais (lipedema, emagrecimento)',
    resultadoPrincipal: 'R$150K em 6 meses',
    destaque: 'Alto ticket — cirurgia plástica',
    descricao: 'R$150 mil em faturamento com cirurgias plásticas em 6 meses. Prova de que o método funciona para vendas de alto valor em mercados competitivos.',
    provas: [],
    temVideo: false
  },
  {
    cliente: 'Ciaasa (Ford)',
    segmento: 'Concessionária automotiva',
    resultadoPrincipal: 'Recorde de vendas da Ranger',
    destaque: 'Vários meses consecutivos de recorde',
    descricao: 'Recorde de vendas da Ford Ranger em vários meses consecutivos com leads gerados pela M|P. Estratégia de Google Ads com segmentação específica.',
    provas: [],
    temVideo: false
  },
]
```

**Layout de cada case:**
```
Card grande com:
- Logo do cliente (topo esquerdo)
- Badge com segmento
- Número principal em destaque (text-4xl font-bold text-[gold])
- Descrição
- Ícones de provas (🎥 vídeo, 📱 print WhatsApp)
- Linha separadora dourada
```

#### SEÇÃO — DEPOIMENTOS
```
Seção com vídeos embed e prints (slider ou grid)
Título: "O que nossos clientes dizem."
```

**CTA:** "QUERO ESSE RESULTADO NA MINHA EMPRESA" → /diagnostico

---

### 5.7 PROCESSO COMERCIAL (`app/processo-comercial/page.tsx`)

**Meta:**
```ts
title: "Processo Comercial | M|P Assessoria — CRM, Vendas e Treinamento"
description: "CRM, treinamento de vendas, automações e clareza total sobre de onde vêm os leads e as vendas. A M|P estrutura o processo comercial da sua empresa."
```

**Hero:**
```
H1: "Gerar lead é só metade do caminho. A outra metade é vender."
Sub: "A maioria das agências para no lead. A M|P vai até a venda — e estrutura todo o processo comercial para que cada oportunidade seja aproveitada."
```

**Blocos de conteúdo:**

```ts
const processoComercial = [
  {
    titulo: 'Implementação de CRM',
    descricao: 'Escolhemos e configuramos o CRM ideal. Criamos o funil de vendas com todas as etapas: lead novo, primeiro contato, qualificação, proposta, negociação, fechamento. Cada lead tem dono, prazo e status. Nada se perde.',
    icone: 'Database'
  },
  {
    titulo: 'Treinamento de Vendas',
    descricao: 'Treinamos o time comercial: primeira abordagem, momento de avançar, objeções, follow-up. Vendas não é talento — é técnica.',
    icone: 'GraduationCap'
  },
  {
    titulo: 'Automações Comerciais',
    descricao: 'Fluxos automáticos que acompanham o lead: e-mail de boas-vindas, lembrete de follow-up, notificação de inatividade, alerta de oportunidade quente.',
    icone: 'Zap'
  },
  {
    titulo: 'Clareza Total: De Onde Vêm os Leads',
    descricao: 'Com CRM integrado ao tráfego pago, o empresário sabe exatamente: quantos leads entraram, de qual canal vieram, em qual etapa estão, quantos viraram venda e qual o valor gerado.',
    icone: 'Eye'
  },
  {
    titulo: 'Mapeamento da Jornada de Compra',
    descricao: 'Mapeamos toda a jornada: da pesquisa no Google ao fechamento. Cada ponto de contato é otimizado para aumentar a taxa de conversão.',
    icone: 'Route'
  },
]
```

**Tabela ANTES vs DEPOIS:**
```
Layout: 2 colunas, header vermelho (antes) e verde (depois)
```

```ts
const comparativo = [
  { antes: 'Leads perdidos no WhatsApp', depois: 'Cada lead registrado no CRM com dono e prazo' },
  { antes: 'Faturamento "descoberto" no fim do mês', depois: 'Previsibilidade de receita com dados em tempo real' },
  { antes: 'Dependência de uma pessoa para vender', depois: 'Processo documentado que qualquer vendedor segue' },
  { antes: 'Sem follow-up — lead esfria em 24h', depois: 'Automações que acompanham o lead automaticamente' },
  { antes: '"Não sei de onde veio essa venda"', depois: 'Rastreamento completo: canal, campanha e custo por venda' },
  { antes: 'Cada um vende do seu jeito', depois: 'Scripts, etapas e treinamento padronizado' },
]
```

**CTA:** "QUERO ESTRUTURAR MEU PROCESSO COMERCIAL" → /diagnostico

---

### 5.8 BLOG (`app/blog/page.tsx`)

**Estrutura:**
Página de listagem com cards de artigo. Categorias filtráveis. Sidebar com CTA de diagnóstico.

**Categorias:** Marketing Digital, Vendas, CRM, Tráfego Pago, IA, Cases

**Nota:** Inicialmente criar a estrutura/layout sem artigos reais. Usar 3-4 artigos placeholder com títulos sugeridos:
- "Por que tráfego pago sozinho não funciona mais"
- "Quanto custa um profissional de marketing ruim"
- "Assessoria vs. Agência: qual a diferença"
- "5 sinais de que sua empresa precisa de um CRM"

---

### 5.9 DIAGNÓSTICO GRATUITO (`app/diagnostico/page.tsx`)

**Meta:**
```ts
title: "Diagnóstico Gratuito | M|P Assessoria — Análise do Seu Negócio"
description: "Agende um diagnóstico gratuito com os sócios da M|P. Vamos analisar seu negócio, identificar oportunidades e mostrar como vender mais com método."
```

**Layout:** Página limpa, SEM header de navegação completo (reduzir saídas). Apenas logo + botão voltar. Grid 2 cols: copy à esquerda, formulário à direita.

**Copy (lado esquerdo):**
```
H1: "Vamos analisar seu negócio — sem custo e sem compromisso."

Sub: "O diagnóstico da M|P é uma reunião estratégica direta com os sócios Marcos e Pedro Goulart. Em 30 a 45 minutos, vamos:"

Lista (check icons dourados):
• Analisar sua presença digital atual
• Identificar o que não está sendo explorado
• Mostrar onde sua empresa está perdendo dinheiro
• Apresentar oportunidades reais de crescimento
• Explicar como nossa metodologia se aplica ao seu negócio

"Sem pitch de vendas forçado. Sem pressão. Você sai da reunião com clareza — independente de fechar ou não."

Badge: "+170 empresas já passaram por esse diagnóstico."
```

**Depoimento (abaixo da copy):**
```
"Eu achava que marketing não funcionava pro meu segmento. Na reunião com o Marcos, vi que o problema era a falta de processo. Em 4 meses, geramos R$579 mil em vendas."
— Dono da Pacheco Solar
```

**Formulário (lado direito):**
```ts
const formFields = [
  { name: 'nome', label: 'Nome completo', type: 'text', required: true },
  { name: 'empresa', label: 'Nome da empresa', type: 'text', required: true },
  { name: 'segmento', label: 'Segmento de atuação', type: 'text', required: true },
  {
    name: 'faturamento',
    label: 'Faturamento médio mensal',
    type: 'select',
    options: ['Até R$50K', 'R$50K - R$100K', 'R$100K - R$300K', 'Acima de R$300K'],
    required: true
  },
  { name: 'whatsapp', label: 'WhatsApp para contato', type: 'tel', required: true },
]
```

**Botão submit:**
```
Texto: "QUERO MEU DIAGNÓSTICO GRATUITO"
Estilo: full-width, bg-[gold], text-black, font-bold, py-4, text-lg
```

**Texto abaixo do botão:**
```
"Atendimento direto com Marcos e Pedro Goulart, sócios da M|P Assessoria. Sem intermediários."
```

### Thank You Page (`app/diagnostico/obrigado/page.tsx`)

```
H2: "Recebemos seus dados. O próximo passo é nosso."

"Em até 24 horas, o Marcos ou Pedro vai entrar em contato pelo WhatsApp para agendar sua reunião de diagnóstico."

"Enquanto isso, conheça mais sobre nosso trabalho:"

Links:
• VER NOSSOS RESULTADOS → /clientes
• CONHEÇA NOSSA METODOLOGIA → /metodologia
• SIGA NO INSTAGRAM → https://instagram.com/mp_assessoriadigital
```

---

## 6. SEO E PERFORMANCE

### Meta tags obrigatórias (todas as páginas)
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://mppartners.com.br/[pagina]">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="M|P Assessoria">
<meta property="og:image" content="/images/og-image.jpg"> <!-- criar imagem 1200x630 -->

<!-- Schema markup (JSON-LD) na Home -->
LocalBusiness schema com nome, endereço, telefone, horário
```

### Scripts (via `next/script`)
```
- Google Tag Manager (head)
- Meta Pixel (head)
- Google Analytics 4 (via GTM)
```

### Performance
```
- Imagens: usar next/image com lazy loading e formatos WebP
- Fontes: font-display: swap
- Core Web Vitals: LCP < 2.5s
- Priorizar above-the-fold content
```

---

## 7. RESPONSIVIDADE

**Breakpoints (Tailwind padrão):**
- Mobile: default (< 640px)
- Tablet: `sm:` (640px) e `md:` (768px)
- Desktop: `lg:` (1024px) e `xl:` (1280px)

**Regras gerais:**
- Mobile-first (70%+ do tráfego vem de celular)
- Hero: grid 1 col mobile → 2 cols desktop
- Cards: 1 col mobile → 2 cols tablet → 3-4 cols desktop
- Formulário de diagnóstico: stack completo no mobile
- Menu: hamburger no mobile com drawer lateral
- WhatsApp button: sempre visível, mesmo no mobile
- CTAs: full-width no mobile

---

## 8. ASSETS DISPONÍVEIS

As pastas originais de assets foram movidas para `brand-assets/` (fora do build, gitignored):

```
brand-assets/fotos-socios/      → otimizadas para /public/images/socios/
brand-assets/logo-mp/           → logo recriado como componente MPLogo.tsx
brand-assets/logos-clientes/    → otimizadas para /public/images/logos/clientes/
```

**Assets que precisam ser criados/obtidos:**
- Fotos da equipe (videomaker, social media, designer, etc.)
- Fotos do escritório / bastidores
- Prints de resultado de CRM/WhatsApp (cases)
- Vídeos de depoimentos (Pacheco Solar, Master Carnes) — ou embed de YouTube/Instagram
- Logos dos demais ~16 clientes (hoje: chip de texto como fallback)
- OG Image (gerada por código em `app/opengraph-image.tsx`)
- Favicon (gerado por código em `app/icon.tsx`)

---

## 9. FORMULÁRIO — INTEGRAÇÃO

O formulário de diagnóstico envia os dados para a API route interna, que repassa a um webhook:

**Implementado (Opção A + B combinadas):**
```
POST /api/diagnostico → valida com zod → repassa para DIAGNOSTICO_WEBHOOK_URL (env)
Sem env configurada: lead fica registrado no log do servidor (Vercel Functions).
Após submit: redirect para /diagnostico/obrigado
```

---

## 10. PRIORIDADE DE IMPLEMENTAÇÃO

### Fase 1 (MVP — lançar primeiro):
1. Layout global (Header, Footer, WhatsApp)
2. Home (todas as seções)
3. Diagnóstico Gratuito (formulário funcional)
4. Clientes e Resultados

### Fase 2 (completar):
5. Sobre a M|P
6. Metodologia
7. Serviços
8. Processo Comercial

### Fase 3 (extras):
9. Inteligência Artificial
10. Blog (estrutura)
11. Animações e polish
12. SEO avançado e Schema markup
