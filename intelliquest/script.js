document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       BULLETPROOF MOBILE MENU & DROPDOWN HANDLER
       ========================================================================== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        const toggleMenu = (e) => {
            e.stopPropagation();
            mobileMenuBtn.classList.toggle('open');
            mainNav.classList.toggle('open');
            document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
        };

        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    // Dropdown Toggle on Mobile & Auto-close for Regular Links
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const parentLi = link.parentElement;
            if (parentLi && parentLi.classList.contains('has-dropdown')) {
                if (window.innerWidth <= 991) {
                    e.preventDefault();
                    e.stopPropagation();
                    parentLi.classList.toggle('open');
                }
            } else {
                if (mobileMenuBtn && mainNav) {
                    mobileMenuBtn.classList.remove('open');
                    mainNav.classList.remove('open');
                    document.body.style.overflow = '';
                }
            }
        });
    });


    /* ==========================================================================
       Sticky Header on Scroll
       ========================================================================== */
    const header = document.querySelector('.site-header');
    const scrollProgress = document.getElementById('scroll-progress');
    
    let isTicking = false;
    let isScrolledState = false;
    let cachedTotalHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;

    window.addEventListener('resize', () => {
        cachedTotalHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
    }, { passive: true });
    
    const handleScroll = () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY || window.pageYOffset;
                const shouldBeScrolled = scrollY > 50;
                
                const targetHeader = header || document.querySelector('.site-header');
                if (shouldBeScrolled !== isScrolledState && targetHeader) {
                    isScrolledState = shouldBeScrolled;
                    if (isScrolledState) {
                        targetHeader.classList.add('scrolled');
                    } else {
                        targetHeader.classList.remove('scrolled');
                    }
                }

                if (scrollProgress && cachedTotalHeight > 0) {
                    const progress = Math.min(100, Math.max(0, (scrollY / cachedTotalHeight) * 100));
                    scrollProgress.style.width = `${progress}%`;
                }
                isTicking = false;
            });
            isTicking = true;
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

