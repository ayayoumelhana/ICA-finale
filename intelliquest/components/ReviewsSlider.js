/**
 * REVIEWS SLIDER COMPONENT
 * Renders verified Google reviews summary & testimonial cards
 */
function ReviewsSlider({ testimonialsData }) {
  const { googleReviewsSummary, reviews } = testimonialsData;

  const reviewsCardsHtml = reviews.map(r => `
                    <div class="swiper-slide review-slide-card" style="background: #ffffff; border-radius: 16px; padding: 24px; border: 1px solid #E2E8F0; box-shadow: 0 4px 15px rgba(0,0,0,0.04); display: flex; flex-direction: column; justify-content: space-between; height: auto;">
                        <div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                                <div style="display: flex; gap: 3px; color: #F59E0B; font-size: 0.85rem;">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                                <span style="font-size: 0.75rem; color: #94A3B8;">${r.time}</span>
                            </div>
                            <p style="color: #334155; font-size: 0.88rem; line-height: 1.55; margin-bottom: 16px; font-style: italic;">“${r.text}”</p>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px; border-top: 1px solid #F1F5F9; padding-top: 12px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; background: #007DBE; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem;">
                                ${r.author.charAt(0)}
                            </div>
                            <div>
                                <h4 style="font-size: 0.9rem; font-weight: 700; color: #0F172A; margin: 0;">${r.author}</h4>
                                <span style="font-size: 0.75rem; color: #64748B;">${r.role}</span>
                            </div>
                        </div>
                    </div>`).join('');

  return `
    <!-- SECTION AVIS GOOGLE VÉRIFIÉS -->
    <section class="reviews-section section" style="padding: 70px 0; background: #F8FAFC;">
        <div class="container">
            <div class="section-head text-center reveal" style="margin-bottom: 35px;">
                <span class="eyebrow-red-tag" style="justify-content: center;"><i class="fab fa-google" style="color: #007DBE; margin-right: 6px;"></i> ${googleReviewsSummary.badgeText}</span>
                <h2 style="font-family: var(--font-minion); font-size: clamp(1.6rem, 2.5vw, 2.2rem); color: #007DBE; font-weight: 800; margin-top: 8px;">${googleReviewsSummary.heading}</h2>
            </div>

            <!-- Swiper Slider Container -->
            <div class="swiper reviews-swiper-container" style="padding: 10px 4px 40px 4px;">
                <div class="swiper-wrapper">
                    ${reviewsCardsHtml}
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
  `.trim();
}

module.exports = ReviewsSlider;
