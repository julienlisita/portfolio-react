import { projects } from "../data/projectsData";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/home/ProjectCard";

export default function Portfolio() {
  return (
    <div className="pt-14 sm:pt-16 lg:pt-20 text-white pb-16 sm:pb-20 lg:pb-24">
      {/* Titre de la page */}
      <PageTitle>Portfolio</PageTitle>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        {/* Introduction ou section d'accueil */}
        <div className="text-left">
          <p className="text-gray-300 mt-4">
            Voici quelques-uns des projets sur lesquels j'ai travaillé. Cliquez sur chaque projet pour en savoir plus.
          </p>
        </div>

        {/* Liste des projets */}
        <div className="w-full flex flex-wrap justify-center lg:justify-between gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
          </div>
        </div>
      </div>
  );
}