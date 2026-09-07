/**
 * FLOATING CTA COMPONENT
 * Renders floating WhatsApp bubble & Contact button
 */
function FloatingCTA({ siteConfig }) {
  const { contact } = siteConfig;
  const waUrl = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(contact.whatsapp.prefillMessage)}`;

  return `
    <!-- Floating Action Buttons -->
    <a href="${waUrl}" target="_blank" class="whatsapp-float-btn" aria-label="${contact.whatsapp.label}">
        <div class="wa-bubble-badge">
            <svg viewBox="0 0 32 32" class="wa-svg-icon"><path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.2-4.4 1.2 1.2-4.3-.3-.4A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1-.3-.1-.6-.2-.8.2s-.9 1.1-1.1 1.3c-.2.2-.4.2-.7.1a9.2 9.2 0 0 1-5.6-4.9c-.2-.4 0-.6.1-.8l.5-.6c.2-.2.2-.4.1-.6s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .5a4.3 4.3 0 0 0-1.3 3.2c0 1.9 1.4 3.7 1.6 4a13.7 13.7 0 0 0 5.3 4.7c2.2.9 2.6.7 3.6.6.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6 0-.1-.2-.2-.5-.3z"/></svg>
        </div>
        <span class="wa-label">${contact.whatsapp.label}</span>
    </a>
    <a href="contact.html" class="contact-float-btn" aria-label="Contactez-nous">
        <i class="fas fa-paper-plane" style="font-size: 1rem; color: #FBBF24;"></i>
        <span>Contactez-nous</span>
    </a>
  `.trim();
}

module.exports = FloatingCTA;
