/**
 * Base de conhecimento da Central de Inteligência Comercial — Microsistec.
 * Conteúdo estruturado para navegação por menu lateral e busca full-text.
 */

export type Block =
  | { type: "text"; value: string }
  | { type: "callout"; title: string; value: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "steps"; title?: string; items: { label: string; detail: string }[] }
  | { type: "table"; title?: string; headers: string[]; rows: string[][] }
  | { type: "kpis"; items: { label: string; value: string; hint?: string }[] };

export type Section = {
  slug: string;
  title: string;
  group: string;
  icon: string;
  summary: string;
  tags: string[];
  blocks: Block[];
};

export const SECTIONS: Section[] = [
  {
    slug: "missao-comercial",
    title: "Missão do Comercial",
    group: "Estratégia",
    icon: "Target",
    summary:
      "Operação comercial previsível, escalável e orientada por dados para crescer receita recorrente.",
    tags: ["missão", "objetivos", "mrr", "processo", "metas"],
    blocks: [
      {
        type: "text",
        value:
          "Estruturar uma operação comercial previsível, escalável e orientada por dados, aumentando a receita recorrente por meio da padronização dos processos, da evolução contínua da equipe e da melhoria das taxas de conversão e retenção.",
      },
      {
        type: "list",
        title: "1. Crescimento de receita",
        items: [
          "Aumentar o MRR de Cross Sell.",
          "Aumentar o ticket médio.",
          "Aumentar a quantidade de vendas mensais.",
          "Identificar novas oportunidades de Upsell.",
        ],
      },
      {
        type: "list",
        title: "2. Excelência operacional",
        items: [
          "Padronizar processos.",
          "Documentar o playbook comercial.",
          "Criar fluxos claros para todas as etapas da venda.",
          "Reduzir retrabalho e dependência de conhecimento individual.",
        ],
      },
      {
        type: "list",
        title: "3. Performance comercial",
        items: [
          "Melhorar a conversão em cada etapa do funil.",
          "Aumentar a taxa de comparecimento às reuniões (Show Rate).",
          "Reduzir o ciclo de vendas.",
          "Melhorar a qualidade das oportunidades trabalhadas.",
        ],
      },
      {
        type: "list",
        title: "4. Gestão por indicadores",
        items: [
          "MRR gerado.",
          "Conversão por etapa.",
          "Reuniões agendadas e realizadas.",
          "Taxa de fechamento e ticket médio.",
          "Receita por closer e por produto.",
          "Tempo médio até o fechamento.",
        ],
      },
      {
        type: "list",
        title: "5. Desenvolvimento da equipe",
        items: [
          "Criar rotina de feedback.",
          "Desenvolver treinamentos.",
          "Padronizar discursos comerciais.",
          "Criar biblioteca de objeções.",
          "Implementar role plays e reciclagens.",
        ],
      },
      {
        type: "list",
        title: "6. Inteligência comercial",
        items: [
          "Segmentar a base para ações de Cross Sell.",
          "Definir critérios de priorização.",
          "Mapear motivos de perda.",
          "Identificar padrões de clientes que compram mais.",
          "Transformar dados em novas estratégias comerciais.",
        ],
      },
    ],
  },
  {
    slug: "posicionamento",
    title: "Posicionamento & Visão",
    group: "Estratégia",
    icon: "Compass",
    summary:
      "Onde a Microsistec está hoje no mercado imobiliário e para onde a marca quer evoluir.",
    tags: ["posicionamento", "marca", "visão", "mercado imobiliário"],
    blocks: [
      {
        type: "text",
        value:
          "A Microsistec é reconhecida no mercado imobiliário como uma empresa de tecnologia que oferece soluções para a gestão de imobiliárias, reunindo em uma única plataforma recursos para cadastro de imóveis, integração com portais, CRM, funil de atendimento, relatórios gerenciais e sites imobiliários.",
      },
      {
        type: "text",
        value:
          "Apesar de possuir uma base consolidada de clientes e soluções completas, o posicionamento da marca ainda é fortemente associado ao sistema de gestão. Existe uma oportunidade de ampliar essa percepção, evidenciando a Microsistec como parceira estratégica para o crescimento das imobiliárias, e não apenas como fornecedora de software.",
      },
      {
        type: "callout",
        title: "Onde queremos chegar",
        value:
          "Posicionar a Microsistec como uma das principais referências em tecnologia para o mercado imobiliário, sendo percebida como uma plataforma completa de crescimento, capaz de apoiar toda a jornada da imobiliária: da captação de imóveis e geração de leads até o atendimento, a gestão comercial e a tomada de decisão baseada em dados.",
      },
      {
        type: "list",
        title: "Como isso aparece no discurso comercial",
        items: [
          "Falar de resultado da imobiliária antes de falar de funcionalidade do sistema.",
          "Conectar cada produto a um indicador do cliente (leads, tempo de resposta, conversão).",
          "Reforçar a cultura de Cross Sell: Albert e Site V8 ampliam o resultado de quem já usa o CRM.",
          "Usar dados da própria operação do cliente como argumento (volume de leads, tempo de atendimento).",
        ],
      },
    ],
  },
  {
    slug: "produtos",
    title: "Cardápio de Produtos",
    group: "Produtos",
    icon: "Boxes",
    summary:
      "CRM Imobiliário, Site Integrado, App de Leads, Albert (IA) e Site Personalizado V8.",
    tags: [
      "produtos",
      "crm",
      "site integrado",
      "aplicativo",
      "albert",
      "inteligência artificial",
      "site v8",
      "benefícios",
    ],
    blocks: [
      {
        type: "text",
        value:
          "O ecossistema Microsistec é modular: o CRM é a base da operação e os demais produtos ampliam captação, atendimento e conversão.",
      },
      {
        type: "callout",
        title: "CRM Imobiliário — plataforma central",
        value:
          "Centraliza cadastro de imóveis, gestão de clientes, funil comercial, divulgação para portais, acompanhamento de atendimentos e relatórios gerenciais. Objetivo: centralizar a operação da imobiliária em uma única plataforma, com mais organização, produtividade e controle.",
      },
      {
        type: "list",
        title: "CRM Imobiliário — principais benefícios",
        items: [
          "Gestão completa da carteira de imóveis.",
          "Integração com os principais portais imobiliários.",
          "Controle do funil de vendas e locação.",
          "Gestão de clientes e oportunidades.",
          "Relatórios para tomada de decisão.",
          "Redução de retrabalho e aumento da produtividade.",
        ],
      },
      {
        type: "callout",
        title: "Site Integrado",
        value:
          "Conectado diretamente ao CRM: os imóveis cadastrados são atualizados automaticamente no site da imobiliária, sem duplicidade de trabalho. Objetivo: oferecer uma vitrine digital sempre atualizada.",
      },
      {
        type: "list",
        title: "Site Integrado — principais benefícios",
        items: [
          "Atualização automática dos imóveis.",
          "Integração total com o CRM.",
          "Melhor experiência para o usuário.",
          "Maior agilidade na divulgação dos imóveis.",
          "Redução de erros e inconsistências nas informações.",
        ],
      },
      {
        type: "callout",
        title: "Aplicativo Gerenciador de Leads",
        value:
          "Permite que corretores e gestores acompanhem e gerenciem leads em tempo real, mesmo fora da imobiliária. Objetivo: agilidade no atendimento e no acompanhamento das oportunidades.",
      },
      {
        type: "list",
        title: "Aplicativo — principais benefícios",
        items: [
          "Atendimento de qualquer lugar.",
          "Notificações em tempo real.",
          "Gestão prática dos leads.",
          "Atualização rápida das negociações.",
          "Maior mobilidade para a equipe comercial.",
        ],
      },
      {
        type: "callout",
        title: "Albert | Inteligência Artificial para Atendimento",
        value:
          "Solução de IA da Microsistec para automatizar o atendimento inicial, responder dúvidas, qualificar leads e agilizar o processo comercial. Objetivo: aumentar a velocidade de atendimento, melhorar a experiência do cliente e potencializar a geração de oportunidades.",
      },
      {
        type: "list",
        title: "Albert — principais benefícios",
        items: [
          "Atendimento automatizado 24 horas por dia.",
          "Respostas rápidas e padronizadas.",
          "Qualificação inicial dos leads.",
          "Direcionamento inteligente para os corretores.",
          "Redução do tempo de resposta.",
          "Aumento da produtividade da equipe.",
          "Atualizações automáticas de imóveis.",
          "Disparo de mensagens.",
        ],
      },
      {
        type: "callout",
        title: "Site Personalizado V8",
        value:
          "Solução premium para imobiliárias que querem fortalecer a marca, ampliar presença digital e gerar negócios pela busca orgânica no Google. Objetivo: transformar o site em canal estratégico de captação.",
      },
      {
        type: "list",
        title: "Site V8 — principais benefícios",
        items: [
          "Layout personalizado conforme a identidade visual da imobiliária.",
          "Estrutura otimizada para SEO (Google).",
          "Melhor desempenho e experiência de navegação.",
          "Integração completa com o CRM.",
          "Maior potencial para geração de leads próprios.",
          "Fortalecimento da autoridade da marca no ambiente digital.",
        ],
      },
    ],
  },
  {
    slug: "precificacao",
    title: "Precificação & Condições",
    group: "Produtos",
    icon: "CircleDollarSign",
    summary:
      "Estrutura de preços por produto, regras de desconto, alçadas de aprovação e condições comerciais.",
    tags: [
      "preço",
      "precificação",
      "valores",
      "desconto",
      "mensalidade",
      "implantação",
      "contrato",
      "ticket médio",
    ],
    blocks: [
      {
        type: "callout",
        title: "Preencher com os valores oficiais",
        value:
          "Esta tabela está com a estrutura pronta e valores marcados como “a confirmar”. Assim que a tabela oficial for definida, os campos devem ser substituídos — nenhum valor abaixo deve ser usado em proposta antes da validação da liderança comercial.",
      },
      {
        type: "table",
        title: "Tabela de referência",
        headers: ["Produto", "Modelo de cobrança", "Investimento", "Setup / Implantação"],
        rows: [
          ["CRM Imobiliário", "Mensalidade recorrente (por plano / nº de usuários)", "A confirmar", "A confirmar"],
          ["Site Integrado", "Mensalidade — comercializado junto ao CRM", "A confirmar", "A confirmar"],
          ["Aplicativo Gerenciador de Leads", "Incluso / adicional conforme plano", "A confirmar", "Não se aplica"],
          ["Albert (IA de Atendimento)", "Mensalidade recorrente (Cross Sell)", "A confirmar", "A confirmar"],
          ["Site Personalizado V8", "Setup de projeto + mensalidade", "A confirmar", "A confirmar"],
          ["Upsell (módulos e evolução de plano)", "Acréscimo na mensalidade vigente", "A confirmar", "A confirmar"],
        ],
      },
      {
        type: "list",
        title: "Regras de precificação",
        items: [
          "Todo valor apresentado ao cliente deve estar registrado na proposta dentro do Pipedrive.",
          "Descontos só existem com contrapartida: fidelidade maior, pagamento antecipado ou contratação de mais de um produto.",
          "Cross Sell (Albert / Site V8) não deve ser usado como moeda de desconto do CRM — cada produto sustenta o próprio valor.",
          "Reajuste anual pelo índice previsto em contrato.",
          "Nunca negociar preço antes de o cliente reconhecer o problema e o valor da solução.",
        ],
      },
      {
        type: "table",
        title: "Alçada de aprovação de desconto",
        headers: ["Faixa de desconto", "Quem aprova", "Exigência"],
        rows: [
          ["Até 5%", "Closer responsável", "Registro do motivo no CRM"],
          ["De 6% a 15%", "Liderança comercial", "Justificativa + contrapartida de prazo"],
          ["Acima de 15%", "Diretoria", "Análise de margem e volume"],
        ],
      },
      {
        type: "list",
        title: "Como defender o preço",
        items: [
          "Traduza o investimento mensal em custo diário e compare com o valor de uma única comissão perdida.",
          "Ancore no ganho: velocidade de resposta, leads recuperados, horas de equipe economizadas.",
          "Nunca abra desconto espontaneamente — só responda a um pedido concreto do cliente.",
          "Ofereça alternativas de escopo antes de reduzir valor (ex.: iniciar com menos usuários).",
        ],
      },
    ],
  },
  {
    slug: "icp",
    title: "ICP — Perfil Ideal de Cliente",
    group: "Estratégia",
    icon: "Users",
    summary:
      "Porte, estrutura comercial, maturidade digital e necessidades da imobiliária ideal.",
    tags: ["icp", "perfil", "qualificação", "porte", "maturidade digital"],
    blocks: [
      {
        type: "list",
        title: "Porte",
        items: [
          "Imobiliárias de pequeno e médio porte em crescimento.",
          "Entre 5 e 50 colaboradores (ou equipe comercial estruturada).",
          "Operação de vendas e/ou locação ativa.",
        ],
      },
      {
        type: "list",
        title: "Estrutura comercial",
        items: [
          "Possui corretores internos ou parceiros.",
          "Recebe volume de no mínimo 100 leads/mês.",
          "Necessita organizar e acompanhar o funil de atendimento.",
          "Busca aumentar produtividade e conversão.",
        ],
      },
      {
        type: "list",
        title: "Maturidade digital",
        items: [
          "Utiliza canais digitais para captação de clientes.",
          "Investe em portais imobiliários.",
          "Possui presença online e interesse em fortalecer a marca.",
          "Está aberta à adoção de novas tecnologias.",
        ],
      },
      {
        type: "list",
        title: "Necessidades",
        items: [
          "Melhorar o atendimento aos leads.",
          "Aumentar a velocidade de resposta.",
          "Gerar mais oportunidades pelo site próprio.",
          "Automatizar processos comerciais.",
          "Tomar decisões baseadas em indicadores.",
        ],
      },
      {
        type: "list",
        title: "Perfil com maior potencial de Cross Sell",
        items: [
          "Já utiliza o CRM da Microsistec.",
          "Possui bom relacionamento com a base.",
          "Está em fase de crescimento.",
          "Demonstra interesse em inovação.",
        ],
      },
      {
        type: "list",
        title: "Sinais de oportunidade para o Albert",
        items: [
          "Tempo elevado de resposta aos leads.",
          "Reclamações sobre perda de oportunidades.",
          "Atendimento concentrado em poucos colaboradores.",
          "Alto volume de mensagens via WhatsApp.",
          "Necessidade de atendimento fora do horário comercial.",
        ],
      },
      {
        type: "list",
        title: "Sinais de oportunidade para o Site V8",
        items: [
          "Site antigo ou com baixa performance.",
          "Pouca geração de leads orgânicos.",
          "Dependência excessiva de portais imobiliários.",
          "Interesse em fortalecer a marca.",
          "Busca por melhor posicionamento no Google.",
        ],
      },
      {
        type: "callout",
        title: "Fora do perfil (red flags)",
        value:
          "Operações sem equipe comercial definida, volume muito baixo de leads, ausência total de processo interno ou expectativa de resultado imediato sem mudança de rotina tendem a gerar churn — qualifique com honestidade antes de avançar.",
      },
    ],
  },
  {
    slug: "proposta-de-valor",
    title: "Proposta de Valor & Essência",
    group: "Estratégia",
    icon: "Sparkles",
    summary: "A promessa da Microsistec e a forma de comunicá-la em uma frase.",
    tags: ["proposta de valor", "promessa", "essência", "pitch"],
    blocks: [
      {
        type: "callout",
        title: "Promessa de valor",
        value:
          "Capacitar imobiliárias com tecnologia integrada para vender mais, atender melhor, operar com eficiência e crescer de forma sustentável.",
      },
      {
        type: "callout",
        title: "Nossa essência",
        value: "Transformamos tecnologia em resultados para o mercado imobiliário.",
      },
      {
        type: "list",
        title: "Pilares que sustentam a promessa",
        items: [
          "Ecossistema integrado: CRM, site, app e IA falando a mesma língua.",
          "Velocidade: responder o lead antes do concorrente.",
          "Autonomia digital: reduzir dependência dos portais.",
          "Decisão por dados: indicadores no lugar de achismo.",
        ],
      },
    ],
  },
  {
    slug: "matriz-produtos",
    title: "Matriz de Produtos",
    group: "Produtos",
    icon: "LayoutGrid",
    summary: "Core, Cross Sell e Upsell — o que ofertar e em qual momento.",
    tags: ["matriz", "core", "cross sell", "upsell", "momento de oferta"],
    blocks: [
      {
        type: "text",
        value:
          "A matriz organiza as soluções de acordo com sua função na estratégia comercial, facilitando a identificação de oportunidades de aquisição, Cross Sell e Upsell.",
      },
      {
        type: "table",
        headers: ["Categoria", "Produto", "Objetivo", "Momento de oferta"],
        rows: [
          [
            "Core",
            "CRM Imobiliário",
            "Solução principal que centraliza a gestão e serve como base do ecossistema.",
            "Aquisição de novos clientes.",
          ],
          [
            "Core",
            "Site Integrado",
            "Complementa o CRM com vitrine digital atualizada automaticamente.",
            "Junto ao CRM ou durante a implantação.",
          ],
          [
            "Cross Sell",
            "Albert (IA de Atendimento)",
            "Automatiza o atendimento, qualifica leads e aumenta a produtividade.",
            "Clientes que já usam o CRM e querem melhorar atendimento e conversão.",
          ],
          [
            "Cross Sell",
            "Site Personalizado V8",
            "Moderniza a presença digital, fortalece a marca e amplia leads orgânicos.",
            "Clientes que buscam crescimento por marketing digital e SEO.",
          ],
          [
            "Upsell",
            "Evolução de plano e módulos adicionais",
            "Expandir o uso da plataforma conforme o crescimento da imobiliária.",
            "Clientes com alta utilização ou necessidade de recursos avançados.",
          ],
        ],
      },
    ],
  },
  {
    slug: "processo-cpr",
    title: "Processo Comercial 2.0 (CPR — Base Ativa)",
    group: "Processos",
    icon: "Workflow",
    summary:
      "Cross Sell na base ativa: funil, regras operacionais, gatilhos e padronização de agenda.",
    tags: ["cpr", "cross sell", "base ativa", "funil", "pipedrive", "processo"],
    blocks: [
      {
        type: "text",
        value:
          "Estruturar um processo comercial padronizado para atuação em clientes ativos da base Microsistec, com foco no aumento do MRR por meio da comercialização de Albert e Site Personalizado V8.",
      },
      {
        type: "callout",
        title: "Público-alvo",
        value:
          "Clientes ativos da base Microsistec com potencial para contratação de soluções complementares, conforme os critérios do ICP de Expansão.",
      },
      {
        type: "text",
        value:
          "A abordagem deve ser consultiva: identificar oportunidades de melhoria na operação da imobiliária antes de apresentar a solução. O foco da reunião é compreender o cenário atual e conectar as necessidades aos benefícios do Albert e do Site V8.",
      },
      {
        type: "table",
        title: "Funil | Clientes ativos",
        headers: ["Etapa", "Objetivo"],
        rows: [
          [
            "Potencial Cliente",
            "Cliente ativo elegível para novos produtos. Primeiro contato e tentativas de agendamento.",
          ],
          ["Reunião Agendada", "Cliente qualificado e reunião confirmada com data e horário."],
          [
            "Reunião Realizada",
            "Diagnóstico, levantamento de necessidades e apresentação da solução adequada.",
          ],
          ["Em Negociação", "Cliente avaliando a proposta, alinhando condições e tratando objeções."],
          ["Aceite de Proposta", "Cliente formalizou o aceite da contratação por e-mail."],
          ["Aguardando Pagamento", "Aguardando confirmação do pagamento após envio do boleto."],
        ],
      },
      {
        type: "callout",
        title: "Ferramenta",
        value:
          "CRM: Pipedrive. Todo o processo deve ser registrado, garantindo rastreabilidade, acompanhamento dos indicadores e previsibilidade da operação.",
      },
      {
        type: "list",
        title: "Regras — etapa Potencial Cliente",
        items: [
          "Permanência máxima de 3 dias corridos na etapa.",
          "Sem evolução para Reunião Agendada, a oportunidade é encerrada e removida do funil.",
          "Descartar quem não responde às tentativas, não demonstra interesse ou fica mais de 3 dias sem avanço.",
          "Antes do descarte, executar a automação de encerramento: e-mail “Tentei falar com você”, mantendo o canal aberto para o futuro.",
        ],
      },
      {
        type: "list",
        title: "Gatilho de avanço — Potencial Cliente → Reunião Agendada",
        items: [
          "Data definida.",
          "Horário confirmado.",
          "Participantes alinhados.",
          "Evento criado na agenda.",
        ],
      },
      {
        type: "callout",
        title: "Padronização da agenda",
        value:
          "[Conferência Web] Microsistec & Cliente | Como otimizar sua operação — permite mensurar reuniões, acompanhar conversão, facilitar auditorias e padronizar a experiência do cliente.",
      },
      {
        type: "list",
        title: "Indicadores do processo",
        items: [
          "Clientes abordados e taxa de contato.",
          "Reuniões agendadas, Show Rate e reuniões realizadas.",
          "Conversão por etapa do funil.",
          "Vendas de Albert e de Site V8.",
          "MRR gerado por Cross Sell.",
          "Tempo médio de negociação.",
          "Taxa de descarte na etapa Potencial Cliente.",
        ],
      },
    ],
  },
  {
    slug: "processo-inbound",
    title: "Processo Comercial | Inbound",
    group: "Processos",
    icon: "Inbox",
    summary:
      "Atendimento de leads de marketing: SLA de 15 minutos, qualificação e funil completo.",
    tags: ["inbound", "leads", "sla", "qualificação", "funil", "marketing"],
    blocks: [
      {
        type: "text",
        value:
          "Processo padronizado para atendimento de leads gerados por canais de Inbound Marketing, garantindo agilidade no primeiro contato, qualificação das oportunidades e aumento das taxas de conversão.",
      },
      {
        type: "list",
        title: "Origem dos leads",
        items: [
          "Site Microsistec",
          "Landing Pages e formulários",
          "Campanhas de marketing e Google",
          "Redes sociais",
          "Indicações",
          "Eventos e feiras",
          "WhatsApp",
        ],
      },
      {
        type: "table",
        title: "Funil | Leads Inbound",
        headers: ["Etapa", "Objetivo"],
        rows: [
          ["Lead Recebido", "Novo lead capturado pelo marketing e registrado automaticamente no CRM."],
          ["Primeiro Contato", "Primeira tentativa de contato para validar interesse e iniciar a qualificação."],
          ["Lead Qualificado", "Confirmar aderência ao ICP, entender o cenário e identificar potencial."],
          ["Reunião Agendada", "Reunião confirmada com data e horário definidos."],
          ["Reunião Realizada", "Diagnóstico, demonstração da plataforma e proposta de valor."],
          ["Em Negociação", "Avaliação de proposta, condições e tratativas de objeções."],
          ["Proposta Enviada", "Proposta comercial formal enviada para análise."],
          ["Venda Ganha", "Contrato fechado e encaminhado para implantação."],
          ["Venda Perdida", "Oportunidade encerrada com registro obrigatório do motivo da perda."],
        ],
      },
      {
        type: "callout",
        title: "SLA de atendimento",
        value:
          "Todo novo lead deve receber a primeira tentativa de contato em até 15 minutos durante o horário comercial. Fora do expediente, no primeiro horário útil seguinte.",
      },
      {
        type: "list",
        title: "Primeiro contato — cadência multicanal",
        items: [
          "Ligação",
          "WhatsApp",
          "E-mail",
          "Sem retorno após o fluxo de tentativas: encerrar como Lead Não Responsivo, mantendo o histórico para ações futuras de marketing.",
        ],
      },
      {
        type: "list",
        title: "Checklist de qualificação (antes de agendar a demo)",
        items: [
          "Perfil da imobiliária.",
          "Quantidade aproximada de imóveis.",
          "Número de usuários.",
          "Sistema utilizado atualmente.",
          "Principais desafios.",
          "Interesse em troca de plataforma.",
          "Momento da decisão.",
        ],
      },
      {
        type: "steps",
        title: "Gatilhos de avanço de etapa",
        items: [
          { label: "Lead Recebido → Primeiro Contato", detail: "Lead registrado automaticamente no CRM." },
          { label: "Primeiro Contato → Lead Qualificado", detail: "Contato realizado com sucesso e interesse confirmado." },
          { label: "Lead Qualificado → Reunião Agendada", detail: "Perfil aderente ao ICP, interesse na apresentação, data e horário definidos." },
          { label: "Reunião Agendada → Reunião Realizada", detail: "Reunião realizada conforme agenda." },
          { label: "Reunião Realizada → Em Negociação", detail: "Interesse na contratação e próximos passos definidos." },
          { label: "Em Negociação → Proposta Enviada", detail: "Proposta comercial enviada." },
          { label: "Proposta Enviada → Venda Ganha", detail: "Proposta aprovada e contratação formalizada." },
        ],
      },
      {
        type: "callout",
        title: "Padronização da agenda",
        value:
          "[Conferência Web] Microsistec & Nome da Imobiliária | Apresentação da Plataforma",
      },
      {
        type: "list",
        title: "Indicadores do processo",
        items: [
          "Leads recebidos e tempo médio de primeiro atendimento.",
          "Taxa de contato e taxa de qualificação.",
          "Reuniões agendadas e Show Rate.",
          "Conversão de reuniões em propostas e de propostas em vendas.",
          "Tempo médio do ciclo de vendas e ticket médio.",
          "Receita gerada, motivos de perda e conversão por origem do lead.",
        ],
      },
    ],
  },
  {
    slug: "indicadores",
    title: "Indicadores & Metas",
    group: "Processos",
    icon: "BarChart3",
    summary: "Painel único com os KPIs que a operação comercial acompanha.",
    tags: ["kpi", "indicadores", "métricas", "show rate", "mrr", "ticket médio"],
    blocks: [
      {
        type: "kpis",
        items: [
          { label: "SLA 1º contato", value: "15 min", hint: "Leads inbound em horário comercial" },
          { label: "Permanência máx.", value: "3 dias", hint: "Etapa Potencial Cliente (CPR)" },
          { label: "Show Rate", value: "Acompanhar", hint: "Reuniões realizadas / agendadas" },
          { label: "MRR Cross Sell", value: "Crescente", hint: "Albert + Site V8" },
        ],
      },
      {
        type: "table",
        title: "Dicionário de indicadores",
        headers: ["Indicador", "Como calcular", "Por que importa"],
        rows: [
          ["Taxa de contato", "Leads contatados ÷ leads recebidos", "Mede eficiência da cadência"],
          ["Taxa de qualificação", "Leads qualificados ÷ leads contatados", "Mede aderência ao ICP"],
          ["Show Rate", "Reuniões realizadas ÷ reuniões agendadas", "Mede qualidade do agendamento"],
          ["Conversão por etapa", "Oportunidades avançadas ÷ oportunidades na etapa", "Mostra onde o funil trava"],
          ["Ticket médio", "Receita ÷ nº de vendas", "Mede valor por negócio"],
          ["MRR gerado", "Soma das mensalidades novas no período", "Mede crescimento recorrente"],
          ["Ciclo de vendas", "Média de dias entre criação e ganho", "Mede previsibilidade"],
          ["Motivos de perda", "Distribuição das perdas por motivo", "Alimenta a inteligência comercial"],
        ],
      },
      {
        type: "list",
        title: "Rotina de acompanhamento",
        items: [
          "Diário: SLA de primeiro contato e agendamentos do dia.",
          "Semanal: funil por etapa, reuniões realizadas e negociações paradas.",
          "Mensal: MRR, ticket médio, receita por produto e por closer, motivos de perda.",
        ],
      },
    ],
  },
  {
    slug: "diferenciais",
    title: "Diferenciais Competitivos",
    group: "Argumentação",
    icon: "Trophy",
    summary: "Por que a Microsistec vence — argumentos prontos por tipo de concorrente.",
    tags: ["diferenciais", "concorrência", "comparativo", "argumentos"],
    blocks: [
      {
        type: "list",
        title: "Os 5 diferenciais para usar em qualquer conversa",
        items: [
          "Ecossistema único: CRM, site, aplicativo e IA integrados — sem colar ferramentas de fornecedores diferentes.",
          "Atualização automática: cadastrou no CRM, publicou no site e nos portais.",
          "Atendimento com IA (Albert): resposta imediata 24/7, algo que sistemas de gestão tradicionais não entregam.",
          "SEO de verdade com o Site V8: geração de leads próprios, reduzindo dependência de portais.",
          "Especialização no mercado imobiliário: o processo do produto já é o processo da imobiliária.",
        ],
      },
      {
        type: "table",
        title: "Como posicionar contra cada cenário",
        headers: ["Cenário do cliente", "Risco para ele", "Nosso argumento"],
        rows: [
          [
            "Usa planilhas / WhatsApp solto",
            "Perde lead, não mede nada",
            "Funil visível, histórico e indicadores desde o primeiro dia",
          ],
          [
            "Usa outro CRM imobiliário",
            "Sistema isolado do site e do atendimento",
            "Integração nativa CRM + Site + App + IA em um único fornecedor",
          ],
          [
            "Site feito por agência",
            "Site desatualizado e sem integração",
            "Site Integrado ou V8 com carga automática de imóveis e SEO",
          ],
          [
            "Depende só de portais",
            "Custo por lead crescente",
            "Site V8 gera leads orgânicos próprios e reduz dependência",
          ],
          [
            "Atendimento humano lento",
            "Lead compra com quem responde primeiro",
            "Albert responde em segundos e qualifica antes do corretor",
          ],
        ],
      },
    ],
  },
  {
    slug: "objecoes",
    title: "Biblioteca de Objeções",
    group: "Argumentação",
    icon: "ShieldQuestion",
    summary: "Respostas padronizadas para as objeções mais comuns do funil.",
    tags: ["objeções", "contorno", "negociação", "caro", "vou pensar"],
    blocks: [
      {
        type: "callout",
        title: "Método de contorno",
        value:
          "Acolher → Perguntar → Reenquadrar → Confirmar. Nunca discuta a objeção: entenda o que está por trás dela antes de responder.",
      },
      {
        type: "steps",
        title: "Objeções e respostas",
        items: [
          {
            label: "“Está caro.”",
            detail:
              "Entendo. Só para eu te ajudar melhor: caro em relação a quê? Se hoje a imobiliária perde uma negociação por mês por demora no atendimento, o investimento se paga com uma única venda recuperada.",
          },
          {
            label: "“Já tenho um sistema.”",
            detail:
              "Ótimo, então você já tem processo. A pergunta é: seu sistema atualiza o site e responde o lead sozinho em segundos? É aí que a maioria das imobiliárias perde dinheiro.",
          },
          {
            label: "“Vou pensar / preciso conversar com o sócio.”",
            detail:
              "Perfeito. Para essa conversa render, o que exatamente ainda ficou em aberto: escopo, investimento ou prazo? Podemos deixar já uma data para retomar com o sócio junto?",
          },
          {
            label: "“Não tenho tempo para implantar agora.”",
            detail:
              "É justamente por falta de tempo que a implantação é conduzida por nós. O que muda na rotina da equipe é pequeno perto do retrabalho que a operação faz hoje.",
          },
          {
            label: "“IA não atende bem meu cliente.”",
            detail:
              "O Albert não substitui o corretor: ele responde no primeiro minuto, qualifica e entrega o lead pronto. O corretor entra na hora em que a conversa vale mais.",
          },
          {
            label: "“Meu site já funciona.”",
            detail:
              "Quantos leads orgânicos ele gerou no último mês? Se a resposta não estiver na ponta da língua, o site é uma vitrine — o V8 transforma isso em canal de captação.",
          },
          {
            label: "“Vou testar os portais mais um tempo.”",
            detail:
              "Faz sentido manter os portais. A questão é a dependência: se o custo por lead subir, o que sobra? O site próprio é o ativo que ninguém tira de você.",
          },
        ],
      },
    ],
  },
  {
    slug: "pitch",
    title: "Pitch & Roteiros",
    group: "Argumentação",
    icon: "MessageSquareQuote",
    summary: "Roteiros de abordagem, descoberta e fechamento prontos para usar.",
    tags: ["pitch", "script", "roteiro", "abordagem", "descoberta", "spin", "fechamento"],
    blocks: [
      {
        type: "callout",
        title: "Pitch de 30 segundos",
        value:
          "A Microsistec reúne CRM, site, aplicativo e inteligência artificial em uma única plataforma para imobiliárias. Na prática: seu imóvel é publicado automaticamente, seu lead é respondido em segundos e sua gestão passa a decidir por indicadores, não por achismo.",
      },
      {
        type: "steps",
        title: "Roteiro de descoberta (reunião)",
        items: [
          { label: "Contexto", detail: "Como está estruturada a operação hoje: equipe, volume de leads, canais de captação?" },
          { label: "Processo", detail: "O que acontece do momento em que o lead chega até o corretor falar com ele?" },
          { label: "Dor", detail: "Qual o tempo médio de resposta? Quantos leads ficam sem retorno na semana?" },
          { label: "Impacto", detail: "O que isso custa em negociações perdidas por mês?" },
          { label: "Visão de futuro", detail: "Se esse gargalo desaparecesse, qual seria o próximo objetivo da imobiliária?" },
          { label: "Próximo passo", detail: "Alinhar solução, investimento e data de decisão antes de encerrar a call." },
        ],
      },
      {
        type: "list",
        title: "Abordagem de Cross Sell na base ativa",
        items: [
          "Abrir pelo uso atual: “vi que vocês estão com bom volume de leads no CRM…”.",
          "Trazer um dado da operação do próprio cliente.",
          "Propor o diagnóstico, não a venda: “separei 20 minutos para te mostrar onde está o gargalo”.",
          "Fechar a agenda no primeiro contato, com data e horário.",
        ],
      },
      {
        type: "list",
        title: "Fechamento",
        items: [
          "Recapitule a dor com as palavras do cliente.",
          "Apresente o escopo e o investimento em uma frase só.",
          "Pergunte diretamente: “faz sentido começarmos ainda neste mês?”.",
          "Defina o próximo passo com data — nunca encerre sem próximo passo agendado.",
        ],
      },
    ],
  },
  {
    slug: "glossario",
    title: "Glossário Comercial",
    group: "Argumentação",
    icon: "BookMarked",
    summary: "Termos usados no dia a dia da operação comercial.",
    tags: ["glossário", "termos", "definições", "mrr", "icp", "churn"],
    blocks: [
      {
        type: "table",
        headers: ["Termo", "Significado"],
        rows: [
          ["MRR", "Receita recorrente mensal gerada pelos contratos ativos."],
          ["Ticket médio", "Valor médio por venda no período."],
          ["ICP", "Perfil ideal de cliente — quem tem mais chance de comprar e permanecer."],
          ["Cross Sell", "Venda de um produto complementar para quem já é cliente."],
          ["Upsell", "Evolução de plano ou módulos adicionais no contrato vigente."],
          ["Show Rate", "Percentual de reuniões agendadas que realmente acontecem."],
          ["SLA", "Prazo máximo acordado para executar uma etapa (ex.: 15 min para o 1º contato)."],
          ["Churn", "Cancelamento de contratos no período."],
          ["Lead Não Responsivo", "Lead encerrado após a cadência completa sem retorno."],
          ["CPR", "Projeto de atendimento comercial 2.0 focado em Cross Sell na base ativa."],
        ],
      },
    ],
  },
];

