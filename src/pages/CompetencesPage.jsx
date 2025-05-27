import TechCard from "../components/TechCard";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSass,
  FaJava,
  FaFigma,
  FaGithub,
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
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

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
    { icon: FaGithub, name: "GitHub", description: "Versionnage et collaboration de code", category: "gestion" },
    { icon: SiTrello, name: "Trello", description: "Gestion de projet visuelle", category: "gestion" },
    { icon: SiNotion, name: "Notion", description: "Organisation et documentation centralisée", category: "gestion" },

  ];

  return (
    <section className="pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      <PageTitle>Mes compétences techniques</PageTitle>
      <SectionTitle>Langages de programmation</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "language").map((tech, idx) => (
          <TechCard key={idx} {...tech} />

        ))}
      </div>
      <SectionTitle>Front end</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "front").map((tech, idx) => (
          <TechCard key={idx} {...tech} />
        ))}
      </div>
      <SectionTitle>Back end</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
       {[...technologies].filter(tech => tech.category === "back").map((tech, idx) => (
          <TechCard key={idx} {...tech} />
        ))}
      </div>
      <SectionTitle>Test et deploiement</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
       {[...technologies].filter(tech => tech.category === "test").map((tech, idx) => (
          <TechCard key={idx} {...tech} />
        ))}
      </div>

      <SectionTitle>Gestion de projet</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
       {[...technologies].filter(tech => tech.category === "gestion").map((tech, idx) => (
          <TechCard key={idx} {...tech} />
        ))}
      </div>
    </section>
  );
}