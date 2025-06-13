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
  FaArrowRight,
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
  SiGithubactions
} from "react-icons/si";
import Section from "../components/common/Section";

export default function CompetencePage() {
const technologies = [
   
    { icon: FaJsSquare, name: "JavaScript", description: "Langage dynamique pour le web", category: "language" },
    { icon: FaJava, name: "Java", description: "Langage orienté objet robuste", category: "language" },
    { icon: SiC, name: "C", description: "Langage bas niveau puissant", category: "language" },
    { icon: SiCplusplus, name: "C++", description: "Extension orientée objet du C", category: "language" },
    { icon: FaHtml5, name: "HTML5", description: "Structure des pages web", category: "front" },
    { icon: FaCss3Alt, name: "CSS3", description: "Styles responsives et animations", category: "front" },
    { icon: FaReact, name: "React", description: "Interfaces dynamiques et réactives", category: "front" },
    { icon: SiNextdotjs, name: "Next.js", description: "Framework React pour le rendu SSR/SSG", category: "front" },
    { icon: FaSass, name: "Sass", description: "Préprocesseur CSS puissant", category: "front" },
    { icon: SiTailwindcss, name: "Tailwind CSS", description: "Framework utilitaire CSS moderne", category: "front" },
    { icon: FaFigma, name: "Figma", description: "Outil de design UI collaboratif", category: "front" },
    { icon: FaNodeJs, name: "Node.js", description: "Back-end performant avec JavaScript", category: "back" },
    { icon: SiExpress, name: "Express.js", description: "Framework minimaliste pour Node.js", category: "back" },
    { icon: SiSequelize, name: "Sequelize", description: "ORM SQL pour Node.js", category: "back" },
    { icon: SiMysql, name: "MySQL", description: "Base de données relationnelle", category: "back" },
    { icon: SiFirebase, name: "Firebase", description: "Backend as a Service par Google", category: "mobile" },
    { icon: SiExpo, name: "Expo", description: "Outils et services pour React Native", category: "mobile" },
    { icon: FaArrowRight, name: "React Navigation", description: "Navigation pour React Native", category: "mobile" },
    { icon: SiRedux, name: "Redux", description: "Gestion d’état globale pour React", category: "mobile" },
    { icon: SiPostman, name: "Postman", description: "Test et documentation d’API", category: "test" },
    { icon: SiJest, name: "Jest", description: "Tests unitaires JavaScript", category: "test" },
    { icon: SiSentry, name: "Sentry", description: "Monitoring des erreurs en production", category: "test" },
    { icon: SiVercel, name: "Vercel", description: "Déploiement instantané d'apps front-end", category: "test" },
    { icon: SiNetlify, name: "Netlify", description: "Plateforme de déploiement front-end", category: "test" },
    { icon: SiRailway, name: "Railway", description: "Plateforme cloud pour déployer apps et bases de données.", category: "test" },
    { icon: SiMamp, name: "MAMP", description: "Serveur local PHP/MySQL pour macOS/Windows", category: "test" },
    { icon: SiGithubactions, name: "GitHub Actions", description: "Outil d’automatisation pour tester du code directement depuis GitHub", category: "test" },
    { icon:  FaGitAlt, name: "Git", description: "Versionnage et collaboration de code", category: "gestion" },
    { icon: SiTrello, name: "Trello", description: "Gestion de projet visuelle", category: "gestion" },
    { icon: SiNotion, name: "Notion", description: "Organisation et documentation centralisée", category: "gestion" },

  ];

  return (
    <>
      <PageTitle>Mes compétences techniques</PageTitle>
      <Section title="Langages de programmation">
        <p className="text-base sm:text-lg lg:text-xl">
        Ces langages sont le socle de tout développement : ils me permettent d’exprimer la logique métier, de structurer les traitements et d’assurer la robustesse des applications.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {[...technologies].filter(tech => tech.category === "language").map((tech, idx) => (
            <TechCard key={idx} color="#5AC8FA"{...tech} />
          ))}
        </div>
      </Section>
      <Section title="Front end">
        <p className="text-base sm:text-lg lg:text-xl">
        Le front-end regroupe les technologies qui donnent vie à l’interface : elles permettent de créer des expériences utilisateurs fluides, intuitives et visuellement engageantes.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {[...technologies].filter(tech => tech.category === "front").map((tech, idx) => (
            <TechCard key={idx} color="#007AFF" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Back end">
        <p className="text-base sm:text-lg lg:text-xl">
         Ces outils servent à gérer les données, la logique serveur, la sécurité et la communication entre le front et les bases de données : le cœur invisible mais essentiel d’une application.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "back").map((tech, idx) => (
            <TechCard key={idx} color="#9B59B6" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Test et deploiement">
        <p className="text-base sm:text-lg lg:text-xl">
         Ces outils assurent la qualité du code, la stabilité en production, et l’automatisation du déploiement pour livrer plus vite et plus sereinement.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "test").map((tech, idx) => (
            <TechCard key={idx} color="#FF66B2" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Gestion de projet">
        <p className="text-base sm:text-lg lg:text-xl">
         Ces solutions me permettent d’organiser, planifier et suivre chaque étape du développement pour avancer de manière structurée et collaborative.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "gestion").map((tech, idx) => (
            <TechCard key={idx} color="#2ECC71" {...tech} />
          ))}
        </div>
      </Section>
    </>
  );
}