import { ModuleItem, ClinicalScale, BonusItem, FaqItem } from '../types';

export const MODULES_DATA: ModuleItem[] = [
  {
    id: 1,
    numberStr: "01",
    title: "Neurologia e Nível de Consciência",
    icon: "Brain",
    color: "#0867D7",
    accentBg: "bg-blue-50 text-blue-700 border-blue-200",
    description: "Avaliação rápida e fidedigna da integridade neurológica, gravidade de TCE, déficit focal e emergências vasculares.",
    scales: ["Glasgow (ECG-P)", "FOUR Score", "NIHSS", "AVPU", "Cincinnati", "RACE"]
  },
  {
    id: 2,
    numberStr: "02",
    title: "Emergência e Deterioração Clínica",
    icon: "Flame",
    color: "#7347E8",
    accentBg: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Identificação precoce de sepse, disfunções orgânicas e escores de alerta rápido na UTI e enfermaria.",
    scales: ["NEWS2", "MEWS", "qSOFA", "SOFA", "APACHE II", "SAPS 3"]
  },
  {
    id: 3,
    numberStr: "03",
    title: "Segurança do Paciente e Riscos",
    icon: "ShieldAlert",
    color: "#37B7FF",
    accentBg: "bg-sky-50 text-sky-700 border-sky-200",
    description: "Prevenção sistemática de lesões por pressão e estratificação de risco de quedas intra-hospitalares.",
    scales: ["Braden", "Norton", "Waterlow", "Morse", "Hendrich II", "STRATIFY"]
  },
  {
    id: 4,
    numberStr: "04",
    title: "Dor, Sedação e Agitação",
    icon: "Activity",
    color: "#16C784",
    accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description: "Métricas para pacientes comunicantes e não-comunicantes, intubados e em pós-operatório imediato.",
    scales: ["EVA (Escala Visual Analógica)", "Escala Numérica da Dor", "Faces / Wong-Baker", "FLACC", "CPOT", "BPS", "RASS", "Ramsay"]
  },
  {
    id: 5,
    numberStr: "05",
    title: "Pessoa Idosa, Funcionalidade e Fragilidade",
    icon: "UserCheck",
    color: "#0867D7",
    accentBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    description: "Capacidade funcional intrínseca, atividades básicas e instrumentais da vida diária e risco de vulnerabilidade.",
    scales: ["Katz (ABVD)", "Lawton-Brody (AIVD)", "Barthel", "IVCF-20", "Timed Up and Go (TUG)", "Clinical Frailty Scale (CFS)", "Edmonton Frail Scale", "Tinetti"]
  },
  {
    id: 6,
    numberStr: "06",
    title: "Pediatria, Neonatologia e Obstetrícia",
    icon: "HeartPulse",
    color: "#1ED5E7",
    accentBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
    description: "Vitalidade ao nascer, esforço respiratório neonatal, idade gestacional e triagem pediátrica de gravidade.",
    scales: ["Apgar", "Silverman-Andersen", "Downes", "Capurro", "Ballard", "PEWS", "Glasgow Pediátrica", "Finnegan"]
  },
  {
    id: 7,
    numberStr: "07",
    title: "Cognição, Delirium e Saúde Mental",
    icon: "Sparkles",
    color: "#7347E8",
    accentBg: "bg-violet-50 text-violet-700 border-violet-200",
    description: "Rastreio cognitivo rápido, diferenciação entre demência e delirium, além de escores de depressão e ansiedade.",
    scales: ["CAM (Confusion Assessment Method)", "4AT", "Mini-Cog", "MEEM / MMSE", "Pfeiffer (SPMSQ)", "GDS-15 (Escala Geriátrica)", "PHQ-9", "GAD-7"]
  }
];

