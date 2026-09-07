/**
 * FORMATION SECTION COMPONENT
 * Renders interactive tracks, pills and program panels for ICA Excellence
 */
function FormationSection({ formationData }) {
  const { tracks } = formationData;

  const pillsHtml = tracks.map((t, idx) => {
    const activeClass = idx === 0 ? ' active' : '';
    return `
            <div class="tab-pill${activeClass}" data-track="${t.id}">
                <span class="idx">${t.idx}</span>
                <span class="label">${t.label}</span>
            </div>`;
  }).join('');

  const panelsHtml = tracks.map((t, idx) => {
    const activeClass = idx === 0 ? ' active' : '';
    const pointsHtml = t.points.map(p => `<li><i class="fas fa-check" style="color: var(--red); margin-right: 8px;"></i> ${p}</li>`).join('');

    return `
        <div class="tab-panel${activeClass}" id="${t.id}">
            <div class="tp-lead">
                <span class="eyebrow">${t.eyebrow}</span>
                <h3>${t.title}</h3>
                <p>${t.description}</p>
                <ul style="list-style: none; padding: 0; margin-bottom: 24px; display: grid; gap: 10px;">${pointsHtml}
                </ul>
                <a href="${t.link}" class="btn-hero btn-excellence" style="display: inline-flex; width: fit-content; text-decoration: none;">
                    <span>Demander la brochure</span>
                    <span class="btn-arrow">→</span>
                </a>
            </div>
        </div>`;
  }).join('\n');

  return `
    <!-- TRACKS / PROGRAM SELECTOR -->
    <section class="tracks" id="programmes" style="padding: 90px 0; background: var(--bg-soft);">
        <div class="container">
            <div class="section-head reveal" style="max-width: 640px; margin-bottom: 50px;">
                <span class="eyebrow-red-tag"><span class="red-line"></span> CATALOGUE D'EXCELLENCE</span>
                <h2 style="font-size: clamp(1.7rem, 2.8vw, 2.3rem); color: var(--navy); line-height: 1.28; font-weight: 800; margin-top: 8px;">Nos programmes de formation</h2>
                <p style="margin-top: 16px; color: var(--slate); font-size: 0.98rem;">Choisissez votre filière pour découvrir le contenu pédagogique et les débouchés professionnels au Canada et à l'international.</p>
            </div>

            <div class="tab-pills reveal">${pillsHtml}
            </div>

            <div class="tab-panels-container reveal">${panelsHtml}
            </div>
        </div>
    </section>
  `.trim();
}

module.exports = FormationSection;
