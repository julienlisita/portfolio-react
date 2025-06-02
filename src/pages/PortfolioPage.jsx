// src/pages/PortfolioPage.jsx

import { projects } from "../data/projectsData";
import PageTitle from "../components/common/PageTitle";
import ProjectCard from "../components/common/ProjectCard";
import SectionTitle from "../components/common/SectionTitle";

export default function Portfolio() {
  return (
    <>
      {/* Titre de la page */}
      <PageTitle>Portfolio</PageTitle>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        {/* Introduction ou section d'accueil */}
        <div className="text-left">
          <p className=" mt-4 text-left">
            Voici quelques-uns des projets sur lesquels j’ai travaillé. Vous y trouverez des applications web complètes, des sites vitrines modernes, ainsi que divers projets de développement mettant en avant des concepts de programmation procédurale, orientée objet et d’algorithmie. Cliquez sur chaque projet pour en savoir plus.
          </p>
        </div>

        {/* Liste des projets Web */}
        <SectionTitle>Applications web</SectionTitle>
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {[...projects].filter(project => project.category === "web").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>

        {/* Liste des projets sites vitrines */}
        <SectionTitle>Sites vitrines et templates</SectionTitle>
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {[...projects].filter(project => project.category === "vitrines").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
       
        {/* Listes des autres projets de développement */}
        <SectionTitle>Autres projets de développement</SectionTitle>
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {[...projects].filter(project => project.category === "dev").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </div>
  </>
  );
}