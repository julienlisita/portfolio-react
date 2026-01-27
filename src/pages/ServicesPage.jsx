// src/pages/ServicesPage.jsx

import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";
import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";
import ServiceCard from "../components/home/ServiceCard";
import { Monitor, Layers, LifeBuoy } from "lucide-react";

export default function ServicesPage()
{

  const faq = [
    {
      q: "Développeur web à Bordeaux : que proposez-vous concrètement ?",
      a: "Je crée des sites vitrines modernes, des applications web sur mesure et j’assure le suivi & maintenance (performances, sécurité, évolutions)"
    },
    {
      q: "Site vitrine ou application web : comment choisir ?",
      a: "Un site vitrine présente votre activité. Une application web gère des fonctionnalités métiers (CRM, espace client, SaaS). On clarifie ensemble selon vos objectifs."
    },
    {
      q: "Travaillez-vous avec des indépendants et petites entreprises ?",
      a: "Oui, c’est mon cœur de cible : indépendants, artisans, TPE/PME à Bordeaux et à distance partout en France."
    },
    {
      q: "Utilisez-vous WordPress ?",
      a: "Je privilégie des sites sans WordPress (React/Next) pour des sites rapides, sécurisés et faciles à maintenir. WordPress possible si cas spécifique."
    },
    {
      q: "Comment se passe un projet ?",
      a: "Échange initial → conception → développement itératif (démos) → mise en ligne → maintenance si besoin."
    },
  ];
  return (
    <> 
      <PageTitle>Mes services</PageTitle>

      {/* Intro courte */}
      <Section>
        <p className="text-center text-base sm:text-lg lg:text-xl text-gray-300">
          Je conçois et développe des solutions web modernes, rapides et personnalisées.
          Trois offres principales selon vos besoins : site vitrine, application web sur mesure,
          et suivi & maintenance.
        </p>
      </Section>

      <Section title="Ce que je propose">
        <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            variant="page"
            icon={<Monitor />}
            title="Sites vitrines modernes"
            description="Création de sites professionnels rapides, responsive et sur mesure pour artisans, restaurants, freelances et indépendants. Pas besoin de WordPress : tout est optimisé, maintenable et élégant."
            color={["#5AC8FA", "#007AFF"]}
            link="/services/business-websites"
          />
          <ServiceCard
            variant="page"
            icon={<Layers />}
            title="Applications web sur mesure"
            description="Développement complet d’applications web sur mesure, front-end et back-end : SaaS, outils métiers, plateformes interactives, jeux en ligne. Solutions robustes, évolutives et sécurisées, adaptées à vos besoins."
            color={["#007AFF", "#9B59B6"]}
            link="/services/web-applications"
          />
          <ServiceCard
            variant="page"
            icon={<LifeBuoy />}
            title="Suivi & maintenance"
            description="Je vous accompagne après la mise en ligne : corrections, améliorations, ajout de fonctionnalités, mises à jour, sécurité, hébergement et assistance continue, avec un suivi régulier pour vos évolutions."
            color={["#9B59B6", "#FF66B2"]}
            link="/services/support"
          />
        </div>
      </Section>
      <Section id="method" title="Ma méthode de travail" className="text-base sm:text-lg lg:text-xl">
      <p>
        Un parcours simple et transparent, avec des points de validation à chaque étape.
      </p>

      <div className="relative mt-6">
        {/* ligne verticale */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2f2f2f]" />

        {[
          { t: "Échange initial", d: "nous discutons de vos besoins, de vos envies et de vos priorités." },
          { t: "Conception", d: "je vous conseille sur la structure et le design, avec un plan clair." },
          { t: "Développement", d: "je développe votre site et je vous montre l’avancement régulièrement." },
          { t: "Mise en ligne", d: " votre site est prêt, accessible à vos clients et optimisé pour tous les supports." },
          { t: "Suivi & maintenance", d: "je reste disponible pour des mises à jour ou des évolutions." },
        ].map((s, i) => (
          <div key={i} className="pl-12 pb-6">
            <div className="relative">
              <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2a2a2a] text-[#007AFF] text-xs font-semibold">
                {i + 1}
              </span>
              <h4 className="text-gray-100 font-semibold">{s.t}</h4>
            </div>
            <p className="text-gray-400 text-sm mt-1">{s.d}</p>
          </div>
        ))}
      </div>
      </Section>

      {/* FAQ Services */}
      <FaqSection title="FAQ — Services" faq={faq} ariaLabelledby="faq-services"/>

      {/* CTA final */}
      <CtaFinal
        title="Choisissons ensemble la bonne solution"
        tagline="Que ce soit un site vitrine, une application sur mesure ou un suivi technique, je vous accompagne à chaque étape."
        primary={{ href: "/contact", text: "Contact" }}
        secondary={{href: "/portfolio", text: "Portfolio"}}
      />
    </>
  )
}