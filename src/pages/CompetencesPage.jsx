// src/pages/CompetencePage.jsx

import TechCard from "../components/common/TechCard";
import PageTitle from "../components/common/PageTitle";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
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
  SiJest,
  SiPostman,
  SiPython,
  SiVercel,
  SiC,
  SiNetlify,
  SiNotion,
  SiJira,
  SiGithubactions,
  SiDocker,
  SiTypescript,
  SiJenkins,
  SiPostgresql,
  SiGraphql,
  SiRender,
  SiPrisma,
} from "react-icons/si";
import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";

export default function CompetencePage() {
const technologies = [
   
    { icon: FaJsSquare, name: "JavaScript", description: "Langage dynamique pour le web", category: "langages web" },
    { icon: SiTypescript, name: "TypeScript", description: "JavaScript typé pour plus de fiabilité", category: "langages web" },
    { icon: FaHtml5, name: "HTML5", description: "Structure des pages web", category: "langages web" },
    { icon: FaCss3Alt, name: "CSS3", description: "Styles responsives et animations", category: "langages web" },
    { icon: SiC, name: "C", description: "Langage bas niveau puissant", category: "autres langages" },
    { icon: SiCplusplus, name: "C++", description: "Extension orientée objet du C", category: "autres langages" },
    { icon: FaJava, name: "Java", description: "Langage orienté objet robuste", category: "autres langages" },
    { icon: SiPython, name: "Python", description: "Langage polyvalent utilisé pour l’automatisation et la data", category: "autres langages" },
    { icon: FaReact, name: "React", description: "Interfaces dynamiques et réactives", category: "framework" },
    { icon: SiNextdotjs, name: "Next.js", description: "Framework React pour le rendu SSR/SSG", category: "framework" },
    { icon: FaNodeJs, name: "Node.js", description: "Back-end performant avec JavaScript", category: "framework" },
    { icon: SiExpress, name: "Express.js", description: "Framework minimaliste pour Node.js", category: "framework" },
    { icon: SiTailwindcss, name: "Tailwind CSS", description: "Framework utilitaire CSS moderne", category: "framework" },
    { icon: SiGraphql, name: "GraphQL", description: "API flexible orientée requêtes", category: "framework" },
    { icon: SiMysql, name: "MySQL", description: "Base de données relationnelle", category: "database" },
    { icon: SiPostgresql, name: "PostgreSQL", description: "Base de données relationnelle avancée", category: "database" },
    { icon: SiSequelize, name: "Sequelize", description: "ORM SQL pour Node.js", category: "database" },
    { icon: SiPrisma, name: "Prisma", description: "ORM moderne pour Node.js et TypeScript, rapide et type-safe.", category: "database" },
    { icon: SiDocker, name: "Docker", description: "Conteneurisation d'applications", category: "tool" },
    { icon: SiPostman, name: "Postman", description: "Test et documentation d’API", category: "tool" },
    { icon: SiJest, name: "Jest", description: "Tests unitaires JavaScript", category: "testing" },
    { icon: SiVercel, name: "Vercel", description: "Déploiement instantané d'apps front-end", category: "testing" },
    { icon: SiNetlify, name: "Netlify", description: "Plateforme de déploiement front-end", category: "testing" },
    { icon: SiRender, name: "Render", description: "Plateforme de déploiement cloud full-stack", category: "testing" },
    { icon: SiGithubactions, name: "GitHub Actions", description: "Outil d’automatisation pour tester du code directement depuis GitHub", category: "testing" },
    { icon: SiJenkins, name: "Jenkins", description: "Serveur d’intégration continue open source", category: "testing" },
    { icon: FaGitAlt, name: "Git", description: "Versionnage et collaboration de code", category: "collaboration" },
    { icon: SiNotion, name: "Notion", description: "Organisation et documentation centralisée", category: "collaboration" },
    { icon: SiJira, name: "Jira", description: "Outil de gestion de projet agile", category: "collaboration" },
    { icon: FaFigma, name: "Figma", description: "Outil de design UI collaboratif", category: "collaboration" },

  ];

  return (
    <>
      <PageTitle>Mes compétences techniques</PageTitle>
      <Section title="Langages du web">
        <p className="text-base sm:text-lg lg:text-xl">
       Ces langages constituent la base de mes développements, du bas niveau à la programmation orientée objet, en passant par le scripting web.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {[...technologies].filter(tech => tech.category === "langages web").map((tech, idx) => (
            <TechCard key={idx} color="#5AC8FA"{...tech} />
          ))}
        </div>
      </Section>
      <Section title=" Outils pour créer des interfaces et des APIs">
        <p className="text-base sm:text-lg lg:text-xl">
        Ces outils me permettent de structurer mes projets, accélérer le développement et produire des interfaces modernes et performantes.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
          {[...technologies].filter(tech => tech.category === "framework").map((tech, idx) => (
            <TechCard key={idx} color="#007AFF" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Données & stockage">
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
      <Section title="Qualité & mise en ligne">
        <p className="text-base sm:text-lg lg:text-xl">
        Pour garantir la qualité du code et la stabilité des livraisons, j’intègre des tests et des pipelines d’automatisation dans mes projets.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "testing").map((tech, idx) => (
            <TechCard key={idx} color="#5AC8FA" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Organisation & suivi de projet">
        <p className="text-base sm:text-lg lg:text-xl">
         Ces solutions me permettent d’organiser, planifier et suivre chaque étape du développement pour avancer de manière structurée et collaborative.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "collaboration").map((tech, idx) => (
            <TechCard key={idx} color="#007AFF" {...tech} />
          ))}
        </div>
      </Section>
      <Section title="Autres compétences">
        <p className="text-base sm:text-lg lg:text-xl">
          Expérience passée en C, C++ et Java (embarqué/industrie). Utile pour des missions spécifiques.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 sm:mt-10 lg:mt-12">
        {[...technologies].filter(tech => tech.category === "autres langages").map((tech, idx) => (
            <TechCard key={idx} color="#9B59B6" {...tech} />
          ))}
        </div>
      </Section>

      <CtaFinal
        title="Mettons mes compétences au service de votre projet"
        tagline="De la conception au déploiement, je mets tout en œuvre pour réussir votre solution."
        link={{ href: "/contact", text: "Collaborer avec moi" }}
      />
    </>
  );
}