export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: string;
  differentials: string[];
  targetAudience: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  name: string;
  description: string;
  sla: string;
  discardCriteria: string;
  advanceTrigger: string;
}

export interface CommercialProcess {
  id: string;
  name: string;
  objective: string;
  targetAudience: string;
  strategy: string;
  tool: string;
  steps: ProcessStep[];
  indicators: { name: string; description: string }[];
}

export const products: Product[] = [
  {
    id: "crm-imobiliario",
    name: "CRM Imobiliário",
    category: "Gestão",
    description:
      "Sistema completo de gestão de relacionamento com clientes para imobiliárias. Centraliza leads, clientes, imóveis e atendimentos em uma única plataforma.",
    pricing: "A partir de R$ 297/mês (plano essencial) | R$ 597/mês (plano profissional) | R$ 997/mês (plano enterprise)",
    differentials: [
      "Gestão 360° de leads e clientes em um só lugar",
      "Automação de follow-ups e lembretes inteligentes",
      "Painel de produção comercial em tempo real",
      "Integração nativa com portais imobiliários",
      "App mobile para corretores em campo",
    ],
    targetAudience: "Imobiliárias de pequeno e médio porte que buscam profissionalizar a gestão comercial",
    icon: "building",
  },
  {
    id: "site-integrado",
    name: "Site Integrado",
    category: "Presença Digital",
    description:
      "Site institucional e de imóveis totalmente integrado ao CRM. Atualização automática de catálogo, captação de leads e sincronização em tempo real.",
    pricing: "A partir de R$ 197/mês (plano básico) | R$ 397/mês (plano premium com domínio próprio)",
    differentials: [
      "Sincronização automática com o CRM Imobiliário",
      "Catálogo de imóveis sempre atualizado",
      "Formulários de captação de leads integrados",
      "SEO otimizado para portais imobiliários",
      "Design responsivo e moderno",
    ],
    targetAudience: "Imobiliárias que precisam de presença digital profissional com captação automática de leads",
    icon: "globe",
  },
  {
    id: "app-leads",
    name: "Aplicativo Gerenciador de Leads",
    category: "Produtividade",
    description:
      "App mobile para corretores gerenciarem leads em tempo real, receber notificações instantâneas e manter o atendimento ágil onde estiverem.",
    pricing: "Incluso nos planos profissional e enterprise do CRM Imobiliário",
    differentials: [
      "Notificações push de novos leads em tempo real",
      "Geolocalização de imóveis e clientes",
      "Agenda integrada com lembretes",
      "Status de atendimento visível para toda a equipe",
      "Funciona offline com sincronização automática",
    ],
    targetAudience: "Corretores e equipes comerciais que atuam em campo",
    icon: "smartphone",
  },
  {
    id: "albert-ia",
    name: "Albert | Inteligência Artificial para Atendimento",
    category: "Inteligência Artificial",
    description:
      "Assistente virtual com IA que atende clientes 24/7, qualifica leads, responde dúvidas frequentes e agenda visitas automaticamente.",
    pricing: "A partir de R$ 497/mês (plano standard) | R$ 997/mês (plano avançado com IA customizada)",
    differentials: [
      "Atendimento 24/7 sem intervenção humana",
      "Qualificação automática de leads com scoring",
      "Agendamento de visitas integrado à agenda",
      "Respostas personalizadas baseadas no catálogo",
      "Relatórios de conversa e intenção de compra",
    ],
    targetAudience: "Imobiliárias com alto volume de leads que precisam de atendimento imediato",
    icon: "brain",
  },
  {
    id: "site-v8",
    name: "Site Personalizado V8",
    category: "Presença Digital",
    description:
      "Solução premium de site personalizado com design exclusivo, recursos avançados de UX, performance otimizada e identidade visual única.",
    pricing: "A partir de R$ 1.997 (setup) + R$ 297/mês (manutenção e hosting)",
    differentials: [
      "Design 100% personalizado e exclusivo",
      "Performance e velocidade de carregamento otimizadas",
      "Recursos avançados: tour virtual 360°, mapas interativos",
      "Integração completa com CRM e ferramentas Microsistec",
      "Suporte prioritário e atualizações contínuas",
    ],
    targetAudience: "Imobiliárias de grande porte que precisam de diferenciação digital premium",
    icon: "layout",
  },
];