export const SAMPLE_SCALES_PREVIEW: ClinicalScale[] = [
  {
    id: "glasgow",
    name: "Escala de Coma de Glasgow (ECG-P)",
    fullName: "Glasgow Coma Scale com Reatividade Pupilar",
    category: "Neurologia & Trauma",
    badge: "Módulo 01",
    summary: "Instrumento padrão-ouro mundial para monitorização do nível de consciência e gravidade de trauma cranioencefálico (TCE).",
    scoreRange: "3 a 15 pontos (com subtração pupilar -2 a 0)",
    whenToUse: "Trauma cranioencefálico, rebaixamento agudo da consciência, admissão em emergência e acompanhamento neurológico seriado.",
    evaluates: [
      "Abertura Ocular (1 a 4 pontos): Espontânea, ao som, à pressão, ausente.",
      "Resposta Verbal (1 a 5 pontos): Orientada, confusa, palavras inapropriadas, sons ininteligíveis, ausente.",
      "Resposta Motora (1 a 6 pontos): Obedece a comandos, localiza estímulo, flexão normal, flexão anormal (decorticação), extensão (descerebração), ausente.",
      "Reatividade Pupilar (-2 a 0): Subtração caso as pupilas não reajam à luz."
    ],
    interpretation: "13-15: TCE Leve | 9-12: TCE Moderado | 3-8: TCE Grave (indicação clássica de via aérea definitiva).",
    clinicalCase: {
      patient: "M.S.A., 28 anos, vítima de acidente de moto sem capacete.",
      scenario: "Dá entrada na Sala Vermelha com sangramento craniano.",
      findings: "Abre os olhos apenas ao estímulo de pressão (2 pts), emite gemidos incompreensíveis (2 pts) e apresenta postura de flexão anormal em decorticação (3 pts). Ambas as pupilas reagentes (0 de subtração).",
      score: "Escore = 2 + 2 + 3 - 0 = 7 pontos",
      conduct: "TCE Grave. Prioridade imediata para suporte ventilatório avançado (intubação orotraqueal) e tomografia de crânio urgente."
    },
    keyDifference: "Diferente do AVPU (que é uma triagem rápida de 4 níveis) e do FOUR Score (que avalia tronco encefálico e padrão respiratório em intubados)."
  },
  {
    id: "news2",
    name: "NEWS2 — National Early Warning Score",
    fullName: "Sistema Nacional de Alerta Rápido 2",
    category: "Emergência & Deterioração",
    badge: "Módulo 02",
    summary: "Escore multiparamétrico padronizado para identificar precocemente a deterioração clínica e risco iminente de parada cardíaca ou sepse.",
    scoreRange: "0 a 20 pontos",
    whenToUse: "Triagem em emergência, passagens de plantão em enfermarias e monitorização de pacientes sépticos ou instáveis.",
    evaluates: [
      "Frequência respiratória (rpm)",
      "Saturação de oxigênio (Escala 1 padrão e Escala 2 para hipercapnia crônica)",
      "Uso de oxigênio suplementar (Ar ambiente vs O2 suplementar)",
      "Pressão arterial sistólica (mmHg)",
      "Frequência cardíaca (bpm)",
      "Nível de consciência (novo estado de confusão / CVPU)",
      "Temperatura corporal (°C)"
    ],
    interpretation: "0-4: Baixo risco (vigilância de rotina a cada 4-6h) | 5-6 ou 3 em um único parâmetro: Risco médio (avaliação médica urgente) | ≥ 7: Alto risco (Time de Resposta Rápida imediato).",
    clinicalCase: {
      patient: "J.C.P., 64 anos, pós-operatório de colectomia no 3º DPO.",
      scenario: "Enfermeiro nota que o paciente está taquipneico e sonolento.",
      findings: "FR: 26 rpm (3 pts), SpO2 91% em ar ambiente (2 pts), sem O2 (0 pts), PA: 88/50 mmHg (3 pts), FC: 118 bpm (2 pts), Nível: Confuso agudo (3 pts), Temp: 38.6°C (1 pt).",
      score: "Escore = 14 pontos (Risco Crítico)",
      conduct: "Acionamento imediato do Time de Resposta Rápida (TRR) com suspeita de choque séptico e coleta imediata do pacote de sepse de 1 hora."
    },
    keyDifference: "O NEWS2 inclui escala dedicada de SpO2 para pacientes DPOC e pontua confusão mental aguda como parâmetro independente, superando o MEWS tradicional."
  },
  {
    id: "braden",
    name: "Escala de Braden",
    fullName: "Escala de Predição de Risco para Lesão por Pressão",
    category: "Segurança do Paciente",
    badge: "Módulo 03",
    summary: "A escala mais validada no Brasil e no mundo para identificação sistemática de pacientes em risco de desenvolver lesões por pressão (LPP).",
    scoreRange: "6 a 23 pontos (menor pontuação = maior risco)",
    whenToUse: "Na admissão de todo paciente hospitalizado e reavaliação diária em enfermarias e UTIs.",
    evaluates: [
      "Percepção Sensorial (1 a 4)",
      "Umidade (1 a 4)",
      "Atividade Física (1 a 4)",
      "Mobilidade no leito (1 a 4)",
      "Nutrição (1 a 4)",
      "Fricção e Cisalhamento (1 a 3)"
    ],
    interpretation: "≤ 9: Risco Altíssimo | 10-12: Risco Alto | 13-14: Risco Moderado | 15-18: Risco Baixo | 19-23: Sem Risco.",
    clinicalCase: {
      patient: "Dona Maria, 82 anos, internada com fratura de fêmur aguardando cirurgia.",
      scenario: "Acamada com dor ao movimento, usando fralda com episódios de incontinência.",
      findings: "Percepção: Muito limitada (2 pts), Umidade: Constantemente úmida (1 pt), Atividade: Confinada ao leito (1 pt), Mobilidade: Bastante limitada (2 pts), Nutrição: Provavelmente inadequada (2 pts), Fricção: Problema potencial (2 pts).",
      score: "Escore = 10 pontos (Risco Alto)",
      conduct: "Colchão pneumático de pressão alternada, mudança de decúbito a cada 2 horas, barreira protetora hidrorepelente e suplementação nutricional proteica."
    },
    keyDifference: "Diferente da Escala de Norton e Waterlow, a Braden possui o domínio de 'Fricção e Cisalhamento', determinante para intervenção de enfermagem."
  },
  {
    id: "rass",
    name: "Escala de RASS",
    fullName: "Richmond Agitation-Sedation Scale",
    category: "Dor e Sedação",
    badge: "Módulo 04",
    summary: "Ferramenta de 10 níveis para dosagem precisa de sedação e reconhecimento de agitação psicomotora em ambiente crítico e cuidados intensivos.",
    scoreRange: "-5 a +4 (0 é o paciente calmo e alerta)",
    whenToUse: "Pacientes em ventilação mecânica, desmame ventilatório, protocolo de sedação diária e triagem pré-avaliação de Delirium (CAM-ICU).",
    evaluates: [
      "+4: Combativo (violento, perigo imediato para a equipe)",
      "+3: Muito agitado (puxa tubos, cateteres)",
      "+2: Agitado (movimentos frequentes não intencionais)",
      "+1: Inquieto (ansioso, apreensivo)",
      " 0: Alerta e calmo",
      "-1: Sonolento (desperta ao som, sustenta olhar > 10s)",
      "-2: Sedação leve (desperta ao som, contato visual < 10s)",
      "-3: Sedação moderada (movimento ou abertura ocular ao som, sem contato visual)",
      "-4: Sedação profunda (sem resposta ao som, responde ao estímulo físico)",
      "-5: Não despertável (sem resposta a som ou estímulo físico)"
    ],
    interpretation: "Alvo mais comum na UTI moderna: -1 a 0 (sedação leve / cooperativo).",
    clinicalCase: {
      patient: "R.T., 55 anos, intubado por pneumonia grave.",
      scenario: "Ao ser chamado pelo nome em voz alta, abre os olhos, olha para a enfermeira por cerca de 4 segundos e volta a fechar os olhos.",
      findings: "Abertura ocular com contato visual breve (< 10 segundos) em resposta ao chamado verbal.",
      score: "Escore = RASS -2 (Sedação Leve)",
      conduct: "Meta sedativa atingida dentro do protocolo de ventilação protetora, permitindo avançar para avaliação de CAM-ICU."
    },
    keyDifference: "Muito mais objetiva que a escala de Ramsay por quantificar o tempo de sustentação do contato visual e graduar a agitação positiva (+1 a +4)."
  },
  {
    id: "katz",
    name: "Índice de Katz (ABVD)",
    fullName: "Index of Independence in Activities of Daily Living",
    category: "Pessoa Idosa",
    badge: "Módulo 05",
    summary: "Avalia a autonomia funcional do idoso para execução das 6 atividades básicas e vitais do cotidiano.",
    scoreRange: "0 a 6 pontos (ou letras de A a G)",
    whenToUse: "Consulta geriátrica, admissão hospitalar de idosos, planejamento de alta e plano de cuidados domiciliares.",
    evaluates: [
      "1. Banho (independência ou assistência)",
      "2. Vestir-se (pegar roupas e vestir)",
      "3. Uso do Vaso Sanitário (ir ao banheiro, higienizar-se)",
      "4. Transferência (entrar e sair da cama/cadeira)",
      "5. Continência (controle total de fezes e urina)",
      "6. Alimentação (levar a comida da refeição à boca)"
    ],
    interpretation: "6/6: Independência total | 4-5/6: Dependência moderada | 0-3/6: Dependência muito importante.",
    clinicalCase: {
      patient: "Seu José, 79 anos, pós-AVC isquêmico há 6 meses.",
      scenario: "Mora com a filha e precisa de apoio familiar.",
      findings: "Alimenta-se sozinho (1 pt), transfere-se sozinho da cama (1 pt), controla esfíncteres (1 pt), porém necessita de ajuda para tomar banho (0), vestir peças de roupa da parte inferior (0) e precisa de apoio no vaso sanitário (0).",
      score: "Escore = 3 de 6 pontos",
      conduct: "Classificado com dependência funcional moderada a importante. Prescrição de barras de apoio no banheiro, cadeira de banho e treino ocupacional."
    },
    keyDifference: "O Katz foca nas Atividades BÁSICAS de sobrevivência, enquanto o Lawton-Brody foca nas INSTRUMENTAIS (remédios, telefone, dinheiro, transporte)."
  },
  {
    id: "apgar",
    name: "Escore de Apgar",
    fullName: "Avaliação da Adaptação e Vitalidade Neonatal",
    category: "Pediatria e Neonatologia",
    badge: "Módulo 06",
    summary: "Primeira avaliação clínica do recém-nascido, executada no 1º e 5º minuto de vida para avaliar a resposta imediata pós-parto.",
    scoreRange: "0 a 10 pontos",
    whenToUse: "Obrigatoriamente no 1º e 5º minuto de vida pós-parto (e a cada 5 minutos até 20 minutos se < 7).",
    evaluates: [
      "A - Aparência / Cor (Cianose central/pálido = 0 | Corpo rosado e extremidades cianóticas = 1 | Completamente rosado = 2)",
      "P - Pulso / FC (Ausente = 0 | < 100 bpm = 1 | ≥ 100 bpm = 2)",
      "G - Gesticulação / Irritabilidade reflexa (Sem resposta = 0 | Alguma flexão/careta = 1 | Choro vigoroso/espirro = 2)",
      "A - Atividade / Tônus muscular (Flácido = 0 | Alguma flexão = 1 | Movimentação ativa = 2)",
      "R - Respiração (Ausente = 0 | Lenta/irregular = 1 | Boa com choro forte = 2)"
    ],
    interpretation: "8-10: Excelente vitalidade e transição favorável | 4-7: Asfixia moderada (necessidade de suporte térmico e oxigenação) | 0-3: Asfixia grave (reanimação neonatal imediata).",
    clinicalCase: {
      patient: "RN de parto cesárea por sofrimento fetal.",
      scenario: "Avaliação no 1º minuto pós-clampeamento de cordão.",
      findings: "FC: 110 bpm (2 pts), respiração lenta e irregular (1 pt), extremidades cianóticas com tronco rosado (1 pt), discreta flexão de membros (1 pt), chora ao estímulo plantar (1 pt).",
      score: "Apgar 1º min = 6 pontos | Apgar 5º min = 9 pontos após assistência",
      conduct: "No 1º minuto: aquecimento em berço radiante, secagem e desobstrução delicada de vias aéreas com ventilação com pressão positiva breve. Recuperação rápida no 5º minuto."
    },
    keyDifference: "O Apgar avalia vitalidade geral ao nascer. Se o problema for especificamente desconforto respiratório neonatal, usa-se a escala de Silverman-Andersen!"
  },
  {
    id: "minicog",
    name: "Mini-Cog",
    fullName: "Rastreio Cognitivo Ultrarrápido de 3 Minutos",
    category: "Cognição e Saúde Mental",
    badge: "Módulo 07",
    summary: "Teste de triagem cognitiva de altíssima sensibilidade que combina memória recente com função executiva através do desenho do relógio.",
    scoreRange: "0 a 5 pontos",
    whenToUse: "Rastreio ambulatorial de demência, avaliação geriátrica inicial e triagem cognitiva pré-operatória.",
    evaluates: [
      "1. Evocação de 3 palavras não relacionadas (ex: Banana, Amanhã, Cadeira): 1 ponto por palavra lembrada (0 a 3).",
      "2. Teste do Desenho do Relógio (TDR): Círculo, todos os números nas posições corretas e ponteiros marcando a hora solicitada (ex: 11h10min). Pontuação binária: 0 (anormal) ou 2 (perfeito)."
    ],
    interpretation: "0-2 pontos: Alto risco de comprometimento cognitivo / Rastreio Positivo | 3-5 pontos: Baixo risco de demência.",
    clinicalCase: {
      patient: "Seu Antônio, 72 anos, queixas de esquecimentos pela família.",
      scenario: "Consulta na Atenção Básica de Saúde.",
      findings: "Repetiu as 3 palavras na fase de aprendizado. Ao desenhar o relógio, colocou todos os números concentrados apenas no lado direito do círculo (TDR anormal = 0 pts). Ao final, lembrou apenas de 1 das 3 palavras (1 pt).",
      score: "Escore = 1 ponto (Rastreio Positivo)",
      conduct: "Indicação de investigação diagnóstica aprofundada com MEEM, exames laboratoriais para causas reversíveis e neuroimagem."
    },
    keyDifference: "Leva apenas 3 minutos, não depende de nível educacional tão fortemente quanto o MEEM (Mini Exame do Estado Mental) e tem sensibilidade similar."
  },
  {
    id: "gad7",
    name: "Escala GAD-7",
    fullName: "Generalized Anxiety Disorder 7-item scale",
    category: "Saúde Mental",
    badge: "Módulo 07",
    summary: "Instrumento autoaplicável validado internacionalmente para rastreio e mensuração da gravidade do Transtorno de Ansiedade Generalizada.",
    scoreRange: "0 a 21 pontos (7 perguntas de 0 a 3)",
    whenToUse: "Atenção Primária à Saúde, ambulatórios, consultas de enfermagem em saúde mental e monitorização de resposta terapêutica.",
    evaluates: [
      "Sentir-se nervoso, ansioso ou no limite",
      "Não ser capaz de impedir ou controlar preocupações",
      "Preocupar-se demais com diferentes coisas",
      "Dificuldade para relaxar",
      "Ficar tão inquieto que é difícil ficar parado",
      "Ficar facilmente irritável ou chateado",
      "Sentir medo como se algo horrível fosse acontecer"
    ],
    interpretation: "0-4: Ansiedade mínima | 5-9: Ansiedade leve | 10-14: Ansiedade moderada (ponto de corte clínico) | 15-21: Ansiedade grave.",
    clinicalCase: {
      patient: "A.L.C., 22 anos, estudante universitária no último semestre.",
      scenario: "Queixa de insônia, palpitações e tensão muscular nas últimas 3 semanas.",
      findings: "Pontuou 'quase todos os dias' (3) em nervosismo, controle de preocupações e relaxamento, e 'mais da metade dos dias' (2) em irritabilidade e medo difuso.",
      score: "Escore = 15 pontos (Ansiedade Grave)",
      conduct: "Acolhimento de enfermagem em saúde mental, encaminhamento para avaliação multiprofissional (médica e psicológica) e plano de intervenções não-farmacológicas de higiene do sono."
    },
    keyDifference: "Foca especificamente em Ansiedade Generalizada, diferentemente do PHQ-9 que rastreia Episódio Depressivo Maior."
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 1,
    numberStr: "BÔNUS 01",
    title: "Mapa Rápido — Qual Escala Utilizar?",
    subtitle: "O guia de bolso definitivo para decisões instantâneas no plantão",
    description: "Material visual de consulta relâmpago que conecta a dúvida clínica à escala correta em menos de 10 segundos.",
    examples: [
      "Risco de queda → Morse",
      "Lesão por pressão → Braden",
      "Nível de consciência → Glasgow",
      "Funcionalidade do idoso → Katz",
      "Sedação em UTI → RASS",
      "Recém-nascido → Apgar",
      "Delirium agudo → CAM / 4AT"
    ],
    perceivedValue: "R$ 17,90",
    tag: "Decisão Clínica Rápida"
  },
  {
    id: 2,
    numberStr: "BÔNUS 02",
    title: "50 Casos Clínicos para Treinar Escalas e Escores",
    subtitle: "Da teoria ao raciocínio prático de beira de leito",
    description: "Situações práticas de prontuários reais simulados para você testar seu conhecimento, identificar o instrumento certo, calcular a pontuação e definir a conduta correta de enfermagem.",
    examples: [
      "Qual escala utilizar em cada caso",
      "Como calcular os pontos sem errar",
      "Interpretação clínica do resultado",
      "Qual a conduta de avaliação prioritária"
    ],
    perceivedValue: "R$ 19,90",
    tag: "Treino Prático Guiado"
  },
  {
    id: 3,
    numberStr: "BÔNUS 03",
    title: "Flashcards de Revisão — Escalas Clínicas",
    subtitle: "Memorização ativa para provas, estágios e concursos",
    description: "Coleção em formato flashcard contendo a essência de cada instrumento para você revisar no celular minutos antes da aula ou da prova.",
    examples: [
      "Nome da escala & Sigla",
      "O que exatamente avalia",
      "Onde e quando é aplicada",
      "Faixas de pontuação crítica",
      "Informação-chave de ouro para fixar"
    ],
    perceivedValue: "R$ 14,90",
    tag: "Fixação & Memorização"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: "1. O material é físico ou digital?",
    answer: "O Atlas é um produto 100% digital em formato PDF de alta resolução com design profissional. Imediatamente após a confirmação do pagamento, você recebe os dados de acesso para baixar e estudar pelo celular, tablet ou computador."
  },
  {
    id: 2,
    question: "2. Para quem esse material é indicado?",
    answer: "É indicado principalmente para estudantes de Enfermagem, acadêmicos em fase de estágio supervisionado, recém-formados e profissionais da área da Saúde que desejam aprender, revisar ou consultar rapidamente as principais escalas utilizadas na prática clínica diária."
  },
  {
    id: 3,
    question: "3. Quantas escalas e escores estão incluídos?",
    answer: "São 50 instrumentos organizados didaticamente em 7 módulos completos: neurologia, emergência, segurança do paciente, dor e sedação, pessoa idosa, pediatria/neonatologia e cognição/saúde mental."
  },
  {
    id: 4,
    question: "4. Posso imprimir os materiais?",
    answer: "Sim! Os conteúdos foram diagramados em tamanho e formato otimizados tanto para leitura digital em telas (smartphones e tablets) quanto para impressão nítida em folhas A4 para seu uso pessoal de estudo."
  },
  {
    id: 5,
    question: "5. O material substitui livros, protocolos ou orientação profissional?",
    answer: "Não. O Atlas é um material exclusivamente educacional, focado em estudo, revisão e consulta rápida. Protocolos institucionais do hospital/clínica e versões oficiais dos instrumentos validados devem sempre ser consultados quando necessários na prática profissional."
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    rating: 5,
    text: "“Eu sempre confundia Braden, Morse e outras escalas. Ter tudo organizado visualmente facilitou muito minhas revisões para as provas de estágio.”",
    author: "Ana Beatriz Ramos",
    role: "Estudante de Enfermagem",
    note: "Exemplo ilustrativo de layout — baseado no formato de revisão dos alunos"
  },
  {
    id: 2,
    rating: 5,
    text: "“O que mais gostei foram os casos clínicos. Não fica apenas explicando a escala de forma fria, mostra exatamente como ela aparece na prática do hospital.”",
    author: "Larissa Mendes",
    role: "Acadêmica de Enfermagem — 7º Período",
    note: "Exemplo ilustrativo de layout — baseado no formato de revisão dos alunos"
  },
  {
    id: 3,
    rating: 5,
    text: "“Uso principalmente no intervalo antes das aulas práticas. Em poucos minutos consigo revisar o que cada escala avalia e como interpretar os pontos.”",
    author: "Gabriel Fontes",
    role: "Estudante da área da Saúde",
    note: "Exemplo ilustrativo de layout — baseado no formato de revisão dos alunos"
  }
];

export const COMPARISON_DATA = {
  before: [
    "PDFs enormes com centenas de páginas",
    "Textos extensos, densos e cansativos",
    "Escalas espalhadas em sites e apostilas desordenadas",
    "Dificuldade para revisar antes de provas ou plantões",
    "Confusão frequente entre instrumentos com nomes parecidos"
  ],
  after: [
    "Conteúdo organizado e diagramado de forma moderna",
    "Explicações 100% visuais em esquemas didáticos",
    "Consulta rápida no bolso (celular ou tablet)",
    "Casos clínicos aplicados em cada material",
    "50 instrumentos essenciais reunidos em um único atlas estruturado"
  ]
};
