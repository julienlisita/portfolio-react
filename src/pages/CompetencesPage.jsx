// src/pages/CompetencePage.jsx

import TechCard from "../components/common/TechCard";
import PageTitle from "../components/common/PageTitle";

import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaJava
} from "react-icons/fa";
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

export default function CompetencePage() {
  const faq = [
    {
      q: "Travaillez-vous avec des petites entreprises et indépendants ?",
      a: "Oui, c’est même mon cœur de cible. Je conçois des sites vitrines et des applications web légères pour des TPE, indépendants et petites structures qui ont besoin d’un site professionnel, clair et moderne.",
    },
    {
      q: "Quelles technologies utilisez-vous pour développer les sites web ?",
      a: "Pour le front-end : React et Next.js avec Tailwind CSS et TypeScript. Pour le back-end : Node.js (Express) avec Prisma et PostgreSQL, selon les besoins du projet.",
    },
    {
      q: "Pouvez-vous reprendre un site existant pour une refonte ?",
      a: "Oui. Je peux analyser votre site actuel, proposer une structure plus claire, moderniser le design et améliorer les performances, tout en conservant votre identité visuelle.",
    },
  ];

  const technologies = [
    // Frontend
    {
      icon: FaReact,
      name: "React",
      description: "Interfaces dynamiques et réactives",
      category: "frontend",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      description: "Framework React moderne (SSR/SSG)",
      category: "frontend",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      description: "JavaScript typé pour plus de fiabilité",
      category: "frontend",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      description: "Framework utilitaire moderne",
      category: "frontend",
    },

    // Backend & data
    {
      icon: FaNodeJs,
      name: "Node.js",
      description: "Back-end rapide et léger",
      category: "backend",
    },
    {
      icon: SiExpress,
      name: "Express",
      description: "Framework minimaliste pour API",
      category: "backend",
    },
    {
      icon: SiPrisma,
      name: "Prisma",
      description: "ORM moderne et type-safe",
      category: "backend",
    },
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      description: "Base de données relationnelle fiable",
      category: "backend",
    },

    // Déploiement & outils
    {
      icon: SiVercel,
      name: "Vercel",
      description: "Hébergement optimisé pour Next.js",
      category: "deployment",
    },
    {
      icon: SiNetlify,
      name: "Netlify",
      description: "Déploiement de sites statiques",
      category: "deployment",
    },
    {
      icon: SiRender,
      name: "Render",
      description: "Déploiement d’applications full-stack",
      category: "deployment",
    },
    {
      icon: FaGitAlt,
      name: "Git / GitHub",
      description: "Versionnage et collaboration",
      category: "deployment",
    },

    // Complémentaires
    {
      icon: SiC,
      name: "C",
      description: "Langage bas niveau puissant",
      category: "complementary",
    },
    {
      icon: SiCplusplus,
      name: "C++",
      description: "Extension orientée objet du C",
      category: "complementary",
    },
    {
      icon: FaJava,
      name: "Java",
      description: "Langage orienté objet robuste",
      category: "complementary",
    },
  ];

  return (
    <>
      <PageTitle>Comment je travaille</PageTitle>

        {/* Intro orientée TPE / indépendants */}
      <Section title="Mettre le web au service de votre activité">
        <p className="text-base sm:text-lg lg:text-xl">
          Je conçois et développe des sites web modernes et performants pour des petites
          entreprises, indépendants et structures locales. Mon objectif : vous aider à
          présenter clairement votre activité, gagner en crédibilité en ligne et faciliter
          la prise de contact avec vos futurs clients.
        </p>
      </Section>

      <Section>
        <div className="flex justify-center mt-6">
          <img
            src="/assets/images/me-working.avif"
            alt="Julien Lisita en train de travailler"
            className="rounded-xl shadow-lg w-full max-w-[420px] h-auto object-cover"
            width="420"
            height="280"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Section>
{/* 
      <Section title="Conception & maquettes">
        <p className="text-base sm:text-lg lg:text-xl">
          Avant la phase de développement, j’utilise Figma pour définir la structure des pages,
          organiser les contenus et valider l’apparence générale du site. Cela permet d’avoir
          une vision claire du résultat et d’éviter les allers-retours inutiles.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          <TechCard icon={FaFigma} name="Figma" description="Maquettes & structure du site" color="#5AC8FA" />
        </div>
      </Section> */}

      <Section title="Développement web moderne">
        <p className="text-base sm:text-lg lg:text-xl">
          Côté interface, j’utilise principalement React, Next.js, TypeScript et Tailwind
          CSS pour créer des sites rapides, lisibles et adaptés au mobile. Ces technologies
          me permettent de construire des pages claires, qui mettent en valeur votre
          activité sans sacrifier les performances ni la simplicité.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {technologies
            .filter((tech) => tech.category === "frontend")
            .map((tech, idx) => (
              <TechCard key={idx} color="#007AFF" {...tech} />
            ))}
        </div>
      </Section>

      <Section title="Backend & gestion des données">
        <p className="text-base sm:text-lg lg:text-xl">
          Au-delà de l’interface, je mets en place tout ce qui se passe “derrière”
          votre site : gestion des formulaires de contact, stockage des contenus,
          zones d’administration simples à utiliser. L’idée est d’avoir une base
          technique fiable, pour que votre site reste facile à faire évoluer sans
          tout refaire.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {technologies
            .filter((tech) => tech.category === "backend")
            .map((tech, idx) => (
              <TechCard key={idx} color="#9B59B6" {...tech} />
            ))}
        </div>
      </Section>

      <Section title="Déploiement, performance & outils du quotidien">
        <p className="text-base sm:text-lg lg:sm:text-xl">
          J’utilise des plateformes de déploiement modernes pour que votre site soit
          rapide, disponible en permanence et simple à mettre à jour. Vous n’avez pas
          à vous soucier de la technique : je gère l’hébergement, les mises en ligne
          et les optimisations de performance.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {technologies
            .filter((tech) => tech.category === "deployment")
            .map((tech, idx) => (
              <TechCard key={idx} color="#5AC8FA" {...tech} />
            ))}
        </div>
      </Section>

      <Section title="Compétences techniques complémentaires">
        <p className="text-base sm:text-lg lg:text-xl">
          Avant de me spécialiser dans le web, j’ai travaillé sur des projets plus
          techniques (C, C++, Java) orientés algorithmique, jeux en console et logique
          applicative. Ces expériences renforcent ma rigueur et ma capacité à concevoir des
          solutions robustes, même si aujourd’hui je me concentre sur le développement web.
          Certains de ces projets sont visibles sur mon profil GitHub.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {technologies
            .filter((tech) => tech.category === "complementary")
            .map((tech, idx) => (
              <TechCard key={idx} color="#FF66B2" {...tech} />
            ))}
        </div>
        <p className="text-sm text-center text-gray-500 mt-6">
          🔗 Voir mes projets techniques sur GitHub :
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

      <FaqSection
        title="FAQ — Compétences"
        faq={faq}
        ariaLabelledby="faq-skills-title"
      />

      <CtaFinal
        title="Mettons ces compétences au service de votre projet"
        tagline="Que ce soit pour un site vitrine ou une application web légère, je peux vous accompagner de la conception à la mise en ligne."
        primary={{ href: "/contact", text: "Discuter de votre projet" }}
        secondary={{ href: "/services", text: "Voir mes services" }}
      />
    </>
  );
}