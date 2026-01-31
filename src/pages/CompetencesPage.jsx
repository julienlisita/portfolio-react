// src/pages/CompetencePage.jsx

import TechCard from "../components/common/TechCard";
import PageTitle from "../components/common/PageTitle";

import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiNetlify,
  SiVercel,
  SiRender,
  SiTypescript,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";
import Button from "../components/common/Button";

export default function CompetencePage() {
  const faq = [
    {
      q: "Est-ce que je dois comprendre la technique ?",
      a: "Non. Je vous explique uniquement ce qui est utile pour décider. Mon rôle : transformer votre besoin en un site clair, fiable et évolutif, sans jargon inutile.",
    },
    {
      q: "Travaillez-vous avec des artisans, indépendants et commerces ?",
      a: "Oui, c’est mon cœur de cible : artisans, indépendants, commerces et petites entreprises à Bordeaux et à distance partout en France.",
    },
    {
      q: "Proposez-vous des maquettes ?",
      a: "Oui si besoin : soit une structure simple validée ensemble, soit une maquette Figma plus poussée avant le développement.",
    },
    {
      q: "Et après la mise en ligne ?",
      a: "Je peux assurer le suivi : corrections, mises à jour, sécurité, optimisations et petites évolutions.",
    },
  ];

  const technologies = [
    // Frontend
    { icon: FaReact, name: "React", description: "Interfaces dynamiques", category: "frontend" },
    { icon: SiNextdotjs, name: "Next.js", description: "Performance & SEO (SSR/SSG)", category: "frontend" },
    { icon: SiTypescript, name: "TypeScript", description: "Plus fiable, moins de bugs", category: "frontend" },
    { icon: SiTailwindcss, name: "Tailwind CSS", description: "UI rapide à itérer", category: "frontend" },

    // Backend & data
    { icon: FaNodeJs, name: "Node.js", description: "Logique serveur", category: "backend" },
    { icon: SiExpress, name: "Express", description: "API & logique métier", category: "backend" },
    { icon: SiPrisma, name: "Prisma", description: "ORM moderne et type-safe", category: "backend" },
    { icon: SiPostgresql, name: "PostgreSQL", description: "Base fiable", category: "backend" },

    // Déploiement & outils
    { icon: SiVercel, name: "Vercel", description: "Hébergement optimisé", category: "deployment" },
    { icon: SiNetlify, name: "Netlify", description: "Déploiement statique", category: "deployment" },
    { icon: SiRender, name: "Render", description: "Déploiement full-stack", category: "deployment" },
    { icon: FaGitAlt, name: "Git / GitHub", description: "Versionnage & suivi", category: "deployment" },

    // Complémentaires
    { icon: SiC, name: "C", description: "Rigueur & performance", category: "complementary" },
    { icon: SiCplusplus, name: "C++", description: "Logique applicative", category: "complementary" },
    { icon: FaJava, name: "Java", description: "Conception robuste", category: "complementary" },
  ];

  return (
    <>
      <PageTitle>Ma méthode & mes choix techniques</PageTitle>

      <Section>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300">
          De l’échange initial à la mise en ligne, je vous explique comment je travaille et en quoi mes choix techniques permettent d’obtenir un site fiable, performant et évolutif.
        </p>
      </Section>

      {/* Image */}
      <Section>
        <div className="flex justify-center mt-6">
          <img
            src="/assets/images/me-working.avif"
            alt="Julien Lisita en train de travailler"
            className="rounded-xl shadow-lg w-full max-w-[520px] h-auto object-cover"
            width="520"
            height="320"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Section>

      {/* Méthode = même trame que Services */}
      <Section id="method" title="Ma méthode de travail" className="text-base sm:text-lg lg:text-xl">
        <p className="text-gray-300">
          Un parcours simple, avec des points de validation à chaque étape.
        </p>

        <div className="relative mt-6">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2f2f2f]" />

          {[
            {
              t: "Échange initial",
              d: "On clarifie vos objectifs, votre cible, vos pages et vos priorités (et votre budget).",
              bonus: "Livrable : un mini-cadrage (plan + périmètre + prochaines étapes).",
            },
            {
              t: "Conception",
              d: "Je vous conseille sur la structure et le design. Soit à partir de votre maquette, soit je propose une base simple et cohérente.",
              bonus: "Livrable : structure de page + contenu conseillé (et maquette Figma si besoin).",
            },
            {
              t: "Développement",
              d: "Je développe votre site et je vous montre l’avancement régulièrement, par petites itérations.",
              bonus: "Livrable : démos / validations progressives.",
            },
            {
              t: "Mise en ligne",
              d: "Votre site est accessible à vos clients, optimisé pour mobile et prêt pour le référencement.",
              bonus: "Livrable : mise en ligne + réglages SEO de base + conseils.",
            },
            {
              t: "Suivi & maintenance",
              d: "Je reste disponible pour les corrections, mises à jour, optimisations et petites évolutions.",
              bonus: "Option : forfait mensuel ou interventions ponctuelles.",
            },
          ].map((s, i) => (
            <div key={i} className="pl-12 pb-6">
              <div className="relative">
                <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2a2a2a] text-[#007AFF] text-xs font-semibold">
                  {i + 1}
                </span>
                <h4 className="text-gray-100 font-semibold">{s.t}</h4>
              </div>
              <p className="text-gray-400 text-sm mt-1">{s.d}</p>
              <p className="text-gray-500 text-xs mt-2">{s.bonus}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Button to="/services" variant="primary" size="sm">
            Voir mes services
          </Button>
        </div>
      </Section>

      {/* Comparaison no-code / plateformes */}
      <Section title="Pourquoi ne pas utiliser un outil clé en main ?">
        <p className="text-base sm:text-lg lg:text-xl text-gray-300">
          Des solutions comme Wix, WordPress.com ou des offres tout-en-un
          peuvent convenir pour démarrer rapidement.  
          Mais dès qu’un site doit être clair, bien référencé et évoluer dans le temps,
          leurs limites apparaissent.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Plateformes */}
          <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-xl p-5">
            <h3 className="text-gray-100 font-semibold mb-3">
              Solutions clé en main
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>• Structure souvent figée</li>
              <li>• SEO limité ou peu maîtrisable</li>
              <li>• Performances variables</li>
              <li>• Dépendance à une plateforme</li>
              <li>• Évolutions parfois coûteuses ou bloquées</li>
            </ul>
          </div>

          {/* Ta méthode */}
          <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-xl p-5">
            <h3 className="text-gray-100 font-semibold mb-3">
              Ma méthode
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>• Structure pensée pour vos clients</li>
              <li>• SEO propre dès la base</li>
              <li>• Site rapide et léger</li>
              <li>• Vous êtes propriétaire de votre site</li>
              <li>• Évolutif sans tout refaire</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          L’objectif n’est pas d’utiliser “plus de technique”, mais la bonne solution
          pour un site fiable, durable et adapté à votre activité.
        </p>
      </Section>

      {/* Ce que vous obtenez = reprend About */}
      <Section title="Ce que vous obtenez">
        <ul className="list-disc ml-6 space-y-2 text-gray-300 text-base sm:text-lg lg:text-xl">
          <li>Un site clair et professionnel qui inspire confiance</li>
          <li>Une navigation simple et agréable sur mobile</li>
          <li>Une base SEO propre (structure, titres, performance)</li>
          <li>Un site sur mesure qui peut évoluer (pages, fonctionnalités, SEO)</li>
          <li>Mise en ligne incluse + accompagnement</li>
        </ul>
      </Section>

      {/* Maquettes = cohérent avec ton discours tarifs */}
      <Section title="Maquettes (si besoin)">
        <p className="text-base sm:text-lg lg:text-xl text-gray-300">
          Selon le projet, on peut valider le rendu via une maquette avant de développer (utile si vous voulez figer un design précis).
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          <TechCard icon={FaFigma} name="Figma" description="Maquettes & structure du site" color="#5AC8FA" />
        </div>
      </Section>

      {/* Tech = discret, pour les curieux / recruteurs */}
      <Section title="Choix techniques (pour les curieux)" className="text-base sm:text-lg lg:text-xl">
        <p className="text-gray-300">
          Pour garantir performance, SEO et maintenabilité, j’utilise une stack moderne.
          Si vous n’êtes pas “tech”, vous pouvez ignorer cette partie.
        </p>
      </Section>

      <Section title="Front-end">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {technologies.filter((t) => t.category === "frontend").map((t, idx) => (
            <TechCard key={idx} color="#007AFF" {...t} />
          ))}
        </div>
      </Section>

      <Section title="Back-end & données">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {technologies.filter((t) => t.category === "backend").map((t, idx) => (
            <TechCard key={idx} color="#9B59B6" {...t} />
          ))}
        </div>
      </Section>

      <Section title="Déploiement & outils">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {technologies.filter((t) => t.category === "deployment").map((t, idx) => (
            <TechCard key={idx} color="#5AC8FA" {...t} />
          ))}
        </div>
      </Section>

      <Section title="Complément (profil technique)">
        <p className="text-base sm:text-lg lg:text-xl text-gray-300">
          Avant le web, j’ai travaillé sur des projets plus techniques (C, C++, Java). Ça renforce ma rigueur
          et ma capacité à concevoir des solutions robustes.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {technologies.filter((t) => t.category === "complementary").map((t, idx) => (
            <TechCard key={idx} color="#FF66B2" {...t} />
          ))}
        </div>

        <p className="text-sm text-center text-gray-500 mt-6">
          🔗 GitHub :
          <a
            href="https://github.com/julienlisita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-1"
          >
            github.com/julienlisita
          </a>
        </p>
      </Section>

      <FaqSection title="FAQ — Méthode" faq={faq} ariaLabelledby="faq-skills-title" />

      <CtaFinal
        title="On en parle ?"
        tagline="Expliquez-moi votre activité et vos objectifs : je vous propose la bonne approche."
        primary={{ href: "/contact", text: "Discuter de votre projet" }}
        secondary={{ href: "/tarifs", text: "Voir les tarifs" }}
      />
    </>
  );
}