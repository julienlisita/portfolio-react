// src/components/home/SkillsPreview.jsx

import HomeSection from "./HomeSection";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaTrello,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRailway,
  SiExpress,
  SiMysql,
  SiNetlify,
  SiSequelize,
} from "react-icons/si";
import SkillCard from "../common/SkillCard";

export default function SkillesPreview() {

    const skillsData = [
    {
      title: "Interfaces modernes",
      description:
        "Création d’interfaces modernes et performantes grâce à HTML5, CSS3, Tailwind CSS, Sass, et JavaScript. Développement d’applications interactives avec React et Next.js, en s’appuyant sur Figma pour concevoir des maquettes et garantir une expérience utilisateur fluide.",
      icons: [
        <FaReact key="react" />,
        <SiNextdotjs key="next"/>,
        <SiTailwindcss key="tailwind" />,
        <FaFigma key="figma"/>
      ],
    },
    {
      title: "Back-end & bases de données",
      description:
        "Développement de systèmes robustes et évolutifs avec Node.js et Express. Gestion efficace des données grâce à MySQL et l’ORM Sequelize, assurant des performances optimales et une maintenance simplifiée.",
      icons: [
        <FaNodeJs key="node" />,
        <SiExpress key="express" />,
        <SiSequelize key="sequelize" />,
        <SiMysql key="mysql" />,
      ],
    },
    {
      title: "Outils & déploiement",
      description:
        "Hébergement, mise en ligne, et automatisation avec Vercel, Netlify, et Firebase Hosting. Surveillance des performances et collaboration facilitée via Git, GitHub Actions, et outils de gestion comme Trello et Notion.",
      icons: [
        <SiNetlify key="netlify" />,
         <SiRailway key="railway" />,
        <FaGitAlt key="git" />,
        <FaTrello key="trello" />,
      ],
    },
  ];

  return (
    <HomeSection
    id="competences"
    title="Mes compétences"
    link={{ href: "/competences", text: "En savoir plus" }}
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