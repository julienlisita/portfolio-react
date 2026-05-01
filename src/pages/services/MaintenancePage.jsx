// src/pages/services/MaintenancePage.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";
import PageTitle from "../../components/UI/PageTitle";
import MaintenanceIntro from "../../components/services/maintenance/MaintenanceIntro";
import MaintenanceIncluded from "../../components/services/maintenance/MaintenanceIncluded";
import MaintenanceTerms from "../../components/services/maintenance/MaintenanceTerms";
import MaintenanceOutro from "../../components/services/maintenance/MaintenanceOutro";

export default function MaintenancePage() {
  const faq = [
    {
      q: "Pourquoi prévoir une maintenance après la mise en ligne ?",
      a: "Pour éviter qu’un site se dégrade avec le temps : bugs, formulaires qui ne fonctionnent plus, lenteurs, contenus à ajuster ou petites évolutions à ajouter.",
    },
    {
      q: "Proposez-vous un forfait mensuel ?",
      a: "Oui. Le forfait mensuel convient si vous voulez un suivi régulier, des vérifications préventives et une meilleure réactivité en cas de besoin.",
    },
    {
      q: "Puis-je vous contacter seulement quand j’ai besoin ?",
      a: "Oui. L’intervention ponctuelle est possible pour corriger un bug, modifier une page, ajuster un formulaire ou ajouter une petite évolution.",
    },
    {
      q: "Mon site n’a pas été réalisé par vous : vous pouvez le maintenir ?",
      a: "Oui, après un audit rapide pour vérifier la base technique, identifier les risques éventuels et confirmer ce qui peut être pris en charge.",
    },
    {
      q: "Quels sont les délais de réponse ?",
      a: "Je réponds généralement sous 24 à 48h ouvrées. Les demandes incluses dans un forfait peuvent être traitées en priorité selon la formule choisie.",
    },
  ];

  return (
    <>
      <PageTitle>Suivi & maintenance du site</PageTitle>
      <MaintenanceIntro />
      <MaintenanceIncluded />
      <MaintenanceTerms />
      <MaintenanceOutro />

      <FaqSection title="FAQ — Suivi & maintenance" faq={faq} ariaLabelledby="faq-support-title" />

      <CtaFinal
        title="Gardons votre site fiable dans la durée"
        tagline="Corrections, suivi et petites évolutions pour éviter les blocages et faire avancer votre site avec votre activité."
        primary={{ href: "/contact", text: "Demander un suivi" }}
        secondary={{ href: "/tarifs", text: "Voir les tarifs" }}
      />
    </>
  );
}