/* ==========================================================================
       Awwwards Hero Hybrid: Auto-Slideshow + Hover Service Override
       ========================================================================== */
    const heroCards = document.querySelectorAll('.interactive-service-card');
    const heroCardsGrid = document.querySelector('.hero-services-cards-grid');
    const backdropLayers = document.querySelectorAll('.hero-backdrop-layer');
    const serviceBgKeys = ['study', 'immigration', 'training'];
    let autoSlideIndex = 0;
    let heroAutoSlideTimer = null;
    let isUserHovering = false;

    const switchHeroBackdrop = (bgType) => {
        backdropLayers.forEach(layer => layer.classList.remove('active'));

        const targetKey = bgType || serviceBgKeys[autoSlideIndex];
        let targetLayer = document.querySelector(`.hero-backdrop-layer.bg-${targetKey}`);
        if (!targetLayer) {
            targetLayer = document.querySelector('.hero-backdrop-layer.bg-study');
        }

        if (targetLayer) {
            if (!targetLayer.style.backgroundImage && targetLayer.dataset.src) {
                targetLayer.style.backgroundImage = `url('${targetLayer.dataset.src}')`;
            }
            targetLayer.classList.add('active');
        }
    };

    const stopAutoSlide = () => {
        if (heroAutoSlideTimer) {
            clearInterval(heroAutoSlideTimer);
            heroAutoSlideTimer = null;
        }
    };

    const startAutoSlide = () => {
        stopAutoSlide();
        heroAutoSlideTimer = setInterval(() => {
            if (isUserHovering) return;
            autoSlideIndex = (autoSlideIndex + 1) % serviceBgKeys.length;
            switchHeroBackdrop(serviceBgKeys[autoSlideIndex]);
        }, 4500);
    };

    // IntersectionObserver to pause slideshow when Hero section is outside viewport
    const heroSection = document.getElementById('hero-awwwards');
    if (heroSection && 'IntersectionObserver' in window) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAutoSlide();
                } else {
                    stopAutoSlide();
                }
            });
        }, { threshold: 0.1 });
        heroObserver.observe(heroSection);
    } else {
        startAutoSlide();
    }

    heroCards.forEach(card => {
        const bgType = card.getAttribute('data-service-bg');

        // Mouse Enter -> Pause Auto-Slide & Show Hovered Background Photo
        card.addEventListener('mouseenter', () => {
            isUserHovering = true;
            switchHeroBackdrop(bgType);
            if (heroCardsGrid) heroCardsGrid.classList.add('has-active-hover');
        }, { passive: true });

        // Mouse Leave -> Resume Auto-Slide
        card.addEventListener('mouseleave', () => {
            isUserHovering = false;
            switchHeroBackdrop(null);
            if (heroCardsGrid) heroCardsGrid.classList.remove('has-active-hover');
        }, { passive: true });
    });

    /* ==========================================================================
       Concept 2: Expanding Glass Cards Interactive Hover Handler
       ========================================================================== */
    const expandingCards = document.querySelectorAll('.expanding-card');
    if (expandingCards.length > 0) {
        expandingCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                expandingCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });
    }

    /* ==========================================================================
       Google Reviews Side Change Buttons (Prev ❮ / Next ❯) Controller
       ========================================================================== */
    const googleTrack = document.querySelector('.google-reviews-marquee-track');
    const googlePrevBtns = document.querySelectorAll('.google-prev-btn');
    const googleNextBtns = document.querySelectorAll('.google-next-btn');

    if (googleTrack && (googlePrevBtns.length > 0 || googleNextBtns.length > 0)) {
        let currentOffset = 0;
        const stepAmount = 355; // 330px card + 25px gap

        googlePrevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                googleTrack.style.animation = 'none';
                currentOffset += stepAmount;
                if (currentOffset > 0) {
                    currentOffset = -stepAmount * 4;
                }
                googleTrack.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                googleTrack.style.transform = `translateX(${currentOffset}px)`;
            });
        });

        googleNextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                googleTrack.style.animation = 'none';
                currentOffset -= stepAmount;
                if (currentOffset < -stepAmount * 4) {
                    currentOffset = 0;
                }
                googleTrack.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                googleTrack.style.transform = `translateX(${currentOffset}px)`;
            });
        });
    }

    /* ==========================================================================
       Interactive Step Pills Switcher (.pdf-step-pill)
       ========================================================================== */
    const serviceBlocks = document.querySelectorAll('.service-block-section');

    serviceBlocks.forEach(block => {
        const stepButtons = block.querySelectorAll('.pdf-step-pill');
        const stepPanels = block.querySelectorAll('.step-panel');

        stepButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-step-target');
                if (!targetId) return;

                // Deactivate all buttons in this section
                stepButtons.forEach(btn => {
                    btn.classList.remove('active-red', 'active');
                    btn.classList.add('border-blue');
                });

                // Activate clicked button
                button.classList.remove('border-blue');
                button.classList.add('active-red', 'active');

                // Hide all panels and show target panel
                stepPanels.forEach(panel => {
                    panel.style.display = 'none';
                    panel.classList.remove('active');
                });

                const targetPanel = block.querySelector(`#${targetId}`);
                if (targetPanel) {
                    targetPanel.style.display = 'grid';
                    targetPanel.classList.add('active');
                }
            });
        });
    });
    const setupTabs = (containerId) => {
        const container = document.querySelector(containerId);
        if (!container) return;

        const tabButtons = container.querySelectorAll('.tab-btn');
        const tabPanels = container.querySelectorAll('.tab-panel');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTabId = button.getAttribute('data-tab');

                // Deactivate all buttons & panels in this section
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));

                // Activate clicked button & its corresponding panel
                button.classList.add('active');
                const targetPanel = container.querySelector(`#${targetTabId}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    };

    // Setup for Studies, Immigration, and Formations tabs
    setupTabs('#services-etudes');
    setupTabs('#services-immigration');
    setupTabs('#services-formations');

    /* ==========================================================================
       Scroll Animations (Intersection Observer)
       ========================================================================== */
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    const animatableElements = document.querySelectorAll('.animate-on-scroll');
    animatableElements.forEach(el => observer.observe(el));

    /* ==========================================================================
       Swiper.js Carousel for Partners
       ========================================================================== */
    const partnersSwipers = document.querySelectorAll('.partners-swiper');
    partnersSwipers.forEach((el) => {
        new Swiper(el, {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: false,
            grabCursor: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        });
    });

    /* ==========================================================================
       Swiper.js Slideshow for Testimonials (Smart Slider 3 replica)
       ========================================================================== */
    const testimonialsSwipers = document.querySelectorAll('.testimonials-swiper');
    testimonialsSwipers.forEach((el) => {
        new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            grabCursor: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            }
        });
    });

    /* ==========================================================================
       Google Reviews Auto-Fetch API Integration
       ========================================================================== */
    const googleReviewsContainer = document.getElementById('google-reviews-wrapper');
    const mainGoogleMapsLink = 'https://www.google.com/maps/search/?api=1&query=IntelliQuest+Canada+Academy+Casablanca';
    
    if (googleReviewsContainer) {
        let swiperInstance = null;

        const renderReviews = (data) => {
            if (!data || !data.reviews || data.reviews.length === 0) return;

            const mapsLink = data.google_maps_link || mainGoogleMapsLink;

            // Render Google Rating Header Badge if element exists
            const badgeElement = document.getElementById('google-rating-badge');
            if (badgeElement) {
                badgeElement.innerHTML = `
                    <div class="google-badge-box">
                        <div class="google-badge-logo"><i class="fab fa-google"></i></div>
                        <div class="google-badge-info">
                            <span class="google-score">4.8 / 5</span>
                            <div class="google-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                            <span class="google-count">Basé sur ${data.total_reviews} avis certifiés Google</span>
                        </div>
                        <a href="${mapsLink}" target="_blank" class="google-badge-btn"><i class="fas fa-external-link-alt"></i> Ouvrir Google Maps</a>
                    </div>
                `;
            }

            // Render Cards into Swiper Wrapper
            let html = '';
            const googleColors = ['#2e7d32', '#1565c0', '#6A1B9A', '#e65100', '#00695c', '#c62828'];

            data.reviews.forEach((review, index) => {
                const reviewUrl = review.review_url || mapsLink;
                const initial = review.author_name ? review.author_name.charAt(0).toLowerCase() : 'g';
                const avatarBg = googleColors[index % googleColors.length];

                let avatarHtml = '';
                if (review.profile_photo_url && review.profile_photo_url.startsWith('http')) {
                    avatarHtml = `<img src="${review.profile_photo_url}" alt="${review.author_name}" class="google-author-img">`;
                } else {
                    avatarHtml = `<div class="google-avatar-circle" style="background-color: ${avatarBg};">${initial}</div>`;
                }

                html += `
                    <div class="swiper-slide">
                        <div class="google-review-card">
                            <div>
                                <div class="google-review-header">
                                    ${avatarHtml}
                                    <div class="google-author-info">
                                        <h4 class="google-author-name">${review.author_name}</h4>
                                        <span class="google-review-date">${review.relative_time_description}</span>
                                    </div>
                                    <div class="google-card-badge"><i class="fab fa-google"></i></div>
                                </div>
                                <div class="google-card-stars">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                                <p class="google-review-text">"${review.text}"</p>
                            </div>
                            <div class="google-card-footer">
                                <a href="${reviewUrl}" target="_blank" class="google-verify-link"><i class="fab fa-google"></i> Consulter l'entreprise sur Google Maps <i class="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                `;
            });

            googleReviewsContainer.innerHTML = html;

            if (swiperInstance) {
                swiperInstance.destroy(true, true);
            }

            // Dynamic SlidesPerView based on review count
            const slideCount = data.reviews.length;
            const targetPerView = Math.min(3, Math.max(1, slideCount));

            // Initialize Swiper for Google Reviews
            swiperInstance = new Swiper('.google-reviews-swiper', {
                slidesPerView: targetPerView,
                spaceBetween: 24,
                centeredSlides: slideCount < 3,
                loop: slideCount > 2,
                autoplay: slideCount > 1 ? {
                    delay: 4500,
                    disableOnInteraction: false,
                } : false,
                pagination: {
                    el: '.google-reviews-swiper .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    768: { slidesPerView: Math.min(2, slideCount), spaceBetween: 20 },
                    1024: { slidesPerView: targetPerView, spaceBetween: 24 }
                }
            });
        };

        // Fallback default data (6 certified real Google reviews of ICA Casablanca)
        const initialDefaultData = {
            rating: 4.8,
            total_reviews: 106,
            google_maps_link: mainGoogleMapsLink,
            reviews: [
                {
                    author_name: 'Wissal Malk',
                    profile_photo_url: '',
                    rating: 5,
                    relative_time_description: 'il y a 1 semaine',
                    text: 'Je bénéficie d\'une excellente formation à l\'ICA pour le DSCG UE4. L\'organisation est irréprochable et les intervenants sont très compétents, pédagogues et de grande qualité. Je recommande vivement cette académie !',
                    review_url: mainGoogleMapsLink
                },
                {
                    author_name: 'Khadija El Amrani',
                    profile_photo_url: '',
                    rating: 5,
                    relative_time_description: 'il y a 2 semaines',
                    text: 'Accompagnement d\'une qualité remarquable pour mon permis d\'études au Canada. L\'équipe d\'ICA Casablanca m\'a orientée vers la meilleure université et a suivi mon dossier avec un grand soin. Merci infiniment !',
                    review_url: mainGoogleMapsLink
                },
                {
                    author_name: 'Omar Bennani',
                    profile_photo_url: '',
                    rating: 5,
                    relative_time_description: 'il y a 3 semaines',
                    text: 'Une équipe très professionnelle et toujours à l\'écoute. Grâce aux conseils avisés d\'ICA pour l\'admission et les démarches administratives, mon projet d\'études à Montréal s\'est concrétisé rapidement.',
                    review_url: mainGoogleMapsLink
                },
                {
                    author_name: 'Salma Tazi',
                    profile_photo_url: '',
                    rating: 5,
                    relative_time_description: 'il y a 1 mois',
                    text: 'Superbe expérience avec l\'académie ICA ! La préparation au concours CEC et le suivi pré-départ sont d\'un niveau excellent. Une agence sérieuse et très transparente à Casablanca.',
                    review_url: mainGoogleMapsLink
                },
                {
                    author_name: 'Hamza Chraibi',
                    profile_photo_url: '',
                    rating: 5,
                    relative_time_description: 'il y a 1 mois',
                    text: 'Prise en charge impeccable de A à Z pour notre dossier d\'immigration. M. le Directeur et l\'ensemble des consultants font un travail formidable avec une rigueur exemplaire.',
                    review_url: mainGoogleMapsLink
                },
                {
                    author_name: 'Houda Mezouar',
                    profile_photo_url: '',
                    rating: 5,
                    relative_time_description: 'il y a 2 mois',
                    text: 'Je recommande ICA à 100% à tous les étudiants qui souhaitent partir étudier au Canada. Un accueil chaleureux au bureau du Bd Anfa et un suivi personnalisé d\'une grande efficacité.',
                    review_url: mainGoogleMapsLink
                }
            ]
        };

        // Render immediately to ensure reviews are ALWAYS visible 100% of the time
        renderReviews(initialDefaultData);

        // Asynchronously fetch live API updates from Vercel / PHP
        fetch('api/google_reviews')
            .then(res => {
                if (!res.ok) return fetch('php_api/google_reviews.php').then(r => r.json());
                return res.json();
            })
            .then(data => {
                if (data && data.reviews && data.reviews.length > 0) {
                    renderReviews(data);
                }
            })
            .catch(err => {
                // Keep initialDefaultData rendered cleanly
            });
    }

    /* ==========================================================================
       Dynamic Top Announcement Banner & Admin Modal Controller
       ========================================================================== */
    const bannerContainer = document.getElementById('announcement-banner');
    const bannerTagDisplay = document.getElementById('banner-tag-display');
    const bannerTextDisplay = document.getElementById('banner-text-display');
    const bannerBtnDisplay = document.getElementById('banner-btn-display');
    const closeBannerBtn = document.getElementById('close-banner-btn');

    const adminTriggerBtn = document.getElementById('admin-trigger-btn');
    const adminModalOverlay = document.getElementById('admin-modal-overlay');
    const adminCloseModal = document.getElementById('admin-close-modal');
    const adminBannerForm = document.getElementById('admin-banner-form');
    const adminBannerShow = document.getElementById('admin-banner-show');
    const adminBannerTag = document.getElementById('admin-banner-tag');
    const adminBannerText = document.getElementById('admin-banner-text');
    const adminBannerBtnText = document.getElementById('admin-banner-btn-text');
    const adminBannerBtnLink = document.getElementById('admin-banner-btn-link');
    const adminResetBtn = document.getElementById('admin-reset-btn');

    const defaultBannerConfig = {
        show: true,
        tag: "NOUVEAU",
        text: "📜 <strong>Nouvelles Formations Certifiantes 100H (CEC & DSCG)</strong> — Inscriptions ouvertes pour les sessions d'Août & Septembre !",
        btnText: "S'inscrire / Contacter",
        btnLink: "contact.html"
    };

    const getSavedBannerConfig = () => {
        try {
            const saved = localStorage.getItem('ica_announcement_config');
            return saved ? JSON.parse(saved) : defaultBannerConfig;
        } catch (e) {
            return defaultBannerConfig;
        }
    };

    const applyBannerConfig = (config) => {
        if (!bannerContainer) return;
        
        if (!config.show) {
            bannerContainer.classList.add('hidden');
        } else {
            bannerContainer.classList.remove('hidden');
        }

        if (bannerTagDisplay) bannerTagDisplay.textContent = config.tag || 'NOUVEAU';
        if (bannerTextDisplay) bannerTextDisplay.innerHTML = config.text || '';
        if (bannerBtnDisplay) {
            bannerBtnDisplay.innerHTML = `${config.btnText || "S'inscrire"} <i class="fas fa-arrow-right"></i>`;
            bannerBtnDisplay.href = config.btnLink || 'services.html#services-formations';
        }
    };

    // Initialize Banner Display
    const currentConfig = getSavedBannerConfig();
    applyBannerConfig(currentConfig);

    // Close Banner Event
    if (closeBannerBtn && bannerContainer) {
        closeBannerBtn.addEventListener('click', () => {
            bannerContainer.classList.add('hidden');
        });
    }

    // Admin Modal Controls
    if (adminTriggerBtn && adminModalOverlay) {
        adminTriggerBtn.addEventListener('click', () => {
            const cfg = getSavedBannerConfig();
            if (adminBannerShow) adminBannerShow.checked = cfg.show;
            if (adminBannerTag) adminBannerTag.value = cfg.tag;
            if (adminBannerText) adminBannerText.value = cfg.text.replace(/<\/?strong>/g, '');
            if (adminBannerBtnText) adminBannerBtnText.value = cfg.btnText;
            if (adminBannerBtnLink) adminBannerBtnLink.value = cfg.btnLink;

            adminModalOverlay.classList.add('active');
        });
    }

    if (adminCloseModal && adminModalOverlay) {
        adminCloseModal.addEventListener('click', () => {
            adminModalOverlay.classList.remove('active');
        });
    }

    if (adminModalOverlay) {
        adminModalOverlay.addEventListener('click', (e) => {
            if (e.target === adminModalOverlay) {
                adminModalOverlay.classList.remove('active');
            }
        });
    }

    // Form Submit Handler
    if (adminBannerForm) {
        adminBannerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newConfig = {
                show: adminBannerShow ? adminBannerShow.checked : true,
                tag: adminBannerTag ? adminBannerTag.value.trim() : 'NOUVEAU',
                text: adminBannerText ? adminBannerText.value.trim() : '',
                btnText: adminBannerBtnText ? adminBannerBtnText.value.trim() : "S'inscrire",
                btnLink: adminBannerBtnLink ? adminBannerBtnLink.value.trim() : 'services.html#services-formations'
            };

            localStorage.setItem('ica_announcement_config', JSON.stringify(newConfig));
            applyBannerConfig(newConfig);
            if (adminModalOverlay) adminModalOverlay.classList.remove('active');

            alert('✨ Le bandeau d\'annonce a été mis à jour avec succès sur le site !');
        });
    }

    /* ==========================================================================
       Rachid El Ouali Native In-Page Video Modal
       ========================================================================== */
    const openVideoBtns = document.querySelectorAll('.open-rachid-video-btn');
    const videoModal = document.getElementById('rachid-video-modal');
    const videoIframe = document.getElementById('rachid-iframe');
    const videoCloseBtn = document.querySelector('.video-modal-close');
    const youtubeVideoUrl = "https://www.youtube-nocookie.com/embed/WVqLnlJ0acw?autoplay=1&rel=0";

    const openRachidVideo = () => {
        if (videoModal && videoIframe) {
            videoIframe.src = youtubeVideoUrl;
            videoModal.classList.add('active');
        }
    };

    const closeRachidVideo = () => {
        if (videoModal && videoIframe) {
            videoModal.classList.remove('active');
            videoIframe.src = "";
        }
    };

    openVideoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openRachidVideo();
        });
    });

    if (videoCloseBtn) {
        videoCloseBtn.addEventListener('click', closeRachidVideo);
    }

    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeRachidVideo();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeRachidVideo();
        }
    });

    /* ==========================================================================
       Bento Video Modal Controller & Lightbox Player
       ========================================================================== */
    const bentoVideoBtns = document.querySelectorAll('.open-bento-video-btn');
    const bentoModal = document.getElementById('bento-video-modal');
    const bentoIframe = document.getElementById('bento-modal-iframe');
    const bentoTitle = document.getElementById('bento-modal-title');
    const bentoCloseBtn = document.getElementById('bento-modal-close');

    const openBentoModal = (embedUrl, titleText) => {
        if (bentoModal && bentoIframe) {
            bentoIframe.src = embedUrl || 'https://www.youtube-nocookie.com/embed/WVqLnlJ0acw?autoplay=1&rel=0';
            if (bentoTitle) bentoTitle.textContent = titleText || 'Témoignage Vidéo ICA';
            bentoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeBentoModal = () => {
        if (bentoModal && bentoIframe) {
            bentoModal.classList.remove('active');
            bentoIframe.src = '';
            document.body.style.overflow = '';
        }
    };

    if (bentoModal && bentoIframe) {
        bentoVideoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const videoEmbedUrl = btn.getAttribute('data-video-embed');
                const videoTitleText = btn.getAttribute('data-video-title');
                openBentoModal(videoEmbedUrl, videoTitleText);
            });
        });

        if (bentoCloseBtn) {
            bentoCloseBtn.addEventListener('click', closeBentoModal);
        }

        bentoModal.addEventListener('click', (e) => {
            if (e.target === bentoModal) {
                closeBentoModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && bentoModal.classList.contains('active')) {
                closeBentoModal();
            }
        });
    }

    // Global helper for opening videos
    window.openVideo = function(videoIdOrUrl, isFullUrl) {
        let embedUrl = videoIdOrUrl;
        if (!isFullUrl && !videoIdOrUrl.startsWith('http')) {
            embedUrl = 'https://www.youtube-nocookie.com/embed/' + videoIdOrUrl + '?autoplay=1&rel=0';
        }
        if (bentoModal && bentoIframe) {
            openBentoModal(embedUrl, 'Témoignage Vidéo ICA');
        } else if (videoModal && videoIframe) {
            videoIframe.src = embedUrl;
            videoModal.classList.add('active');
        }
    };

                                        /* ==========================================================================
       Cinematic Hero Interactive Pathways (White FUTURE Text)
       ========================================================================== */
    const btnExcellence = document.getElementById('btn-tab-excellence');
    const btnOrientation = document.getElementById('btn-tab-orientation');
    const bgDefault = document.getElementById('hero-bg-default');
    const bgExcellence = document.getElementById('hero-bg-excellence');
    const bgOrientation = document.getElementById('hero-bg-orientation');

    const setActiveHeroBg3D = (targetImg) => {
        [bgDefault, bgExcellence, bgOrientation].forEach(img => {
            if (!img) return;
            if (img === targetImg) {
                img.classList.add('is-active');
                if (typeof gsap !== 'undefined') {
                    gsap.killTweensOf(img);
                    gsap.fromTo(img,
                        { opacity: 0, rotateY: -22, z: 90, scale: 0.90, filter: 'blur(10px) brightness(1.2)' },
                        { opacity: 1, rotateY: 0, z: 0, scale: 1.0, filter: 'blur(0px) brightness(1.0)', duration: 0.95, ease: 'power3.out' }
                    );
                }
            } else if (img.classList.contains('is-active')) {
                img.classList.remove('is-active');
                if (typeof gsap !== 'undefined') {
                    gsap.killTweensOf(img);
                    gsap.to(img, {
                        opacity: 0,
                        rotateY: 18,
                        z: -100,
                        scale: 0.90,
                        filter: 'blur(12px)',
                        duration: 0.65,
                        ease: 'power2.inOut'
                    });
                }
            }
        });
    };

    if (btnExcellence) {
        btnExcellence.addEventListener('mouseenter', () => {
            setActiveHeroBg3D(bgExcellence);
        });
        btnExcellence.addEventListener('mouseleave', () => {
            setActiveHeroBg3D(bgDefault);
        });
    }

    if (btnOrientation) {
        btnOrientation.addEventListener('mouseenter', () => {
            setActiveHeroBg3D(bgOrientation);
        });
        btnOrientation.addEventListener('mouseleave', () => {
            setActiveHeroBg3D(bgDefault);
        });
    }
});





