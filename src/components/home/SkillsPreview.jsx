// src/components/home/SkillsPreview.jsx

import HomeSection from "./HomeSection";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRailway,
  SiExpress,
  SiPostgresql,
  SiNetlify,
  SiSequelize,
  SiVercel,
} from "react-icons/si";
import SkillCard from "../common/SkillCard";

export default function SkillesPreview() {

    const skillsData = [
    {
      title: " Interfaces modernes ",
      description:
        "Conception d’interfaces modernes, rapides et responsives à partir de maquettes Figma. Utilisation de technologies récentes comme TypeScript, Next.js et Tailwind CSS pour offrir une expérience fluide sur tous les écrans.",
      icons: [
        <FaFigma key="Figma" />,
        <SiTypescript key="typescript"/>,
        <SiNextdotjs key="next"/>,
        <SiTailwindcss key="tailwind" />,
      ],
    },
    {
      title: "Services web & gestion des données",
      description:
        "Mise en place d’un système back-end fiable et sécurisé, permettant de gérer les utilisateurs, les contenus et les données. Une base technique claire, pensée pour accompagner la croissance du projet.",
      icons: [
        <FaNodeJs key="node" />,
        <SiExpress key="express" />,
        <SiSequelize key="sequelize" />,
        <SiPostgresql key="postgres" />,
      ],
    },
    {
      title: "Collaboration & mise en production",
      description:
        "Mise en production simplifiée avec Vercel, Railway ou GitHub. Un environnement organisé pour livrer des projets fiables, maintenables et performants.",
      icons: [
        <SiNetlify key="netlify" />,
        <SiRailway key="railway" />,
        <SiVercel key="vercel" />,
        <FaGitAlt key="git" />,
      ],
    },
  ];

  return (
    <HomeSection
    id="competences"
    title="Les technologies utilisées"
    link={{ href: "/competences", text: "Compétences" }}
  >
    <p className="text-base sm:text-lg lg:text-xl">
      Le choix des technologies jouant un rôle clé dans la réussite d’un projet, voici un aperçu des outils que j’utilise à chaque étape de réalisation.
    </p>
  
    <div className="flex flex-col gap-6">
      {skillsData.map(({ title, description, icons }, index) => (
     <SkillCard
        key={index}
        title={title}
        description={description}
        icons={icons}
     />
      ))}
    </div>
  </HomeSection>
  );
}