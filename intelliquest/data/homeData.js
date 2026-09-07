/**
 * HOME PAGE DATA
 * Centralized content for index.html
 */
const homeData = {
  meta: {
    title: "IntelliQuest Canada Academy (ICA) – Éducation × Carrière",
    description: "IntelliQuest Canada Academy - Admissions universitaires, permis d'études & formations certifiantes d'excellence au Canada."
  },
  hero: {
    titleLines: [
      { text: "BUILD YOUR", highlight: false },
      { text: "FUTURE.", highlight: true }
    ],
    description: "Des formations conçues pour développer vos compétences, révéler votre potentiel et préparer votre avenir.",
    ctaButtons: [
      {
        label: "ICA EXCELLENCE",
        href: "formations.html",
        variant: "btn-excellence",
        isActive: true
      },
      {
        label: "ICA ORIENTATION",
        href: "etudes.html",
        variant: "btn-orientation",
        isActive: false
      }
    ],
    bgImages: [
      { id: "hero-bg-default", src: "assets/images/hero-default-composite.png", alt: "IntelliQuest Canada Academy", active: true },
      { id: "hero-bg-excellence", src: "assets/images/ica-excellence-card.jpg", alt: "ICA Excellence", active: false },
      { id: "hero-bg-orientation", src: "assets/images/ica-orientation-card.png", alt: "ICA Orientation", active: false }
    ]
  },
  mission: {
    id: "notre-mission",
    eyebrow: "NOTRE MISSION",
    iconClass: "fas fa-bullseye",
    title: "Faciliter chaque étape de votre parcours vers le Canada",
    paragraphs: [
      "IntelliQuest Canada Academy accompagne les étudiants souhaitant étudier au Canada et les candidats à l'immigration.",
      "Notre objectif : faciliter leurs parcours grâce à un accompagnement personnalisé, alliant expertise et proximité, pour garantir réussite et confiance à chaque étape."
    ],
    image: {
      src: "assets/images/ica-mission-meeting.png",
      alt: "Notre mission ICA"
    }
  },
  vision: {
    id: "notre-vision",
    eyebrow: "NOTRE VISION",
    iconClass: "fas fa-eye",
    title: "Un guide fiable vers un avenir meilleur",
    paragraphs: [
      "Chez ICA, nous construisons un pont durable entre vos ambitions et les opportunités canadiennes.",
      "Notre ambition est d'être un guide fiable pour tous ceux qui rêvent d'un avenir meilleur grâce à l'éducation et à l'immigration."
    ],
    image: {
      src: "assets/images/ica-vision-team.jpg",
      alt: "Notre vision ICA"
    }
  },
  teamGallery: {
    id: "galerie-evenements",
    eyebrow: "NOTRE ÉQUIPE EN ACTION",
    title: "L'académie au quotidien",
    items: [
      {
        tag: "PARTENARIAT",
        caption: "Signature British Workshop",
        image: "assets/images/6ab933dc-2c84-47cc-89f1-0a552257fa0b.webp",
        alt: "Signature British Workshop"
      },
      {
        tag: "RENCONTRE",
        caption: "Échange partenaire ICA",
        image: "assets/images/71ba20e5-bc9c-48d8-bc13-ed19a57ba78c.webp",
        alt: "Rencontre partenaire ICA"
      },
      {
        tag: "ALLIANCE",
        caption: "Smart Africa Group",
        image: "assets/images/cb2db85e-1498-480b-aea0-2efed1b30ad5.webp",
        alt: "Alliance Smart Africa Group"
      },
      {
        tag: "CONVENTION",
        caption: "Signature officielle",
        image: "assets/images/18cf8cc9-ba29-4697-95d5-103828e4f01d.webp",
        alt: "Signature de convention ICA"
      }
    ]
  }
};

module.exports = homeData;
