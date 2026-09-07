/**
 * HEAD COMPONENT
 * Renders consistent meta tags, fonts, animations & stylesheets
 */
function Head({ title, description, extraHead = '' }) {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title || "IntelliQuest Canada Academy (ICA) – Éducation × Carrière"}</title>
    <meta name="description" content="${description || "IntelliQuest Canada Academy - Admissions universitaires, permis d'études & formations certifiantes d'excellence au Canada."}">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
    
    <!-- Google Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Dancing+Script:wght@700&family=Lora:ital,wght@0,400..700;1,400..700&family=Manrope:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap" rel="stylesheet">
    
    <!-- GSAP Animation Library & ScrollTrigger Plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    ${extraHead}
  `.trim();
}

module.exports = Head;
