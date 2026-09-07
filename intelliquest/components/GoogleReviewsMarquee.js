/**
 * GOOGLE REVIEWS MARQUEE COMPONENT
 * Renders verified Google ratings header & animated reviews carousel track
 */
function GoogleReviewsMarquee({ testimonialsData }) {
  const { googleReviewsSummary, reviews } = testimonialsData;

  const cardsHtml = reviews.map((r, idx) => {
    const avatarColors = ['avatar-green', 'avatar-lime', 'avatar-darkgreen', 'avatar-blue', 'avatar-purple'];
    const avatarClass = avatarColors[idx % avatarColors.length];
    const initial = r.author.charAt(0);

    return `
                        <div class="google-review-card">
                            <div class="google-card-header">
                                <div class="reviewer-avatar ${avatarClass}">${initial}</div>
                                <div class="reviewer-info">
                                    <h4 class="reviewer-name">${r.author}</h4>
                                    <span class="reviewer-meta">${r.role ? r.role + ' • ' : ''}${r.time}</span>
                                </div>
                                <i class="fab fa-google google-card-icon"></i>
                            </div>
                            <div class="google-card-stars">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="google-card-text">
                                "${r.text}"
                            </p>
                        </div>`;
  }).join('\n');

  return `
    <!-- SECTION TÉMOIGNAGES (EXCLUSIF ICA ORIENTATION) -->
    <div id="temoignages"></div>
    <section class="google-reviews-section section bg-light" id="avis-google" style="padding: 80px 0;">
        <div class="container">
            <div class="google-reviews-header text-center reveal">
                <span class="section-badge-pill"><i class="fab fa-google" style="margin-right: 6px; color: #4285F4;"></i> ${googleReviewsSummary.badgeText}</span>
                <h2 class="google-reviews-title" style="font-family: var(--font-minion); font-size: clamp(1.8rem, 2.8vw, 2.3rem); color: #007DBE; font-weight: 800; margin-top: 8px;">${googleReviewsSummary.heading}</h2>
                
                <div class="google-rating-summary-box" style="margin-top: 20px;">
                    <div class="google-logo-badge">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#007DBE"/>
                        </svg>
                    </div>
                    <div class="rating-score-block">
                        <span class="rating-score">4,8</span>
                        <div class="rating-stars">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="rating-meta-text">
                        <span class="reviews-count">${googleReviewsSummary.totalReviews} avis sur Google</span>
                        <span class="google-certified-tag"><i class="fas fa-check-circle"></i> Fiche Google Vérifiée</span>
                    </div>
                </div>
            </div>

            <div class="google-reviews-slider-stage reveal" style="margin-top: 30px;">
                <button class="google-side-btn google-prev-btn" id="google-prev-btn" aria-label="Avis précédent">
                    <i class="fas fa-chevron-left"></i>
                </button>

                <div class="google-reviews-marquee-wrapper">
                    <div class="google-reviews-marquee-track">${cardsHtml}
                    </div>
                </div>

                <button class="google-side-btn google-next-btn" id="google-next-btn" aria-label="Avis suivant">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </section>
  `.trim();
}

module.exports = GoogleReviewsMarquee;
