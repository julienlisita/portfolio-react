// src/pages/WebApplicationsPage.jsx

import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";
import Section from "../components/common/Section";
import {
  CheckCircle,
  Users,
  Layers,
  Briefcase,
  BarChart3,
  Lock,
  Rocket,
  Wrench,
} from "lucide-react";

export default function WebApplicationsPage() {
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
    <>
      <Section
        id="fonctionnalites-sur-mesure"
        title="Fonctionnalités & outils sur mesure"
        className="text-base sm:text-lg lg:text-xl"
      >
        {/* Intro */}
        <p className="mb-6 text-gray-300">
          Pour les structures qui ont besoin d’un outil ou de
          fonctionnalités spécifiques : réservation, espace administrable, gestion de contenus,
          candidatures, dashboard, espace client…
        </p>

        {/* Pour qui */}
        <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#007AFF]" />
          Pour qui ?
        </h3>
        <ul className="list-none ml-6 space-y-2">
          {[
            "PME/TPE qui veulent digitaliser un process",
            "Associations avec besoins de gestion interne",
            "Porteurs de projet (prototype / MVP)",
            "Structures avec besoin d’un espace admin / espace client",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#007AFF] mt-1" />
              <div className="flex-1">{item}</div>
            </li>
          ))}
        </ul>

        {/* Ce que je propose */}
        <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#007AFF]" />
          Ce que je propose
        </h3>
        <ul className="list-none ml-6 space-y-2">
          {[
            "Développement full-stack (front + back) selon votre besoin",
            "Espace d’administration simple (ajout/modification de contenus, gestion…)",
            "UX responsive (mobile/desktop) adaptée aux usages réels",
            "Sécurité : accès protégés, rôles, API sécurisées",
            "Déploiement + accompagnement en production",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Wrench className="w-5 h-5 text-[#007AFF] mt-1" />
              <div className="flex-1">{item}</div>
            </li>
          ))}
        </ul>

        {/* Exemples d’usage */}
        <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#9B59B6]" />
          Exemples de cas d’usage
        </h3>
        <ul className="list-none ml-6 space-y-2">
          {[
            { icon: Briefcase, text: "Outil métier (CRM léger, gestion interne, planning…)" },
            { icon: BarChart3, text: "Dashboard / back-office sécurisé" },
            { icon: Lock, text: "Espace client (documents, suivi, messages…)" },
            { icon: Rocket, text: "Prototype / MVP pour valider une idée" },
          ].map((it) => (
            <li key={it.text} className="flex items-start gap-2">
              <it.icon className="w-5 h-5 text-[#9B59B6] mt-1" />
              <div className="flex-1">{it.text}</div>
            </li>
          ))}
        </ul>

        <p className="mt-6 italic text-gray-300">
          L’objectif : un outil <strong>utile</strong> dès la première version, puis{" "}
          <strong>améliorable</strong> au fil du temps.
        </p>

        {/* FAQ */}
        <FaqSection title="FAQ — Fonctionnalités sur mesure" faq={faq} ariaLabelledby="faq-apps-title" />

        {/* CTA */}
        <CtaFinal
          title="Construisons votre solution sur mesure"
          tagline="Un accompagnement global : cadrage, développement, mise en ligne et évolutions."
          primary={{ href: "/contact", text: "Discuter du besoin" }}
          secondary={{ href: "/realisations", text: "Voir des projets" }}
        />
      </Section>
    </>
  );
}