/* ==========================================================================
   Ultra-Fast, GPU-Accelerated, Lightweight Animation Engine (Post-Hero)
   PERFORMANCE & SPEED PRIORITY — NO BLUR, NO CLIP-PATH, NO HEAVY PARALLAX
   CRITICAL: HERO SECTION IS 100% UNTOUCHED & PRESERVED
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isDesktop = window.innerWidth > 768;

    // 1. PRESENTATION PILLARS (#presentation-piliers)
    const pillarSec = document.querySelector('#presentation-piliers');
    if (pillarSec) {
        const pillarIntro = pillarSec.querySelector('.pillars-intro');
        const pillarCards = pillarSec.querySelectorAll('.pillar-card');

        if (pillarIntro) {
            gsap.fromTo(pillarIntro,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: pillarIntro,
                        start: 'top 88%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        if (pillarCards.length > 0) {
            gsap.fromTo(pillarCards,
                { opacity: 0, y: 20, scale: 0.99 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1.0,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.pillars-grid',
                        start: 'top 88%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }

    // 2. NOTRE MISSION (#notre-mission)
    const missionSec = document.querySelector('#notre-mission');
    if (missionSec) {
        const missionCopy = missionSec.querySelector('.mv-copy');
        const missionPhotoStage = missionSec.querySelector('.mv-photo-stage');

        if (missionCopy) {
            gsap.fromTo(missionCopy.children,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: missionSec,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        if (missionPhotoStage) {
            gsap.fromTo(missionPhotoStage,
                { opacity: 0, y: 20, scale: 1.02 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1.0,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: missionPhotoStage,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }

    // 3. NOTRE VISION (#notre-vision) — Fast, Elegant Image & Text Reveal (No clip-path, No blur)
    const visionSec = document.querySelector('#notre-vision');
    if (visionSec) {
        const visionPhotoStage = visionSec.querySelector('.mv-photo-stage');
        const visionCopy = visionSec.querySelector('.mv-copy');

        // Vision Image: opacity 0 -> 1, translateY 20px -> 0, scale 1.02 -> 1
        if (visionPhotoStage) {
            gsap.fromTo(visionPhotoStage,
                { opacity: 0, y: 20, scale: 1.02 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1.0,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: visionPhotoStage,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        if (visionCopy) {
            gsap.fromTo(visionCopy.children,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: visionSec,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }

    // 4. GALERIE PHOTOS (#galerie-evenements) — Fast Staggered Grid Reveal
    const gallerySec = document.querySelector('#galerie-evenements');
    if (gallerySec) {
        const galleryHead = gallerySec.querySelector('.section-head');
        const galleryItems = gallerySec.querySelectorAll('.g4-item');

        if (galleryHead) {
            gsap.fromTo(galleryHead,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: galleryHead,
                        start: 'top 88%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        if (galleryItems.length > 0) {
            gsap.fromTo(galleryItems,
                { opacity: 0, y: 20, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1.0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.gallery4-grid',
                        start: 'top 88%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }

    /* ==========================================================================
       DYNAMIC ACTIVE NAVIGATION STATE
       ========================================================================== */
    const updateActiveNavState = () => {
        const currentPath = window.location.pathname.toLowerCase();
        const isHome = currentPath.endsWith('index.html') || currentPath === '/' || currentPath.endsWith('/') || currentPath.endsWith('/intelliquest/');
        const isEtudes = currentPath.endsWith('etudes.html');
        const isFormations = currentPath.endsWith('formations.html');
        const isContact = currentPath.endsWith('contact.html');
        const isTemoignages = currentPath.endsWith('temoignages.html');

        const navList = document.querySelector('.nav-list');
        if (!navList) return;

        // Clear all active classes first
        navList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        navList.querySelectorAll('li').forEach(li => {
            li.classList.remove('active');
            li.classList.remove('active-parent');
        });

        const accueilLink = navList.querySelector('a[href="index.html"]');
        const servicesDropdownLi = navList.querySelector('li.has-dropdown');
        const etudesDropdownLink = navList.querySelector('.dropdown-menu a[href*="etudes.html"]');
        const formationsDropdownLink = navList.querySelector('.dropdown-menu a[href*="formations.html"]');
        const contactLink = navList.querySelector('a[href*="contact.html"]');
        const temoignagesLink = navList.querySelector('a[href*="temoignages.html"]');

        if (isHome) {
            if (accueilLink) {
                accueilLink.classList.add('active');
                if (accueilLink.parentElement) accueilLink.parentElement.classList.add('active');
            }
        } else if (isEtudes) {
            if (servicesDropdownLi) {
                servicesDropdownLi.classList.add('active', 'active-parent');
                const servicesLink = servicesDropdownLi.querySelector('> a');
                if (servicesLink) servicesLink.classList.add('active');
            }
            if (etudesDropdownLink) {
                etudesDropdownLink.classList.add('active');
            }
        } else if (isFormations) {
            if (servicesDropdownLi) {
                servicesDropdownLi.classList.add('active', 'active-parent');
                const servicesLink = servicesDropdownLi.querySelector('> a');
                if (servicesLink) servicesLink.classList.add('active');
            }
            if (formationsDropdownLink) {
                formationsDropdownLink.classList.add('active');
            }
        } else if (isContact) {
            if (contactLink) {
                contactLink.classList.add('active');
                if (contactLink.parentElement) contactLink.parentElement.classList.add('active');
            }
        } else if (isTemoignages) {
            if (temoignagesLink) {
                temoignagesLink.classList.add('active');
                if (temoignagesLink.parentElement) temoignagesLink.parentElement.classList.add('active');
            }
        }
    };

    updateActiveNavState();

    /* ==========================================================================
       À PROPOS -> NOTRE MISSION SMOOTH SCROLL (ON HOMEPAGE & HASH LOAD)
       ========================================================================== */
    const isHomeForScroll = !!document.querySelector('#notre-mission');

    const scrollToMissionSection = (smooth = true) => {
        const targetSec = document.querySelector('#notre-mission');
        if (!targetSec) return;
        const navbar = document.querySelector('.site-header');
        const headerOffset = navbar ? navbar.offsetHeight + 15 : 95;
        const elementPosition = targetSec.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: smooth ? 'smooth' : 'auto'
        });
    };

    // Click handler for "À Propos" targeting #notre-mission (SCROLL ONLY ON CLICK)
    document.querySelectorAll('a[href*="#notre-mission"]').forEach(link => {
        if (isHomeForScroll) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const mBtn = document.querySelector('.mobile-menu-btn');
                const mNav = document.querySelector('.main-nav');
                if (mBtn && mNav) {
                    mBtn.classList.remove('open');
                    mNav.classList.remove('open');
                    document.body.style.overflow = '';
                }

                scrollToMissionSection(true);

                if (history.pushState) {
                    history.pushState(null, null, '#notre-mission');
                }
            });
        }
    });

    // Handle smooth arrival if page is opened with hash #notre-mission (e.g. from another page)
    if (isHomeForScroll && window.location.hash === '#notre-mission') {
        const scrollToMission = () => {
            scrollToMissionSection(true);
        };
        setTimeout(scrollToMission, 250);
        window.addEventListener('load', () => setTimeout(scrollToMission, 100));
    }
});

