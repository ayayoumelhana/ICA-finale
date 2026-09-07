/**
 * HOME PAGE TEMPLATE
 * Assembles components and data into index.html
 */
const { Head, Navbar, Footer, FloatingCTA, Hero, TeamGallery } = require('../components');

function HomePage({ siteConfig, homeData }) {
  const headHtml = Head({
    title: homeData.meta.title,
    description: homeData.meta.description
  });

  const navbarHtml = Navbar({
    activePage: 'home',
    siteConfig
  });

  const heroHtml = Hero({
    type: 'home-cinematic',
    data: homeData.hero
  });

  const { mission, vision, teamGallery } = homeData;

  const missionHtml = `
    <!-- SECTION 2: NOTRE MISSION (PHOTO À DROITE) -->
    <section class="mission-section section" id="${mission.id}" style="padding: 90px 0; background: #F6F8FB; scroll-margin-top: 100px;">
        <div class="container">
            <div class="mv-grid" style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 50px; align-items: center;">
                <div class="mv-copy reveal">
                    <div class="mv-icon-box" style="width: 54px; height: 54px; border-radius: 16px; background: #007DBE; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 20px; ">
                        <i class="${mission.iconClass}"></i>
                    </div>
                    <span class="eyebrow-red-tag"><span class="red-line"></span> ${mission.eyebrow}</span>
                    <h3 style="font-family: var(--font-minion); font-size: clamp(1.7rem, 2.6vw, 2.2rem); font-weight: 800; color: #007DBE; margin-bottom: 14px; line-height: 1.25;">${mission.title}</h3>
                    <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin-bottom: 14px;">${mission.paragraphs[0]}</p>
                    <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin-bottom: 0;">${mission.paragraphs[1]}</p>
                </div>
                <div class="mv-photo-stage reveal" style="position: relative; border-radius: 20px; box-shadow: 0 20px 45px rgba(15, 23, 42, 0.1); overflow: hidden;  line-height: 0; background: transparent;">
                    <img src="${mission.image.src}" alt="${mission.image.alt}" style="width: 100%; height: 100%; min-height: 340px; max-height: 420px; object-fit: cover; display: block; border-radius: 20px;">
                </div>
            </div>
        </div>
    </section>
  `.trim();

  const visionHtml = `
    <!-- SECTION 3: NOTRE VISION (PHOTO À GAUCHE) -->
    <section class="vision-section section bg-white" id="${vision.id}" style="padding: 90px 0;">
        <div class="container">
            <div class="mv-grid" style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 50px; align-items: center;">
                <div class="mv-photo-stage reveal" style="position: relative; border-radius: 20px; overflow: hidden;  line-height: 0; background: transparent;">
                    <img src="${vision.image.src}" alt="${vision.image.alt}" style="width: 100%; height: 100%; min-height: 340px; max-height: 420px; object-fit: cover; display: block; border-radius: 20px;">
                </div>
                <div class="mv-copy reveal">
                    <div class="mv-icon-box" style="width: 54px; height: 54px; border-radius: 16px; background: #007DBE; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 20px; ">
                        <i class="${vision.iconClass}"></i>
                    </div>
                    <span class="eyebrow-red-tag"><span class="red-line"></span> ${vision.eyebrow}</span>
                    <h3 style="font-family: var(--font-minion); font-size: clamp(1.7rem, 2.6vw, 2.2rem); font-weight: 800; color: #007DBE; margin-bottom: 14px; line-height: 1.25;">${vision.title}</h3>
                    <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin-bottom: 14px;">${vision.paragraphs[0]}</p>
                    <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin-bottom: 0;">${vision.paragraphs[1]}</p>
                </div>
            </div>
        </div>
    </section>
  `.trim();

  const galleryHtml = TeamGallery({ teamGallery });
  const footerHtml = Footer({ siteConfig });
  const floatingCtaHtml = FloatingCTA({ siteConfig });

  return `<!DOCTYPE html>
<html lang="fr-FR">
<head>
    ${headHtml}
</head>
<body class="page-index">
    ${navbarHtml}

    ${heroHtml}

    ${missionHtml}

    ${visionHtml}

    ${galleryHtml}

    ${footerHtml}

    ${floatingCtaHtml}

    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
</body>
</html>
`.trim();
}

module.exports = HomePage;
