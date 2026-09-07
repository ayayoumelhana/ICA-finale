/**
 * ÉTUDES ET FORMATIONS PAGE TEMPLATE
 * Assembles components and data into etudes.html
 */
const { Head, Navbar, Footer, FloatingCTA, Hero, EtudeSteps, GoogleReviewsMarquee } = require('../components');

function EtudesPage({ siteConfig, etudeData, testimonialsData }) {
  const headHtml = Head({
    title: etudeData.meta.title,
    description: etudeData.meta.description
  });

  const navbarHtml = Navbar({
    activePage: 'etudes',
    siteConfig
  });

  const heroHtml = Hero({
    type: 'etudes-slogan',
    data: etudeData.hero
  });

  const polesNavHtml = `
    <!-- ANCRES DE NAVIGATION VERS LES DEUX PÔLES -->
    <div class="poles-nav-wrapper" id="poles-sections" style="padding: 24px 0 0 0; background: #FFFFFF;">
        <div class="container">
            <div class="poles-pills-row" style="display: flex; gap: 20px; flex-wrap: wrap;">
                <a href="#etudes" class="pole-pill" style="flex: 1; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 24px; background: #F6F8FB; border: 1px solid #E2E8F0; border-radius: 12px; text-decoration: none; color: #007DBE; transition: all 0.25s ease;">
                    <div>
                        <span class="pp-label" style="font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; color: #007DBE; display: block; margin-bottom: 4px;">PÔLE 01</span>
                        <span class="pp-title" style="font-family: var(--font-minion); font-size: 1.15rem; font-weight: 800; color: #007DBE;">Études au Canada</span>
                    </div>
                    <span class="pp-arrow" style="font-size: 1.2rem; color: #007DBE; font-weight: 800;">↓</span>
                </a>
                <a href="#immigration" class="pole-pill" style="flex: 1; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 24px; background: #F6F8FB; border: 1px solid #E2E8F0; border-radius: 12px; text-decoration: none; color: #007DBE; transition: all 0.25s ease;">
                    <div>
                        <span class="pp-label" style="font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; color: #D97706; display: block; margin-bottom: 4px;">PÔLE 02</span>
                        <span class="pp-title" style="font-family: var(--font-minion); font-size: 1.15rem; font-weight: 800; color: #007DBE;">Immigration au Canada</span>
                    </div>
                    <span class="pp-arrow" style="font-size: 1.2rem; color: #D97706; font-weight: 800;">↓</span>
                </a>
            </div>
        </div>
    </div>
  `.trim();

  const etudesStepsHtml = EtudeSteps({ poleData: etudeData.etudesPole });
  const immigrationStepsHtml = EtudeSteps({ poleData: etudeData.immigrationPole });
  const reviewsMarqueeHtml = GoogleReviewsMarquee({ testimonialsData });
  const footerHtml = Footer({ siteConfig });
  const floatingCtaHtml = FloatingCTA({ siteConfig });

  return `<!DOCTYPE html>
<html lang="fr-FR">
<head>
    ${headHtml}
</head>
<body class="etudes-page">
    ${navbarHtml}

    ${heroHtml}

    ${polesNavHtml}

    ${etudesStepsHtml}

    ${immigrationStepsHtml}

    ${reviewsMarqueeHtml}

    ${footerHtml}

    ${floatingCtaHtml}

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Études Tab Switching
    const etudesBtns = document.querySelectorAll('.etudes-tabs-nav .step-tab-btn');
    const etudesPanels = document.querySelectorAll('.etudes-tabs-content .step-panel-card');

    etudesBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');
            etudesBtns.forEach(b => b.classList.remove('active'));
            etudesPanels.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });

    // Immigration Tab Switching
    const immigBtns = document.querySelectorAll('.immigration-tabs-nav .step-tab-btn');
    const immigPanels = document.querySelectorAll('.immigration-tabs-content .step-panel-card');

    immigBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-tab');
            immigBtns.forEach(b => b.classList.remove('active'));
            immigPanels.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });
});
</script>
</body>
</html>
`.trim();
}

module.exports = EtudesPage;
