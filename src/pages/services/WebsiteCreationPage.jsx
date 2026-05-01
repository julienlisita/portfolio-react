// src/pages/services/WebsiteCreationPage.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";

import WebsiteCreationIntro from "../../components/services/websiteCreation/WebsiteCreationIntro";
import WebsiteCreationAudience from "../../components/services/websiteCreation/WebsiteCreationAudience";
import WebsiteCreationDeliverables from "../../components/services/websiteCreation/WebsiteCreationDeliverables";
import WebsiteCreationWhyAndSeo from "../../components/services/websiteCreation/WebsiteCreationWhyAndSeo";
import PageTitle from "../../components/UI/PageTitle";

export default function WebsiteCreationPage() {
  const faq = [
    {
      q: "Combien coûte un site vitrine à Bordeaux ?",
      a: "Un site vitrine démarre généralement à partir de 900 €, selon le nombre de pages, le contenu à intégrer, le niveau de personnalisation et les options éventuelles.",
    },
    {
      q: "Dois-je fournir les textes et les images ?",
      a: "Idéalement oui, mais je peux vous aider : structure, reformulation, conseils, et sélection d’images libres de droit si besoin.",
    },
    {
      q: "Mon site sera-t-il responsive et optimisé SEO ?",
      a: "Oui : mobile-first, performance optimisée, structure claire, balises SEO de base, et bonnes pratiques techniques.",
    },
    {
      q: "Pouvez-vous reprendre un site existant (refonte) ?",
      a: "Oui, je peux vous accompagner sur une refonte : clarifier la structure, moderniser le design et reconstruire le site sur une base plus propre et plus durable.",
    },
    {
      q: "Hébergement et nom de domaine : vous vous en occupez ?",
      a: "Oui, je vous conseille et je peux gérer la mise en ligne (hébergement, domaine, e-mails pro), ou vous guider étape par étape.",
    },
  ];

  return (
    <>
      <PageTitle>Création de site internet</PageTitle>
      <WebsiteCreationIntro />
      <WebsiteCreationAudience />
      <WebsiteCreationDeliverables />
      <WebsiteCreationWhyAndSeo />

      <FaqSection title="FAQ — Création de site internet" faq={faq} ariaLabelledby="faq-vitrine-title" />

      <CtaFinal
        title="Créons un site utile pour votre activité"
        tagline="Un site clair, rapide et professionnel pour présenter vos services, inspirer confiance et générer des demandes."
        primary={{ href: "/contact", text: "Discuter du projet" }}
        secondary={{ href: "/tarifs", text: "Voir les tarifs" }}
      />
    </>
  );
}