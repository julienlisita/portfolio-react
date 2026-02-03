// src/components/services/ServicesOffers.jsx

import Section from "../layout/Section";
import ServiceCard from "../home/ServiceCard";
import { Monitor, Layers, LifeBuoy } from "lucide-react";

export default function ServicesOffers() {
  return (
    <Section title="Ce que je propose">
      <p className="text-base sm:text-lg text-gray-300 mb-6">
        Deux types de projets selon vos besoins, avec un <strong>suivi possible dans la durée</strong>.
      </p>

      <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          variant="page"
          icon={<Monitor />}
          title="Création de site internet"
          subtitle="Sites vitrines pour artisans & indépendants"
          description="Un site vitrine clair et professionnel pour présenter votre activité, inspirer confiance et faciliter la prise de contact. Design soigné, mobile-first, rapide et prêt pour le référencement."
          color={["#5AC8FA", "#007AFF"]}
          link="/services/creation-site-internet"
        />

        <ServiceCard
          variant="page"
          icon={<Layers />}
          title="Fonctionnalités & outils sur mesure"
          subtitle="Réservation, admin, outils métiers"
          description="Réservation en ligne, espace administrable, formulaires avancés, candidatures, espace client… Je développe les fonctionnalités adaptées à votre activité, avec une solution évolutive et sécurisée."
          color={["#007AFF", "#5AC8FA"]}
          link="/services/creation-site-internet-fonctionnalites-sur-mesure"
        />

        <ServiceCard
          variant="page"
          icon={<LifeBuoy />}
          title="Suivi & maintenance du site"
          subtitle="Sécurité, mises à jour et évolutions"
          description="Après la mise en ligne : corrections, mises à jour, sécurité, optimisations et petites évolutions. Pour garder un site fiable, rapide et à jour, au rythme de votre activité."
          color={["#5AC8FA", "#007AFF"]}
          link="/services/suivi-et-evolutions"
        />
      </div>
    </Section>
  );
}