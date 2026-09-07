/**
 * CONTACT FORM COMPONENT (TWO FORMS: ORIENTATION & EXCELLENCE)
 * Renders tab switcher between Études & Immigration form and ICA Excellence form
 */
function ContactForm() {
  return `
    <div class="contact-box-wrapper" style="max-width: 780px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; padding: 40px; border: 1px solid #E2E8F0; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
        <!-- ONGLETS DE SÉLECTION DU PÔLE -->
        <div class="form-tabs-switcher" style="display: flex; gap: 12px; margin-bottom: 30px; border-bottom: 2px solid #E2E8F0; padding-bottom: 12px;">
            <button type="button" class="form-tab-btn active" id="tab-btn-orientation" onclick="switchContactForm('orientation')" style="flex: 1; padding: 14px 20px; font-weight: 700; font-size: 1rem; border: none; background: transparent; cursor: pointer; border-bottom: 3px solid #F20D0D; color: #072B49; transition: all 0.25s ease;">
                ✈ Pôle Études &amp; Immigration
            </button>
            <button type="button" class="form-tab-btn" id="tab-btn-formation" onclick="switchContactForm('formation')" style="flex: 1; padding: 14px 20px; font-weight: 700; font-size: 1rem; border: none; background: transparent; cursor: pointer; border-bottom: 3px solid transparent; color: #5B6B80; transition: all 0.25s ease;">
                🏆 Pôle ICA Excellence (Formations)
            </button>
        </div>

        <!-- FORMULAIRE 1 : ORIENTATION (ÉTUDES & IMMIGRATION) -->
        <form class="oscar-form" id="form-orientation" action="#" method="POST">
            <h3 style="font-family: var(--font-minion); color: #072B49; font-weight: 800; font-size: 1.3rem; margin-bottom: 24px;">Demande de consultation — Études &amp; Immigration</h3>
            
            <!-- Email -->
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="email" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Adresse email pour vous joindre <span style="color: #EF4444;">*</span></label>
                <input type="email" id="email" name="email" required class="form-control" placeholder="exemple@domaine.com" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
            </div>

            <!-- Prénom & Nom -->
            <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                <div>
                    <label for="prenom" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Prénom officiel <span style="color: #EF4444;">*</span></label>
                    <input type="text" id="prenom" name="prenom" required class="form-control" placeholder="Prénom" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
                </div>
                <div>
                    <label for="nom" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Nom de famille <span style="color: #EF4444;">*</span></label>
                    <input type="text" id="nom" name="nom" required class="form-control" placeholder="Nom de famille" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
                </div>
            </div>

            <!-- Pays -->
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="pays" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Pays de résidence actuel <span style="color: #EF4444;">*</span></label>
                <select id="pays" name="pays" required class="form-control" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
                    <option value="">Sélectionnez votre pays...</option>
                    <option value="Maroc" selected>Maroc</option>
                    <option value="Algérie">Algérie</option>
                    <option value="Tunisie">Tunisie</option>
                    <option value="France">France</option>
                    <option value="Canada">Canada</option>
                    <option value="Autre">Autre pays</option>
                </select>
            </div>

            <!-- Téléphone -->
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="telephone" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Téléphone mobile / WhatsApp <span style="color: #EF4444;">*</span></label>
                <input type="tel" id="telephone" name="telephone" required class="form-control" placeholder="+212 600 000 000" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
            </div>

            <!-- Niveau d'études -->
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="etudes" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Niveau d'études le plus élevé <span style="color: #EF4444;">*</span></label>
                <select id="etudes" name="etudes" required class="form-control" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
                    <option value="">Sélectionnez votre niveau...</option>
                    <option value="Lycée">Seconde / Première / Baccalauréat</option>
                    <option value="Bac+2">Bac +2 (BTS / DUT / DEUG)</option>
                    <option value="Licence">Bac +3 (Licence / Bachelor)</option>
                    <option value="Master">Bac +5 (Master / Ingénieur)</option>
                    <option value="Autre">Autres</option>
                </select>
            </div>

            <!-- Projet -->
            <div class="form-group" style="margin-bottom: 24px;">
                <label for="projet" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Sur quoi porte votre projet ? <span style="color: #EF4444;">*</span></label>
                <select id="projet" name="projet" required class="form-control" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
                    <option value="">Sélectionnez votre projet...</option>
                    <option value="Études">Études au Canada</option>
                    <option value="Immigration">Immigration &amp; Résidence permanente</option>
                    <option value="Autre">Autre demande</option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary btn-block" style="background: #F20D0D; color: #FFFFFF; font-weight: 700; padding: 14px; border-radius: 8px; border: none; font-size: 1rem; width: 100%; cursor: pointer; transition: all 0.25s ease;">
                Soumettre ma demande d'orientation ✈
            </button>
        </form>

        <!-- FORMULAIRE 2 : ICA EXCELLENCE (FORMATIONS) -->
        <form class="oscar-form" id="form-formation" action="#" method="POST" style="display: none;">
            <h3 style="font-family: var(--font-minion); color: #072B49; font-weight: 800; font-size: 1.3rem; margin-bottom: 24px;">Inscription &amp; Information — ICA Excellence</h3>

            <!-- Email -->
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="email-f" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Adresse email professionnelle / personnelle <span style="color: #EF4444;">*</span></label>
                <input type="email" id="email-f" name="email" required class="form-control" placeholder="exemple@domaine.com" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
            </div>

            <!-- Nom & Prénom -->
            <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                <div>
                    <label for="prenom-f" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Prénom <span style="color: #EF4444;">*</span></label>
                    <input type="text" id="prenom-f" name="prenom" required class="form-control" placeholder="Votre prénom" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
                </div>
                <div>
                    <label for="nom-f" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Nom <span style="color: #EF4444;">*</span></label>
                    <input type="text" id="nom-f" name="nom" required class="form-control" placeholder="Votre nom" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
                </div>
            </div>

            <!-- Téléphone -->
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="telephone-f" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Téléphone mobile / WhatsApp <span style="color: #EF4444;">*</span></label>
                <input type="tel" id="telephone-f" name="telephone" required class="form-control" placeholder="+212 600 000 000" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;">
            </div>

            <!-- Fonction -->
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="fonction" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Votre fonction / statut actuel <span style="color: #EF4444;">*</span></label>
                <select id="fonction" name="fonction" required class="form-control" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem; font-weight: 600; color: #072B49;">
                    <option value="">Sélectionnez votre fonction...</option>
                    <option value="Dirigeant">Dirigeant / Chef d'entreprise</option>
                    <option value="Manager">Manager / Cadre supérieur</option>
                    <option value="Expert-Comptable">Expert-Comptable / Financier</option>
                    <option value="Collaborateur">Collaborateur / Salarié</option>
                    <option value="Consultant">Consultant / Indépendant</option>
                    <option value="Étudiant">Étudiant / Jeune diplômé</option>
                    <option value="Autre">Autre fonction</option>
                </select>
            </div>

            <!-- Choix Formation -->
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="choix-formation" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Vous êtes intéressé(e) par quelle formation ? <span style="color: #EF4444;">*</span></label>
                <select id="choix-formation" name="formation" required class="form-control" style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem; font-weight: 600; color: #072B49;">
                    <option value="">Choisissez votre type de formation...</option>
                    <option value="Concours CEC">Préparation Concours CEC (Expertise Comptable)</option>
                    <option value="DSCG">Formation DSCG — UE1 &amp; UE4</option>
                    <option value="Contrôle de gestion">Contrôle de gestion &amp; Audit</option>
                    <option value="Doctorat">Doctorat en Sciences de Gestion</option>
                    <option value="Sur mesure">Formation sur mesure / Entreprise</option>
                    <option value="Professionnelle">Autre formation professionnelle</option>
                </select>
            </div>

            <!-- Message -->
            <div class="form-group" style="margin-bottom: 24px;">
                <label for="message-f" style="display: block; font-weight: 600; margin-bottom: 8px; color: #1E293B;">Vos objectifs ou questions spécifiques</label>
                <textarea id="message-f" name="message" rows="4" class="form-control" placeholder="Précisez vos besoins de formation ou vos questions..." style="width: 100%; padding: 12px 16px; border: 1px solid #CBD5E1; border-radius: 8px; font-family: inherit; font-size: 0.95rem;"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block" style="background: #072B49; color: #FFFFFF; font-weight: 700; padding: 14px; border-radius: 8px; border: none; font-size: 1rem; width: 100%; cursor: pointer; transition: all 0.25s ease;">
                Soumettre ma candidature de formation 🎓
            </button>
        </form>
    </div>
  `.trim();
}

module.exports = ContactForm;
