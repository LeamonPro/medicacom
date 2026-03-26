export type NavItem = { label: string; to: string }

export type Expertise = {
  title: string
  subtitle: string
  description: string
  to: string
  highlights?: string[]
}

export type Project = {
  title: string
  subtitle: string
  description: string
  bullets?: string[]
}

export type NewsItem = {
  title: string
  date: string
  category: string
}

export const site = {
  brand: {
    name: 'MEDICACOM',
    tagline: 'Transforming healthcare through data and innovation',
  },
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/a-propos' },
    { label: 'Our Expertise', to: '/expertises' },
    { label: 'R&D Projects', to: '/projets' },
    { label: 'Careers', to: '/carrieres' },
    { label: 'Contact', to: '/contact' },
  ] satisfies NavItem[],
  ctas: {
    primary: { label: 'Book a demo', to: '/contact#demo' },
    secondary: { label: 'Schedule a meeting', to: '/contact#demo' },
  },
  home: {
    hero: {
      eyebrow: 'Pharmaceutical industry • Public health • HealthTech',
      title: 'Driving the future of healthcare with artificial intelligence',
      lead: 'Medicacom provides AI-powered decision-support systems for the healthcare ecosystem, especially for pharmaceutical industries.',
      sublead:
        'By combining artificial intelligence expertise with strong business know-how, we deliver a competitive edge to our clients in an AI-driven world.',
    },
    value: {
      title: 'Our value proposition',
      subtitle:
        'Innovative solutions for the complex challenges of the pharmaceutical industry',
      cards: [
        {
          title: 'Digital transformation',
          description:
            'Implementation of tailored IT solutions to digitize your business processes and efficiently manage your data.',
        },
        {
          title: 'Cutting-edge technologies',
          description:
            'Integration of big data, artificial intelligence, and business intelligence to unlock data value and improve performance.',
        },
        {
          title: 'Resource placement',
          description:
            'Provision of qualified experts for short- or long-term assignments to optimize processes and strengthen your teams.',
        },
      ],
    },
  },
  about: {
    title: 'Who are we?',
    intro:
      'Medicacom is a leader in digital transformation for the healthcare sector.',
    paragraphs: [
      'We support pharmaceutical industries, public institutions, and healthcare stakeholders in modernizing their digital infrastructure and strategically leveraging data.',
      'Our expertise combines sector knowledge, advanced technologies, and artificial intelligence to create solutions that improve decision-making and performance across healthcare organizations.',
    ],
    domainsTitle: 'Our areas of expertise',
    domains: [
      {
        title: 'Pharmaceutical industry',
        description:
          'Data valorization and exploitation to steer commercial and strategic performance, optimize processes, and accelerate digital transformation.',
      },
      {
        title: 'National public health projects',
        description:
          'Development of structuring digital platforms, observatories, and monitoring systems to improve governance, traceability, and medicine safety at national scale.',
      },
      {
        title: 'Innovation, R&D and HealthTech startups',
        description:
          'Support, co-creation, and enablement for innovative projects by combining technical expertise, strategic consulting, and scientific production.',
      },
    ],
    visionTitle: 'Our vision',
    vision:
      'Build a national digital health ecosystem where data is transformed into reliable strategic information for decision-makers, healthcare professionals, and patients.',
    missionTitle: 'Our mission',
    mission: [
      'Leverage data to improve decision-making',
      'Strengthen patient safety and quality of care',
      'Support innovation and research in healthcare',
    ],
    whyTitle: 'Why Medicacom?',
    why: [
      'Recognized expertise in pharmaceutical and public health sectors',
      'An innovative approach combining consulting, technology, and artificial intelligence',
      'National and regional impact through structuring projects for the healthcare system',
    ],
  },
  expertises: {
    title: 'Our expertise',
    items: [
      {
        title: 'Medicacom Data Platform',
        subtitle: 'The data platform dedicated to pharmaceutical industries',
        description:
          'A solution designed to collect, transform, and leverage pharmaceutical industry data through an ETL, Data Warehouse, and Business Intelligence architecture.',
        to: '/expertises/data-platform',
        highlights: [
          'ETL • Data Warehouse • BI',
          'Strategic indicators and dashboards',
          'Structured methodology (mapping -> dashboards)',
        ],
      },
      {
        title: 'CEREBRO-RX',
        subtitle: 'AI for smarter decisions',
        description:
          'An advanced artificial intelligence layer combining analytics, AI, and generative AI to deliver analyses, generate reports, and automate decision-related tasks.',
        to: '/expertises/cerebro-rx',
        highlights: [
          'Smart analyses and reports',
          'AI agent (beyond chatbot capabilities)',
          'Hybrid and secure architecture',
        ],
      },
      {
        title: 'Medicacom Technologies',
        subtitle: 'Tailored IT solutions',
        description:
          'Process digitization, automation (RPA), data integration, and modernization of digital infrastructure.',
        to: '/expertises/technologies',
      },
    ] satisfies Expertise[],
  },
  projects: {
    title: 'R&D Projects',
    intro:
      'Medicacom actively contributes to building Tunisia’s digital health infrastructure through several strategic platforms developed in collaboration with health authorities.',
    items: [
      {
        title: 'National platform for psychotropic and narcotic medicine management',
        subtitle: 'Traceability and control of specially regulated medicines',
        description:
          'National platform ensuring end-to-end traceability of the distribution chain, from manufacturing to patient dispensing.',
        bullets: [
          'National middleware for collecting and centralizing dispensing data',
          'Interconnection across pharmaceutical industries, PCT, wholesalers, hospitals/clinics, and pharmacies',
          'Decision dashboards and AI analytics (fraud detection, consumption forecasting)',
        ],
      },
      {
        title: 'National Medicine Observatory',
        subtitle: 'Medicine supply security',
        description:
          'Digital infrastructure for monitoring the pharmaceutical market (stocks, sales, trends) to anticipate shortages and strengthen healthcare system resilience.',
        bullets: [
          'Integration of data from pharmaceutical supply-chain stakeholders',
          'Strategic availability and coverage indicators',
          'Predictive and generative AI for strategic reporting',
        ],
      },
      {
        title: 'ApothiCare',
        subtitle: 'National pharmacy mobile application in Tunisia',
        description:
          'First official mobile application connecting patients, pharmacists, and health authorities within a secure digital ecosystem.',
        bullets: [
          'Digital pharmaceutical file (history of dispensed medicines)',
          'Dispensing support (history, interactions, optimization)',
          'Adherence tools and therapeutic education',
          'Product verification via scan and reporting',
        ],
      },
    ] satisfies Project[],
  },
  news: {
    title: 'Scientific contributions',
    items: [
      {
        title:
          'Impact of therapeutic education on the quality of life of coronary patients',
        date: '23 June 2025',
        category: 'News',
      },
      {
        title:
          'Impact of digital platform monitoring in preventing major cardiovascular events in Tunisia',
        date: '18 April 2024',
        category: 'News',
      },
    ] satisfies NewsItem[],
  },
  clients: {
    title: 'Trusted by',
    subtitle:
      'Our solutions support a wide range of healthcare stakeholders',
    names: [
      'Opalia Recordati',
      'Ministère de la Santé',
      'Medis Pharma',
      'Hikma',
      'Thera Labo',
      'CNOPT',
      'Neapolis Pharma',
      'SPOT',
      'Agence Nationale du Médicament',
    ],
  },
  contact: {
    title: 'Contact us',
    description:
      'Medicacom stands out as a provider of cutting-edge solutions for the pharmaceutical sector.',
    location: 'Sfax, Route Taniour 3002, TN',
    phone: '+216 26 411 058',
    email: 'contact@medicacom.tn',
  },
} as const

