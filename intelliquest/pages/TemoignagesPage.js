/**
 * TÉMOIGNAGES PAGE TEMPLATE
 * Assembles components and data into temoignages.html
 */
const { Head, Navbar, Footer } = require('../components');

function TemoignagesPage({ siteConfig, testimonialsData }) {
  const headHtml = Head({
    title: "Témoignages - Intelliquest Canada Academy",
    description: "Découvrez les témoignages de nos étudiants et clients qui ont réalisé leur projet d'études et d'immigration au Canada grâce à l'accompagnement de l'ICA."
  });

  const navbarHtml = Navbar({
    activePage: 'testimonials',
    siteConfig
  });

  const footerHtml = Footer({ siteConfig });

  return `<!DOCTYPE html>
<html lang="fr-FR">
<head>
    ${headHtml}
</head>
<body class="temoignages-page">
    ${navbarHtml}

    <!-- ================= BANNIÈRE HERO ================= -->
    <section class="page-banner" style="background-image: url('assets/images/Temoignages-scaled.webp');">
        <div class="container">
            <h1>Témoignages</h1>
            <div class="hero-cta-group">
                <a href="contact.html" class="btn-blue-appoint">Prendre Rendez-vous</a>
                <a href="#avis-google" class="btn-link-poles-white">Voir tous les avis &darr;</a>
            </div>
        </div>
    </section>

    <!-- ================= SECTION AMBASSADEUR (Rachid El Ouali) ================= -->
    <section class="ambassador" id="ambassadeur">
        <div class="container amb-grid reveal">
            <div class="amb-photo" onclick="openVideo('WVqLnlJ0acw', true)">
                <img src="assets/images/0cd820c4-819d-4e2e-956d-1a5d13c58f6c.png.jpg" alt="Rachid El Ouali soutient ICA" onerror="this.onerror=null;this.src='https://intelliquestcanada.ca/wp-content/uploads/2025/04/0cd820c4-819d-4e2e-956d-1a5d13c58f6c.png.jpg'">
                <div class="cine-play">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
            <div class="amb-copy">
                <span class="eyebrow-red-tag"><span class="red-line"></span>Ils nous soutiennent</span>
                <h2>« Avec ICA, vos enfants atteindront leurs rêves ! »</h2>
                <p>Le célèbre acteur marocain Rachid El Ouali soutient notre mission : accompagner les jeunes vers une réussite assurée au Canada. Découvrez pourquoi il fait confiance à Intelliquest Canada Academy.</p>
                <button class="btn btn-primary-play" onclick="openVideo('WVqLnlJ0acw', true)">
                    ▶ Regarder la vidéo
                </button>
            </div>
        </div>
    </section>

    <!-- ================= SECTION VIDÉOS CINÉMATIQUES ================= -->
    <section class="cinema" id="videos-temoignages">
        <div class="container">
            <div class="section-head reveal">
                <span class="eyebrow-red-tag tag-center"><span class="red-line"></span>En vidéo</span>
                <h2>Vos expériences avec ICA</h2>
                <p>4 étudiants et parents racontent leur parcours. Cliquez pour regarder directement ici.</p>
            </div>
            <div class="cine-grid reveal">
                <!-- Vidéo 1 -->
                <div class="cine-card" onclick="openVideo('MnaSbPb97jo')">
                    <img src="assets/images/MOHAMED_ROSSI_2-272x300.png" alt="Témoignage Mohamed Rossi" onerror="this.onerror=null;this.src='https://intelliquestcanada.ca/wp-content/uploads/2025/06/MOHAMED_ROSSI_2-272x300.png'">
                    <div class="cine-scrim"></div>
                    <span class="cine-tag">Étudiant</span>
                    <div class="cine-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    <div class="cine-title">Mohamed Rossi, intégration réussie à Montréal.</div>
                </div>
                <!-- Vidéo 2 -->
                <div class="cine-card" onclick="openVideo('foQOybld-yo')">
                    <img src="assets/images/ayaa-300x258.png" alt="Témoignage Aya" onerror="this.onerror=null;this.src='https://intelliquestcanada.ca/wp-content/uploads/2025/04/ayaa-300x258.png'">
                    <div class="cine-scrim"></div>
                    <span class="cine-tag">Étudiante</span>
                    <div class="cine-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    <div class="cine-title">Aya a réalisé son rêve d'étudier au Canada.</div>
                </div>
                <!-- Vidéo 3 -->
                <div class="cine-card" onclick="openVideo('cUQGPOoUJNs')">
                    <img src="assets/images/Capture-decran-2025-05-23-104612-268x300.png" alt="Témoignage Salaheddine" onerror="this.onerror=null;this.src='https://intelliquestcanada.ca/wp-content/uploads/2025/05/Capture-decran-2025-05-23-104612-268x300.png'">
                    <div class="cine-scrim"></div>
                    <span class="cine-tag">Visa</span>
                    <div class="cine-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    <div class="cine-title">Visa refusé, puis accepté grâce à ICA.</div>
                </div>
                <!-- Vidéo 4 -->
                <div class="cine-card" onclick="openVideo('V7afA1TwgIc')">
                    <img src="assets/images/maman1-237x300.png" alt="Témoignage d'une maman" onerror="this.onerror=null;this.src='https://intelliquestcanada.ca/wp-content/uploads/2025/05/maman1-237x300.png'">
                    <div class="cine-scrim"></div>
                    <span class="cine-tag">Famille</span>
                    <div class="cine-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                    <div class="cine-title">Une maman comblée, son fils part au Canada.</div>
                </div>
            </div>
            <div class="channel-cta reveal">
                <p>Envie de voir plus de témoignages ? Retrouvez toutes nos vidéos sur notre chaîne YouTube.</p>
                <a href="https://www.youtube.com/@IntelliQuestCanadaAcadem-iw8tp" target="_blank" class="btn btn-youtube">Voir la chaîne YouTube ↗</a>
            </div>
        </div>
    </section>

    <!-- ================= SECTION AVIS GOOGLE VÉRIFIÉS ================= -->
    <section class="google-reviews-section section bg-light" id="avis-google">
        <div class="container">
            <!-- En-tête Google Reviews -->
            <div class="google-reviews-header text-center reveal">
                <span class="section-badge-pill"><i class="fab fa-google"></i> AVIS GOOGLE VÉRIFIÉS</span>
                <h2 class="google-reviews-title">Avis vérifiés de nos clients sur Google</h2>
                
                <!-- Badge Note Globale Google -->
                <div class="google-rating-summary-box">
                    <div class="google-logo-badge">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
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
                        <span class="reviews-count">106 avis sur Google</span>
                        <span class="google-certified-tag"><i class="fas fa-check-circle"></i> Fiche Google Vérifiée</span>
                    </div>
                </div>
            </div>
            <!-- Carrousel Défilant Marquee avec Flèches -->
            <div class="google-reviews-slider-stage reveal">
                <button class="google-side-btn google-prev-btn" id="google-prev-btn" aria-label="Avis précédent">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="google-reviews-marquee-wrapper" id="reviewsMarqueeWrapper">
                    <div class="google-reviews-marquee-track" id="reviewsMarqueeTrack">
                        
                        <!-- Avis 1 -->
                        <div class="google-review-card">
                            <div class="google-card-header">
                                <div class="reviewer-avatar avatar-green">L</div>
                                <div class="reviewer-info">
                                    <h4 class="reviewer-name">Lebbar Amine</h4>
                                    <span class="reviewer-meta">2 avis · il y a 7 mois</span>
                                </div>
                                <i class="fab fa-google google-card-icon"></i>
                            </div>
                            <div class="google-card-stars">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="google-card-text">
                                "À tous ceux qui veulent immigrer au Canada sans aucune contrainte, optez directement sur ce cabinet. Ils sont très professionnels, agréables et réactifs. Ce sont des gens de confiance..."
                            </p>
                        </div>
                        <!-- Avis 2 -->
                        <div class="google-review-card">
                            <div class="google-card-header">
                                <div class="reviewer-avatar avatar-lime">S</div>
                                <div class="reviewer-info">
                                    <h4 class="reviewer-name">Siham Abidine</h4>
                                    <span class="reviewer-meta">2 avis · il y a 10 mois</span>
                                </div>
                                <i class="fab fa-google google-card-icon"></i>
                            </div>
                            <div class="google-card-stars">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="google-card-text">
                                "Je tiens à remercier sincèrement Intelliquest Canada Academy pour leur professionnalisme, leur accompagnement et leur efficacité tout au long du processus d'immigration de mes deux fils..."
                            </p>
                        </div>
                        <!-- Avis 3 -->
                        <div class="google-review-card">
                            <div class="google-card-header">
                                <div class="reviewer-avatar avatar-darkgreen">Y</div>
                                <div class="reviewer-info">
                                    <h4 class="reviewer-name">Yasmine Souidi</h4>
                                    <span class="reviewer-meta">1 avis · il y a 2 mois</span>
                                </div>
                                <i class="fab fa-google google-card-icon"></i>
                            </div>
                            <div class="google-card-stars">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="google-card-text">
                                "Très bonne formation DSCG avec des professeurs compétents et un excellent accompagnement. Les cours sont clairs, organisés et très utiles pour préparer les examens."
                            </p>
                        </div>
                        <!-- Avis 4 -->
                        <div class="google-review-card">
                            <div class="google-card-header">
                                <div class="reviewer-avatar avatar-pink">Y</div>
                                <div class="reviewer-info">
                                    <h4 class="reviewer-name">Yasmine Boujendar</h4>
                                    <span class="reviewer-meta">2 avis · il y a un an</span>
                                </div>
                                <i class="fab fa-google google-card-icon"></i>
                            </div>
                            <div class="google-card-stars">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="google-card-text">
                                "Je suis extrêmement satisfaite des services d’ICA Cabinet d’Immigration ! Leur équipe est professionnelle, réactive et très à l’écoute. Grâce à eux, j’ai pu avancer sereinement..."
                            </p>
                        </div>
                        <!-- Avis 5 -->
                        <div class="google-review-card">
                            <div class="google-card-header">
                                <div class="reviewer-avatar avatar-purple">T</div>
                                <div class="reviewer-info">
                                    <h4 class="reviewer-name">Taoufik Ridaoui</h4>
                                    <span class="reviewer-meta">3 avis · il y a un an</span>
                                </div>
                                <i class="fab fa-google google-card-icon"></i>
                            </div>
                            <div class="google-card-stars">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="google-card-text">
                                "Vraiment et sincèrement ce sont des professionnels, accueillants et disponibles tout au long du processus d'obtention du visa étudiant de mon fils."
                            </p>
                        </div>
                        <!-- Avis 6 -->
                        <div class="google-review-card">
                            <div class="google-card-header">
                                <div class="reviewer-avatar avatar-pink">S</div>
                                <div class="reviewer-info">
                                    <h4 class="reviewer-name">Soukar Zakaria</h4>
                                    <span class="reviewer-meta">2 avis · il y a 2 semaines</span>
                                </div>
                                <i class="fab fa-google google-card-icon"></i>
                            </div>
                            <div class="google-card-stars">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="google-card-text">
                                "J’ai déjà fait ma formation DSCG chez ICA et franchement c’était une très bonne expérience. Les formateurs sont compétents et l’encadrement était très sérieux."
                            </p>
                        </div>
                    </div>
                </div>
                <button class="google-side-btn google-next-btn" id="google-next-btn" aria-label="Avis suivant">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </section>

    ${footerHtml}

    <!-- ================= MODALE VIDÉO YOUTUBE POP-UP ================= -->
    <div class="video-modal" id="videoModal" onclick="closeVideoOnBackdrop(event)">
        <div class="modal-inner">
            <button class="modal-close" onclick="closeVideo()" aria-label="Fermer la vidéo">&times;</button>
            <div class="modal-frame-wrap" id="modalFrameWrap"></div>
        </div>
    </div>

    <!-- ================= BOUTONS FLOTTANTS ================= -->
    <a href="https://wa.me/212628414242?text=Bonjour%20IntelliQuest%20Canada%20Academy" target="_blank" class="whatsapp-float-btn" aria-label="WhatsApp">
        <div class="wa-bubble-badge">
            <i class="fab fa-whatsapp"></i>
        </div>
        <span class="wa-label">WhatsApp us</span>
    </a>
    <a href="contact.html" class="contact-float-btn" aria-label="Contactez-nous">
        <i class="fas fa-paper-plane"></i>
        <span>Contactez-nous</span>
    </a>

    <script src="script.js"></script>
    <!-- ================= JAVASCRIPT VIDÉO & MARQUEE ================= -->
    <script>
        function openVideo(id, wide) {
            const modal = document.getElementById('videoModal');
            const frameWrap = document.getElementById('modalFrameWrap');
            if (!modal || !frameWrap) return;
            frameWrap.className = 'modal-frame-wrap' + (wide ? ' wide' : '');
            frameWrap.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="Vidéo Témoignage"></iframe>';
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        function closeVideo() {
            const modal = document.getElementById('videoModal');
            const frameWrap = document.getElementById('modalFrameWrap');
            if (!modal || !frameWrap) return;
            modal.classList.remove('open');
            frameWrap.innerHTML = '';
            document.body.style.overflow = '';
        }
        function closeVideoOnBackdrop(e) {
            if (e.target.id === 'videoModal') closeVideo();
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeVideo();
        });
        // Navigation boutons avis Google
        const track = document.getElementById('reviewsMarqueeWrapper');
        const prevBtn = document.getElementById('google-prev-btn');
        const nextBtn = document.getElementById('google-next-btn');
        if (prevBtn && track) {
            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -340, behavior: 'smooth' });
            });
        }
        if (nextBtn && track) {
            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: 340, behavior: 'smooth' });
            });
        }
    </script>
</body>
</html>`.trim();
}

module.exports = TemoignagesPage;
