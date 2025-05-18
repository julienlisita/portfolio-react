import { projects } from "../data/projectsData";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/home/ProjectCard";
import SectionTitle from "../components/SectionTitle";

export default function Portfolio() {
  return (
    <div className="pt-14 sm:pt-16 lg:pt-20 text-white pb-16 sm:pb-20 lg:pb-24">
      {/* Titre de la page */}
      <PageTitle>Portfolio</PageTitle>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        {/* Introduction ou section d'accueil */}
        <div className="text-left">
          <p className="text-gray-300 mt-4 text-center">
            Voici quelques-uns des projets sur lesquels j'ai travaillé. Cliquez sur chaque projet pour en savoir plus.
          </p>
        </div>

        {/* Liste des projets Web */}
        <SectionTitle>Projets web</SectionTitle>
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {[...projects].filter(project => project.category === "web").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
       

        {/* Autres projets de développement */}
        <SectionTitle>Autres projets de développement</SectionTitle>
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {[...projects].filter(project => project.category === "dev").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </div>
  </div>
  );
}