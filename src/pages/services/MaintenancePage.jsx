// src/pages/services/MaintenancePage.jsx

import Section from "../../components/common/Section";
import FaqSection from "../../components/common/FaqSection";
import CtaFinal from "../../components/common/CtaFinal";

import MaintenanceIntro from "../../components/services/maintenance/MaintenanceIntro";
import MaintenanceIncluded from "../../components/services/maintenance/MaintenanceIncluded";
import MaintenanceTerms from "../../components/services/maintenance/MaintenanceTerms";
import MaintenanceOutro from "../../components/services/maintenance/MaintenanceOutro";

export default function MaintenancePage() {
  const faq = [
    {
      q: "Pourquoi prendre une maintenance ?",
      a: "Pour garder un site fiable et à jour : corrections, sécurité, performance, petites évolutions. Votre site ne se dégrade pas avec le temps.",
    },
    {
      q: "Proposez-vous un forfait mensuel ?",
      a: "Oui : préventif + support prioritaire. Une intervention ponctuelle à la demande est aussi possible.",
    },
    {
      q: "Que couvre la maintenance ?",
      a: "Bugs, mises à jour, optimisations, petites évolutions et conseils techniques. Le périmètre exact dépend de la formule.",
    },
    {
      q: "Mon site n’a pas été réalisé par vous : vous pouvez le maintenir ?",
      a: "Oui, après un audit rapide pour valider la prise en charge et éviter les mauvaises surprises.",
    },
    {
      q: "Quels sont les délais de réponse ?",
      a: "Je réponds généralement sous 24–48h ouvrées. En formule prioritaire, les délais sont raccourcis.",
    },
  ];

  return (
    <Section
      id="suivi-et-maintenance"
      title="Suivi & maintenance du site"
      className="text-base sm:text-lg lg:text-xl"
    >
      <MaintenanceIntro />
      <MaintenanceIncluded />
      <MaintenanceTerms />
      <MaintenanceOutro />

      <FaqSection title="FAQ — Suivi & maintenance" faq={faq} ariaLabelledby="faq-support-title" />

      <CtaFinal
        title="Un suivi technique fiable"
        tagline="Gardez votre site à jour, sécurisé et performant."
        primary={{ href: "/contact", text: "Demander un suivi" }}
        secondary={{ href: "/tarifs", text: "Voir les tarifs" }}
      />
    </Section>
  );
}