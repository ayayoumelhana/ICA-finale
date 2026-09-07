/**
 * ÉTUDE STEPS COMPONENT
 * Renders interactive step tabs and panels with exact responsive image containers & focal points
 */
function EtudeSteps({ poleData }) {
  const { id, eyebrow, title, subtitle, steps } = poleData;
  const isImmigration = id === 'immigration';

  const sectionBg = isImmigration ? 'background: #F6F8FB;' : 'background: #FFFFFF;';
  const badgePill = isImmigration
    ? '<span class="section-badge-pill amber-pill"><i class="fas fa-globe-americas" style="margin-right: 6px;"></i> PÔLE IMMIGRATION</span>'
    : '<span class="section-badge-pill" style="color: #007DBE; background: rgba(0, 125, 190, 0.08);"><i class="fas fa-graduation-cap" style="margin-right: 6px;"></i> PÔLE ÉTUDES</span>';

  // Tab Buttons
  const tabButtonsHtml = steps.map((s, idx) => {
    const activeClass = idx === 0 ? ' active' : '';
    const amberTab = isImmigration ? ' amber-tab' : '';
    const amberNum = isImmigration ? ' amber-num' : '';

    return `
                <button class="step-tab-btn${activeClass}${amberTab}" data-tab="${s.id}">
                    <span class="step-num-pill${amberNum}">${s.stepNumber}</span>
                    <span class="step-title-text">${s.tabLabel}</span>
                </button>`;
  }).join('');

  // Step Panels
  const stepPanelsHtml = steps.map((s, idx) => {
    const activeClass = idx === 0 ? ' active' : '';
    const badgeClass = isImmigration ? ' amber-badge' : '';
    const btnClass = isImmigration ? 'btn-amber' : 'btn-blue';
    const checkIconStyle = isImmigration ? ' style="color: #D97706;"' : '';

    const checklistItemsHtml = s.checklist.map(item => `
                                <li><i class="fas fa-check-circle"${checkIconStyle}></i> ${item}</li>`).join('');

    return `
                <!-- Step ${s.stepNumber} Panel -->
                <div class="step-panel-card${activeClass}" id="${s.id}">
                    <div class="step-panel-grid">
                        <div class="step-panel-img-box">
                            <img src="${s.image}" alt="${s.alt}">
                            <span class="step-tag-badge${badgeClass}">${s.badge}</span>
                        </div>
                        <div class="step-panel-text-box">
                            <h3>${s.title}</h3>
                            <p>${s.description}</p>
                            <ul class="step-checklist">${checklistItemsHtml}
                            </ul>
                            <a href="${s.buttonLink}" class="btn ${btnClass}">
                                <span>${s.buttonText}</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
  }).join('\n');

  return `
    <!-- PÔLE ${isImmigration ? '02: IMMIGRATION' : '01: ÉTUDES'} AU CANADA (INTERACTIVE TABS) -->
    <section id="${id}" class="${id}-section section" style="padding: 85px 0; ${sectionBg}">
        <div class="container">
            <div class="sec-head text-center reveal" style="margin-bottom: 40px;">
                ${badgePill}
                <h2 style="font-family: var(--font-minion); font-size: clamp(1.8rem, 2.8vw, 2.3rem); font-weight: 800; color: #007DBE; margin-top: 8px; margin-bottom: 14px;">${title}</h2>
                <p style="font-family: var(--font-primary); font-size: 1rem; color: #5B6B80; max-width: 700px; margin: 0 auto;">${subtitle}</p>
            </div>

            <!-- Interactive Step Tabs Header -->
            <div class="step-tabs-nav ${id}-tabs-nav reveal">${tabButtonsHtml}
            </div>

            <!-- Tab Content Panels -->
            <div class="step-tabs-content ${id}-tabs-content reveal">${stepPanelsHtml}
            </div>
        </div>
    </section>
  `.trim();
}

module.exports = EtudeSteps;
