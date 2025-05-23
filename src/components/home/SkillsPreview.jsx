import HomeSection from "./HomeSection";
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaTrello,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiRailway,
  SiExpress,
  SiMysql,
  SiRedux,
  SiFirebase,
  SiExpo,
  SiVercel,
  SiNetlify,
  SiNotion,
  SiSequelize,
  SiAxios,
} from "react-icons/si";

export default function SkillesPreview() {

    const skillsData = [
    {
      title: "Interfaces modernes",
      description:
        "Création d’interfaces modernes et performantes grâce à HTML5, CSS3, Tailwind CSS, Sass, et JavaScript. Développement d’applications interactives avec React et Next.js, en s’appuyant sur Figma pour concevoir des maquettes et garantir une expérience utilisateur fluide.",
      icons: [
        <FaReact key="react" />,
        <FaSass key="sass"/>,
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
    // {
    //   title: "Applications mobiles",
    //   description:
    //     "Conception d’applications mobiles hybrides multiplateformes avec React Native, Redux, et Expo. Intégration de fonctionnalités modernes et synchronisation des données grâce à Firebase et Axios.",
    //   icons: [
    //     <FaReact key="react-native" />,
    //     <SiRedux key="redux" />,
    //     <SiFirebase key="firebase" />,
    //     <SiExpo key="expo" />,
    //     <SiAxios key="axios" />,
    //   ],
    // },
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
    <p className="text-white text-base sm:text-lg lg:text-xl">
      En tant que développeur full stack et mobile, je mets à votre disposition une expertise technique diversifiée pour concevoir des applications modernes, performantes et évolutives. Voici un aperçu des technologies que j’utilise pour transformer vos idées en réalité.
    </p>
  
    <div className="flex flex-col gap-6 mt-8">
      {skillsData.map(({ title, description, icons }, index) => (
      <div key={index} className="relative pl-10">
      {/* Lueur subtile et fondue */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-t from-[#9B59B6] to-[#007AFF] blur-[6px] z-10 pointer-events-none" />
    
      {/* Bordure nette par-dessus */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-t from-[#9B59B6] to-[#007AFF] z-20" />
    
      <div className="relative z-30">
        
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-base text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap items-center gap-4 text-[#9B59B6] text-[28px]">
          {icons.map((IconComponent, i) => (
            <span key={i}>{IconComponent}</span>
          ))}
        </div>
      </div>
    </div>
      ))}
    </div>
  </HomeSection>
  );
}