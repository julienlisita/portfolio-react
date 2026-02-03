// src/pages/services/ServicesPage.jsx

import PageTitle from "../../components/common/PageTitle";
import FaqSection from "../../components/common/FaqSection";
import CtaFinal from "../../components/common/CtaFinal";

import ServicesIntro from "../../components/services/ServicesIntro";
import ServicesOffers from "../../components/services/ServicesOffers";
import ServicesMethod from "../../components/services/ServicesMethod";

export default function ServicesPage() {
  const faq = [
    {
      q: "Développeur web à Bordeaux : que proposez-vous concrètement ?",
      a: "Je crée des sites vitrines modernes, des applications web sur mesure et j’assure le suivi & maintenance (performances, sécurité, évolutions)",
    },
    {
      q: "Site vitrine ou application web : comment choisir ?",
      a: "Un site vitrine présente votre activité. Une application web gère des fonctionnalités métiers (CRM, espace client, SaaS). On clarifie ensemble selon vos objectifs.",
    },
    {
      q: "Travaillez-vous avec des indépendants et petites entreprises ?",
      a: "Oui, c’est mon cœur de cible : indépendants, artisans, TPE/PME à Bordeaux et à distance partout en France.",
    },
    {
      q: "Utilisez-vous WordPress ?",
      a: "Je privilégie des sites sans WordPress (React/Next) pour des sites rapides, sécurisés et faciles à maintenir. WordPress possible si cas spécifique.",
    },
    {
      q: "Comment se passe un projet ?",
      a: "Échange initial → conception → développement itératif (démos) → mise en ligne → maintenance si besoin.",
    },
  ];

  return (
    <>
      <PageTitle>Mes services</PageTitle>

      <ServicesIntro />
      <ServicesOffers />
      <ServicesMethod />

      <FaqSection title="FAQ — Services" faq={faq} ariaLabelledby="faq-services" />

      <CtaFinal
        title="Choisissons ensemble la bonne solution"
        tagline="Que ce soit un site vitrine, une application sur mesure ou un suivi technique, je vous accompagne à chaque étape."
        primary={{ href: "/contact", text: "Contact" }}
        secondary={{ href: "/realisations", text: "Portfolio" }}
      />
    </>
  );
}