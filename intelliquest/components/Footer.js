/**
 * FOOTER COMPONENT
 * Renders 3-column footer with contact details, social links and copyright
 */
function Footer({ siteConfig }) {
  const { brand, contact, socials, footer } = siteConfig;

  const renderPhones = () => {
    return contact.phones.map(phone => `
                        <div class="contact-item">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; min-width: 20px; flex-shrink: 0; color: #ffffff;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <a href="tel:${phone.raw}" style="color: #ffffff !important; text-decoration: none;">${phone.display}</a>
                        </div>`).join('');
  };

  const renderSocials = () => {
    return socials.map(soc => `
                        <a href="${soc.url}" target="_blank" aria-label="${soc.name}" class="social-${soc.name.toLowerCase()}">
                            ${soc.svg}
                        </a>`).join('');
  };

  return `
    <!-- Footer -->
    <footer class="site-footer">
        <div class="container footer-container">
            <div class="footer-grid">
                <div class="footer-logo-col footer-col logo-col">
                    <img src="${brand.footerLogo.src}" alt="${brand.footerLogo.alt}" class="footer-logo" width="${brand.footerLogo.width}" height="${brand.footerLogo.height}" loading="lazy" decoding="async">
                </div>
                
                <div class="footer-contact-col footer-col">
                    <h3>Nos coordonnées</h3>
                    <div class="contact-info">${renderPhones()}
                        <div class="contact-item">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; min-width: 20px; flex-shrink: 0; color: #ffffff;"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            <a href="mailto:${contact.email}" style="color: #ffffff !important; text-decoration: none;">${contact.email}</a>
                        </div>
                        <div class="contact-item">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; min-width: 20px; flex-shrink: 0; color: #ffffff;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <a href="${contact.address.mapUrl}" target="_blank" rel="noopener noreferrer" style="color: #ffffff !important; text-decoration: none;">${contact.address.full}</a>
                        </div>
                    </div>
                </div>

                <div class="footer-social-col footer-col">
                    <h3>${footer.socialHeading}</h3>
                    <p>${footer.socialSubtext}</p>
                    <div class="footer-social-links">${renderSocials()}
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p class="copyright-text-main">${footer.copyright}</p>
                <p class="developed-text">${footer.developedBy}</p>
            </div>
        </div>
    </footer>
  `.trim();
}

module.exports = Footer;
