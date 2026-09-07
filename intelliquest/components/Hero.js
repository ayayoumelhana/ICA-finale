/**
 * HERO COMPONENT
 * Flexible hero supporting Homepage cinematic or Subpage slogan with watermark
 */
function Hero({ type = 'subpage', data }) {
  if (type === 'home-cinematic') {
    const { titleLines, description, ctaButtons, bgImages } = data;

    const bgImagesHtml = bgImages.map(img => {
      const activeClass = img.active ? ' is-active' : '';
      return `<img src="${img.src}" alt="${img.alt}" class="hero-bg-media${activeClass}" id="${img.id}">`;
    }).join('\n            ');

    const titleLinesHtml = titleLines.map((line, idx) => {
      const colorStyle = line.highlight ? ' style="color: #FFFFFF !important;"' : '';
      return `
                <div class="title-line-mask">
                    <span class="title-line gsap-reveal-line" id="headline-line-${idx + 1}"${colorStyle}>${line.text}</span>
                </div>`;
    }).join('');

    const ctaButtonsHtml = ctaButtons.map(btn => {
      const activeClass = btn.isActive ? ' is-active' : '';
      return `
                <a href="${btn.href}" class="btn-hero ${btn.variant}${activeClass}">
                    <span>${btn.label}</span>
                    <span class="btn-arrow">→</span>
                </a>`;
    }).join('');

    return `
    <!-- CLEAN CINEMATIC FULL-SCREEN HERO -->
    <main class="hero-stage hero-cinematic-stage" id="hero-cinematic-stage">
        <!-- Full-Screen Triple Stacked Background Images -->
        <div class="hero-bg-wrapper">
            ${bgImagesHtml}
        </div>
        <!-- Left-Aligned Content Overlay -->
        <div class="hero-content hero-content-left">
            <h1 class="hero-title hero-title-editorial" id="hero-title-editorial">${titleLinesHtml}
            </h1>
            <p class="hero-description gsap-reveal-item" id="hero-description-text">
                ${description}
            </p>
            <div class="hero-cta-group gsap-reveal-item">${ctaButtonsHtml}
            </div>
        </div>
    </main>
    `.trim();
  }

  if (type === 'etudes-slogan') {
    const { bgImage, alt, sloganLines, description, cta } = data;

    return `
    <!-- HERO SECTION (UNIFIED HERO SYSTEM) -->
    <section class="hero-stage hero-full-bg-etudes" id="hero-stage">
        <!-- Visual Image Container -->
        <div class="hero-bg-wrapper">
            <img src="${bgImage}" alt="${alt}" class="hero-bg-media is-active" fetchpriority="high">
        </div>
        <div class="hero-content">
            <div class="hero-copy-box">
                <div class="slogan-composite-wrapper">
                    <!-- White Maple Leaf Line Art Background Watermark -->
                    <svg class="maple-leaf-bg-watermark" viewBox="0 0 200 200" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M100 15 C105 35 115 45 125 40 L135 55 L125 70 C140 65 155 75 165 70 L160 85 L180 95 L165 110 L150 105 C145 120 135 130 145 145 L125 140 L115 155 C105 145 102 145 100 160 C98 145 95 145 85 155 L75 140 L55 145 C65 130 55 120 50 105 L35 110 L20 95 L40 85 L35 70 C45 75 60 65 75 70 L65 55 L75 40 C85 45 95 35 100 15 Z" />
                    </svg>
                    
                    <h1 class="hero-title hero-title-subpage slogan-text-block slogan-white-theme" id="hero-title">
                        <div class="title-line-mask">
                            <span class="title-line gsap-reveal-line" id="etudes-line-1">${sloganLines[0]}</span>
                        </div>
                        <div class="title-line-mask">
                            <span class="title-line gsap-reveal-line" id="etudes-line-2">${sloganLines[1]}</span>
                        </div>
                        <div class="title-line-mask">
                            <span class="title-line gsap-reveal-line" id="etudes-line-3">au <span class="cursive-canada">Canada</span></span>
                        </div>
                    </h1>
                </div>

                <p class="hero-description gsap-reveal-item" id="hero-description-text">
                    ${description}
                </p>

                ${cta ? `
                <div class="hero-cta-group gsap-reveal-item">
                    <a href="${cta.href}" class="btn-blue-appoint">${cta.label}</a>
                </div>` : ''}
            </div>
        </div>
    </section>
    `.trim();
  }

  if (type === 'banner') {
    const { bgImage, title, cta } = data;
    return `
    <!-- Page Banner -->
    <section class="page-banner" style="background-image: url('${bgImage}');">
        <div class="container">
            <h1>${title}</h1>
            ${cta ? `
            <div class="hero-cta-group" style="margin-top: 18px; display: inline-flex; gap: 14px; flex-wrap: wrap; justify-content: center;">
                <a href="${cta.href}" class="btn-blue-appoint">${cta.label}</a>
            </div>` : ''}
        </div>
    </section>
    `.trim();
  }

  // Generic Subpage Hero
  return `
    <section class="hero-stage subpage-hero" id="hero-stage">
        <div class="hero-content text-center">
            <h1>${data.title}</h1>
            ${data.subtitle ? `<p class="hero-description">${data.subtitle}</p>` : ''}
        </div>
    </section>
  `.trim();
}

module.exports = Hero;
