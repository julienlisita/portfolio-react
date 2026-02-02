// src/pages/WebsiteCreationPage.jsx

import {
  CheckCircle,
  Users,
  Zap,
  ListChecks,
  Search,
  Layout,
} from "lucide-react";
import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";

export default function WebsiteCreationPage() {
  const faq = [
    {
      q: "Combien coûte un site vitrine à Bordeaux ?",
      a: "En général à partir de 800 €, selon le nombre de pages, le niveau de personnalisation et les options (formulaire avancé, réservation, blog…).",
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
      a: "Oui. Je peux moderniser le design, clarifier la structure et améliorer les performances, tout en respectant votre identité.",
    },
    {
      q: "Hébergement et nom de domaine : vous vous en occupez ?",
      a: "Oui, je vous conseille et je peux gérer la mise en ligne (hébergement, domaine, e-mails pro), ou vous guider étape par étape.",
    },
  ];

  return (
    <>
      <Section
        id="creation-site-internet"
        title="Création de site internet"
        className="text-base sm:text-lg lg:text-xl"
      >
        {/* Intro */}
        <p className="text-gray-300 mb-8">
          Idéal pour les artisans, indépendants et commerces qui veulent un site
          clair, rapide et professionnel pour présenter
          leur activité et faciliter la prise de contact.
        </p>

        {/* Pour qui ? */}
        <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#007AFF]" />
          Pour qui ?
        </h3>
        <ul className="list-none ml-6 space-y-2">
          {[
            "Artisans (bâtiment, services, métiers de bouche…)",
            "Indépendants (coach, thérapeute, consultant…)",
            "Commerces locaux (restaurant, salon, institut…)",
            "Associations et petites structures",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#007AFF] mt-1" />
              <div className="flex-1">{item}</div>
            </li>
          ))}
        </ul>

        {/* Ce que vous obtenez */}
        <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
          <ListChecks className="w-5 h-5 text-[#007AFF]" />
          Ce que vous obtenez
        </h3>
        <ul className="list-none ml-6 space-y-2">
          {[
            "Un design propre et cohérent avec votre identité",
            "Une structure claire (services, réalisations, infos pratiques)",
            "Un site rapide et agréable sur mobile",
            "Un formulaire de contact fiable (et renforçable si besoin)",
            "Une base SEO solide (structure, balises, performance, indexation)",
            "Mise en ligne incluse + conseils pour la suite",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Layout className="w-5 h-5 text-[#007AFF] mt-1" />
              <div className="flex-1">{item}</div>
            </li>
          ))}
        </ul>

        {/* Pourquoi sur mesure */}
        <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#9B59B6]" />
          Pourquoi une solution sur mesure ?
        </h3>
        <ul className="list-none ml-6 space-y-2">
          {[
            "Performance : site léger et rapide",
            "Sécurité : moins de dépendance à des plugins",
            "Évolutivité : ajout de pages/fonctions sans repartir de zéro",
            "Maintenance : plus simple et plus stable dans le temps",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-[#9B59B6] mt-1" />
              <div className="flex-1">{item}</div>
            </li>
          ))}
        </ul>

        {/* SEO */}
        <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
          <Search className="w-5 h-5 text-[#9B59B6]" />
          Visibilité locale & référencement
        </h3>
        <p className="text-gray-300 ml-6">
          Je mets en place une base SEO propre (structure, performance, balises). Ensuite, on peut aller
          plus loin selon votre activité : pages locales, contenus, avis, blog…
        </p>

        {/* FAQ */}
        <FaqSection title="FAQ — Création de site internet" faq={faq} ariaLabelledby="faq-vitrine-title" />

        {/* CTA */}
        <CtaFinal
          title="Votre site internet commence ici"
          tagline="Un site rapide, élégant et clair pour présenter votre activité et générer des contacts."
          primary={{ href: "/contact", text: "Demander un échange" }}
          secondary={{ href: "/tarifs", text: "Voir les tarifs" }}
        />
      </Section>
    </>
  );
}