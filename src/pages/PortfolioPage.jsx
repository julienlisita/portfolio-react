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

      {/* Introduction*/}
      <section>
        <div className="text-left">
          <p className=" mt-8 sm:mt-10 lg:mt-12 text-left">
            Voici quelques-uns des projets sur lesquels j’ai travaillé. Vous y trouverez des applications web complètes, des sites vitrines modernes, ainsi que divers projets de développement mettant en avant des concepts de programmation procédurale, orientée objet et d’algorithmie. Cliquez sur chaque projet pour en savoir plus.
          </p>
        </div>
      </section>

      {/* Liste des projets Web */}
      <section>
        <SectionTitle>Applications web</SectionTitle>
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {[...projects].filter(project => project.category === "web").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </section>

      {/* Liste des projets sites vitrines */}
      <section>
        <SectionTitle>Sites vitrines et templates</SectionTitle>
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {[...projects].filter(project => project.category === "vitrines").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </section>
      
      {/* Listes des autres projets de développement */}
      <section>
        <SectionTitle>Autres projets de développement</SectionTitle>
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {[...projects].filter(project => project.category === "dev").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </section>
  </>
  );
}