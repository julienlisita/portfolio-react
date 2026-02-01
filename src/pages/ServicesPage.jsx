// src/pages/ServicesPage.jsx

import Button from "../components/common/Button";
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
        <p className="text-left text-base sm:text-lg lg:text-xl text-gray-300">
          Sites vitrines et fonctionnalités sur mesure pour artisans, indépendants et petites entreprises.
          3 offres selon vos besoins: site vitrine, sur mesure et suivi & maintenance.
        </p>
      </Section>

      <Section title="Ce que je propose">
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Deux types de projets selon vos besoins, avec un <strong>suivi possible dans la durée</strong>.
        </p>

        <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            variant="page"
            icon={<Monitor />}
            title="Création de site internet"
            subtitle="Sites vitrines pour artisans & indépendants"
            description="Un site vitrine clair et professionnel pour présenter votre activité, inspirer confiance et faciliter la prise de contact. Design soigné, mobile-first, rapide et prêt pour le référencement."
            color={["#5AC8FA", "#007AFF"]}
            link="/services/creation-site-internet"
          />

          <ServiceCard
            variant="page"
            icon={<Layers />}
            title="Fonctionnalités & outils sur mesure"
            subtitle="Réservation, admin, outils métiers"
            description="Réservation en ligne, espace administrable, formulaires avancés, candidatures, espace client… Je développe les fonctionnalités adaptées à votre activité, avec une solution évolutive et sécurisée."
            color={["#007AFF", "#5AC8FA"]}
            link="/services/creation-site-internet-fonctionnalites-sur-mesure"
          />

          <ServiceCard
            variant="page"
            icon={<LifeBuoy />}
            title="Suivi & maintenance du site"
            subtitle="Sécurité, mises à jour et évolutions"
            description="Après la mise en ligne : corrections, mises à jour, sécurité, optimisations et petites évolutions. Pour garder un site fiable, rapide et à jour, au rythme de votre activité."
            color={["#5AC8FA", "#007AFF"]}
            link="/services/suivi-et-evolutions"
          />
        </div>
      </Section>
      <Section id="method" title="Ma méthode de travail" className="text-base sm:text-lg lg:text-xl">
      <p>
        Un parcours simple et transparent, avec des points de validation à chaque étape.
      </p>
      <p className="text-sm text-gray-400 mt-2">
        Pour les plus curieux, je détaille mon approche et mes choix techniques ici :{" "}
        <Button variant="text" to={`/comment-je-travaille`} > 
          voir comment je travaille ›
        </Button>
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
        secondary={{href: "/realisations", text: "Portfolio"}}
      />
    </>
  )
}