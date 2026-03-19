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
    tagline: 'Transformer la santé grâce à la data et l’innovation',
  },
  nav: [
    { label: 'Accueil', to: '/' },
    { label: 'À propos', to: '/a-propos' },
    { label: 'Nos expertises', to: '/expertises' },
    { label: 'Projets R&D', to: '/projets' },
    { label: 'Carrières', to: '/carrieres' },
    { label: 'Contact', to: '/contact' },
  ] satisfies NavItem[],
  ctas: {
    primary: { label: 'Réservez une démo', to: '/contact#demo' },
    secondary: { label: 'Prendre RDV', to: '/contact#demo' },
  },
  home: {
    hero: {
      eyebrow: 'Industrie pharmaceutique • Santé publique • HealthTech',
      title: 'Propulsant l’avenir de la santé grâce à l’intelligence artificielle',
      lead: 'Medicacom propose des systèmes d’aide à la décision alimentés par l’IA pour l’écosystème de la santé, notamment pour les industries pharmaceutiques.',
      sublead:
        'Alliant expertise en intelligence artificielle et un savoir-faire métier solide, nous offrons un avantage concurrentiel à nos clients dans un monde axé sur l’IA.',
    },
    value: {
      title: 'Notre proposition de valeur',
      subtitle:
        "Solutions innovantes pour les défis complexes de l'industrie pharmaceutique",
      cards: [
        {
          title: 'Transformation digitale',
          description:
            'Mise en place de solutions IT adaptées pour digitaliser vos processus métiers et numériser efficacement vos données.',
        },
        {
          title: 'Technologies de pointe',
          description:
            'Intégration du big data, de l’intelligence artificielle et de la business intelligence afin de valoriser vos données et améliorer vos performances.',
        },
        {
          title: 'Placement de ressources',
          description:
            'Mise à disposition d’experts qualifiés pour des missions de courte ou longue durée afin d’optimiser vos processus et renforcer vos équipes.',
        },
      ],
    },
  },
  about: {
    title: 'Qui sommes-nous ?',
    intro:
      'Medicacom est un leader de la transformation digitale du secteur de la santé.',
    paragraphs: [
      'Nous accompagnons les industries pharmaceutiques, les institutions publiques et les acteurs du système de santé dans la modernisation de leurs infrastructures numériques et l’exploitation stratégique des données.',
      'Notre expertise combine connaissance du secteur, technologies avancées et intelligence artificielle, pour créer des solutions qui facilitent la prise de décision et améliorent la performance des acteurs de santé.',
    ],
    domainsTitle: 'Nos domaines d’intervention',
    domains: [
      {
        title: 'Industrie pharmaceutique',
        description:
          'Valorisation et exploitation des données pour piloter les performances commerciales et décisionnelles, optimiser les processus et accélérer la transformation digitale.',
      },
      {
        title: 'Projets nationaux de santé publique',
        description:
          'Développement de plateformes digitales structurantes, observatoires et systèmes de suivi pour améliorer la gouvernance, la traçabilité et la sécurité des médicaments à l’échelle nationale.',
      },
      {
        title: 'Innovation, R&D et startups HealthTech',
        description:
          'Accompagnement, co-création et soutien aux projets innovants, en combinant expertise technique, conseil stratégique et production scientifique.',
      },
    ],
    visionTitle: 'Notre vision',
    vision:
      'Construire un écosystème digital national de santé, où les données sont transformées en informations stratégiques fiables pour les décideurs, les professionnels de santé et les patients.',
    missionTitle: 'Notre mission',
    mission: [
      'Valoriser les données pour améliorer la prise de décision',
      'Renforcer la sécurité et la qualité des soins pour les patients',
      'Accompagner l’innovation et la recherche dans le domaine de la santé',
    ],
    whyTitle: 'Pourquoi Medicacom ?',
    why: [
      'Expertise reconnue dans le secteur pharmaceutique et de la santé publique',
      'Approche innovante alliant consulting, technologies et intelligence artificielle',
      'Impact national et régional grâce à des projets structurants pour le système de santé',
    ],
  },
  expertises: {
    title: 'Nos expertises',
    items: [
      {
        title: 'Medicacom Data Platform',
        subtitle: 'La plateforme data dédiée aux industries pharmaceutiques',
        description:
          'Une solution conçue pour collecter, transformer et valoriser les données des industries pharmaceutiques via une architecture ETL, Data Warehouse et Business Intelligence.',
        to: '/expertises/data-platform',
        highlights: [
          'ETL • Data Warehouse • BI',
          'Indicateurs stratégiques & tableaux de bord',
          'Méthodologie structurée (cartographie → dashboards)',
        ],
      },
      {
        title: 'CEREBRO-RX',
        subtitle: 'L’IA au service de la décision',
        description:
          'Couche d’intelligence artificielle avancée combinant analytique, IA et IA générative pour générer des analyses, produire des rapports et automatiser certaines tâches décisionnelles.',
        to: '/expertises/cerebro-rx',
        highlights: [
          'Analyses & rapports intelligents',
          'Agent IA (au-delà du chatbot)',
          'Architecture hybride & sécurisée',
        ],
      },
      {
        title: 'Medicacom Technologies',
        subtitle: 'Solutions IT sur mesure',
        description:
          'Digitalisation des processus, automatisation (RPA), intégration de données et modernisation d’infrastructures numériques.',
        to: '/expertises/technologies',
      },
    ] satisfies Expertise[],
  },
  projects: {
    title: 'Projets R&D',
    intro:
      'Medicacom participe activement à la construction de l’infrastructure digitale du système de santé en Tunisie, à travers plusieurs plateformes stratégiques développées en collaboration avec les autorités sanitaires.',
    items: [
      {
        title: 'Plateforme nationale de gestion des psychotropes et stupéfiants',
        subtitle: 'Traçabilité & contrôle des médicaments sous réglementation spéciale',
        description:
          'Plateforme nationale assurant la traçabilité complète du circuit de distribution, depuis la fabrication jusqu’à la dispensation au patient.',
        bullets: [
          'Middleware national de collecte et centralisation des données de dispensation',
          'Interconnexion: industries pharmaceutiques, PCT, grossistes, hôpitaux/cliniques, pharmacies',
          'Tableaux de bord décisionnels & analyses IA (fraude, prédiction de consommation)',
        ],
      },
      {
        title: 'Observatoire National du Médicament',
        subtitle: 'Sécurité de l’approvisionnement en médicaments',
        description:
          'Infrastructure digitale de surveillance du marché pharmaceutique (stocks, ventes, tendances) pour anticiper les pénuries et renforcer la résilience du système de santé.',
        bullets: [
          'Intégration des données des acteurs de la chaîne pharmaceutique',
          'Indicateurs stratégiques de disponibilité & couverture',
          'IA prédictive & IA générative pour rapports stratégiques',
        ],
      },
      {
        title: 'ApothiCare',
        subtitle: 'Application mobile nationale de la pharmacie en Tunisie',
        description:
          'Première application mobile officielle connectant patients, pharmaciens et autorités sanitaires au sein d’un écosystème digital sécurisé.',
        bullets: [
          'Dossier pharmaceutique numérique (historique des médicaments dispensés)',
          'Aide à la dispensation (historique, interactions, optimisation)',
          'Outils d’observance & éducation thérapeutique',
          'Vérification des produits via scan & signalement',
        ],
      },
    ] satisfies Project[],
  },
  news: {
    title: 'Contributions scientifiques',
    items: [
      {
        title:
          'Impact de l’éducation thérapeutique sur la qualité de vie des patients coronariens',
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
    title: 'Ils nous font confiance',
    subtitle:
      'Nos solutions accompagnent une grande diversité d’acteurs du secteur de la santé',
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
    title: 'Contactez-nous',
    description:
      'Medicacom se distingue comme le fournisseur de solutions avant-gardistes pour le secteur pharmaceutique.',
    location: 'Sfax, Route Taniour 3002, TN',
    phone: '+216 26 411 058',
    email: 'contact@medicacom.tn',
  },
} as const

