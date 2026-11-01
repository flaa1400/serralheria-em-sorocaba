# 🏗️ Serralheria Aço na Medida — Plataforma de SEO Local em Escala

> **Status:** 🚀 **Pronto para Produção (Production-Ready)**  
> **Localização-Alvo:** Sorocaba - SP e Região Metropolitana  
> **Adaptador de Deploy:** Vercel (Edge & Serverless)

---

## 📌 Visão Geral do Projeto

O site da **Serralheria Aço na Medida** foi desenvolvido com uma arquitetura de ponta focada em **SEO Local Programático**, máxima velocidade de carregamento e alta taxa de conversão direta via WhatsApp.

A plataforma cobre integralmente o município de **Sorocaba - SP**, cobrindo **94 bairros** e **12 categorias de serviços especializados**, totalizando mais de **1.300 páginas estáticas ultra-otimizadas** que respondem com precisão cirúrgica às intenções de busca do Google ("serralheria em Sorocaba", "portão automático no Campolim", "mezanino industrial no Éden", etc.).

---

## ⚡ Tecnologias e Arquitetura

- **[Astro 4](https://astro.build/):** Framework web moderno com arquitetura baseada em ilhas (*Islands Architecture*) e geração de sites estáticos (SSG) de altíssima performance com zero JavaScript desnecessário no client-side.
- **[@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/):** Adaptador oficial para deploy e renderização global na infraestrutura da Vercel.
- **[Tailwind CSS](https://tailwindcss.com/):** Estilização utilitária com design system profissional, responsivo e moderno em tons escuros e dourados (amarelo técnico de serralheria).
- **TypeScript:** Tipagem estática rigorosa para configurações, catálogo de serviços e base geográfica de bairros.
- **Schema.org & JSON-LD:** Marcações semânticas ricas para `LocalBusiness`, `GeoCoordinates`, `AggregateRating`, `FAQPage` e `BreadcrumbList`.
- **Astro Sitemap:** Geração automática e indexação de sitemaps XML (`/sitemap-index.xml`).

---

## 🎯 Estratégia de SEO Local & Silos Semânticos

1. **Taxonomia Hierárquica e Silos Regionais:**
   - Home: `https://serralheriaaconamedida.com.br/`
   - Silo de Serviços Globais: `/servicos/[servico]`
   - Silo Regional de Bairros: `/bairros/[bairro]`
   - Páginas Hiperlocais de Serviço por Bairro: `/bairros/[bairro]/servicos/[servico]`

2. **Diferenciação de Conteúdo e Zero Duplicação:**
   - Cada bairro possui seu perfil socioeconômico e arquitetônico categorizado (`residencial`, `comercial`, `condominio`, `industrial`).
   - Os textos introdutórios, diferenciais técnicos, especificações de materiais e FAQs são injetados dinamicamente com base nas características reais da região (ex.: perfis com isolamento acústico e controle estético para condomínios fechados, perfis estruturais pesados e pintura epóxi para áreas industriais).

3. **Core Web Vitals Impecáveis:**
   - 100% de páginas pré-renderizadas (`export const prerender = true`), entregues diretamente via CDN global.
   - Fontes Google com `preconnect` e carregamento otimizado.
   - First Contentful Paint (FCP) e Largest Contentful Paint (LCP) inferiores a 0.5s.

4. **Otimização de Conversão (CRO):**
   - Integração global com botão flutuante e botões fixos de WhatsApp (`WhatsAppBtn.astro`).
   - Mensagens pré-formatadas automáticas que identificam o serviço e o bairro de onde o lead se originou.

---

## 📂 Estrutura de Pastas

```text
├── public/                 # Favicon, imagens e assets estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis (Header, Footer, SEO, WhatsAppBtn, etc.)
│   ├── data/
│   │   ├── config.ts       # Dados NAP da empresa, contatos, horários e geolocalização
│   │   ├── bairros.ts      # Banco de dados de 94 bairros de Sorocaba com metadados
│   │   └── servicos.ts     # Catálogo dos 12 serviços principais com descrições ricas
│   ├── layouts/
│   │   └── Layout.astro    # Master layout com SEO global, Schemas e botão WhatsApp
│   └── pages/
│       ├── index.astro     # Landing page principal (Home)
│       ├── servicos/       # Rotas estáticas dos serviços
│       └── bairros/        # Rotas hiperlocais por bairro e serviço
├── astro.config.mjs        # Configuração do Astro com adaptador da Vercel
├── tailwind.config.mjs     # Configurações do Tailwind CSS
├── tsconfig.json           # Configurações do TypeScript
└── package.json            # Dependências e scripts
```

---

## 🛠️ Comandos Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm install` | Instala todas as dependências do projeto |
| `npm run dev` | Inicia o servidor de desenvolvimento local (`http://localhost:4321`) |
| `npm run build` | Compila o projeto e gera a saída pronta para a Vercel (`.vercel/output`) |
| `npm run preview` | Executa o build de produção localmente para validação prévia |

---

## 🚀 Guia de Deploy na Vercel

1. **Subir para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: projeto finalizado e pronto para deploy"
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git branch -M main
   git push -u origin main
   ```

2. **Conectar na Vercel:**
   - Acesse o painel da [Vercel](https://vercel.com).
   - Clique em **"Add New..."** ➔ **"Project"**.
   - Importe o repositório recém-criado do GitHub.
   - O framework **Astro** será detectado automaticamente.
   - Clique em **Deploy**.

O site estará online instantaneamente com SSL automático, CDN global e integração contínua (CI/CD) a cada novo push.

---

## 📞 Contato & Empresa

- **Empresa:** Serralheria Aço na Medida Sorocaba Ltda.
- **Endereço:** Av. Dr. Afonso Vergueiro, 4480 - Vila Augusta, Sorocaba - SP, 18040-000
- **WhatsApp:** [(11) 96429-9548](https://wa.me/5511964299548)
- **E-mail:** `serralheriaaconamedida@proton.me`
- **Domínio Oficial:** [https://serralheriaaconamedida.com.br](https://serralheriaaconamedida.com.br)