export const commercialProcesses: CommercialProcess[] = [
  {
    id: "processo-cpr",
    name: "Processo Comercial de Atendimento 2.0 (Projeto CPR)",
    objective:
      "Estruturar o atendimento comercial para clientes ativos, garantindo relacionamento contínuo, identificação de oportunidades de cross-sell e upsell, e maximização do LTV.",
    targetAudience: "Clientes ativos da base Microsistec",
    strategy:
      "Atendimento proativo e consultivo, com foco em retenção e expansão. Cada cliente ativo recebe contato periódico para avaliação de satisfação, identificação de novas necessidades e apresentação de soluções complementares.",
    tool: "CRM Imobiliário + Aplicativo Gerenciador de Leads",
    steps: [
      {
        id: "potencial-cliente",
        name: "Potencial Cliente",
        description:
          "Cliente ativo identificado com potencial para expansão ou nova necessidade.",
        sla: "Tempo máximo de permanência: 15 dias",
        discardCriteria: "Cliente sem resposta após 3 tentativas de contato em 15 dias",
        advanceTrigger: "Cliente responde e demonstra interesse em nova solução",
      },
      {
        id: "reuniao-agendada",
        name: "Reunião Agendada",
        description: "Reunião de diagnóstico e apresentação de soluções complementares.",
        sla: "Tempo máximo de permanência: 7 dias",
        discardCriteria: "Cliente cancela ou não comparece à reunião sem reagendamento",
        advanceTrigger: "Reunião realizada com sucesso e cliente solicita proposta",
      },
    ],
    indicators: [
      { name: "Taxa de Cross-sell", description: "Percentual de clientes ativos que adquiriram novo produto" },
      { name: "Tempo de Ciclo", description: "Tempo médio do primeiro contato ao fechamento" },
      { name: "NPS de Clientes Ativos", description: "Net Promoter Score dos clientes em atendimento" },
      { name: "Receita Recorrente Expandida", description: "Receita adicional gerada por cliente ativo" },
    ],
  },
  {
    id: "processo-inbound",
    name: "Processo Comercial de Atendimento | Inbound",
    objective:
      "Converter leads inbound em clientes, garantindo atendimento rápido, qualificação eficiente e acompanhamento estruturado até o fechamento.",
    targetAudience: "Leads inbound provenientes de site, redes sociais e portais",
    strategy:
      "Atendimento veloz e qualificado. SLA rigoroso de primeiro contato, qualificação baseada em ICP e funil estruturado com gatilhos claros de avanço.",
    tool: "CRM Imobiliário + Albert (IA de Atendimento)",
    steps: [
      {
        id: "lead-recebido",
        name: "Lead Recebido",
        description: "Lead entra no funil via formulário do site, rede social ou portal imobiliário.",
        sla: "SLA de atendimento: 5 minutos (horário comercial) | 1 hora (fora do horário)",
        discardCriteria: "Lead com dados inválidos ou incompletos após 2 tentativas de contato",
        advanceTrigger: "Primeiro contato realizado com sucesso (telefone, WhatsApp ou e-mail)",
      },
      {
        id: "primeiro-contato",
        name: "Primeiro Contato",
        description: "Primeiro contato com o lead para apresentação inicial e verificação de interesse.",
        sla: "Tempo máximo de permanência: 2 dias",
        discardCriteria: "Lead não responde após 3 tentativas em 2 dias",
        advanceTrigger: "Lead demonstra interesse e tem perfil compatível com ICP",
      },
      {
        id: "lead-qualificado",
        name: "Lead Qualificado",
        description: "Lead validado conforme ICP (Ideal Customer Profile) com necessidade real identificada.",
        sla: "Tempo máximo de permanência: 3 dias",
        discardCriteria: "Lead não se enquadra no ICP ou não tem orçamento/necessidade",
        advanceTrigger: "Lead concorda em agendar reunião de diagnóstico",
      },
      {
        id: "reuniao-agendada-inbound",
        name: "Reunião Agendada",
        description: "Reunião de diagnóstico agendada com o lead qualificado.",
        sla: "Tempo máximo de permanência: 7 dias",
        discardCriteria: "Lead cancela ou não comparece sem reagendamento",
        advanceTrigger: "Reunião realizada com sucesso",
      },
      {
        id: "reuniao-realizada",
        name: "Reunião Realizada",
        description: "Reunião de diagnóstico e apresentação de soluções realizada.",
        sla: "Tempo máximo de permanência: 5 dias",
        discardCriteria: "Lead decide não prosseguir após apresentação",
        advanceTrigger: "Lead solicita proposta comercial",
      },
      {
        id: "em-negociacao",
        name: "Em Negociação",
        description: "Negociação de termos, condições e personalizações.",
        sla: "Tempo máximo de permanência: 10 dias",
        discardCriteria: "Lead não responde após 3 tentativas em 10 dias",
        advanceTrigger: "Negociação concluída e proposta formal enviada",
      },
      {
        id: "proposta-enviada",
        name: "Proposta Enviada",
        description: "Proposta comercial formal enviada ao lead.",
        sla: "Tempo máximo de permanência: 7 dias",
        discardCriteria: "Lead rejeita a proposta definitivamente",
        advanceTrigger: "Lead aceita a proposta e inicia processo de contratação",
      },
      {
        id: "venda-ganha",
        name: "Venda Ganha",
        description: "Lead converte em cliente. Contrato assinado e onboarding iniciado.",
        sla: "Onboarding em até 7 dias",
        discardCriteria: "N/A - etapa final de sucesso",
        advanceTrigger: "N/A - etapa final de sucesso",
      },
    ],
    indicators: [
      { name: "Taxa de Conversão", description: "Percentual de leads que viram clientes" },
      { name: "SLA de Primeiro Contato", description: "Percentual de leads atendidos dentro do SLA de 5 minutos" },
      { name: "Tempo de Ciclo Comercial", description: "Tempo médio do lead recebido à venda ganha" },
      { name: "Taxa de Qualificação", description: "Percentual de leads que passam para Lead Qualificado" },
      { name: "Ticket Médio", description: "Valor médio dos contratos fechados" },
    ],
  },
];

