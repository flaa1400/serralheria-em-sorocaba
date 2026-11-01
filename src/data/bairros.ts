export interface BairroItem {
  slug: string;
  nome: string;
  nomeCompleto: string;
  preposicao: "no" | "na" | "em";
  perfil: "condominio" | "comercial" | "industrial" | "residencial";
  layoutVariant: 1 | 2 | 3 | 4;
  destaqueFoco: string;
  descricaoContexto: string;
  faqs: Array<{ q: string; a: string }>;
}

export const bairrosAtendidosData: BairroItem[] = [
  {
    "slug": "abaete",
    "nome": "Abaeté",
    "nomeCompleto": "Abaeté em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 1,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Abaeté",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Abaeté, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Abaeté?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Abaeté."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Abaeté?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "alem-ponte",
    "nome": "Além Ponte",
    "nomeCompleto": "Além Ponte em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Além Ponte",
    "descricaoContexto": "Para lojistas e comércios no Além Ponte, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Além Ponte?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Além Ponte funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Além Ponte?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Além Ponte."
      }
    ]
  },
  {
    "slug": "aparecida",
    "nome": "Aparecida",
    "nomeCompleto": "Aparecida em Sorocaba",
    "preposicao": "na",
    "perfil": "residencial",
    "layoutVariant": 3,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Aparecida",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores na Aparecida, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço na Aparecida?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados na Aparecida."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas na Aparecida?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "area-industrial",
    "nome": "Área Industrial",
    "nomeCompleto": "Área Industrial em Sorocaba",
    "preposicao": "na",
    "perfil": "industrial",
    "layoutVariant": 4,
    "destaqueFoco": "Estruturas Pesadas, Galpões e Solda Especializada em Área Industrial",
    "descricaoContexto": "Na região de Área Industrial, realizamos serviços pesados de caldeiraria, portões industriais com motores de alto fluxo, reforços estruturais e solda MIG/MAG industrial para galpões e depósitos.",
    "faqs": [
      {
        "q": "Vocês fornecem ART e projeto técnico para galpões na Área Industrial?",
        "a": "Sim, todos os nossos projetos industriais e estruturais contam com acompanhamento técnico e materiais certificados conforme normas ABNT."
      },
      {
        "q": "Quais tipos de solda são utilizados nas estruturas?",
        "a": "Trabalhamos com processos industriais de solda MIG/MAG com gás de proteção e eletrodo revestido de alta penetração em aço estrutural."
      },
      {
        "q": "Vocês atendem chamados de manutenção e reforço de estruturas existentes?",
        "a": "Sim, temos equipe volante para reparos emergenciais em portões industriais, trincas em vigas e substituição de peças avariadas na Área Industrial."
      }
    ]
  },
  {
    "slug": "barcelona",
    "nome": "Barcelona",
    "nomeCompleto": "Barcelona em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 1,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Barcelona",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Barcelona, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Barcelona?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Barcelona."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Barcelona?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "boa-vista",
    "nome": "Boa Vista",
    "nomeCompleto": "Boa Vista em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 2,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Boa Vista",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Boa Vista, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Boa Vista?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Boa Vista."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Boa Vista?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "brigadeiro-tobias",
    "nome": "Brigadeiro Tobias",
    "nomeCompleto": "Brigadeiro Tobias em Sorocaba",
    "preposicao": "em",
    "perfil": "residencial",
    "layoutVariant": 3,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Brigadeiro Tobias",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores em Brigadeiro Tobias, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço em Brigadeiro Tobias?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados em Brigadeiro Tobias."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas em Brigadeiro Tobias?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "caguacu",
    "nome": "Caguaçú",
    "nomeCompleto": "Caguaçú em Sorocaba",
    "preposicao": "em",
    "perfil": "residencial",
    "layoutVariant": 4,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Caguaçú",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores em Caguaçú, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço em Caguaçú?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados em Caguaçú."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas em Caguaçú?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "cajuru-do-sul",
    "nome": "Cajurú do Sul",
    "nomeCompleto": "Cajurú do Sul em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 1,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Cajurú do Sul",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Cajurú do Sul, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Cajurú do Sul?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Cajurú do Sul."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Cajurú do Sul?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "campininha",
    "nome": "Campininha",
    "nomeCompleto": "Campininha em Sorocaba",
    "preposicao": "na",
    "perfil": "residencial",
    "layoutVariant": 2,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Campininha",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores na Campininha, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço na Campininha?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados na Campininha."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas na Campininha?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "campos",
    "nome": "Campos",
    "nomeCompleto": "Campos em Sorocaba",
    "preposicao": "em",
    "perfil": "residencial",
    "layoutVariant": 3,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Campos",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores em Campos, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço em Campos?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados em Campos."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas em Campos?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "caputera",
    "nome": "Caputera",
    "nomeCompleto": "Caputera em Sorocaba",
    "preposicao": "na",
    "perfil": "residencial",
    "layoutVariant": 4,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Caputera",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores na Caputera, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço na Caputera?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados na Caputera."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas na Caputera?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "central-parque",
    "nome": "Central Parque",
    "nomeCompleto": "Central Parque em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 1,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Central Parque",
    "descricaoContexto": "Para lojistas e comércios no Central Parque, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Central Parque?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Central Parque funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Central Parque?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Central Parque."
      }
    ]
  },
  {
    "slug": "centro",
    "nome": "Centro",
    "nomeCompleto": "Centro de Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Centro",
    "descricaoContexto": "Para lojistas e comércios no Centro, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Centro?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Centro funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Centro?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Centro."
      }
    ]
  },
  {
    "slug": "cerrado",
    "nome": "Cerrado",
    "nomeCompleto": "Cerrado em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Cerrado",
    "descricaoContexto": "Para lojistas e comércios no Cerrado, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Cerrado?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Cerrado funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Cerrado?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Cerrado."
      }
    ]
  },
  {
    "slug": "chacara-caputera",
    "nome": "Chácara Caputera",
    "nomeCompleto": "Chácara Caputera em Sorocaba",
    "preposicao": "na",
    "perfil": "residencial",
    "layoutVariant": 4,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Chácara Caputera",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores na Chácara Caputera, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço na Chácara Caputera?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados na Chácara Caputera."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas na Chácara Caputera?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "chacara-tres-marias",
    "nome": "Chácara Três Marias",
    "nomeCompleto": "Chácara Três Marias em Sorocaba",
    "preposicao": "na",
    "perfil": "residencial",
    "layoutVariant": 1,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Chácara Três Marias",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores na Chácara Três Marias, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço na Chácara Três Marias?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados na Chácara Três Marias."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas na Chácara Três Marias?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "cidade-jardim",
    "nome": "Cidade Jardim",
    "nomeCompleto": "Cidade Jardim em Sorocaba",
    "preposicao": "na",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Cidade Jardim",
    "descricaoContexto": "Para lojistas e comércios na Cidade Jardim, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial na Cidade Jardim?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial na Cidade Jardim funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio na Cidade Jardim?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia na Cidade Jardim."
      }
    ]
  },
  {
    "slug": "village-vert",
    "nome": "Village Vert",
    "nomeCompleto": "Condomínio Residencial Village Vert em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 3,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Village Vert",
    "descricaoContexto": "Em Village Vert, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Village Vert?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Village Vert."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Village Vert?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Village Vert?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Village Vert."
      }
    ]
  },
  {
    "slug": "condominio-rua-ipatinga",
    "nome": "Condomínio Rua Ipatinga",
    "nomeCompleto": "Condomínio Rua Ipatinga em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 4,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Condomínio Rua Ipatinga",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Condomínio Rua Ipatinga, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Condomínio Rua Ipatinga?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Condomínio Rua Ipatinga."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Condomínio Rua Ipatinga?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "genebra",
    "nome": "Genebra",
    "nomeCompleto": "Genebra em Sorocaba",
    "preposicao": "em",
    "perfil": "residencial",
    "layoutVariant": 1,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Genebra",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores em Genebra, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço em Genebra?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados em Genebra."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas em Genebra?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "genebra-morros",
    "nome": "Genebra Morros",
    "nomeCompleto": "Genebra Morros em Sorocaba",
    "preposicao": "em",
    "perfil": "residencial",
    "layoutVariant": 2,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Genebra Morros",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores em Genebra Morros, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço em Genebra Morros?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados em Genebra Morros."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas em Genebra Morros?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "granja-olga-i",
    "nome": "Granja Olga I",
    "nomeCompleto": "Granja Olga I em Sorocaba",
    "preposicao": "na",
    "perfil": "condominio",
    "layoutVariant": 3,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Granja Olga I",
    "descricaoContexto": "Em Granja Olga I, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante na Granja Olga I?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia na Granja Olga I."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Granja Olga I?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo na Granja Olga I?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas na Granja Olga I."
      }
    ]
  },
  {
    "slug": "granja-olga-ii",
    "nome": "Granja Olga II",
    "nomeCompleto": "Granja Olga II em Sorocaba",
    "preposicao": "na",
    "perfil": "condominio",
    "layoutVariant": 4,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Granja Olga II",
    "descricaoContexto": "Em Granja Olga II, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante na Granja Olga II?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia na Granja Olga II."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Granja Olga II?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo na Granja Olga II?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas na Granja Olga II."
      }
    ]
  },
  {
    "slug": "granja-olga-iii",
    "nome": "Granja Olga III",
    "nomeCompleto": "Granja Olga III em Sorocaba",
    "preposicao": "na",
    "perfil": "condominio",
    "layoutVariant": 1,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Granja Olga III",
    "descricaoContexto": "Em Granja Olga III, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante na Granja Olga III?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia na Granja Olga III."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Granja Olga III?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo na Granja Olga III?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas na Granja Olga III."
      }
    ]
  },
  {
    "slug": "inhayba",
    "nome": "Inhayba",
    "nomeCompleto": "Inhayba em Sorocaba",
    "preposicao": "em",
    "perfil": "residencial",
    "layoutVariant": 2,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Inhayba",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores em Inhayba, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço em Inhayba?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados em Inhayba."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas em Inhayba?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "ipanema-do-meio",
    "nome": "Ipanema do Meio",
    "nomeCompleto": "Ipanema do Meio em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 3,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Ipanema do Meio",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Ipanema do Meio, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Ipanema do Meio?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Ipanema do Meio."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Ipanema do Meio?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "ipanema-meio",
    "nome": "Ipanema Meio",
    "nomeCompleto": "Ipanema Meio em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 4,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Ipanema Meio",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Ipanema Meio, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Ipanema Meio?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Ipanema Meio."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Ipanema Meio?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "ipanema-ville",
    "nome": "Ipanema Ville",
    "nomeCompleto": "Ipanema Ville em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 1,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Ipanema Ville",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Ipanema Ville, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Ipanema Ville?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Ipanema Ville."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Ipanema Ville?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "ipatinga",
    "nome": "Ipatinga",
    "nomeCompleto": "Ipatinga em Sorocaba",
    "preposicao": "em",
    "perfil": "residencial",
    "layoutVariant": 2,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Ipatinga",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores em Ipatinga, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço em Ipatinga?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados em Ipatinga."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas em Ipatinga?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "iporanga",
    "nome": "Iporanga",
    "nomeCompleto": "Iporanga em Sorocaba",
    "preposicao": "no",
    "perfil": "industrial",
    "layoutVariant": 3,
    "destaqueFoco": "Estruturas Pesadas, Galpões e Solda Especializada em Iporanga",
    "descricaoContexto": "Na região de Iporanga, realizamos serviços pesados de caldeiraria, portões industriais com motores de alto fluxo, reforços estruturais e solda MIG/MAG industrial para galpões e depósitos.",
    "faqs": [
      {
        "q": "Vocês fornecem ART e projeto técnico para galpões no Iporanga?",
        "a": "Sim, todos os nossos projetos industriais e estruturais contam com acompanhamento técnico e materiais certificados conforme normas ABNT."
      },
      {
        "q": "Quais tipos de solda são utilizados nas estruturas?",
        "a": "Trabalhamos com processos industriais de solda MIG/MAG com gás de proteção e eletrodo revestido de alta penetração em aço estrutural."
      },
      {
        "q": "Vocês atendem chamados de manutenção e reforço de estruturas existentes?",
        "a": "Sim, temos equipe volante para reparos emergenciais em portões industriais, trincas em vigas e substituição de peças avariadas no Iporanga."
      }
    ]
  },
  {
    "slug": "iporanga-ii",
    "nome": "Iporanga II",
    "nomeCompleto": "Iporanga II em Sorocaba",
    "preposicao": "no",
    "perfil": "industrial",
    "layoutVariant": 4,
    "destaqueFoco": "Estruturas Pesadas, Galpões e Solda Especializada em Iporanga II",
    "descricaoContexto": "Na região de Iporanga II, realizamos serviços pesados de caldeiraria, portões industriais com motores de alto fluxo, reforços estruturais e solda MIG/MAG industrial para galpões e depósitos.",
    "faqs": [
      {
        "q": "Vocês fornecem ART e projeto técnico para galpões no Iporanga II?",
        "a": "Sim, todos os nossos projetos industriais e estruturais contam com acompanhamento técnico e materiais certificados conforme normas ABNT."
      },
      {
        "q": "Quais tipos de solda são utilizados nas estruturas?",
        "a": "Trabalhamos com processos industriais de solda MIG/MAG com gás de proteção e eletrodo revestido de alta penetração em aço estrutural."
      },
      {
        "q": "Vocês atendem chamados de manutenção e reforço de estruturas existentes?",
        "a": "Sim, temos equipe volante para reparos emergenciais em portões industriais, trincas em vigas e substituição de peças avariadas no Iporanga II."
      }
    ]
  },
  {
    "slug": "itangua",
    "nome": "Itangua",
    "nomeCompleto": "Itangua em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 1,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Itangua",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Itangua, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Itangua?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Itangua."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Itangua?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "itavuvu",
    "nome": "Itavuvu",
    "nomeCompleto": "Itavuvu em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 2,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Itavuvu",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Itavuvu, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Itavuvu?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Itavuvu."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Itavuvu?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "jardim-abaete",
    "nome": "Jardim Abaeté",
    "nomeCompleto": "Jardim Abaeté em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 3,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Jardim Abaeté",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Jardim Abaeté, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Jardim Abaeté?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Jardim Abaeté."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Jardim Abaeté?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "jardim-abatia",
    "nome": "Jardim Abatia",
    "nomeCompleto": "Jardim Abatia em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 4,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Abatia",
    "descricaoContexto": "Para lojistas e comércios no Jardim Abatia, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Abatia?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Abatia funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Abatia?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Abatia."
      }
    ]
  },
  {
    "slug": "jardim-alegria",
    "nome": "Jardim Alegria",
    "nomeCompleto": "Jardim Alegria em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 1,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Alegria",
    "descricaoContexto": "Para lojistas e comércios no Jardim Alegria, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Alegria?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Alegria funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Alegria?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Alegria."
      }
    ]
  },
  {
    "slug": "jardim-alpes",
    "nome": "Jardim Alpes",
    "nomeCompleto": "Jardim Alpes de Sorocaba em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Alpes",
    "descricaoContexto": "Para lojistas e comércios no Jardim Alpes, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Alpes?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Alpes funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Alpes?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Alpes."
      }
    ]
  },
  {
    "slug": "jardim-altos-do-itavuvu",
    "nome": "Jardim Altos do Itavuvu",
    "nomeCompleto": "Jardim Altos do Itavuvu em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 3,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Altos do Itavuvu",
    "descricaoContexto": "Em Jardim Altos do Itavuvu, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Altos do Itavuvu?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Altos do Itavuvu."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Altos do Itavuvu?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Altos do Itavuvu?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Altos do Itavuvu."
      }
    ]
  },
  {
    "slug": "jardim-alvorada",
    "nome": "Jardim Alvorada",
    "nomeCompleto": "Jardim Alvorada em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 4,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Alvorada",
    "descricaoContexto": "Para lojistas e comércios no Jardim Alvorada, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Alvorada?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Alvorada funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Alvorada?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Alvorada."
      }
    ]
  },
  {
    "slug": "jardim-america",
    "nome": "Jardim América",
    "nomeCompleto": "Jardim América em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 1,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim América",
    "descricaoContexto": "Em Jardim América, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim América?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim América."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim América?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim América?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim América."
      }
    ]
  },
  {
    "slug": "jardim-americano",
    "nome": "Jardim Americano",
    "nomeCompleto": "Jardim Americano em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 2,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Americano",
    "descricaoContexto": "Em Jardim Americano, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Americano?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Americano."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Americano?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Americano?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Americano."
      }
    ]
  },
  {
    "slug": "jardim-ana-maria",
    "nome": "Jardim Ana Maria",
    "nomeCompleto": "Jardim Ana Maria em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Ana Maria",
    "descricaoContexto": "Para lojistas e comércios no Jardim Ana Maria, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Ana Maria?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Ana Maria funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Ana Maria?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Ana Maria."
      }
    ]
  },
  {
    "slug": "jardim-astro",
    "nome": "Jardim Astro",
    "nomeCompleto": "Jardim Astro em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 4,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Astro",
    "descricaoContexto": "Em Jardim Astro, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Astro?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Astro."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Astro?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Astro?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Astro."
      }
    ]
  },
  {
    "slug": "jardim-avore-pilungo",
    "nome": "Jardim Avore Pilungo",
    "nomeCompleto": "Jardim Avore Pilungo em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 1,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Avore Pilungo",
    "descricaoContexto": "Em Jardim Avore Pilungo, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Avore Pilungo?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Avore Pilungo."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Avore Pilungo?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Avore Pilungo?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Avore Pilungo."
      }
    ]
  },
  {
    "slug": "jardim-bandeirantes",
    "nome": "Jardim Bandeirantes",
    "nomeCompleto": "Jardim Bandeirantes em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Bandeirantes",
    "descricaoContexto": "Para lojistas e comércios no Jardim Bandeirantes, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Bandeirantes?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Bandeirantes funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Bandeirantes?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Bandeirantes."
      }
    ]
  },
  {
    "slug": "jardim-bela-vista",
    "nome": "Jardim Bela Vista",
    "nomeCompleto": "Jardim Bela Vista em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Bela Vista",
    "descricaoContexto": "Para lojistas e comércios no Jardim Bela Vista, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Bela Vista?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Bela Vista funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Bela Vista?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Bela Vista."
      }
    ]
  },
  {
    "slug": "jardim-bertanha",
    "nome": "Jardim Bertanha",
    "nomeCompleto": "Jardim Bertanha em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 4,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Bertanha",
    "descricaoContexto": "Para lojistas e comércios no Jardim Bertanha, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Bertanha?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Bertanha funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Bertanha?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Bertanha."
      }
    ]
  },
  {
    "slug": "jardim-betania",
    "nome": "Jardim Betânia",
    "nomeCompleto": "Jardim Betânia em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 1,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Betânia",
    "descricaoContexto": "Para lojistas e comércios no Jardim Betânia, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Betânia?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Betânia funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Betânia?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Betânia."
      }
    ]
  },
  {
    "slug": "jardim-boa-esperanca",
    "nome": "Jardim Boa Esperança",
    "nomeCompleto": "Jardim Boa Esperança em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Boa Esperança",
    "descricaoContexto": "Para lojistas e comércios no Jardim Boa Esperança, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Boa Esperança?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Boa Esperança funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Boa Esperança?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Boa Esperança."
      }
    ]
  },
  {
    "slug": "jardim-boa-vista",
    "nome": "Jardim Boa Vista",
    "nomeCompleto": "Jardim Boa Vista em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Boa Vista",
    "descricaoContexto": "Para lojistas e comércios no Jardim Boa Vista, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Boa Vista?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Boa Vista funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Boa Vista?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Boa Vista."
      }
    ]
  },
  {
    "slug": "jardim-bonsucesso",
    "nome": "Jardim Bonsucesso",
    "nomeCompleto": "Jardim Bonsucesso em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 4,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Bonsucesso",
    "descricaoContexto": "Em Jardim Bonsucesso, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Bonsucesso?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Bonsucesso."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Bonsucesso?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Bonsucesso?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Bonsucesso."
      }
    ]
  },
  {
    "slug": "jardim-botucatu",
    "nome": "Jardim Botucatu",
    "nomeCompleto": "Jardim Botucatu em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 1,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Botucatu",
    "descricaoContexto": "Em Jardim Botucatu, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Botucatu?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Botucatu."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Botucatu?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Botucatu?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Botucatu."
      }
    ]
  },
  {
    "slug": "jardim-brasilandia",
    "nome": "Jardim Brasilândia",
    "nomeCompleto": "Jardim Brasilândia em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Brasilândia",
    "descricaoContexto": "Para lojistas e comércios no Jardim Brasilândia, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Brasilândia?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Brasilândia funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Brasilândia?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Brasilândia."
      }
    ]
  },
  {
    "slug": "jardim-california",
    "nome": "Jardim Califórnia",
    "nomeCompleto": "Jardim Califórnia em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Califórnia",
    "descricaoContexto": "Para lojistas e comércios no Jardim Califórnia, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Califórnia?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Califórnia funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Califórnia?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Califórnia."
      }
    ]
  },
  {
    "slug": "jardim-capitao",
    "nome": "Jardim Capitão",
    "nomeCompleto": "Jardim Capitão em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 4,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Capitão",
    "descricaoContexto": "Em Jardim Capitão, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Capitão?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Capitão."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Capitão?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Capitão?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Capitão."
      }
    ]
  },
  {
    "slug": "jardim-cardoso",
    "nome": "Jardim Cardoso",
    "nomeCompleto": "Jardim Cardoso em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 1,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Cardoso",
    "descricaoContexto": "Em Jardim Cardoso, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Cardoso?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Cardoso."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Cardoso?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Cardoso?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Cardoso."
      }
    ]
  },
  {
    "slug": "jardim-carolina",
    "nome": "Jardim Carolina",
    "nomeCompleto": "Jardim Carolina em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Carolina",
    "descricaoContexto": "Para lojistas e comércios no Jardim Carolina, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Carolina?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Carolina funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Carolina?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Carolina."
      }
    ]
  },
  {
    "slug": "jardim-casa-branca",
    "nome": "Jardim Casa Branca",
    "nomeCompleto": "Jardim Casa Branca em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Casa Branca",
    "descricaoContexto": "Para lojistas e comércios no Jardim Casa Branca, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Casa Branca?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Casa Branca funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Casa Branca?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Casa Branca."
      }
    ]
  },
  {
    "slug": "jardim-celeste",
    "nome": "Jardim Celeste",
    "nomeCompleto": "Jardim Celeste em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 4,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Jardim Celeste",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Jardim Celeste, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Jardim Celeste?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Jardim Celeste."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Jardim Celeste?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "jardim-colina-verde",
    "nome": "Jardim Colina Verde",
    "nomeCompleto": "Jardim Colina Verde em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 1,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Jardim Colina Verde",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Jardim Colina Verde, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Jardim Colina Verde?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Jardim Colina Verde."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Jardim Colina Verde?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "jardim-das-estrelas",
    "nome": "Jardim das Estrelas",
    "nomeCompleto": "Jardim das Estrelas em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim das Estrelas",
    "descricaoContexto": "Para lojistas e comércios no Jardim das Estrelas, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim das Estrelas?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim das Estrelas funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim das Estrelas?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim das Estrelas."
      }
    ]
  },
  {
    "slug": "jardim-das-flores",
    "nome": "Jardim das Flores",
    "nomeCompleto": "Jardim das Flores em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim das Flores",
    "descricaoContexto": "Para lojistas e comércios no Jardim das Flores, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim das Flores?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim das Flores funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim das Flores?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim das Flores."
      }
    ]
  },
  {
    "slug": "jardim-das-magnolias",
    "nome": "Jardim das Magnólias",
    "nomeCompleto": "Jardim das Magnólias em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 4,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim das Magnólias",
    "descricaoContexto": "Para lojistas e comércios no Jardim das Magnólias, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim das Magnólias?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim das Magnólias funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim das Magnólias?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim das Magnólias."
      }
    ]
  },
  {
    "slug": "jardim-do-sol",
    "nome": "Jardim do Sol",
    "nomeCompleto": "Jardim do Sol em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 1,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim do Sol",
    "descricaoContexto": "Em Jardim do Sol, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim do Sol?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim do Sol."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim do Sol?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim do Sol?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim do Sol."
      }
    ]
  },
  {
    "slug": "jardim-dois-coracoes",
    "nome": "Jardim Dois Corações",
    "nomeCompleto": "Jardim Dois Corações em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Dois Corações",
    "descricaoContexto": "Para lojistas e comércios no Jardim Dois Corações, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Dois Corações?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Dois Corações funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Dois Corações?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Dois Corações."
      }
    ]
  },
  {
    "slug": "jardim-dos-estados",
    "nome": "Jardim dos Estados",
    "nomeCompleto": "Jardim dos Estados em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 3,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim dos Estados",
    "descricaoContexto": "Em Jardim dos Estados, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim dos Estados?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim dos Estados."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim dos Estados?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim dos Estados?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim dos Estados."
      }
    ]
  },
  {
    "slug": "jardim-edgar-marques",
    "nome": "Jardim Edgar Marques",
    "nomeCompleto": "Jardim Edgar Marques em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 4,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Edgar Marques",
    "descricaoContexto": "Para lojistas e comércios no Jardim Edgar Marques, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Edgar Marques?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Edgar Marques funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Edgar Marques?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Edgar Marques."
      }
    ]
  },
  {
    "slug": "jardim-eltonville",
    "nome": "Jardim Eltonville",
    "nomeCompleto": "Jardim Eltonville em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 1,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Jardim Eltonville",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Jardim Eltonville, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Jardim Eltonville?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Jardim Eltonville."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Jardim Eltonville?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "jardim-embaixador",
    "nome": "Jardim Embaixador",
    "nomeCompleto": "Jardim Embaixador em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 2,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Embaixador",
    "descricaoContexto": "Em Jardim Embaixador, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Embaixador?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Embaixador."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Embaixador?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Embaixador?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Embaixador."
      }
    ]
  },
  {
    "slug": "jardim-emilia",
    "nome": "Jardim Emília",
    "nomeCompleto": "Jardim Emília em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Emília",
    "descricaoContexto": "Para lojistas e comércios no Jardim Emília, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Emília?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Emília funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Emília?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Emília."
      }
    ]
  },
  {
    "slug": "jardim-estrelas",
    "nome": "Jardim Estrelas",
    "nomeCompleto": "Jardim Estrelas em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 4,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Estrelas",
    "descricaoContexto": "Para lojistas e comércios no Jardim Estrelas, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Estrelas?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Estrelas funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Estrelas?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Estrelas."
      }
    ]
  },
  {
    "slug": "jardim-europa",
    "nome": "Jardim Europa",
    "nomeCompleto": "Jardim Europa em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 1,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Europa",
    "descricaoContexto": "Em Jardim Europa, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Europa?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Europa."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Europa?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Europa?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Europa."
      }
    ]
  },
  {
    "slug": "jardim-excelsior",
    "nome": "Jardim Excelsior",
    "nomeCompleto": "Jardim Excelsior em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 2,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Excelsior",
    "descricaoContexto": "Em Jardim Excelsior, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Excelsior?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Excelsior."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Excelsior?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Excelsior?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Excelsior."
      }
    ]
  },
  {
    "slug": "jardim-ferreira",
    "nome": "Jardim Ferreira",
    "nomeCompleto": "Jardim Ferreira em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Ferreira",
    "descricaoContexto": "Para lojistas e comércios no Jardim Ferreira, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Ferreira?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Ferreira funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Ferreira?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Ferreira."
      }
    ]
  },
  {
    "slug": "jardim-flores",
    "nome": "Jardim Flores",
    "nomeCompleto": "Jardim Flores em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 4,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Flores",
    "descricaoContexto": "Para lojistas e comércios no Jardim Flores, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Flores?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Flores funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Flores?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Flores."
      }
    ]
  },
  {
    "slug": "jardim-francini",
    "nome": "Jardim Francini",
    "nomeCompleto": "Jardim Francini em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 1,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Francini",
    "descricaoContexto": "Em Jardim Francini, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Francini?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Francini."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Francini?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Francini?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Francini."
      }
    ]
  },
  {
    "slug": "jardim-germiniani",
    "nome": "Jardim Germiniani",
    "nomeCompleto": "Jardim Germiniani em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 2,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Germiniani",
    "descricaoContexto": "Em Jardim Germiniani, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Germiniani?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Germiniani."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Germiniani?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Germiniani?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Germiniani."
      }
    ]
  },
  {
    "slug": "parque-sao-bento",
    "nome": "Parque São Bento",
    "nomeCompleto": "Parque São Bento em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 3,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Parque São Bento",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Parque São Bento, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Parque São Bento?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Parque São Bento."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Parque São Bento?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "vila-helena",
    "nome": "Vila Helena",
    "nomeCompleto": "Bairro Vila Helena em Sorocaba",
    "preposicao": "na",
    "perfil": "residencial",
    "layoutVariant": 4,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Vila Helena",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores na Vila Helena, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço na Vila Helena?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados na Vila Helena."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas na Vila Helena?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "jardim-gramados",
    "nome": "Jardim Gramados",
    "nomeCompleto": "Jardim Gramados Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 1,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Gramados",
    "descricaoContexto": "Para lojistas e comércios no Jardim Gramados, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Gramados?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Gramados funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Gramados?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Gramados."
      }
    ]
  },
  {
    "slug": "wanel-ville",
    "nome": "Wanel Ville",
    "nomeCompleto": "Wanel Ville em Sorocaba",
    "preposicao": "em",
    "perfil": "residencial",
    "layoutVariant": 2,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Wanel Ville",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores em Wanel Ville, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço em Wanel Ville?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados em Wanel Ville."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas em Wanel Ville?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "jardim-guadalajara",
    "nome": "Jardim Guadalajara",
    "nomeCompleto": "Jardim Guadalajara em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Guadalajara",
    "descricaoContexto": "Para lojistas e comércios no Jardim Guadalajara, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Guadalajara?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Guadalajara funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Guadalajara?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Guadalajara."
      }
    ]
  },
  {
    "slug": "jardim-guadalupe",
    "nome": "Jardim Guadalupe",
    "nomeCompleto": "Jardim Guadalupe em Sorocaba",
    "preposicao": "no",
    "perfil": "residencial",
    "layoutVariant": 4,
    "destaqueFoco": "Serralheria Residencial sob Medida e Consertos Rápidos em Jardim Guadalupe",
    "descricaoContexto": "Oferecemos atendimento ágil para famílias e moradores no Jardim Guadalupe, com fabricação sob medida de portões basculantes e de correr, grades de proteção para janelas e reformas no mesmo dia.",
    "faqs": [
      {
        "q": "Vocês consertam portões que caíram ou arrebentaram o cabo de aço no Jardim Guadalupe?",
        "a": "Sim! Temos equipe rápida para troca imediata de cabos de aço rompidos, roldanas emperradas e motores travados no Jardim Guadalupe."
      },
      {
        "q": "O material utilizado é protegido contra ferrugem?",
        "a": "Utilizamos exclusivamente aço galvanizado de usina com primer protetor e tinta automotiva anticorrosiva de alta durabilidade."
      },
      {
        "q": "Como é feita a visita para tirar medidas no Jardim Guadalupe?",
        "a": "Agendamos um horário de sua preferência. Nosso técnico vai até seu imóvel sem custo, confere o vão e apresenta o orçamento na hora."
      }
    ]
  },
  {
    "slug": "jardim-guaiba",
    "nome": "Jardim Guaíba",
    "nomeCompleto": "Jardim Guaíba em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 1,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Guaíba",
    "descricaoContexto": "Para lojistas e comércios no Jardim Guaíba, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Guaíba?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Guaíba funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Guaíba?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Guaíba."
      }
    ]
  },
  {
    "slug": "jardim-guaruja",
    "nome": "Jardim Guarujá",
    "nomeCompleto": "Jardim Guarujá em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Guarujá",
    "descricaoContexto": "Para lojistas e comércios no Jardim Guarujá, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Guarujá?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Guarujá funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Guarujá?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Guarujá."
      }
    ]
  },
  {
    "slug": "jardim-gutierres",
    "nome": "Jardim Gutierres",
    "nomeCompleto": "Jardim Gutierres em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 3,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Gutierres",
    "descricaoContexto": "Para lojistas e comércios no Jardim Gutierres, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Gutierres?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Gutierres funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Gutierres?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Gutierres."
      }
    ]
  },
  {
    "slug": "jardim-harmonia",
    "nome": "Jardim Harmonia",
    "nomeCompleto": "Jardim Harmonia em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 4,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Harmonia",
    "descricaoContexto": "Para lojistas e comércios no Jardim Harmonia, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Harmonia?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Harmonia funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Harmonia?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Harmonia."
      }
    ]
  },
  {
    "slug": "jardim-helena-cristina",
    "nome": "Jardim Helena Cristina",
    "nomeCompleto": "Jardim Helena Cristina em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 1,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Helena Cristina",
    "descricaoContexto": "Para lojistas e comércios no Jardim Helena Cristina, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Helena Cristina?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Helena Cristina funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Helena Cristina?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Helena Cristina."
      }
    ]
  },
  {
    "slug": "jardim-humberto-campos",
    "nome": "Jardim Humberto Campos",
    "nomeCompleto": "Jardim Humberto Campos",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 2,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Humberto Campos",
    "descricaoContexto": "Para lojistas e comércios no Jardim Humberto Campos, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Humberto Campos?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Humberto Campos funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Humberto Campos?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Humberto Campos."
      }
    ]
  },
  {
    "slug": "parque-campolim",
    "nome": "Parque Campolim",
    "nomeCompleto": "Parque Campolim em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 3,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Parque Campolim",
    "descricaoContexto": "Em Parque Campolim, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Parque Campolim?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Parque Campolim."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Parque Campolim?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Parque Campolim?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Parque Campolim."
      }
    ]
  },
  {
    "slug": "jardim-hungares",
    "nome": "Jardim Hungares",
    "nomeCompleto": "Jardim Hungares em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 4,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Hungares",
    "descricaoContexto": "Para lojistas e comércios no Jardim Hungares, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Hungares?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Hungares funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Hungares?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Hungares."
      }
    ]
  },
  {
    "slug": "jardim-simus",
    "nome": "Jardim Simus",
    "nomeCompleto": "Jardim Simus em Sorocaba",
    "preposicao": "no",
    "perfil": "comercial",
    "layoutVariant": 1,
    "destaqueFoco": "Segurança Comercial, Grades Pantográficas e Mezaninos em Jardim Simus",
    "descricaoContexto": "Para lojistas e comércios no Jardim Simus, fabricamos portas reforçadas, grades de proteção articuladas e mezaninos metálicos com instalação rápida para não interromper suas atividades.",
    "faqs": [
      {
        "q": "Vocês fazem instalação de grades e portas fora do horário comercial no Jardim Simus?",
        "a": "Sim, programamos a montagem e instalação em horários alternativos para garantir que seu estabelecimento comercial no Jardim Simus funcione sem interrupções."
      },
      {
        "q": "O mezanino comercial aguenta estoque pesado de mercadorias?",
        "a": "Com certeza. Dimensionamos vigas estruturais I e W com cálculo de carga de até 500 a 1.000 kg/m² para garantir segurança total em sua loja ou depósito."
      },
      {
        "q": "Como solicitar um orçamento rápido para comércio no Jardim Simus?",
        "a": "Basta nos enviar uma mensagem pelo WhatsApp informando as medidas aproximadas ou solicitar uma visita técnica no mesmo dia no Jardim Simus."
      }
    ]
  },
  {
    "slug": "jardim-santa-rosalia",
    "nome": "Jardim Santa Rosália",
    "nomeCompleto": "Jardim Santa Rosália em Sorocaba",
    "preposicao": "no",
    "perfil": "condominio",
    "layoutVariant": 2,
    "destaqueFoco": "Projetos de Alto Padrão e Portões Rápidos em Jardim Santa Rosália",
    "descricaoContexto": "Em Jardim Santa Rosália, executamos portões automáticos basculantes com acabamento refinado em chapa lambril ou madeira, além de guarda-corpos normatizados e grades que respeitam a estética dos condomínios fechados da região.",
    "faqs": [
      {
        "q": "Qual é o prazo para instalar um portão basculante no Jardim Santa Rosália?",
        "a": "O prazo de fabricação sob medida em nossa oficina é de 10 a 15 dias úteis, com montagem completa realizada em apenas um único dia no Jardim Santa Rosália."
      },
      {
        "q": "Os portões atendem às exigências arquitetônicas dos condomínios em Jardim Santa Rosália?",
        "a": "Sim! Nossos projetos seguem rigorosamente as normas de altura, recuo, padronização de cor e nível de ruído exigidos pelas convenções de condomínios da região."
      },
      {
        "q": "A visita técnica para medição tem algum custo no Jardim Santa Rosália?",
        "a": "Não cobramos nenhuma taxa de visita ou deslocamento para avaliar o seu vão e tirar as medidas exatas no Jardim Santa Rosália."
      }
    ]
  }
];

export function getBairroBySlug(slug: string): BairroItem | undefined {
  return bairrosAtendidosData.find((b) => b.slug === slug);
}

export function formatBairroLocacao(bairro: BairroItem): string {
  if (bairro.slug === "centro") {
    return "no Centro de Sorocaba";
  }
  return `${bairro.preposicao} ${bairro.nome} em Sorocaba`;
}

export function formatBairroSerralheria(bairro: BairroItem): string {
  return `Serralheria ${formatBairroLocacao(bairro)}`;
}

export function formatBairroServico(servicoNome: string, bairro: BairroItem): string {
  const nomeLimpo = servicoNome
    .replace(/\s+em Sorocaba$/i, "")
    .replace(/\s+Sorocaba$/i, "")
    .trim();
  return `${nomeLimpo} ${formatBairroLocacao(bairro)}`;
}