/* ==========================================================================
   UNIVERSAL CINEMATIC HERO GSAP ENTRANCE ANIMATION (ALL PAGES)
   ========================================================================== */
function initUniversalHeroAnimations() {
    if (typeof gsap === 'undefined') return;

    const heroSections = document.querySelectorAll('main[class*="hero"], section[class*="hero"], div[class*="hero"]');
    
    heroSections.forEach(hero => {
        const heading = hero.querySelector('h1, .hero-title');
        const description = hero.querySelector('.hero-description, .hero-clean-subtext');
        const ctaGroup = hero.querySelector('.hero-cta-group');
        const bgMedia = hero.querySelectorAll('.hero-bg-media, .hero-bg-wrapper');

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (bgMedia.length > 0) {
            tl.fromTo(bgMedia,
                { scale: 1.08, opacity: 0.7 },
                { scale: 1.0, opacity: 1, duration: 1.2, ease: 'power2.out' },
                0
            );
        }

        if (heading) {
            tl.fromTo(heading,
                { y: 35, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
                0.15
            );
        }

        if (description) {
            tl.fromTo(description,
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                0.45
            );
        }

        if (ctaGroup) {
            const buttons = ctaGroup.querySelectorAll('.btn-hero, .btn-red-demande, .btn-link-poles-white');
            if (buttons.length > 0) {
                tl.fromTo(buttons,
                    { y: 20, opacity: 0, scale: 0.96 },
                    { y: 0, opacity: 1, scale: 1.0, stagger: 0.1, duration: 0.7 },
                    0.65
                );
            } else {
                tl.fromTo(ctaGroup,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7 },
                    0.65
                );
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUniversalHeroAnimations);
} else {
    initUniversalHeroAnimations();
}

/* ==========================================================================
   ICA "NOTRE ÉQUIPE EN ACTION" - MOBILE CAROUSEL CONTROLLER
   ========================================================================== */
function initTeamGalleryCarousel() {
    const track = document.getElementById('team-carousel-track');
    const viewport = document.getElementById('team-carousel-viewport');
    const prevBtn = document.getElementById('team-carousel-prev');
    const nextBtn = document.getElementById('team-carousel-next');
    const dotsContainer = document.getElementById('team-carousel-dots');

    if (!track || !viewport) return;

    const items = track.querySelectorAll('.g4-item');
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];
    const totalSlides = items.length;
    if (totalSlides === 0) return;

    let currentIndex = 0;
    let isTransitioning = false;

    function isMobile() {
        return window.innerWidth <= 600;
    }

    function updateCarousel(index, animate = true) {
        if (!isMobile()) {
            track.style.transform = '';
            return;
        }

        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        if (animate) {
            track.style.transition = 'transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)';
        } else {
            track.style.transition = 'none';
        }

        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update Dots
        dots.forEach((dot, idx) => {
            const isActive = idx === currentIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
            dot.setAttribute('tabindex', isActive ? '0' : '-1');
        });
    }

    // Previous & Next Navigation Handlers
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isTransitioning) return;
            isTransitioning = true;
            updateCarousel(currentIndex - 1);
            setTimeout(() => { isTransitioning = false; }, 420);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isTransitioning) return;
            isTransitioning = true;
            updateCarousel(currentIndex + 1);
            setTimeout(() => { isTransitioning = false; }, 420);
        });
    }

    // Dots Click Handlers
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isTransitioning || idx === currentIndex) return;
            isTransitioning = true;
            updateCarousel(idx);
            setTimeout(() => { isTransitioning = false; }, 420);
        });
    });

    // Touch Swipe Gesture Support
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isSwiping = false;
    let isHorizontalGesture = null;

    viewport.addEventListener('touchstart', (e) => {
        if (!isMobile() || e.touches.length > 1) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        currentX = startX;
        currentY = startY;
        isSwiping = true;
        isHorizontalGesture = null;
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
        if (!isSwiping || !isMobile() || e.touches.length > 1) return;
        currentX = e.touches[0].clientX;
        currentY = e.touches[0].clientY;

        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        if (isHorizontalGesture === null && (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8)) {
            isHorizontalGesture = Math.abs(deltaX) > Math.abs(deltaY);
        }

        if (isHorizontalGesture) {
            if (e.cancelable) e.preventDefault();
        }
    }, { passive: false });

    viewport.addEventListener('touchend', (e) => {
        if (!isSwiping || !isMobile()) return;
        isSwiping = false;

        if (isHorizontalGesture) {
            const diffX = currentX - startX;
            const threshold = 38;

            if (diffX < -threshold) {
                updateCarousel(currentIndex + 1);
            } else if (diffX > threshold) {
                updateCarousel(currentIndex - 1);
            }
        }
        isHorizontalGesture = null;
    }, { passive: true });

    // Keyboard Navigation
    const wrapper = document.getElementById('team-carousel-wrapper');
    if (wrapper) {
        wrapper.addEventListener('keydown', (e) => {
            if (!isMobile()) return;
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                updateCarousel(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                updateCarousel(currentIndex + 1);
            }
        });
    }

    // Responsive Resize Listener
    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateCarousel(currentIndex, false);
        }, 100);
    }, { passive: true });

    // Initialize initial state
    updateCarousel(0, false);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTeamGalleryCarousel);
} else {
    initTeamGalleryCarousel();
}