export const icpData = {
  title: "Perfil Ideal de Cliente (ICP)",
  sections: [
    {
      label: "Porte",
      value: "Pequenas e médias imobiliárias (2 a 50 corretores)",
    },
    {
      label: "Estrutura Comercial",
      value: "Equipe comercial estruturada com pelo menos 1 responsável por captação de leads",
    },
    {
      label: "Maturidade Digital",
      value: "Já possui ou busca ter presença digital ativa (site, redes sociais, portais)",
    },
    {
      label: "Necessidades",
      value: "Gestão eficiente de leads, profissionalização do atendimento comercial, automação de processos",
    },
  ],
  crossSell: [
    {
      product: "CRM Imobiliário",
      opportunity: "Cliente que já usa Site Integrado tem 70% de aderência ao CRM",
    },
    {
      product: "Albert (IA)",
      opportunity: "Cliente com mais de 50 leads/mês se beneficia diretamente do Albert",
    },
    {
      product: "Site V8",
      opportunity: "Cliente enterprise que busca diferenciação digital premium",
    },
  ],
};

export const valueProposition = {
  title: "Nossa Essência",
  description:
    "A Microsistec transforma a gestão comercial de imobiliárias através de tecnologia. Nossa promessa de valor é entregar não apenas software, mas um ecossistema completo que potencializa resultados comerciais, reduz tempo operacional e aumenta a conversão de leads em clientes.",
  pillars: [
    {
      title: "Tecnologia que Simplifica",
      description: "Plataforma integrada que elimina ferramentas dispersas e centraliza toda a operação comercial.",
    },
    {
      title: "Inteligência que Converte",
      description: "IA e automações que qualificam leads, priorizam atendimentos e aumentam taxas de conversão.",
    },
    {
      title: "Dados que Direcionam",
      description: "Indicadores em tempo real que embasam decisões comercuais e identificam oportunidades.",
    },
  ],
};

export const strategicPillars = [
  {
    id: "crescimento-receita",
    title: "Crescimento de Receita",
    description: "Expandir receita através de aquisição estratégica, cross-sell e upsell na base existente.",
    metrics: ["MRR", "NRR", "Taxa de Cross-sell", "Ticket Médio"],
  },
  {
    id: "excelencia-operacional",
    title: "Excelência Operacional",
    description: "Otimizar processos internos para entregar valor mais rápido e com maior qualidade.",
    metrics: ["Tempo de Onboarding", "NPS de Produto", "Taxa de Churn", "SLA de Suporte"],
  },
  {
    id: "performance-comercial",
    title: "Performance Comercial",
    description: "Estruturar funil comercial com gatilhos claros, SLAs definidos e indicadores acompanhados.",
    metrics: ["Taxa de Conversão", "Tempo de Ciclo", "SLA de Atendimento", "Volume de Leads"],
  },
  {
    id: "gestao-indicadores",
    title: "Gestão por Indicadores",
    description: "Decisões baseadas em dados com dashboards em tempo real e metas rastreáveis.",
    metrics: ["Dashboards Ativos", "Metas Atingidas", "Forecast Accuracy", "Coverage Ratio"],
  },
  {
    id: "desenvolvimento-equipe",
    title: "Desenvolvimento da Equipe",
    description: "Capacitar continuamente o time comercial com treinamentos, materiais e feedback estruturado.",
    metrics: ["Horas de Treinamento", "Ramp-up Time", "Taxa de Atingimento Individual"],
  },
  {
    id: "inteligencia-comercial",
    title: "Inteligência Comercial",
    description: "Centralizar todo o conhecimento comercial em uma única plataforma acessível ao time.",
    metrics: ["Conteúdos Disponíveis", "Tempo de Busca", "Adoção da Plataforma"],
  },
];
