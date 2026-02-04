// src/pages/services/CustomFeaturesPage.jsx

import Section from "../../components/layout/Section";
import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";
import CustomFeaturesIntro from "../../components/services/CustomFeatures/CustomFeaturesIntro";
import CustomFeaturesAudience from "../../components/services/CustomFeatures/CustomFeaturesAudience";
import CustomFeaturesOffer from "../../components/services/CustomFeatures/CustomFeaturesOffer";
import CustomFeaturesUseCases from "../../components/services/CustomFeatures/CustomFeaturesUseCases";

export default function CustomFeaturesPage() {
  const faq = [
    {
      q: "Qu’est-ce que vous appelez “sur mesure” ?",
      a: "Des fonctionnalités adaptées à votre activité : réservation, espace admin, gestion de contenus, candidatures, espace client…",
    },
    {
      q: "Pouvez-vous développer une première version rapidement ?",
      a: "Oui. On avance par itérations : une première version utile, puis des améliorations selon les retours.",
    },
    {
      q: "Est-ce sécurisé ?",
      a: "Oui : authentification, rôles, accès protégés et bonnes pratiques de sécurité dès la conception.",
    },
    {
      q: "Est-ce que ça peut évoluer dans le temps ?",
      a: "Oui. Le projet est conçu pour grandir : nouvelles fonctionnalités, nouveaux modules, sans tout refaire.",
    },
    {
      q: "Vous vous occupez de la mise en ligne ?",
      a: "Oui : déploiement, configuration, et accompagnement après mise en production.",
    },
  ];

  return (
    <Section
      id="fonctionnalites-sur-mesure"
      title="Fonctionnalités & outils sur mesure"
      className="text-base sm:text-lg lg:text-xl"
    >
      <CustomFeaturesIntro />
      <CustomFeaturesAudience />
      <CustomFeaturesOffer />
      <CustomFeaturesUseCases />

      <FaqSection title="FAQ — Fonctionnalités sur mesure" faq={faq} ariaLabelledby="faq-apps-title" />

      <CtaFinal
        title="Construisons votre solution sur mesure"
        tagline="Un accompagnement global : cadrage, développement, mise en ligne et évolutions."
        primary={{ href: "/contact", text: "Discuter du besoin" }}
        secondary={{ href: "/realisations", text: "Voir des projets" }}
      />
    </Section>
  );
}