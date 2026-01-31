// src/pages/SupportPage.jsx

import Section from "../components/common/Section";
import {
  CalendarCheck,
  ClipboardList,
  FileText,
  LifeBuoy,
  ListChecks,
  Ticket,
  Shield,
  Gauge,
  Wrench,
} from "lucide-react";
import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";

export default function SupportPage() {
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
    <>
      <Section
        id="suivi-et-maintenance"
        title="Suivi & maintenance du site"
        className="text-base sm:text-lg lg:text-xl"
      >
        {/* Intro */}
        <p className="mb-6 text-gray-300">
          Après la mise en ligne, je propose un accompagnement pour garantir la
          stabilité, la performance et la sécurité de votre
          site et pour le faire évoluer sereinement.
        </p>

        {/* Inclus */}
        <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
          <LifeBuoy className="w-5 h-5 text-[#007AFF]" />
          Ce qui est inclus
        </h3>
        <ul className="list-none ml-6 space-y-2">
          {[
            { icon: Wrench, text: "Correction de bugs & support technique" },
            { icon: Shield, text: "Mises à jour & sécurité (prévention + correctifs)" },
            { icon: Gauge, text: "Optimisations de performance (vitesse, stabilité)" },
            { icon: ListChecks, text: "Petites évolutions et ajustements au fil des besoins" },
            { icon: ClipboardList, text: "Conseil & suivi technique personnalisé" },
          ].map((it) => (
            <li key={it.text} className="flex items-start gap-2">
              <it.icon className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
              <div className="flex-1">{it.text}</div>
            </li>
          ))}
        </ul>

        {/* Modalités */}
        <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-[#007AFF]" />
          Modalités
        </h3>
        <ul className="list-none ml-6 space-y-2">
          {[
            {
              icon: CalendarCheck,
              title: "Forfait mensuel",
              desc: "Pour la tranquillité : préventif + support prioritaire + suivi régulier.",
            },
            {
              icon: Ticket,
              title: "Intervention à la demande",
              desc: "Vous me sollicitez quand vous en avez besoin, sans engagement.",
            },
            {
              icon: FileText,
              title: "Rapport possible",
              desc: "Un résumé des actions menées (mensuel si forfait).",
            },
          ].map((it) => (
            <li key={it.title} className="flex items-start gap-2">
              <it.icon className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
              <div className="flex-1">
                <strong>{it.title}</strong> — {it.desc}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 italic text-gray-300">
          L’objectif : garder votre site <strong>fiable</strong> et <strong>à jour</strong>, au rythme de votre activité.
        </p>

        {/* FAQ */}
        <FaqSection title="FAQ — Suivi & maintenance" faq={faq} ariaLabelledby="faq-support-title" />

        {/* CTA */}
        <CtaFinal
          title="Un suivi technique fiable"
          tagline="Gardez votre site à jour, sécurisé et performant."
          primary={{ href: "/contact", text: "Demander un suivi" }}
          secondary={{ href: "/tarifs", text: "Voir les tarifs" }}
        />
      </Section>
    </>
  );
}