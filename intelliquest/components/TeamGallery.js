/**
 * TEAM GALLERY COMPONENT
 * Renders 4-column visual storytelling gallery with mobile carousel
 */
function TeamGallery({ teamGallery }) {
  const { id, eyebrow, title, items } = teamGallery;

  const itemsHtml = items.map(item => `
                        <!-- Photo -->
                        <div class="g4-item" style="position: relative; border-radius: 18px; overflow: hidden; aspect-ratio: 3/4; border: 1px solid #E2E8F0; line-height: 0; background: transparent;">
                            <img src="${item.image}" alt="${item.alt}" style="width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 18px; transition: transform 0.45s ease;">
                            <div class="g4-overlay" style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.75) 100%); pointer-events: none;"></div>
                            <div class="g4-cap" style="position: absolute; left: 16px; right: 16px; bottom: 16px; z-index: 2; color: #FFFFFF; font-family: var(--font-minion); font-weight: 700; font-size: 0.95rem; line-height: 1.3;">
                                <span style="display: block; font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #E4A500; margin-bottom: 4px;">${item.tag}</span>
                                ${item.caption}
                            </div>
                        </div>`).join('');

  const dotsHtml = items.map((_, idx) => `
                <button type="button" class="carousel-dot${idx === 0 ? ' is-active' : ''}" data-index="${idx}" aria-label="Photo ${idx + 1} sur ${items.length}"></button>`).join('');

  return `
    <!-- SECTION: GALERIE PHOTOS / VISUAL STORYTELLING (4 COLONNES) -->
    <section class="gallery4-section section" id="${id}" style="padding: 90px 0; background: #F6F8FB;">
        <div class="container">
            <div class="section-head text-center reveal" style="margin-bottom: 50px;">
                <span class="eyebrow-red-tag" style="justify-content: center;"><span class="red-line"></span> ${eyebrow}</span>
                <h2 style="font-family: var(--font-minion); font-size: clamp(1.8rem, 2.8vw, 2.3rem); color: #007DBE; font-weight: 800; margin-top: 8px;">${title}</h2>
            </div>
            
            <!-- Carrousel Mobile / Grille Desktop -->
            <div class="gallery-carousel-wrapper" id="team-carousel-wrapper">
                <button type="button" class="carousel-arrow carousel-arrow-prev" id="team-carousel-prev" aria-label="Photo précédente">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>

                <div class="gallery-carousel-viewport" id="team-carousel-viewport">
                    <div class="gallery4-grid reveal" id="team-carousel-track">
${itemsHtml}
                    </div>
                </div>

                <button type="button" class="carousel-arrow carousel-arrow-next" id="team-carousel-next" aria-label="Photo suivante">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
            </div>

            <!-- Indicateurs de position (dots) -->
            <div class="carousel-dots" id="team-carousel-dots" aria-label="Position des photos">
${dotsHtml}
            </div>
        </div>
    </section>
  `.trim();
}

module.exports = TeamGallery;
