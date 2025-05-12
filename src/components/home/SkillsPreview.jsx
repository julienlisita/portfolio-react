import HomeSection from "./HomeSection";

export default function SkillesPreview() {
  const skillsData = [
    {
      title: "Interfaces modernes",
      description:
        "Création d’interfaces modernes et performantes grâce à HTML5, CSS3, Tailwind CSS, Sass, et JavaScript. Développement d’applications interactives avec React et Next.js, en s’appuyant sur Figma pour concevoir des maquettes et garantir une expérience utilisateur fluide.",
      icons: [
        "./src/assets/logos/tech/react.png",
        "./src/assets/logos/tech/next.svg",
        "./src/assets/logos/tech/tailwind.png",
        "./src/assets/logos/tech/figma.svg",
      ],
    },
    {
      title: "Back-end & bases de données",
      description:
        "Développement de systèmes robustes et évolutifs avec Node.js et Express. Gestion efficace des données grâce à MySQL, MongoDB, et l’ORM Sequelize, assurant des performances optimales et une maintenance simplifiée.",
      icons: [
        "./src/assets/logos/tech/node.png",
        "./src/assets/logos/tech/express.svg",
        "./src/assets/logos/tech/mongodb.svg",
        "./src/assets/logos/tech/mysql.svg",
      ],
    },
    // {
    //   title: "Applications mobiles",
    //   description:
    //     "Conception d’applications mobiles hybrides multiplateformes avec React Native, Redux, et Expo. Intégration de fonctionnalités modernes et synchronisation des données grâce à Firebase et Axios.",
    //   icons: [
    //     "./src/assets/logos/tech/react-native.svg",
    //     "./src/assets/logos/tech/redux.svg",
    //     "./src/assets/logos/tech/firebase.svg",
    //     "./src/assets/logos/tech/expo.svg",
    //   ],
    // },
    {
      title: "Outils & déploiement",
      description:
        "Hébergement, mise en ligne, et automatisation avec Docker, Vercel, Netlify, et Firebase Hosting. Surveillance des performances et collaboration facilitée via Git, GitHub Actions, et outils de gestion comme Trello et Notion.",
      icons: [
        "./src/assets/logos/tech/docker.svg",
        "./src/assets/logos/tech/netlify.svg",
        "./src/assets/logos/tech/git.svg",
        "./src/assets/logos/tech/trello.svg",
      ],
    },
  ];

  return (
    <HomeSection
    id="competences"
    title="Mes compétences"
    link={{ href: "/competences", text: "En savoir plus" }}
  >
    <p className="text-white w-4/5 text-base sm:text-lg lg:text-xl">
      En tant que développeur full stack et mobile, je mets à votre disposition une expertise technique diversifiée pour concevoir des applications modernes, performantes et évolutives. Voici un aperçu des technologies que j’utilise pour transformer vos idées en réalité.
    </p>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 w-4/5 ">
      {skillsData.map(({ title, description, icons }, index) => (
      <div key={index} className="relative pl-10">
      {/* Lueur subtile et fondue */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-t from-[#9B59B6] to-[#007AFF] blur-[6px] z-10 pointer-events-none" />
    
      {/* Bordure nette par-dessus */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-t from-[#9B59B6] to-[#007AFF] z-20" />
    
      <div className="relative z-30">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-base text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap items-center gap-4">
          {icons.map((icon, i) => (
            <img key={i} src={icon} alt="Tech logo" className="h-7 w-auto" />
          ))}
        </div>
      </div>
    </div>
      ))}
    </div>
  </HomeSection>
  );
}