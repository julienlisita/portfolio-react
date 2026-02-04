// src/components/services/customFeatures/CustomFeaturesIntro.jsx

import Section from "../../layout/Section";

export default function CustomFeaturesIntro() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <p className="mb-6 text-gray-300">
        Pour les structures qui ont besoin d’un outil ou de fonctionnalités spécifiques :
        réservation, espace administrable, gestion de contenus, candidatures, dashboard, espace client…
      </p>
    </Section>
  );
}