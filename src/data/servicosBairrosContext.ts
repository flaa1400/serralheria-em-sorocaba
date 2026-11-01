import type { BairroItem } from './bairros';
import type { ServicoItem } from './servicos';
import { formatBairroLocacao, formatBairroServico } from './bairros';

export interface AplicacaoItem {
  titulo: string;
  icone: string;
  descricao: string;
}

export interface EspecificacaoItem {
  rotulo: string;
  valor: string;
  detalhe: string;
  icone: string;
}

export interface PassoItem {
  numero: string;
  titulo: string;
  descricao: string;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export interface ContextoServicoBairro {
  subtituloContexto: string;
  textoContexto: string;
  aplicacoes: AplicacaoItem[];
  especificacoes: EspecificacaoItem[];
  passos: PassoItem[];
  diferenciais: Array<{ titulo: string; descricao: string; icone: string }>;
  faqs: FaqItem[];
}

// Matriz de aplicações práticas por serviço e perfil do bairro
const aplicacoesPorPerfil: Record<string, Record<string, (bairro: BairroItem) => AplicacaoItem[]>> = {
  "servicos-de-solda-sorocaba": {
    comercial: (b) => [
      {
        titulo: "Reparos Rápidos em Portas de Enrolar e Fachadas",
        icone: "🏬",
        descricao: `Para estabelecimentos comerciais ${formatBairroLocacao(b)}, realizamos solda imediata em lâminas travadas, eixos torcidos e reforço de guias laterais para garantir abertura e fechamento seguros sem interromper o expediente de vendas.`
      },
      {
        titulo: "Reforço Estrutural de Mezaninos e Prateleiras de Carga",
        icone: "🏗️",
        descricao: `Recuperação e solda de alta penetração em longarinas, pilares metálicos e suportes de estoque sobrecarregados em lojas, estoques e depósitos ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Suportes para Letreiros, Fachadas e Condensadoras de Ar",
        icone: "⚡",
        descricao: `Fixação e confecção sob medida de suportes soldados para placas luminosas, estruturas de comunicação visual e condensadoras de climatização comercial com ancoragem técnica.`
      },
      {
        titulo: "Solda de Emergência com Proteção contra Fagulhas",
        icone: "🛡️",
        descricao: `Atendimento no local com biombos térmicos de contenção de fagulhas e equipamentos portáteis para não danificar pisos, vitrines ou mercadorias do comércio ${formatBairroLocacao(b)}.`
      }
    ],
    residencial: (b) => [
      {
        titulo: "Conserto de Dobradiças, Pivôs e Fechaduras em Portões",
        icone: "🏡",
        descricao: `Correção imediata de portões que arrastam no chão, pinos de giro desgastados e soldagem de caixas de fechaduras em residências ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Reforço de Grades de Janelas e Muros Residenciais",
        icone: "🔒",
        descricao: `Soldagem de travessas adicionais, cantoneiras e chumbadores em grades residenciais para elevar o nível de proteção perimetral da sua família.`
      },
      {
        titulo: "Reparo em Corrimãos, Escadas Metálicas e Sacadas",
        icone: "🪜",
        descricao: `Solda TIG e MIG com desbaste fino e nivelamento perfeito para eliminar pontas afiadas e devolver rigidez estrutural a escadas e corrimãos residenciais.`
      },
      {
        titulo: "Recuperação de Estruturas de Garagem e Pergolados",
        icone: "🛠️",
        descricao: `Eliminação de pontos de ferrugem, corte de partes corroídas e soldagem de novos perfis tubulares galvanizados na cobertura da sua garagem ${formatBairroLocacao(b)}.`
      }
    ],
    condominio: (b) => [
      {
        titulo: "Solda Silenciosa em Portões de Acesso de Moradores",
        icone: "🏢",
        descricao: `Procedimentos técnicos com redução de ruídos e isolamento para soldagem de dobradiças, batentes e trilhos nos acessos sociais e veiculares de condomínios ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Manutenção Preventiva de Guarda-Corpos de Áreas Comuns",
        icone: "🛡️",
        descricao: `Revisão e solda de reforço em guarda-corpos de piscinas, quadras poliesportivas e salões de festa, assegurando total aderência às normas ABNT NBR 14718.`
      },
      {
        titulo: "Reparos em Gaiolas de Gás, Lixeiras e Abrigos Técnicos",
        icone: "📦",
        descricao: `Solda em telas de proteção, cailhos de proteção e portas técnicas com acabamento uniforme para manter a padronização estética exigida pela administração do condomínio.`
      },
      {
        titulo: "Restauração de Gradis Perimetrais e Portões de Clausura",
        icone: "🚪",
        descricao: `Soldagem contínua de alta penetração em sistemas de clausura e eclusas de segurança veicular com alinhamento milimétrico para operação 24 horas.`
      }
    ],
    industrial: (b) => [
      {
        titulo: "Soldagem Pesada em Vigas I, W e Perfis Estruturais",
        icone: "🏭",
        descricao: `Solda MIG/MAG e Eletrodo Revestido de alta amperagem para reforço de pórticos rolantes, estruturas de pontes e pilares de galpões industriais ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Caldeiraria Leve e Média para Linhas Produtivas",
        icone: "⚙️",
        descricao: `Fabricação e união soldada de suportes especiais, dutos, tanques abertos e cavaletes de sustentação de maquinário pesado com teste de estanqueidade.`
      },
      {
        titulo: "Recuperação de Portões de Docas e Galpões de Carga",
        icone: "🚚",
        descricao: `Solda de alta resistência em guias de carrinhos, batentes reforçados e chapas de impacto em docas logísticas sujeitas a impactos de empilhadeiras e caminhões.`
      },
      {
        titulo: "Reparos com Laudo e Procedimento Técnico Qualificado",
        icone: "📑",
        descricao: `Execução rigorosa por soldadores capacitados seguindo especificações de engenharia e materiais certificados Gerdau e CSN.`
      }
    ]
  },

  "portoes-automaticos-sorocaba": {
    comercial: (b) => [
      {
        titulo: "Automatização de Portões com Alto Fluxo de Aberturas",
        icone: "🏬",
        descricao: `Instalação de motores industriais e comerciais para portões com mais de 80 ciclos por hora em comércios e estacionamentos ${formatBairroLocacao(b)}, garantindo velocidade sem superaquecimento.`
      },
      {
        titulo: "Abertura Ultra Rápida (3 a 5 Segundos) para Segurança",
        icone: "⚡",
        descricao: `Redução drástica do tempo de espera na rua para clientes e funcionários ao entrar e sair, minimizando vulnerabilidades no tráfego comercial.`
      },
      {
        titulo: "Portões de Correr e Basculantes para Lojas e Depósitos",
        icone: "📦",
        descricao: `Sistemas com trilhos em cantoneira de aço galvanizado reforçada e cremalheiras de ferro fundido para suportar o peso de chapas fechadas ou lambris comerciais.`
      },
      {
        titulo: "Sistemas Nobreak e Destravamento Manual Instantâneo",
        icone: "🔋",
        descricao: `Baterias auxiliares de emergência para manter as portas abertas ou fechadas mesmo em eventuais quedas de energia elétrica no bairro.`
      }
    ],
    residencial: (b) => [
      {
        titulo: "Portões Basculantes que Não Ocupam Espaço na Garagem",
        icone: "🏡",
        descricao: `Levantamento vertical suave com contrapesos embutidos nas laterais, permitindo que veículos grandes estacionem rente ao portão sem colidir.`
      },
      {
        titulo: "Motores Residenciais Silenciosos e de Alta Eficiência",
        icone: "🤫",
        descricao: `Acionamento mecânico amortecido com placas eletrônicas de rampa de desaceleração suave, eliminando batidas secas que incomodam a vizinhança.`
      },
      {
        titulo: "Design Moderno em Chapa Lambril ou Tubos Horizontais",
        icone: "🎨",
        descricao: `Fabricação personalizada sob medida para combinar com a arquitetura da sua fachada ${formatBairroLocacao(b)}, unindo total privacidade ou visibilidade controlada.`
      },
      {
        titulo: "Fotocélula e Sensores Antiesmagamento para Crianças e Pets",
        icone: "🛡️",
        descricao: `Feixe infravermelho que interrompe o fechamento imediatamente caso um carro, criança ou animal de estimação passe durante o curso do portão.`
      }
    ],
    condominio: (b) => [
      {
        titulo: "Sistemas Duplos para Eclusa (Clausura de Veículos)",
        icone: "🏢",
        descricao: `Intertravamento eletrônico entre portão externo e interno em condomínios ${formatBairroLocacao(b)}, impedindo que ambos fiquem abertos simultaneamente.`
      },
      {
        titulo: "Motores Industriais a Óleo para Ciclo Contínuo",
        icone: "⚙️",
        descricao: `Equipamentos com lubrificação permanente para suportar o tráfego intenso de dezenas ou centenas de veículos nos horários de pico matutino e noturno.`
      },
      {
        titulo: "Padronização Arquitetônica Aprovada por Assembleia",
        icone: "📐",
        descricao: `Projetos desenvolvidos de acordo com o regulamento interno e padrão estético das fachadas do seu condomínio.`
      },
      {
        titulo: "Controle de Acesso Integrado (TAG, Controle e Portaria)",
        icone: "📡",
        descricao: `Compatibilidade total com leitores RFID, cancelas, acionamento por antena e comando direto da portaria remota ou física.`
      }
    ],
    industrial: (b) => [
      {
        titulo: "Portões Deslizantes Pesados para Vãos de até 15 Metros",
        icone: "🏭",
        descricao: `Estruturas reforçadas em perfis tubulares de parede grossa (2mm a 3mm) e trilhos duplos para entrada livre de carretas e caminhões ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Automatizadores Trifásicos Inversores de Alta Força",
        icone: "⚡",
        descricao: `Motores industriais de até 2.000 kg com engrenagens de bronze e placas de precisão para aceleração e frenagem progressivas.`
      },
      {
        titulo: "Chapa Perfurada, Expandida ou Gradil de Alta Densidade",
        icone: "🧱",
        descricao: `Fechamentos que resistem a intempéries, fortes rajadas de vento e tentativas de invasão perimetral em áreas industriais.`
      },
      {
        titulo: "Sinalizadores Sonoros e Visuais de Movimento",
        icone: "🚨",
        descricao: `Sinaleiras luminosas tipo LED e avisos sonoros que atendem a normas de segurança do trabalho para trânsito de veículos industriais.`
      }
    ]
  },

  "portoes-basculantes-automaticos-sorocaba": {
    comercial: (b) => [
      {
        titulo: "Aproveitamento Total da Largura do Vão de Entrada",
        icone: "🏬",
        descricao: `O portão basculante levanta por completo sem ocupar as laterais do vão, deixando livre a passagem de clientes, carros de entrega e mercadorias ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Contrapesos Embutidos em Caixas de Aço Herméticas",
        icone: "⚖️",
        descricao: `Colunas laterais protegidas com roldanas de nylon de alta densidade que dispensam graxa excessiva e evitam acidentes no ambiente de loja.`
      },
      {
        titulo: "Chapa Fechada para Proteção de Estoque e Vitrines",
        icone: "🔒",
        descricao: `Isolamento visual completo contra curiosos após o encerramento do expediente, garantindo que o patrimônio comercial fique 100% blindado.`
      },
      {
        titulo: "Motor Rápido com Cremalheira ou Fuso Reforçado",
        icone: "⚡",
        descricao: `Mecanismo de elevação por fuso em aço carbono retificado com porca de acionamento em liga especial para vida útil estendida.`
      }
    ],
    residencial: (b) => [
      {
        titulo: "Elevação Vertical Suave com Balanceamento a Cabo de Aço",
        icone: "🏡",
        descricao: `Cabos de aço galvanizado 6x19 com alma de aço dimensionados para erguer a folha do portão com mínimo esforço do automatizador.`
      },
      {
        titulo: "Porta Social Embutida com Fechadura Elétrica",
        icone: "🚪",
        descricao: `Acesso rápido para pedestres no próprio quadro do portão basculante sem necessidade de abrir a garagem inteira, mantendo a privacidade familiar.`
      },
      {
        titulo: "Acabamento em Aço Galvanizado Resistente à Chuva",
        icone: "🌧️",
        descricao: `Proteção de usina que não enferruja com o respingo de água na calçada ${formatBairroLocacao(b)}, mantendo o portão novo por anos.`
      },
      {
        titulo: "Silenciadores de Borracha e Guias com Amortecimento",
        icone: "🤫",
        descricao: `Batentes emborrachados especiais que absorvem o impacto no final do curso, evitando rangidos e vibrações que ecoam nos quartos da residência.`
      }
    ],
    condominio: (b) => [
      {
        titulo: "Folha Balanceada para Evitar Vibrações na Estrutura Predial",
        icone: "🏢",
        descricao: `Isolamento acústico mecânico com coxins de absorção nas fixações para condomínios horizontais e verticais ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Cabos de Aço com Duplo Sistema de Segurança",
        icone: "🛡️",
        descricao: `Dispositivo mecânico antiqueda que trava a folha do portão caso um dos cabos de sustentação venha a se romper acidentalmente.`
      },
      {
        titulo: "Pintura Eletrostática com Tratamento Fosfatizante",
        icone: "🎨",
        descricao: `Pintura curada em estufa a 200°C com aderência extrema, resistência a riscos e visual nobre conforme exigências do condomínio.`
      },
      {
        titulo: "Temporizador de Fechamento Automático Regulável",
        icone: "⏱️",
        descricao: `Garante que o portão feche sozinho após a passagem do veículo, eliminando riscos de portão esquecido aberto por moradores.`
      }
    ],
    industrial: (b) => [
      {
        titulo: "Basculantes Reforçados para Vãos Altos de Almoxarifado",
        icone: "🏭",
        descricao: `Projetados para permitir entrada de empilhadeiras e veículos utilitários altos com curso vertical ampliado.`
      },
      {
        titulo: "Guias Laterais em Viga U Reforçada de 3mm",
        icone: "🏗️",
        descricao: `Estrutura pesada antiempenamento para suportar impactos de vento e variações térmicas de galpões industriais ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Braços Pivotantes Reforçados com Mancais Blindados",
        icone: "⚙️",
        descricao: `Rolamentos blindados que impedem a entrada de poeira e resíduos metálicos da produção, diminuindo manutenções corretivas.`
      },
      {
        titulo: "Trava Eletromecânica Dupla de Alta Pressão",
        icone: "🔒",
        descricao: `Travamento inferior e superior acionado por solenoide que impede qualquer tentativa de arrombamento por alavanca.`
      }
    ]
  },

  "cobertura-metalica-sorocaba": {
    comercial: (b) => [
      {
        titulo: "Cobertura para Estacionamento de Clientes e Calçadas",
        icone: "🏬",
        descricao: `Protege veículos de clientes contra o sol quente e chuvas de granizo ${formatBairroLocacao(b)}, valorizando a experiência e o conforto no estabelecimento.`
      },
      {
        titulo: "Telhas Termoacústicas Sanduíche (PIR/EPS)",
        icone: "🌡️",
        descricao: `Reduzem a temperatura interna em até 70% e o ruído da chuva em até 90%, criando ambientes agradáveis para áreas de atendimento e estoque.`
      },
      {
        titulo: "Estruturas em Arco ou Tesouras em Vão Livre",
        icone: "📐",
        descricao: `Vãos amplos sem pilares no meio do caminho, facilitando manobras de veículos e disposição de prateleiras comerciais.`
      },
      {
        titulo: "Calhas e Rufos com Vedação em Poliuretano Industrial",
        icone: "🌧️",
        descricao: `Captação pluvial dimensionada para tempestades de verão, impedindo infiltrações que danifiquem tetos ou paredes de lojas.`
      }
    ],
    residencial: (b) => [
      {
        titulo: "Cobertura para Garagens Residenciais e Corredores",
        icone: "🏡",
        descricao: `Instalação sob medida para proteger seus carros e motos contra folhas, chuva e radiação solar ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Áreas Gourmet, Churrasqueiras e Varandas",
        icone: "🍖",
        descricao: `Estruturas metálicas elegantes com telhas térmicas de forro branco inferior ou policarbonato para integrar com a arquitetura da casa.`
      },
      {
        titulo: "Policarbonato Alveolar e Compacto com Bloqueio UV",
        icone: "☀️",
        descricao: `Aproveita a claridade natural do sol nos corredores laterais sem transformar a área em uma estufa abafada.`
      },
      {
        titulo: "Estrutura Galvanizada com Pintura Anticorrosiva",
        icone: "🛡️",
        descricao: `Perfis metálicos protegidos que não empenam, não apodrecem como madeira e são imunes a cupins e umidade.`
      }
    ],
    condominio: (b) => [
      {
        titulo: "Coberturas de Garagem Padronizadas para Vilas e Prédios",
        icone: "🏢",
        descricao: `Projetos modulares repetíveis que atendem às regras estéticas do condomínio ${formatBairroLocacao(b)} com harmonia visual impecável.`
      },
      {
        titulo: "Pergolados Metálicos com Cobertura Translúcida",
        icone: "🌿",
        descricao: `Estrutura moderna para áreas de convivência, piscinas e playgrounds em condomínios fechados com acabamento de alto padrão.`
      },
      {
        titulo: "Fixação Oculta e Parafusos Autobrocantes Inox",
        icone: "🔩",
        descricao: `Montagem limpa sem parafusos expostos desnecessários, com arruelas de vedação EPDM que não ressecam com o tempo.`
      },
      {
        titulo: "Laudo Estrutural e ART quando Solicitado pelo Síndico",
        icone: "📑",
        descricao: `Dimensionamento técnico de cargas de vento e sustentação para aprovação em assembleia de moradores sem contratempos.`
      }
    ],
    industrial: (b) => [
      {
        titulo: "Galpões de Armazenagem e Coberturas de Carga/Descarga",
        icone: "🏭",
        descricao: `Estruturas metálicas de grande vão para cobertura de pátios logísticos, caminhões e áreas de expedição ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Telhas Trapezoidais Galvalume de Alta Espessura",
        icone: "🏗️",
        descricao: `Resistência superior a atmosferas industriais com liga de alumínio e zinco que multiplica a vida útil da cobertura.`
      },
      {
        titulo: "Sistemas de Lanternins para Ventilação e Iluminação Natural",
        icone: "💨",
        descricao: `Aberturas superiores na cumeeira para exaustão contínua do ar quente e economia de energia com iluminação diurna.`
      },
      {
        titulo: "Drenagem Pluvial Pesada com Condutores de Grande Bitola",
        icone: "💧",
        descricao: `Calhas de chapa grossa dobrada com caimento técnico calculado para volumes extremos de água sem transbordamento.`
      }
    ]
  },

  "mezaninos-em-sorocaba": {
    comercial: (b) => [
      {
        titulo: "Duplicação da Área de Vendas ou Escritório Aéreo",
        icone: "🏬",
        descricao: `Aproveite o pé-direito alto da sua loja ${formatBairroLocacao(b)} para criar um andar superior sem pagar aluguel de ponto comercial adicional.`
      },
      {
        titulo: "Piso Wall Cimentício ou Madeira Tratada Antirruído",
        icone: "🪵",
        descricao: `Placas termoacústicas que suportam grande circulação de pessoas e estantes pesadas sem eco nos ambientes de atendimento térreo.`
      },
      {
        titulo: "Escadas Metálicas Comerciais com Pisos Antiderrapantes",
        icone: "🪜",
        descricao: `Degraus com chapa xadrez ou madeira nobre, com inclinação confortável e corrimãos contínuos para segurança total dos clientes.`
      },
      {
        titulo: "Montagem Ágil para Não Paralisar as Atividades da Loja",
        icone: "⏱️",
        descricao: `Estrutura pré-soldada e parafusada em oficina, reduzindo o tempo de instalação no seu comércio para poucos dias.`
      }
    ],
    residencial: (b) => [
      {
        titulo: "Mezaninos para Quartos, Home Office ou Bibliotecas",
        icone: "🏡",
        descricao: `Transformação de salas com pé-direito duplo em elegantes escritórios ou suítes adicionais em residências ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Design Industrial Moderno e Clean com Vigas Aparentes",
        icone: "🎨",
        descricao: `Estrutura em aço com pintura eletrostática preta ou branca que valoriza o visual arquitetônico contemporâneo do seu imóvel.`
      },
      {
        titulo: "Guarda-Corpos com Vidro ou Tubos Slim",
        icone: "🛡️",
        descricao: `Fechamento perimetral seguro para crianças e adultos, integrando perfeitamente a visão do andar superior com a sala de estar.`
      },
      {
        titulo: "Cálculo Preciso sem Sobrecarga nas Paredes Estruturais",
        icone: "📐",
        descricao: `Pilares metálicos de apoio próprios com sapatas de ancoragem que não dependem da alvenaria comum para sustentação.`
      }
    ],
    condominio: (b) => [
      {
        titulo: "Mezaninos em Salões de Festas e Academias de Condomínio",
        icone: "🏢",
        descricao: `Ampliação de espaços compartilhados em condomínios ${formatBairroLocacao(b)}, como salas de coworking e espaços fitness.`
      },
      {
        titulo: "Guarda-Corpos Estritamente dentro da ABNT NBR 14718",
        icone: "📐",
        descricao: `Altura mínima de 1,10m e vãos verticais de no máximo 11cm para proteção rigorosa contra quedas acidentais.`
      },
      {
        titulo: "Tratamento Acústico com Isolamento de Vibração",
        icone: "🔇",
        descricao: `Membranas e coxins elastoméricos entre as vigas e os painéis de piso para evitar a transmissão de passos e impactos mecânicos.`
      },
      {
        titulo: "Projeto Técnico e ART de Engenharia para o Síndico",
        icone: "📑",
        descricao: `Documentação completa com memória de cálculo estrutural para arquivamento no condomínio e liberação do seguro predial.`
      }
    ],
    industrial: (b) => [
      {
        titulo: "Mezaninos Pesados para Estoque e Cargas de 500 a 1.000 kg/m²",
        icone: "🏭",
        descricao: `Vigas laminadas I e W de usina com contraventamentos em X para armazenagem de paletes, caixas e maquinário industrial ${formatBairroLocacao(b)}.`
      },
      {
        titulo: "Piso em Chapa Xadrez de Aço Soldada",
        icone: "🔩",
        descricao: `Superfície antiderrapante ultra resistente a óleos, arraste de caixas metálicas e trânsito contínuo de carrinhos manuais de carga.`
      },
      {
        titulo: "Portões Basculantes de Carga para Elevação por Empilhadeira",
        icone: "🚜",
        descricao: `Abertura articulada de segurança na borda do mezanino para abastecimento direto de paletes do térreo para o piso superior.`
      },
      {
        titulo: "Conformidade Total com Normas NR-11, NR-12 e AVCB",
        icone: "✅",
        descricao: `Garantia de atendimento a vistorias do Corpo de Bombeiros e órgãos reguladores de segurança industrial.`
      }
    ]
  }
};

// Gera dados padrões para serviços que não tenham chave explícita
function getAplicacoesFallback(servico: ServicoItem, bairro: BairroItem): AplicacaoItem[] {
  const loc = formatBairroLocacao(bairro);
  const perfil = bairro.perfil;

  if (perfil === 'comercial') {
    return [
      {
        titulo: `Soluções Comerciais em ${servico.nome}`,
        icone: "🏬",
        descricao: `Projetos robustos e sob medida ${loc} para comércios, lojas de rua e escritórios que exigem segurança patrimonial aliada a estética moderna.`
      },
      {
        titulo: "Fabricação com Aço Galvanizado Gerdau e CSN",
        icone: "🛡️",
        descricao: `Perfis certificados que não empenam e resistem ao desgaste constante do dia a dia comercial em Sorocaba.`
      },
      {
        titulo: "Instalação com Menor Impacto Operacional",
        icone: "⏱️",
        descricao: `Planejamos a instalação para horários flexíveis de modo a não interromper o expediente de clientes e colaboradores.`
      },
      {
        titulo: "Garantia Estrutural Direta de Oficina",
        icone: "✅",
        descricao: `Sem intermediários: você negocia e tem suporte direto de quem realmente desenhou, soldou e instalou sua estrutura.`
      }
    ];
  }

  if (perfil === 'condominio') {
    return [
      {
        titulo: `Projetos de Alto Padrão em ${servico.nome}`,
        icone: "🏢",
        descricao: `Execução rigorosa com acabamento nobre e conformidade com as diretrizes arquitetônicas dos condomínios ${loc}.`
      },
      {
        titulo: "Soldas Desbastadas e Acabamento Fino",
        icone: "🎨",
        descricao: `Tratamento fino de superfície sem respingos ou rebarbas, recebendo pintura especial que valoriza o visual da residência.`
      },
      {
        titulo: "Segurança e Conformidade ABNT",
        icone: "📐",
        descricao: `Dimensionamento correto de bitolas e ancoragens para assegurar a tranquilidade da sua família e vizinhos.`
      },
      {
        titulo: "Atendimento Pontual e Limpo no Imóvel",
        icone: "🤝",
        descricao: `Equipe uniformizada que respeita os horários de barulho do condomínio e deixa o local de trabalho limpo.`
      }
    ];
  }

  if (perfil === 'industrial') {
    return [
      {
        titulo: `Resistência Pesada em ${servico.nome}`,
        icone: "🏭",
        descricao: `Desenvolvido para atender exigências operacionais severas de galpões, fábricas e transportadoras ${loc}.`
      },
      {
        titulo: "Solda MIG/MAG Contínua e Reforços Estruturais",
        icone: "⚡",
        descricao: `Cordões de solda de alta penetração para suportar vibrações, sobrecargas de vento e tráfego de máquinas pesadas.`
      },
      {
        titulo: "Chapas e Perfis Estruturais de Usina",
        icone: "🏗️",
        descricao: `Matéria-prima 100% rastreável com certificado de qualidade e laudo técnico para homologação patrimonial.`
      },
      {
        titulo: "Manutenção Preventiva e Atendimento Rápido",
        icone: "🔧",
        descricao: `Agilidade no fornecimento de peças e reparos no local para evitar gargalos na linha de produção da sua empresa.`
      }
    ];
  }

  // Residencial default
  return [
    {
      titulo: `Fabricação Sob Medida para Residências`,
      icone: "🏡",
      descricao: `Projetamos e executamos ${servico.nome} ${loc} respeitando as medidas exatas da sua casa, garantindo fechamento e alinhamento milimétricos.`
    },
    {
      titulo: "Tratamento Químico Anticorrosivo",
      icone: "🛡️",
      descricao: `Aplicação de primer fosfatizante antes da pintura para bloquear qualquer oxidação causada por chuvas e umidade em Sorocaba.`
    },
    {
      titulo: "Design Moderno e Valorização do Imóvel",
      icone: "✨",
      descricao: `Modelos que aliam linhas retas contemporâneas a uma proteção física reforçada para proteger seu patrimônio com elegância.`
    },
    {
      titulo: "Visita Técnica Gratuita e Sem Compromisso",
      icone: "📐",
      descricao: `Nosso técnico comparece no seu endereço ${loc} para tirar medidas detalhadas e tirar todas as suas dúvidas antes de fechar negócio.`
    }
  ];
}

// Ficha técnica rica e original
export function getEspecificacoesTecnicas(servicoSlug: string, bairro: BairroItem): EspecificacaoItem[] {
  const isPortao = servicoSlug.includes('portao') || servicoSlug.includes('portoes');
  const isSolda = servicoSlug.includes('solda');
  const isMezanino = servicoSlug.includes('mezanino');
  const isCobertura = servicoSlug.includes('cobertura') || servicoSlug.includes('telhado');

  if (isPortao) {
    return [
      { rotulo: "Estrutura Principal", valor: "Aço Galvanizado Gerdau/CSN", detalhe: "Tubos de 1,5mm a 2,0mm de parede", icone: "🔩" },
      { rotulo: "Soldagem", valor: "Processo MIG/MAG Industrial", detalhe: "Cordões contínuos sem porosidade", icone: "⚡" },
      { rotulo: "Proteção Anticorrosiva", valor: "Primer Epóxi Fosfatizante", detalhe: "Pintura sintética ou eletrostática a pó", icone: "🎨" },
      { rotulo: "Balanceamento", valor: "Caixa de Contrapeso Embutida", detalhe: "Cabos de aço 6x19 com alma de aço", icone: "⚖️" },
      { rotulo: "Tempo de Visita", valor: "Atendimento no Mesmo Dia", detalhe: `Visita técnica gratuita ${formatBairroLocacao(bairro)}`, icone: "📍" },
      { rotulo: "Garantia", valor: "Garantia Estrutural Completa", detalhe: "Garantia de fábrica e suporte pós-venda", icone: "🛡️" }
    ];
  }

  if (isSolda) {
    return [
      { rotulo: "Processos Disponíveis", valor: "MIG/MAG, TIG e Eletrodo (SMAW)", detalhe: "Normatizados conforme AWS D1.1", icone: "⚡" },
      { rotulo: "Metais Atendidos", valor: "Aço Carbono, Galvanizado e Inox", detalhe: "Perfis, tubos, cantoneiras e chapas", icone: "🔩" },
      { rotulo: "Acabamento de Cordão", valor: "Desbaste Fino com Disco Flap", detalhe: "Nivelamento plano sem rebarbas vivas", icone: "✨" },
      { rotulo: "Proteção de Campo", valor: "Isolamento Anti-Fagulha", detalhe: "Biombos térmicos para não danificar o piso", icone: "🛡️" },
      { rotulo: "Local de Execução", valor: "Oficina ou Diretamente no Imóvel", detalhe: `Atendimento ágil ${formatBairroLocacao(bairro)}`, icone: "📍" },
      { rotulo: "Suporte Pós-Solda", valor: "Primer Protetor na Zona Termicamente Afetada", detalhe: "Evita oxidação na região da solda", icone: "🎨" }
    ];
  }

  if (isMezanino) {
    return [
      { rotulo: "Perfis de Carga", valor: "Vigas Laminadas I e W", detalhe: "Aço ASTM A36 com cálculo de flecha", icone: "🏗️" },
      { rotulo: "Capacidade de Sobrecarga", valor: "300 a 1.000 kg/m²", detalhe: "Dimensionado conforme sua necessidade", icone: "⚖️" },
      { rotulo: "Opções de Piso", valor: "Painel Wall, Chapa Xadrez ou Naval", detalhe: "Tratamento acústico e antiderrapante", icone: "🪵" },
      { rotulo: "Guarda-Corpo", valor: "Normatizado ABNT NBR 14718", detalhe: "Altura 1,10m com rodapé de proteção", icone: "📐" },
      { rotulo: "Prazo de Montagem", valor: "Instalação em 2 a 5 Dias Úteis", detalhe: `Montagem limpa e rápida ${formatBairroLocacao(bairro)}`, icone: "⏱️" },
      { rotulo: "Documentação", valor: "ART e Memória de Cálculo", detalhe: "Disponível para condomínios e indústrias", icone: "📑" }
    ];
  }

  if (isCobertura) {
    return [
      { rotulo: "Pilares e Terças", valor: "Aço Estrutural Galvanizado", detalhe: "Resistência a torções e vendavais", icone: "🏗️" },
      { rotulo: "Opções de Telha", valor: "Telha Sanduíche (PIR/EPS) ou Policarbonato", detalhe: "Isolamento térmico e acústico superior", icone: "🌡️" },
      { rotulo: "Sistema Pluvial", valor: "Calhas e Rufos Sob Medida", detalhe: "Chapa dobrada sem emendas perigosas", icone: "🌧️" },
      { rotulo: "Vedação", valor: "Poliuretano Industrial (PU)", detalhe: "Impedimento total contra goteiras e vazamentos", icone: "💧" },
      { rotulo: "Fixação", valor: "Parafusos Autobrocantes com EPDM", detalhe: "Arruelas de neoprene contra entrada de água", icone: "🔩" },
      { rotulo: "Avaliação do Local", valor: "Medição de Caimento Gratuita", detalhe: `Análise técnica de prumo e caimento ${formatBairroLocacao(bairro)}`, icone: "📍" }
    ];
  }

  return [
    { rotulo: "Matéria-Prima", valor: "Aço Gerdau e CSN Galvanizado", detalhe: "Certificação de procedência e durabilidade", icone: "🔩" },
    { rotulo: "Processo de União", valor: "Solda MIG/MAG Reforçada", detalhe: "União mecânica contínua de alta fusão", icone: "⚡" },
    { rotulo: "Tratamento de Superfície", valor: "Primer Epóxi Fosfatizante", detalhe: "Proteção máxima contra ferrugem", icone: "🎨" },
    { rotulo: "Corte e Esquadro", valor: "Fabricação sob Gabarito", detalhe: "Conferência milimétrica de alinhamento", icone: "📐" },
    { rotulo: "Atendimento no Bairro", valor: "Visita e Medição Presencial Gratuita", detalhe: `Atendimento ágil ${formatBairroLocacao(bairro)}`, icone: "📍" },
    { rotulo: "Garantia", valor: "Garantia de Fabricação Própria", detalhe: "Assistência técnica ágil sem intermediários", icone: "🛡️" }
  ];
}

// 4 Passos do Fluxo Técnico no Bairro
export function getPassosAtendimento(servicoNome: string, bairro: BairroItem): PassoItem[] {
  const loc = formatBairroLocacao(bairro);
  return [
    {
      numero: "01",
      titulo: "Contato & Pré-Orçamento",
      descricao: `Envie fotos do local, medidas preliminares ou o modelo desejado pelo WhatsApp. Fornecemos uma estimativa inicial rápida de investimento para seu projeto ${loc}.`
    },
    {
      numero: "02",
      titulo: `Medição Gratuita ${loc}`,
      descricao: `Nosso técnico especializado vai até seu endereço em ${bairro.nome} sem nenhum custo para avaliar vãos, prumos, pontos de fixação e indicar a solução de ${servicoNome} mais econômica e duradoura.`
    },
    {
      numero: "03",
      titulo: "Fabricação em Gabarito",
      descricao: `Corte esquadrejado, solda industrial contínua MIG/MAG e aplicação de primer anticorrosivo com tratamento químico em nossa fábrica antes de receber a pintura final.`
    },
    {
      numero: "04",
      titulo: "Instalação Limpa & Testes",
      descricao: `Montagem pontual no imóvel com fixações reforçadas em concreto, regulagem de nivelamento milimétrico e testes operacionais completos com garantia por escrito.`
    }
  ];
}

// Diferenciais da Serralheria no Bairro
export function getDiferenciaisBairro(servicoNome: string, bairro: BairroItem) {
  const loc = formatBairroLocacao(bairro);
  return [
    {
      titulo: "Aço 100% Galvanizado de Usina",
      descricao: `Não usamos sucata ou ferro preto vulnerável. Trabalhamos apenas com perfis certificados Gerdau e CSN que impedem ferrugem na sua estrutura ${loc}.`,
      icone: "🛡️"
    },
    {
      titulo: "Visita Técnica sem Taxa de Deslocamento",
      descricao: `Diferente de profissionais que cobram apenas para ir ao imóvel, nossa visita para medição e consultoria técnica em ${bairro.nome} é totalmente gratuita.`,
      icone: "🚗"
    },
    {
      titulo: "Solda MIG/MAG com Desbaste Fino",
      descricao: `Acabamento esmerilhado sem porosidades ou pontas vivas. Nossas peças chegam prontas com padrão visual de serralheria de ponta.`,
      icone: "⚡"
    },
    {
      titulo: "Fabricação Própria sem Terceirização",
      descricao: `Você conversa e negocia diretamente com a equipe técnica responsável pelo projeto, garantindo cumprimento do prazo e garantia real no pós-venda.`,
      icone: "🏭"
    }
  ];
}

// FAQs originais e personalizadas combinando serviço, bairro e perfil
export function getFaqsServicoBairro(servico: ServicoItem, bairro: BairroItem): FaqItem[] {
  const loc = formatBairroLocacao(bairro);
  const nomeBairro = bairro.nome;
  const isPortao = servico.slug?.includes('portao') || servico.slug?.includes('portoes');
  const isSolda = servico.slug?.includes('solda');
  const isMezanino = servico.slug?.includes('mezanino');
  const isCobertura = servico.slug?.includes('cobertura') || servico.slug?.includes('telhado');

  if (isSolda) {
    return [
      {
        pergunta: `Vocês fazem serviços de solda diretamente no meu endereço ${loc} ou precisam levar a peça?`,
        resposta: `Atendemos das duas formas! Se for um reparo estrutural em portão, grade, corrimão, pilar ou fachada em ${nomeBairro}, nossa equipe vai até o local equipada com máquina portátil de solda MIG/MAG e eletrodo revestido para resolver no mesmo dia. Para peças novas ou reformas completas que exigem gabarito industrial, levamos para a oficina e reinstalamos perfeitamente ajustado.`
      },
      {
        pergunta: `Existe risco de danificar pisos ou vitrines com faíscas durante a solda ${loc}?`,
        resposta: `Não. Tomamos todos os cuidados técnicos de segurança: isolamos a área de trabalho com mantas antichamas e biombos protetores de soldagem, evitando qualquer mancha no piso cerâmico, porcelanato, vidros ou paredes do seu imóvel em ${nomeBairro}.`
      },
      {
        pergunta: `Vocês realizam serviços de solda fora do horário comercial em ${nomeBairro}?`,
        resposta: `Sim! Especialmente para comércios, lojas e galpões ${loc} que não podem paralisar o atendimento de clientes, agendamos intervenções de solda no início da manhã, após o fechamento ou aos sábados.`
      },
      {
        pergunta: `Qual garantia é oferecida após a realização da solda ${loc}?`,
        resposta: `Oferecemos garantia na resistência mecânica de todas as uniões soldadas. Nossos processos utilizam arames e eletrodos normatizados de alta penetração que garantem fusão estrutural definitiva, além de aplicação de primer anticorrosivo na área aquecida para evitar oxidação futura.`
      }
    ];
  }

  if (isPortao) {
    return [
      {
        pergunta: `Quanto tempo demora para fabricar e instalar um portão sob medida ${loc}?`,
        resposta: `O prazo médio de fabricação é combinado no momento do orçamento de acordo com o modelo escolhido (chapa lambril, tubos, gradil ou modelo exclusivo). Priorizamos agilidade para clientes em ${nomeBairro}, com instalação limpa realizada normalmente em poucas horas no mesmo dia da entrega.`
      },
      {
        pergunta: `O portão automático continuará abrindo se faltar energia elétrica ${loc}?`,
        resposta: `Sim! Todos os nossos portões automáticos acompanham sistema de destravamento manual simples acionado por chave personalizada. Além disso, disponibilizamos a instalação opcional de módulo nobreak com bateria autônoma para manter o portão operando sem interrupções.`
      },
      {
        pergunta: `A visita para medir o vão da garagem em ${nomeBairro} tem algum custo?`,
        resposta: `A visita é 100% gratuita e sem compromisso. Nosso técnico se desloca até seu endereço ${loc}, avalia o prumo das paredes, pontos de energia para o motor e traz catálogos de modelos e materiais para você escolher.`
      },
      {
        pergunta: `Por que o aço galvanizado é essencial para portões ${loc}?`,
        resposta: `O clima de Sorocaba com variações de umidade e fortes chuvas ataca rapidamente o ferro comum. O aço galvanizado possui uma camada protetora de zinco fundida na usina que não descasca, impedindo o apodrecimento da base do portão pelo contato diário com água e detritos.`
      }
    ];
  }

  if (isMezanino) {
    return [
      {
        pergunta: `Quanto peso um mezanino metálico aguenta ${loc}?`,
        resposta: `O mezanino é dimensionado especificamente para a sua necessidade em ${nomeBairro}. Projetamos desde mezaninos residenciais leves para escritórios (300 kg/m²) até estruturas industriais e comerciais pesadas para paletes e estoques com capacidade superior a 800 a 1.000 kg/m², com vigas laminadas I e W de usina.`
      },
      {
        pergunta: `A montagem do mezanino gera muita sujeira ou entulho no imóvel ${loc}?`,
        resposta: `Não. Diferente de lajes de concreto ou alvenaria, o mezanino metálico é uma obra seca e rápida. Todas as vigas e pilares chegam cortados e pré-soldados da nossa fábrica, sendo apenas parafusados e travados no local em poucos dias.`
      },
      {
        pergunta: `O mezanino já vem com escada e guarda-corpo de proteção?`,
        resposta: `Sim! Entregamos o projeto completo chave na mão, incluindo a escada metálica reforçada com degraus em chapa antiderrapante e o guarda-corpo perimetral conforme as exigências da norma ABNT NBR 14718 e normas dos Bombeiros.`
      },
      {
        pergunta: `Vocês fornecem ART (Anotação de Responsabilidade Técnica) em ${nomeBairro}?`,
        resposta: `Sim, para condomínios, centros comerciais e indústrias ${loc} que necessitam de documentação formal para seguradora ou prefeitura, fornecemos laudo de cálculo de carga assinado por engenheiro habilitado.`
      }
    ];
  }

  if (isCobertura) {
    return [
      {
        pergunta: `Qual cobertura é mais indicada para diminuir o calor da garagem ${loc}: telha sanduíche ou policarbonato?`,
        resposta: `Se o foco principal for isolamento térmico e acústico, a telha termoacústica sanduíche (com núcleo em PIR ou EPS) é a melhor escolha, reduzindo sensivelmente a temperatura interna. Se você precisa manter a claridade do sol no ambiente ou corredor, indicamos o policarbonato compacto ou alveolar com tratamento anti-UV.`
      },
      {
        pergunta: `A cobertura metálica aguenta tempestades e fortes ventos em ${nomeBairro}?`,
        resposta: `Com certeza. Toda a estrutura é ancorada com buchas de aço ou chumbadores químicos em concreto, e as tesouras/terças são calculadas contra esforços de sucção do vento, com parafusos autobrocantes e arruelas de vedação EPDM de alta pressão.`
      },
      {
        pergunta: `As calhas e rufos já estão inclusos na instalação ${loc}?`,
        resposta: `Sim, dimensionamos o sistema pluvial completo para a sua cobertura, com calhas dobradas em chapa galvanizada sem emendas frágeis e vedação em poliuretano industrial (PU), garantindo que a água da chuva seja drenada corretamente sem goteiras.`
      },
      {
        pergunta: `Como solicito a visita de medição da cobertura ${loc}?`,
        resposta: `Basta nos chamar no WhatsApp! Combinamos o melhor dia e horário para que nosso técnico vá até seu imóvel em ${nomeBairro} avaliar o vão, caimento do telhado e altura ideal sem nenhum custo de deslocamento.`
      }
    ];
  }

  // Fallback geral
  return [
    {
      pergunta: `Como contratar ${formatBairroServico(servico.nome, bairro)} com visita técnica sem custo?`,
      resposta: `Basta entrar em contato pelo nosso WhatsApp comercial. Nós agendamos a visita técnica presencial no seu imóvel ${loc} sem cobrar nenhuma taxa, tiramos todas as medidas exatas e enviamos um orçamento claro e detalhado.`
    },
    {
      pergunta: `Qual a matéria-prima utilizada na fabricação ${loc}?`,
      resposta: `Utilizamos exclusivamente aço galvanizado de usina (Gerdau e CSN), submetido a corte esquadrejado, solda industrial contínua MIG/MAG e tratamento de superfície com primer protetor contra ferrugem antes da pintura final.`
    },
    {
      pergunta: `Qual o prazo médio de execução do serviço em ${nomeBairro}?`,
      resposta: `O prazo varia de acordo com o porte do projeto e é informado com transparência no orçamento. Trabalhamos com cronograma rigoroso para entregar e instalar na data combinada, sem atrasos ou desculpas.`
    },
    {
      pergunta: `Vocês oferecem garantia após a instalação ${loc}?`,
      resposta: `Sim! Oferecemos garantia estrutural de fábrica em todos os nossos projetos executados ${loc}, com assistência técnica local ágil em Sorocaba caso haja necessidade de qualquer ajuste pós-instalação.`
    }
  ];
}

// Título natural, profissional e fluente para a seção técnica explicativa
export function getTituloSecaoExplicativa(servicoNome: string, bairro: BairroItem): string {
  const nomeLimpo = servicoNome
    .replace(/\s+em Sorocaba$/i, "")
    .replace(/\s+Sorocaba$/i, "")
    .trim();

  const prep = bairro.preposicao; // "no", "na", "em"
  const locSimples = `${prep} ${bairro.nome}`; // ex: "na Granja Olga I"

  const lower = nomeLimpo.toLowerCase();
  if (lower.startsWith('serviços de solda') || lower.startsWith('servico de solda')) {
    return `Serviços de Solda e Reparos Estruturais ${locSimples}`;
  }
  if (lower.startsWith('manutenção')) {
    return `Manutenção e Conserto de Portão Eletrônico ${locSimples}`;
  }
  if (lower.startsWith('conserto')) {
    return `Conserto e Reforma de Portão de Ferro ${locSimples}`;
  }
  if (lower.startsWith('cobertura')) {
    return `Fabricação e Montagem de Coberturas Metálicas ${locSimples}`;
  }
  if (lower.startsWith('mezanino')) {
    return `Fabricação e Montagem de Mezaninos sob Medida ${locSimples}`;
  }
  if (lower.startsWith('cerca')) {
    return `Instalação de Cercas Metálicas e Gradis ${locSimples}`;
  }
  if (lower.startsWith('guarda')) {
    return `Fabricação de Guarda-Corpo sob Medida ${locSimples}`;
  }
  if (lower.startsWith('estrutura')) {
    return `Fabricação de Estruturas Metálicas para Telhados ${locSimples}`;
  }

  // Padrão para portões e grades
  return `Fabricação e Instalação de ${nomeLimpo} ${locSimples}`;
}

// Função agregadora para o template Astro
export function getContextoServicoBairro(servico: ServicoItem, bairro: BairroItem): ContextoServicoBairro {
  const slug = servico.slug || 'servicos-de-solda-sorocaba';
  const perfil = bairro.perfil || 'residencial';
  const loc = formatBairroLocacao(bairro);
  const nomeLimpo = servico.nome
    .replace(/\s+em Sorocaba$/i, "")
    .replace(/\s+Sorocaba$/i, "")
    .trim();
  const locSimples = `${bairro.preposicao} ${bairro.nome}`;

  // Seleciona aplicações práticas originais
  const aplicacoesFn = aplicacoesPorPerfil[slug]?.[perfil] || ((b: BairroItem) => getAplicacoesFallback(servico, b));
  const aplicacoes = aplicacoesFn(bairro);

  // Subtítulo e texto contextual adaptados ao perfil e bairro
  let subtituloContexto = `Projetos de ${nomeLimpo} ${locSimples}`;
  let textoContexto = "";

  if (perfil === 'comercial') {
    subtituloContexto = `Soluções Comerciais em ${nomeLimpo} ${locSimples}`;
    textoContexto = `Para estabelecimentos comerciais e empresas ${loc}, desenvolvemos projetos sob medida com aço galvanizado de usina e acabamento resistente para garantir segurança patrimonial e valorizar a fachada do seu imóvel em ${bairro.nome}.`;
  } else if (perfil === 'condominio') {
    subtituloContexto = `Padrão Arquitetônico e Segurança em Condomínios ${locSimples}`;
    textoContexto = `Para residências e condomínios fechados ${loc}, priorizamos estética refinada, solda contínua com desbaste fino e total conformidade com as diretrizes e regulamentos internos de ${bairro.nome}.`;
  } else if (perfil === 'industrial') {
    subtituloContexto = `Estruturas Pesadas e Aplicações Industriais ${locSimples}`;
    textoContexto = `Para galpões e plantas industriais ${loc}, executamos estruturas metálicas e caldeiraria dimensionadas para suportar fluxos intensos, intempéries e esforços contínuos de operação.`;
  } else {
    subtituloContexto = `Projetos Residenciais sob Medida ${locSimples}`;
    textoContexto = `Para residências familiares ${loc}, entregamos projetos que aliam proteção reforçada, funcionamento suave e valorização estética da sua fachada em ${bairro.nome}.`;
  }

  return {
    subtituloContexto,
    textoContexto,
    aplicacoes,
    especificacoes: getEspecificacoesTecnicas(slug, bairro),
    passos: getPassosAtendimento(servico.nome, bairro),
    diferenciais: getDiferenciaisBairro(servico.nome, bairro),
    faqs: getFaqsServicoBairro(servico, bairro)
  };
}
