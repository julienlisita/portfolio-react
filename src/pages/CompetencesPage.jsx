// src/pages/CompetencePage.jsx

import TechCard from "../components/common/TechCard";
import PageTitle from "../components/common/PageTitle";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaJava,
  FaFigma,
  FaGitAlt,

} from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiSequelize,
  SiMysql,
  SiMamp,
  SiFirebase,
  SiRailway,
  SiRedux,
  SiJest,
  SiPostman,
  SiExpo,
  SiVercel,
  SiC,
  SiNetlify,
  SiNotion,
  SiTrello,
  SiSentry,
  SiGithubactions,
  SiDocker,
  SiTypescript,
  SiJenkins,
  SiPostgresql,
  SiGraphql,
  SiRender,
  SiPrisma,
} from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import Section from "../components/common/Section";

export default function CompetencePage() {
const technologies = [
   
    { icon: FaJsSquare, name: "JavaScript", description: "Langage dynamique pour le web", category: "language" },
    { icon: SiTypescript, name: "TypeScript", description: "JavaScript typé pour plus de fiabilité", category: "language" },
    { icon: FaHtml5, name: "HTML5", description: "Structure des pages web", category: "language" },
    { icon: FaCss3Alt, name: "CSS3", description: "Styles responsives et animations", category: "language" },
    { icon: FaJava, name: "Java", description: "Langage orienté objet robuste", category: "language" },
    { icon: SiC, name: "C", description: "Langage bas niveau puissant", category: "language" },
    { icon: SiCplusplus, name: "C++", description: "Extension orientée objet du C", category: "language" },
    { icon: FaReact, name: "React", description: "Interfaces dynamiques et réactives", category: "framework" },
    { icon: SiNextdotjs, name: "Next.js", description: "Framework React pour le rendu SSR/SSG", category: "framework" },
    { icon: FaNodeJs, name: "Node.js", description: "Back-end performant avec JavaScript", category: "framework" },
    { icon: SiExpress, name: "Express.js", description: "Framework minimaliste pour Node.js", category: "framework" },
    { icon: FaSass, name: "Sass", description: "Préprocesseur CSS puissant", category: "framework" },
    { icon: SiTailwindcss, name: "Tailwind CSS", description: "Framework utilitaire CSS moderne", category: "framework" },
    { icon: SiGraphql, name: "GraphQL", description: "API flexible orientée requêtes", category: "framework" },
    { icon: SiMysql, name: "MySQL", description: "Base de données relationnelle", category: "database" },
    { icon: SiPostgresql, name: "PostgreSQL", description: "Base de données relationnelle avancée", category: "database" },
    { icon: SiSequelize, name: "Sequelize", description: "ORM SQL pour Node.js", category: "database" },
    { icon: SiPrisma, name: "Prisma", description: "ORM moderne pour Node.js et TypeScript, rapide et type-safe.", category: "database" },
    { icon: SiDocker, name: "Docker", description: "Conteneurisation d'applications", category: "tool" },
    // { icon: SiFirebase, name: "Firebase", description: "Backend as a Service par Google", category: "mobile" },
    // { icon: SiExpo, name: "Expo", description: "Outils et services pour React Native", category: "mobile" },
    // { icon: FaArrowRight, name: "React Navigation", description: "Navigation pour React Native", category: "mobile" },
    // { icon: SiRedux, name: "Redux", description: "Gestion d’état globale pour React", category: "mobile" },
    { icon: SiPostman, name: "Postman", description: "Test et documentation d’API", category: "tool" },
    // { icon: SiVisualstudiocode, name: "VS Code", description: "Éditeur de code moderne et extensible", category: "tool" },
    { icon: SiJest, name: "Jest", description: "Tests unitaires JavaScript", category: "testing" },
    { icon: SiSentry, name: "Sentry", description: "Monitoring des erreurs en production", category: "testing" },
    { icon: SiVercel, name: "Vercel", description: "Déploiement instantané d'apps front-end", category: "testing" },
    { icon: SiNetlify, name: "Netlify", description: "Plateforme de déploiement front-end", category: "testing" },
    { icon: SiRailway, name: "Railway", description: "Plateforme cloud pour déployer apps et bases de données.", category: "testing" },
    { icon: SiRender, name: "Render", description: "Plateforme de déploiement cloud full-stack", category: "testing" },
    { icon: SiMamp, name: "MAMP", description: "Serveur local PHP/MySQL pour macOS/Windows", category: "tool" },
    { icon: SiGithubactions, name: "GitHub Actions", description: "Outil d’automatisation pour tester du code directement depuis GitHub", category: "testing" },
    { icon: SiJenkins, name: "Jenkins", description: "Serveur d’intégration continue open source", category: "testing" },
    { icon:  FaGitAlt, name: "Git", description: "Versionnage et collaboration de code", category: "collaboration" },
    { icon: SiTrello, name: "Trello", description: "Gestion de projet visuelle", category: "collaboration" },
    { icon: SiNotion, name: "Notion", description: "Organisation et documentation centralisée", category: "collaboration" },
    { icon: FaFigma, name: "Figma", description: "Outil de design UI collaboratif", category: "collaboration" },

  ];

  return (
    <>
      <PageTitle>Mes compétences techniques</PageTitle>
      <Section title="Langages de programmation">
        <p className="text-base sm:text-lg lg:text-xl">
       Ces langages constituent la base de mes développements, du bas niveau à la programmation orientée objet, en passant par le scripting web.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {[...technologies].filter(tech => tech.category === "language").map((tech, idx) => (
            <TechCard key={idx} color="#5AC8FA"{...tech} />
          ))}
        </div>
      </Section>
      <Section title="Frameworks & Bibliothèques">
        <p className="text-base sm:text-lg lg:text-xl">
        Ces outils me permettent de structurer mes projets, accélérer le développement et produire des interfaces modernes et performantes.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {[...technologies].filter(tech => tech.category === "framework").map((tech, idx) => (
            <TechCard key={idx} color="#007AFF" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Base de données & ORM">
        <p className="text-base sm:text-lg lg:text-xl">
        La maîtrise des bases de données relationnelles et des ORM me permet de structurer les données de façon optimisée et sécurisée.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "database").map((tech, idx) => (
            <TechCard key={idx} color="#9B59B6" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Outils et environnements">
        <p className="text-base sm:text-lg lg:text-xl">
        J’utilise ces outils pour gagner en efficacité au quotidien, créer des environnements reproductibles et travailler en équipe.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "tool").map((tech, idx) => (
            <TechCard key={idx} color="#FF66B2" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Test et deploiement">
        <p className="text-base sm:text-lg lg:text-xl">
        Pour garantir la qualité du code et la stabilité des livraisons, j’intègre des tests et des pipelines d’automatisation dans mes projets.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "testing").map((tech, idx) => (
            <TechCard key={idx} color="#5AC8FA" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Outils de gestion & collaboration">
        <p className="text-base sm:text-lg lg:text-xl">
         Ces solutions me permettent d’organiser, planifier et suivre chaque étape du développement pour avancer de manière structurée et collaborative.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "collaboration").map((tech, idx) => (
            <TechCard key={idx} color="#007AFF" {...tech} />
          ))}
        </div>
      </Section>
    </>
  );
}