export const GROUPS = ["Estratégia", "Produtos", "Processos", "Argumentação"];

export function blockToText(block: Block): string {
  switch (block.type) {
    case "text":
      return block.value;
    case "callout":
      return `${block.title} ${block.value}`;
    case "list":
      return `${block.title ?? ""} ${block.items.join(" ")}`;
    case "steps":
      return `${block.title ?? ""} ${block.items.map((i) => `${i.label} ${i.detail}`).join(" ")}`;
    case "table":
      return `${block.title ?? ""} ${block.headers.join(" ")} ${block.rows.flat().join(" ")}`;
    case "kpis":
      return block.items.map((i) => `${i.label} ${i.value} ${i.hint ?? ""}`).join(" ");
  }
}

export type SearchHit = {
  section: Section;
  excerpt: string;
  score: number;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function searchSections(query: string): SearchHit[] {
  const q = normalize(query.trim());
  if (q.length < 2) return [];
  const terms = q.split(/\s+/);

  return SECTIONS.map((section) => {
    const body = section.blocks.map(blockToText).join(" \n ");
    const haystack = normalize(
      `${section.title} ${section.summary} ${section.tags.join(" ")} ${body}`,
    );

    let score = 0;
    for (const term of terms) {
      if (!haystack.includes(term)) return null;
      score += 1;
      if (normalize(section.title).includes(term)) score += 4;
      if (section.tags.some((t) => normalize(t).includes(term))) score += 2;
    }

    const idx = normalize(body).indexOf(terms[0]!);
    const excerpt =
      idx >= 0
        ? `…${body.slice(Math.max(0, idx - 70), idx + 130).replace(/\s+/g, " ").trim()}…`
        : section.summary;

    return { section, excerpt, score } satisfies SearchHit;
  })
    .filter((hit): hit is SearchHit => hit !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}
