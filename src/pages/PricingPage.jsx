// src/pages/PricingPage.jsx

import PageTitle from "../components/common/PageTitle";
import SectionTitle from "../components/common/SectionTitle";
import Section from "../components/common/Section";
import Button from "../components/common/Button";

export default function PricingPage() {
  return (
    <>
      <PageTitle>Tarifs</PageTitle>

      <Section>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mt-4 mb-4">
          Chaque projet étant unique, ces tarifs sont donnés à titre indicatif. Un devis personnalisé vous sera proposé après un échange gratuit.
        </p>

        <div className="bg-[#2a2a2a] p-5 rounded-lg text-gray-200">
          <h3 className="font-semibold text-gray-100 text-lg mb-2 text-center">Site vitrine de base</h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 text-center">
            <li>Jusqu'à 5 pages (Accueil, À propos, Services, Contact, Mentions légales)</li>
            <li>Design sobre, moderne et responsive (mobile / tablette / ordinateur)</li>
            <li>Formulaire de contact inclus</li>
            <li>Intégration du contenu fourni par le client</li>
            <li>Accompagnement à la mise en ligne (hébergement & domaine)</li>
          </ul>
          <p className="text-[#5AC8FA] font-bold text-base mt-3 text-center">A partir de 500 €</p>
        </div>
      </Section>

      <Section title="Tarifs par option">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Page supplémentaire</h3>
            <p className="text-sm text-gray-400">+50 € / page</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Formulaire personnalisé</h3>
            <p className="text-sm text-gray-400">+50 à 100 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Rédaction / aide au contenu</h3>
            <p className="text-sm text-gray-400">+100 à 300 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Création de logo simple</h3>
            <p className="text-sm text-gray-400">+100 à 150 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Recherche d’illustrations</h3>
            <p className="text-sm text-gray-400">+50 à 100 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Actualités (admin CRUD)</h3>
            <p className="text-sm text-gray-400">+200 à 300 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Recrutement (offres + candidatures)</h3>
            <p className="text-sm text-gray-400">+200 à 300 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Interface d’administration</h3>
            <p className="text-sm text-gray-400">+200 à 400 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Comptes client / Connexion</h3>
            <p className="text-sm text-gray-400">+300 à 600 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Réservation (sans paiement)</h3>
            <p className="text-sm text-gray-400">+300 à 500 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Réservation avec paiement</h3>
            <p className="text-sm text-gray-400">+500 à 800 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Multilingue</h3>
            <p className="text-sm text-gray-400">+200 à 400 €</p>
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-md text-gray-200">
            <h3 className="font-semibold mb-1">Maintenance mensuelle</h3>
            <p className="text-sm text-gray-400">+20 à 40 € / mois</p>
          </div>
        </div>
      </Section>

      <Section title="Exemples de projets et prix estimés">
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site vitrine simple</h3>
            <p className="text-gray-300 text-sm">4 pages + formulaire de contact</p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 500 €</p>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site + Formulaire candidature</h3>
            <p className="text-gray-300 text-sm">Ajout d'un formulaire personnalisé</p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 700 €</p>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site + Actualités</h3>
            <p className="text-gray-300 text-sm">Admin CRUD pour publier des actus</p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 850 €</p>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site + Recrutement</h3>
            <p className="text-gray-300 text-sm">Vitrine + offres + candidatures</p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 950 à 1000 €</p>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site + Blog + Recrutement</h3>
            <p className="text-gray-300 text-sm">Admin complet avec articles + offres</p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 1000 à 1200 €</p>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-100 mb-1">Site + Agenda de réservation</h3>
            <p className="text-gray-300 text-sm">Réservation sans paiement en ligne</p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 1200 à 1400 €</p>
          </div>

          <div className="bg-[#2a2a2a] p-4 rounded-lg md:col-span-2">
            <h3 className="font-semibold text-gray-100 mb-1">Site + Comptes client + Paiement</h3>
            <p className="text-gray-300 text-sm">Espace client + réservation + paiement sécurisé</p>
            <p className="text-[#5AC8FA] font-bold mt-1">≈ 1800 à 2500 €</p>
          </div>
        </div>
          <div className="flex justify-center mt-6">
            <Button href="/contact">
              Demander un devis
            </Button>
          </div>
      </Section>
    </>
  );
}