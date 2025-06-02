// src/pages/LegalAndPrivacyPage.jsx

import PageTitle from "../components/common/PageTitle";
import SectionTitle from "../components/common/SectionTitle";

export default function LegalAndPrivacyPage() {
    return (
      <>
        <PageTitle>Mentions légales & Politique de confidentialité</PageTitle>

        

          {/* Mentions légales */}
          <section>
            <SectionTitle>Mentions légales</SectionTitle>
            <p className="mt-8 sm:mt-10 lg:mt-12">
              <strong>Éditeur du site :</strong><br />
              Julien Lisita – Développeur web freelance<br />
              Adresse : 12 Avenue Pierre Mendes-France, 33700 Mérignac<br />
              Email : julien.lisita@gmail.com<br />
              Statut juridique : Entreprise individuelle (EI)<br/>
              SIRET : 933 677 965 00016<br />
              TVA non applicable, article 293 B du CGI
            </p>

            <p className="mt-8 sm:mt-10 lg:mt-12">
              <strong>Hébergement :</strong><br />
              Netlify, Inc.<br />
              2325 3rd Street, Suite 296, San Francisco, CA 94107, USA<br />
              <a
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#5AC8FA]"
              >
                https://www.netlify.com
              </a>
            </p>

            <p>
              <strong>Propriété intellectuelle :</strong><br />
              Tous les contenus de ce site (textes, images, code) sont la propriété de Julien Lisita, sauf mention contraire.
            </p>

            <p>
              <strong>Responsabilité :</strong><br />
              L’éditeur ne peut être tenu responsable des dommages liés à l’utilisation du site ou à un dysfonctionnement éventuel.
            </p>
          </section>

          {/* Politique de confidentialité */}
          <section>
            <SectionTitle>Politique de confidentialité</SectionTitle>
            <p className="mt-8 sm:mt-10 lg:mt-12">
              <strong>Collecte des données :</strong><br />
              Ce site ne collecte pas de données personnelles automatiquement. Les seules données enregistrées sont celles envoyées volontairement via le formulaire de contact (nom, email, message).
            </p>

            <p className="mt-8 sm:mt-10 lg:mt-12">
              <strong>Utilisation des données :</strong><br />
              Les données sont utilisées uniquement pour répondre aux messages et ne sont jamais partagées avec des tiers.
            </p>

            <p className="mt-8 sm:mt-10 lg:mt-12">
              <strong>Cookies :</strong><br />
              Ce site n’utilise pas de cookies de suivi ni de publicité.
            </p>

            <p className="mt-8 sm:mt-10 lg:mt-12">
              <strong>Droits des utilisateurs :</strong><br />
              Vous pouvez demander l’accès, la modification ou la suppression de vos données en m’écrivant à julien.lisita@gmail.com.
            </p>
          </section>
        
      </>
    );
  }