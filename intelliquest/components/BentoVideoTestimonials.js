/**
 * BENTO VIDEO TESTIMONIALS COMPONENT
 * Renders the Bento Grid video social proof cards and the interactive video lightbox modal.
 */
function BentoVideoTestimonials({ testimonialsData }) {
  const { videoSection, videoTestimonials } = testimonialsData;

  const cardsHtml = (videoTestimonials || []).map(item => {
    const featuredClass = item.featured ? ' bento-card-featured' : '';
    const featuredTagHtml = item.tag ? `<span class="bento-featured-tag"><i class="fas fa-certificate"></i> ${item.tag}</span>` : '';

    return `
                <!-- Bento Item: ${item.name} -->
                <div class="bento-card${featuredClass} open-bento-video-btn" data-video-embed="${item.videoEmbed}" data-video-title="${item.videoTitle}">
                    <div class="bento-card-bg-wrap">
                        <img src="${item.image}" alt="${item.name}" class="bento-card-img" loading="lazy">
                        <div class="bento-card-gradient"></div>
                    </div>
                    <div class="bento-card-content">
                        <div class="bento-card-top">
                            <span class="bento-city-pill"><i class="fas fa-map-marker-alt"></i> ${item.city}</span>
                            ${featuredTagHtml}
                        </div>
                        <div class="bento-card-body">
                            <div class="bento-play-btn-circle" aria-label="Lire la vidéo">
                                <i class="fas fa-play"></i>
                            </div>
                            <div class="bento-card-meta">
                                <h3 class="bento-student-name">${item.name}</h3>
                                <p class="bento-student-role">${item.role}</p>
                                <p class="bento-quote-text">« ${item.quote} »</p>
                            </div>
                        </div>
                    </div>
                </div>`;
  }).join('\n');

  return `
    <!-- SECTION TÉMOIGNAGES VIDÉOS BENTO GRID (PREUVES SOCIALES) -->
    <section class="bento-testimonials-section section" id="temoignages">
        <div class="container">
            <!-- Header Banner -->
            <div class="bento-header text-center reveal">
                <span class="section-badge-pill"><i class="fas fa-star" style="margin-right: 6px; color: #FFC107;"></i> ${videoSection?.badgeText || 'SUCCESS STORIES & EXPÉRIENCES'}</span>
                <h2 class="bento-main-title">${videoSection?.heading || 'Témoignages & Preuves Sociales'}</h2>
                <p class="bento-subtitle">${videoSection?.subtitle || 'Découvrez les témoignages de nos étudiants et de leurs familles qui ont concrétisé leur projet au Canada grâce à ICA.'}</p>
            </div>

            <!-- Bento Grid Layout -->
            <div class="bento-grid-container reveal">
${cardsHtml}
            </div>
        </div>
    </section>

    <!-- Fullscreen Video Lightbox Modal (Never redirects, autoplay, blurred dark backdrop) -->
    <div id="bento-video-modal" class="bento-modal-overlay">
        <div class="bento-modal-container">
            <button class="bento-modal-close-btn" id="bento-modal-close" aria-label="Fermer la vidéo">
                <i class="fas fa-times"></i>
            </button>
            <div class="bento-modal-header">
                <span class="bento-modal-badge"><i class="fab fa-youtube" style="color: #FF0000; margin-right: 6px;"></i> Témoignage Vidéo ICA</span>
                <h3 id="bento-modal-title" class="bento-modal-video-title">Témoignage Vidéo</h3>
            </div>
            <div class="bento-modal-video-wrapper">
                <iframe id="bento-modal-iframe" src="" title="Vidéo Témoignage ICA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  `.trim();
}

module.exports = BentoVideoTestimonials;
