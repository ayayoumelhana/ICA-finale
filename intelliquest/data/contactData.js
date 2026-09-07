/**
 * CONTACT PAGE DATA
 * Centralized coordinates, form structure, and maps config
 */
const contactData = {
  meta: {
    title: "Contactez-nous – IntelliQuest Canada Academy",
    description: "Prenez rendez-vous avec nos conseillers experts en études et immigration au Canada."
  },
  hero: {
    bgImage: "assets/images/arcgis-survey123-spring-2024-webinar-social-share-Copie.webp",
    title: "Contactez-nous",
    cta: {
      href: "#form-orientation",
      label: "Remplir le formulaire"
    }
  },
  offices: [
    {
      title: "Appelez-nous",
      iconClass: "fas fa-phone-alt",
      lines: [
        { label: "+212 522 36 31 31", href: "tel:+212522363131" },
        { label: "+212 522 36 40 40", href: "tel:+212522364040" },
        { label: "+212 6 28 41 42 42", href: "tel:+212628414242" },
        { label: "+1 (514) 619-7534", href: "tel:+15146197534" }
      ]
    },
    {
      title: "Envoyez-nous un courriel",
      iconClass: "fas fa-mail-bulk",
      lines: [
        { label: "contact@intelliquestcanada.ca", href: "mailto:contact@intelliquestcanada.ca" }
      ]
    },
    {
      title: "Où nous trouver",
      iconClass: "fas fa-map-marker-alt",
      lines: [
        { label: "156, Bd Anfa, étage 3,\nCasablanca, Maroc", href: "https://maps.google.com/?q=156+Bd+Anfa+Casablanca+Maroc" }
      ]
    }
  ],
  form: {
    id: "form-orientation",
    title: "Demande d'orientation personnalisée",
    fields: [
      { name: "nom", label: "Nom complet", type: "text", required: true, placeholder: "Votre nom et prénom" },
      { name: "email", label: "Adresse e-mail", type: "email", required: true, placeholder: "votre.email@exemple.com" },
      { name: "telephone", label: "Téléphone / WhatsApp", type: "tel", required: true, placeholder: "+212 6 XX XX XX XX" },
      {
        name: "projet",
        label: "Votre projet",
        type: "select",
        required: true,
        options: [
          { value: "etudes", label: "Études au Canada (Licence, Master, Collège)" },
          { value: "immigration", label: "Immigration & Résidence permanente" },
          { value: "formations", label: "Formations professionnelles ICA Excellence" },
          { value: "autre", label: "Autre demande" }
        ]
      },
      { name: "message", label: "Message / Précisions", type: "textarea", required: false, placeholder: "Décrivez brièvement votre projet ou votre situation actuelle..." }
    ],
    submitText: "Envoyer ma demande"
  }
};

module.exports = contactData;
