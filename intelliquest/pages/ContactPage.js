/**
 * CONTACT PAGE TEMPLATE
 * Assembles components and data into contact.html with both forms and switcher
 */
const { Head, Navbar, Footer, FloatingCTA, Hero } = require('../components');
const ContactForm = require('../components/ContactForm');

function ContactPage({ siteConfig, contactData }) {
  const headHtml = Head({
    title: contactData.meta.title,
    description: contactData.meta.description
  });

  const navbarHtml = Navbar({
    activePage: 'contact',
    siteConfig
  });

  const heroHtml = Hero({
    type: 'banner',
    data: contactData.hero
  });

  const cardsHtml = contactData.offices.map(off => {
    const linesHtml = off.lines.map(l => {
      if (l.href) {
        return `<li><a href="${l.href}" style="color: inherit; text-decoration: none;">${l.label.replace('\\n', '<br>')}</a></li>`;
      }
      return `<li>${l.label.replace('\\n', '<br>')}</li>`;
    }).join('');

    return `
                    <div class="contact-info-card" style="background: #FFFFFF; border-radius: 16px; padding: 30px; border: 1px solid #E2E8F0; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
                        <div class="contact-card-icon-wrapper" style="width: 50px; height: 50px; border-radius: 50%; background: rgba(0,125,190,0.1); color: #007DBE; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin: 0 auto 16px;">
                            <i class="${off.iconClass}"></i>
                        </div>
                        <h4 style="font-weight: 700; color: #0F172A; margin-bottom: 12px;">${off.title}</h4>
                        <ul style="list-style: none; padding: 0; margin: 0; color: #475569; font-size: 0.95rem; line-height: 1.8;">
                            ${linesHtml}
                        </ul>
                    </div>`;
  }).join('\n');

  const contactFormHtml = ContactForm();
  const footerHtml = Footer({ siteConfig });
  const floatingCtaHtml = FloatingCTA({ siteConfig });

  return `<!DOCTYPE html>
<html lang="fr-FR">
<head>
    ${headHtml}
</head>
<body class="contact-page">
    ${navbarHtml}

    ${heroHtml}

    <section class="contact-section section" style="padding: 70px 0; background: #F8FAFC;">
        <div class="container">
            <div class="contact-cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 60px;">
                ${cardsHtml}
            </div>

            <div class="contact-form-wrapper" style="max-width: 820px; margin: 0 auto;">
                ${contactFormHtml}
            </div>
        </div>
    </section>

    ${footerHtml}

    ${floatingCtaHtml}

    <!-- Script de gestion des 2 formulaires et détection d'URL -->
    <script>
        function switchContactForm(type) {
            const formOrientation = document.getElementById('form-orientation');
            const formFormation = document.getElementById('form-formation');
            const btnOrientation = document.getElementById('tab-btn-orientation');
            const btnFormation = document.getElementById('tab-btn-formation');

            if (!formOrientation || !formFormation) return;

            if (type === 'formation' || type === 'entreprise') {
                formOrientation.style.display = 'none';
                formFormation.style.display = 'block';
                if (btnOrientation) {
                    btnOrientation.style.color = '#5B6B80';
                    btnOrientation.style.borderBottomColor = 'transparent';
                }
                if (btnFormation) {
                    btnFormation.style.color = '#072B49';
                    btnFormation.style.borderBottomColor = '#F20D0D';
                }
            } else {
                formFormation.style.display = 'none';
                formOrientation.style.display = 'block';
                if (btnFormation) {
                    btnFormation.style.color = '#5B6B80';
                    btnFormation.style.borderBottomColor = 'transparent';
                }
                if (btnOrientation) {
                    btnOrientation.style.color = '#072B49';
                    btnOrientation.style.borderBottomColor = '#F20D0D';
                }
            }
        }

        // Auto-detect query parameter ?type=formation or ?type=entreprise
        window.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const type = urlParams.get('type');
            if (type === 'formation' || type === 'entreprise') {
                switchContactForm('formation');
            }
        });
    </script>
</body>
</html>
`.trim();
}

module.exports = ContactPage;
