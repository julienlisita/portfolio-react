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
        "Je conçois des interfaces modernes, rapides et adaptées à tous les écrans, à partir de maquettes Figma, pour que vos visiteurs aient une expérience fluide et agréable.",
      icons: [
        <FaFigma key="Figma" />,
        <SiTypescript key="typescript"/>,
        <SiNextdotjs key="next"/>,
        <SiTailwindcss key="tailwind" />,
      ],
    },
    {
      title: "Services web & données",
      description:
        "Je mets en place une base technique claire pour gérer vos contenus, utilisateurs et formulaires de manière sécurisée et évolutive.",
      icons: [
        <FaNodeJs key="node" />,
        <SiExpress key="express" />,
        <SiSequelize key="sequelize" />,
        <SiPostgresql key="postgres" />,
      ],
    },
    {
      title: "Mise en ligne & fiabilité",
      description:
        "Je m’occupe de la mise en production sur des plateformes fiables (Vercel, Railway…) pour que votre site soit accessible, rapide et simple à maintenir.",
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
    link={{ href: "/comment-je-travaille", text: "Comment je travaille" }}
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