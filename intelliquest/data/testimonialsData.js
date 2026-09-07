/**
 * TESTIMONIALS DATA
 * Centralized reviews and student stories
 */
const testimonialsData = {
  meta: {
    title: "Témoignages & Avis – IntelliQuest Canada Academy",
    description: "Découvrez les avis et retours d'expérience de nos étudiants et candidats ayant concrétisé leur projet d'études et d'immigration au Canada."
  },
  googleReviewsSummary: {
    rating: 4.8,
    totalReviews: 106,
    badgeText: "AVIS GOOGLE VÉRIFIÉS",
    heading: "Ce que nos étudiants et parents disent de nous",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=IntelliQuest+Canada+Academy+Casablanca"
  },
  reviews: [
    {
      author: "Wissal Malk",
      role: "Étudiante DSCG",
      rating: 5,
      time: "il y a 1 semaine",
      text: "Je bénéficie d'une excellente formation à l'ICA pour le DSCG UE4. L'organisation est irréprochable et les intervenants sont très compétents, pédagogues et de grande qualité. Je recommande vivement cette académie !"
    },
    {
      author: "Khadija El Amrani",
      role: "Étudiante à Montréal",
      rating: 5,
      time: "il y a 2 semaines",
      text: "Accompagnement d'une qualité remarquable pour mon permis d'études au Canada. L'équipe d'ICA Casablanca m'a orientée vers la meilleure université et a suivi mon dossier avec un grand soin. Merci infiniment !"
    },
    {
      author: "Omar Bennani",
      role: "Admis Université Laval",
      rating: 5,
      time: "il y a 3 semaines",
      text: "Une équipe très professionnelle et toujours à l'écoute. Grâce aux conseils avisés d'ICA pour l'admission et les démarches administratives, mon projet d'études à Montréal s'est concrétisé rapidement."
    },
    {
      author: "Salma Tazi",
      role: "Candidate Entrée Express",
      rating: 5,
      time: "il y a 1 mois",
      text: "Superbe expérience avec l'académie ICA ! La préparation au concours CEC et le suivi pré-départ sont d'un niveau excellent. Une agence sérieuse et très transparente à Casablanca."
    },
    {
      author: "Hamza Chraibi",
      role: "Résident permanent",
      rating: 5,
      time: "il y a 1 mois",
      text: "Prise en charge impeccable de A à Z pour notre dossier d'immigration. M. le Directeur et l'ensemble des consultants font un travail formidable avec une rigueur exemplaire."
    },
    {
      author: "Houda Mezouar",
      role: "Étudiante Concordia",
      rating: 5,
      time: "il y a 2 mois",
      text: "Je recommande ICA à 100% à tous les étudiants qui souhaitent partir étudier au Canada. Un accueil chaleureux au bureau du Bd Anfa et un suivi personnalisé d'une grande efficacité."
    }
  ],
  videoSection: {
    badgeText: "SUCCESS STORIES & EXPÉRIENCES",
    heading: "Témoignages & Preuves Sociales",
    subtitle: "Découvrez les témoignages de nos étudiants et de leurs familles qui ont concrétisé leur projet au Canada grâce à ICA."
  },
  videoTestimonials: [
    {
      id: "rachid",
      featured: true,
      name: "Rachid El Ouali",
      role: "Grand Artiste & Parrain de la Réussite ICA",
      city: "Montréal, QC",
      tag: "Parrain Officiel ICA",
      image: "assets/images/0cd820c4-819d-4e2e-956d-1a5d13c58f6c.png.jpg",
      videoEmbed: "https://www.youtube-nocookie.com/embed/WVqLnlJ0acw?autoplay=1&rel=0",
      videoTitle: "Témoignage Vidéo Rachid El Ouali",
      quote: "Avec ICA, vos enfants atteindront leurs rêves ! Un accompagnement bienveillant et rigoureux vers le Canada."
    },
    {
      id: "rossi",
      name: "Mohamed Rossi",
      role: "Étudiant à Montréal",
      city: "Montréal, QC",
      image: "assets/images/MOHAMED_ROSSI_2-272x300.png",
      videoEmbed: "https://www.youtube-nocookie.com/embed/MnaSbPb97jo?autoplay=1&rel=0",
      videoTitle: "Témoignage Étudiant — Mohamed Rossi",
      quote: "Mon intégration réussie à Montréal entre études supérieures et passion d'excellence."
    },
    {
      id: "aya",
      name: "Aya",
      role: "Étudiante au Canada",
      city: "Ville de Québec, QC",
      image: "assets/images/ayaa-300x258.png",
      videoEmbed: "https://www.youtube-nocookie.com/embed/foQOybld-yo?autoplay=1&rel=0",
      videoTitle: "Témoignage Étudiante — Aya",
      quote: "Comment j'ai réalisé mon rêve d'étudier au Canada grâce aux conseils personnalisés d'ICA."
    },
    {
      id: "salaheddine",
      name: "Salaheddine",
      role: "Visa d'Études Obtenu",
      city: "Toronto, ON",
      image: "assets/images/Capture-decran-2025-05-23-104612-268x300.png",
      videoEmbed: "https://www.youtube-nocookie.com/embed/cUQGPOoUJNs?autoplay=1&rel=0",
      videoTitle: "Témoignage Étudiant — Salaheddine",
      quote: "Visa refusé au départ, puis réobtenu haut la main avec le recours stratégique d'ICA !"
    },
    {
      id: "maman",
      name: "Mme Elhouat",
      role: "Maman de Mohamed Elhouat",
      city: "Ottawa, ON",
      image: "assets/images/maman1-237x300.png",
      videoEmbed: "https://www.youtube-nocookie.com/embed/V7afA1TwgIc?autoplay=1&rel=0",
      videoTitle: "Témoignage Parent — Une Maman Comblée",
      quote: "Une maman sereine : mon fils est bien installé à Ottawa pour réussir ses études."
    },
    {
      id: "yasmine",
      name: "Yasmine B.",
      role: "Étudiante LCI Éducation",
      city: "Vancouver, BC",
      image: "assets/images/CAP111111.png",
      videoEmbed: "https://www.youtube-nocookie.com/embed/foQOybld-yo?autoplay=1&rel=0",
      videoTitle: "Témoignage Étudiante LCI Éducation",
      quote: "L'accompagnement parfait pour intégrer un grand réseau d'enseignement canadien."
    }
  ]
};

module.exports = testimonialsData;
