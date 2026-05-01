// src/pages/services/ServicesPage.jsx

import PageTitle from "../../components/UI/PageTitle";
import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";

import ServicesIntro from "../../components/services/ServicesIntro";
import ServicesOffers from "../../components/services/ServicesOffers";
import ServicesMethod from "../../components/services/ServicesMethod";

export default function ServicesPage() {
  const faq = [
    {
      q: "Développeur web à Bordeaux : que proposez-vous concrètement ?",
      a: "Je crée des sites web professionnels et des outils sur mesure pour aider les indépendants, artisans et PME à gagner en visibilité, générer des demandes et simplifier leur organisation.",
    },
    {
      q: "Site vitrine ou outil sur mesure : comment choisir ?",
      a: "Un site vitrine présente votre activité et facilite les demandes de contact, devis ou candidature. Un outil sur mesure ajoute une vraie logique de gestion : réservation avec créneaux, espace administrateur, espace client ou outil métier.",
    },
    {
      q: "Travaillez-vous avec des indépendants et petites entreprises ?",
      a: "Oui, j’accompagne principalement des indépendants, artisans, commerces et petites entreprises, à Bordeaux Métropole et à distance.",
    },
    {
      q: "Utilisez-vous WordPress ?",
      a: "Je privilégie des sites développés avec React et Next.js pour obtenir des solutions rapides, évolutives et maîtrisées. Je peux toutefois échanger avec vous sur votre situation si vous avez déjà un site existant.",
    },
    {
      q: "Comment se passe un projet ?",
      a: "On commence par un échange pour cadrer le besoin, puis je propose une structure, je développe par étapes, je vous montre l’avancement et j’accompagne la mise en ligne.",
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
        title="Discutons de votre besoin"
        tagline="Vous avez un projet, un site à améliorer ou une fonctionnalité à ajouter ? Échangeons simplement pour voir quelle solution serait la plus utile."
        primary={{ href: "/contact", text: "Discuter du projet" }}
        secondary={{ href: "/realisations", text: "Voir des réalisations" }}
      />
    </>
  );
}