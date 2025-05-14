import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export default function LegalAndPrivacyPage() {
    return (
      <section className="pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 text-white max-w-4xl mx-auto">
        <PageTitle>Mentions légales & Politique de confidentialité</PageTitle>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          {/* Mentions légales */}

          <SectionTitle>Mentions légales</SectionTitle>

          <section className="mt-8 sm:mt-10 lg:mt-12">
            <p>
              <strong>Éditeur du site :</strong><br />
              Julien Lisita – Développeur web freelance<br />
              Adresse : 12 Avenue Pierre Mendes-France, 33700 Mérignac<br />
              Email : julien.lisita@gmail.com<br />
              Statut juridique : Micro-entrepreneur, entreprise individuelle (EI), régime micro-social simplifié<br />
              SIRET : 933 677 965 00016<br />
              TVA non applicable, article 293 B du CGI
            </p>

            <p>
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

          <SectionTitle>Politique de confidentialité</SectionTitle>

          <section className="mt-8 sm:mt-10 lg:mt-12">
            <p>
              <strong>Collecte des données :</strong><br />
              Ce site ne collecte pas de données personnelles automatiquement. Les seules données enregistrées sont celles envoyées volontairement via le formulaire de contact (nom, email, message).
            </p>

            <p>
              <strong>Utilisation des données :</strong><br />
              Les données sont utilisées uniquement pour répondre aux messages et ne sont jamais partagées avec des tiers.
            </p>

            <p>
              <strong>Cookies :</strong><br />
              Ce site n’utilise pas de cookies de suivi ni de publicité.
            </p>

            <p>
              <strong>Droits des utilisateurs :</strong><br />
              Vous pouvez demander l’accès, la modification ou la suppression de vos données en m’écrivant à julien.lisita@gmail.com.
            </p>
          </section>
        </div>
      </section>
    );
  }