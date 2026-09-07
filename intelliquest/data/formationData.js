/**
 * FORMATIONS PAGE DATA
 * Centralized content for formations.html (ICA Excellence)
 */
const formationData = {
  meta: {
    title: "ICA Excellence – Formations Certifiantes d'Élite",
    description: "Formations professionnelles d'élite et programmes certifiants internationaux."
  },
  hero: {
    bgImage: "assets/images/user-formations-hero-full.jpg",
    alt: "ICA Excellence - Formations",
    sloganLines: [
      "L'excellence",
      "pour propulser votre carrière",
      "à l'international"
    ],
    description: "Des programmes certifiants d'élite conçus avec des institutions mondiales pour vous offrir une expertise concrète, opérationnelle et immédiatement valorisable sur le marché international.",
    cta: {
      label: "DÉCOUVRIR LE CATALOGUE",
      href: "#programmes"
    }
  },
  tracks: [
    {
      id: "track-management",
      idx: "01",
      label: "Management & Stratégie",
      eyebrow: "MANAGEMENT & AFFAIRES",
      title: "Leadership, Stratégie d'Entreprise et Gestion de Projet",
      description: "Développez les compétences clés de direction et de pilotage stratégique d'équipes et de projets complexes au standard nord-américain.",
      points: [
        "Certification internationale en gestion de projet",
        "Ateliers pratiques avec des dirigeants canadiens",
        "Études de cas réels et simulation de gouvernance"
      ],
      link: "contact.html"
    },
    {
      id: "track-tech",
      idx: "02",
      label: "IT, Data & Intelligence Artificielle",
      eyebrow: "TECHNOLOGIES & INNOVATION",
      title: "Data Science, IA Générative et Cloud Computing",
      description: "Maîtrisez les technologies de pointe les plus demandées par les entreprises canadiennes et internationales.",
      points: [
        "Cursus certifiant aligné sur les référentiels AWS, Azure et Google Cloud",
        "Projets concrets de déploiement d'algorithmes et d'infrastructures",
        "Accompagnement vers les certifications professionnelles"
      ],
      link: "contact.html"
    },
    {
      id: "track-dscg",
      idx: "03",
      label: "Expertise Comptable & Finance",
      eyebrow: "FINANCE & AUDIT",
      title: "Préparation Diplôme Supérieur de Comptabilité et Gestion",
      description: "Une formation d'excellence dispensée par des intervenants hautement qualifiés pour réussir les unités d'enseignement les plus sélectives.",
      points: [
        "Préparation intensive aux épreuves officielles",
        "Pédagogie éprouvée et taux de réussite exceptionnel",
        "Séances interactives et devoirs corrigés personnalisés"
      ],
      link: "contact.html"
    },
    {
      id: "track-langues",
      idx: "04",
      label: "Langues & Tests Officiels",
      eyebrow: "IMMERSION LINGUISTIQUE",
      title: "Préparation Intensive IELTS, TEF, TCF Canada",
      description: "Maximisez vos scores aux tests linguistiques officiels indispensables pour vos admissions universitaires et vos dossiers d'immigration.",
      points: [
        "Simulations en conditions réelles d'examen",
        "Coaching individuel sur l'expression orale et écrite",
        "Méthodologie éprouvée pour atteindre le niveau C1/C2"
      ],
      link: "contact.html"
    }
  ]
};

module.exports = formationData;
