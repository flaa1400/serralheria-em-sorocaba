export interface ServicoItem {
  nome: string;
  descricao: string;
  svg: string;
  slug?: string;
}

export const servicosOferecidos: ServicoItem[] = [
  {
    nome: "Grades e Portões em Sorocaba",
    descricao: "Fabricação sob medida com tubos e perfis reforçados, solda de alta resistência e acabamento anticorrosivo para segurança residencial e comercial.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="17" rx="1.5" stroke-width="1.8"/><path stroke-linecap="round" stroke-width="1.8" d="M7 4v17M11 4v17M15 4v17M19 4v17M3 10h18M3 16h18M7 4V2M11 4V2M15 4V2M19 4V2"/></svg>`,
    slug: "grades-e-portoes-sorocaba"
  },
  {
    nome: "Portões Automáticos em Sorocaba",
    descricao: "Automatização completa com motores de alta velocidade (PPA, Rossi, Peccinin), placas inteligentes e controles configurados para sua comodidade.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="5" width="11" height="15" rx="1" stroke-width="1.8"/><path stroke-linecap="round" stroke-width="1.8" d="M6 5v15M9 5v15M2 20h20"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11l3 3-3 3M14 14h5"/><path stroke-linecap="round" stroke-width="1.8" d="M17 6a4 4 0 010 5.6M19.5 3.5a7.5 7.5 0 010 10.6"/></svg>`,
    slug: "portoes-automaticos-sorocaba"
  },
  {
    nome: "Portões Basculantes Automáticos em Sorocaba",
    descricao: "Sistema de contrapeso balanceado para abertura vertical suave, ideal para garagens com limite de espaço, garantindo máxima segurança.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="1.8" d="M4 21V3M20 21V3"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16l14-6 2 2-14 6z"/><path stroke-linecap="round" stroke-width="1.8" d="M4 16h16"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 6a5 5 0 015 5m0 0l-2-2m2 2l2-2"/></svg>`,
    slug: "portoes-basculantes-automaticos-sorocaba"
  },
  {
    nome: "Coberturas Metálicas em Sorocaba",
    descricao: "Coberturas resistentes com telhas galvanizadas, termoacústicas (sanduíche) e policarbonato para garagens, áreas gourmet e indústrias.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 11l17-5 2 2-17 5z"/><path stroke-linecap="round" stroke-width="1.8" d="M5 10l3-1M10 9l3-1M15 8l3-1M5 13v8M18 9v12M5 18h13"/></svg>`,
    slug: "cobertura-metalica-sorocaba"
  },
  {
    nome: "Serviços de Solda em Sorocaba",
    descricao: "Soldagem especializada MIG, TIG e eletrodo revestido para reparos estruturais imediatos, reforços em ferro e customizações técnicas.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 4l5 5-8 8-3-1-1-3 7-9zM7 16l-3 3"/><circle cx="3" cy="20" r="1" fill="currentColor"/><path stroke-linecap="round" stroke-width="1.8" d="M2 17l1 1M6 21l-1-1M5 17l-1 2M1 19l2 1M8 12l2-2"/></svg>`,
    slug: "servicos-de-solda-sorocaba"
  },
  {
    nome: "Mezaninos em Sorocaba",
    descricao: "Aproveitamento vertical inteligente para estoques, escritórios e lojas comerciais com piso wall, chapa xadrez ou compensado naval.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="1.8" d="M3 21V4M21 21V4M3 12h18M3 8h12"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 21l4-9M18 21l3-9"/><path stroke-linecap="round" stroke-width="1.8" d="M16 19h2.5M17 16h2.5M18 13h2.5"/></svg>`,
    slug: "mezaninos-em-sorocaba"
  },
  {
    nome: "Manutenção de Portão Eletrônico em Sorocaba",
    descricao: "Troca rápida de cabos de aço, regulagem de roldanas, conserto de placas centrais, substituição de cremalheiras e destravamento ágil.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="3" stroke-width="1.8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 2v2m0 14v2M2 11h2m14 0h2M4.64 4.64l1.41 1.41m9.9 9.9l1.41 1.41M4.64 17.36l1.41-1.41m9.9-9.9l1.41-1.41M13 13l7 7m0 0l2-2-4-4"/></svg>`,
    slug: "manutencao-de-portao-eletronico-sorocaba"
  },
  {
    nome: "Conserto de Portão de Ferro em Sorocaba",
    descricao: "Recuperação de portões enferrujados, alinhamento de trilhos, troca de chapas avariadas e recuperação completa do funcionamento.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="6" width="11" height="15" rx="1" stroke-width="1.8"/><path stroke-linecap="round" stroke-width="1.8" d="M6 6v15M9 6v15M3 13h11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 8l4-4 2 2-4 4-2-2zM17 9l-4 4"/><path stroke-linecap="round" stroke-width="1.8" d="M20 18h2"/></svg>`,
    slug: "conserto-portao-de-ferro-sorocaba"
  },
  {
    nome: "Grades de Ferro em Sorocaba",
    descricao: "Grades decorativas e de alta proteção para janelas, muros e sacadas, combinando estética moderna e proteção reforçada.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke-width="1.8"/><path stroke-linecap="round" stroke-width="1.8" d="M9 4v16M15 4v16"/><circle cx="9" cy="12" r="1.5" stroke-width="1.8"/><circle cx="15" cy="12" r="1.5" stroke-width="1.8"/><path stroke-linecap="round" stroke-width="1.8" d="M4 12h3.5M10.5 12h3M16.5 12H20"/></svg>`,
    slug: "grades-de-protecao-esquadrias"
  },
  {
    nome: "Guarda-Corpo em Sorocaba",
    descricao: "Guarda-corpos para escadas, mezaninos e varandas, projetados em total conformidade com a norma de segurança ABNT NBR 14718.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M3 6h18M2 20h20"/><path stroke-linecap="round" stroke-width="1.8" d="M3 13h18M5 6v14M9 6v14M12 6v14M15 6v14M19 6v14"/></svg>`,
    slug: "guarda-corpo-em-sorocaba"
  },
  {
    nome: "Cercas Metálicas em Sorocaba",
    descricao: "Instalação e confecção de cercas metálicas, gradis modulares e fechamentos perimetrais para chácaras, empresas e condomínios.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 21V5l2-2 2 2v16M16 21V5l2-2 2 2v16"/><path stroke-linecap="round" stroke-width="1.8" d="M2 9h20M2 17h20M8 9l8 8M16 9l-8 8"/></svg>`,
    slug: "cercas-metalicas-sorocaba"
  },
  {
    nome: "Estruturas Metálicas para Telhados em Sorocaba",
    descricao: "Tesouras e terças de aço galvanizado que substituem a madeira com maior durabilidade, leveza e imunidade contra cupins e empenamentos.",
    svg: `<svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2 18h20L12 5 2 18z"/><path stroke-linecap="round" stroke-width="1.8" d="M12 5v13M12 11l6 7M12 11L6 18M7 11.5l5 6.5M17 11.5l-5 6.5"/></svg>`,
    slug: "estrutura-metalica-para-telhado-sorocaba"
  }
];
