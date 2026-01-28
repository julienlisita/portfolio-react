// src/pages/SupportPage.jsx

import Section from "../components/common/Section";
import { CalendarCheck, ClipboardList, FileText, LifeBuoy, ListChecks, Ticket } from "lucide-react";
import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";

export default function SupportPage() {

const faq = [
  {
    q: "Pourquoi prendre une maintenance pour mon site ?",
    a: "Pour garder un site rapide, sécurisé et à jour (dépendances, correctifs, sauvegardes)."
  },
  {
    q: "Proposez-vous un forfait mensuel ?",
    a: "Oui : préventif + support prioritaire. Intervention à la demande possible également."
  },
  {
    q: "Que couvre la maintenance ?",
    a: "Bugs, mises à jour, optimisations, petites évolutions et conseil technique."
  },
  {
    q: "Mon site n’a pas été réalisé par vous : vous pouvez le maintenir ?",
    a: "Oui, après un audit technique rapide pour valider la prise en charge."
  },
  {
    q: "Aurez-vous un suivi des actions réalisées ?",
    a: "Oui, un rapport synthétique est possible (mensuel si forfait)."
  }
];

  return (
    <>
      <Section
        id="maintenance"
        title="Suivi & maintenance"
        className="text-base sm:text-lg lg:text-xl"
      >
        {/* Intro */}
        <p className="mb-6">
          Après la mise en ligne, je propose un <strong>accompagnement continu</strong> pour garantir la
          <strong> stabilité</strong>, la <strong>performance</strong> et la <strong>sécurité</strong> de votre site ou application.
        </p>

        {/* Ce qui est inclus */}
        <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
          <LifeBuoy className="w-5 h-5 text-[#007AFF]" />
          Ce qui est inclus
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li className="flex items-start gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            Correction de bugs & support technique
          </li>
          <li className="flex items-start gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            Ajout de fonctionnalités et petites évolutions
            </li>
          <li className="flex items-start gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            Optimisations de performance
          </li>
          <li className="flex items-start gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            Mises à jour techniques (dépendances, sécurité…)
            </li>
          <li className="flex items-start gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            Conseil & suivi technique personnalisé
            </li>
        </ul>

        {/* Modalités / formules */}
        <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-[#007AFF]" />
          Modalités
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li className="flex items-start gap-2">
            <CalendarCheck className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            <div className="flex-1">
              <strong>Forfait mensuel</strong> pour la tranquillité (préventif + support prioritaire)
            </div>
          </li>
          <li className="flex items-start gap-2">
            <Ticket className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            <div className="flex-1">
              <strong>Intervention à la demande</strong> sur ticket (au besoin, sans engagement)
            </div>
          </li>
          <li className="flex items-start gap-2">
            <FileText className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            <div className="flex-1">
               Rapport synthétique sur les actions menées (si forfait)
            </div>
          </li>
        </ul>

        {/* Conclusion + CTA */}
        <p className="mt-6 italic">
          L’objectif : garder votre outil <strong>fiable</strong> et <strong>à jour</strong>, au rythme de votre activité.
        </p>

        {/* FAQ  Maintenance */}
        <FaqSection title="FAQ — Maintenance" faq={faq} ariaLabelledby="faq-support-title" />
        
        <CtaFinal
          title="Un suivi technique fiable"
          tagline="Gardez votre site ou application toujours à jour, sécurisé et performant."
          primary={{ href: "/contact", text: "Contact" }}
          secondary={{href: "/tarifs", text: "Tarifs"}}
        />
      </Section>
    </>
  );
}