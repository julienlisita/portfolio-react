// src/pages/PortfolioPage.jsx

import { projects } from "../data/projectsData";
import PageTitle from "../components/common/PageTitle";
import ProjectCard from "../components/common/ProjectCard";
import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";

export default function Portfolio() {
  return (
    <>
      {/* Titre de la page */}
      <PageTitle>Portfolio</PageTitle>

      {/* Introduction*/}
      <Section>
        <p className="text-left max-w-5xl m-auto">
          Voici quelques-uns des projets sur lesquels j’ai travaillé. Vous y trouverez des applications web complètes, des sites vitrines modernes, ainsi que divers projets de développement mettant en avant des concepts de programmation procédurale, orientée objet et d’algorithmie. Cliquez sur chaque projet pour en savoir plus.
        </p>
      </Section>

      {/* Liste des projets Web */}
      <Section title="Applications web">
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8">
          {[...projects].filter(project => project.category === "web").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </Section>

      {/* Liste des projets sites vitrines */}
      <Section title="Sites vitrines et templates">
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8">
          {[...projects].filter(project => project.category === "vitrines").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </Section>
      
      {/* Listes des autres projets de développement */}
      <Section title="Autres projets de développement">
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8">
          {[...projects].filter(project => project.category === "dev").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </Section>

      <CtaFinal
        title="Votre projet, le prochain à mettre en valeur ?"
        tagline="Après ces réalisations, pourquoi pas la vôtre ?"
        link={{ href: "/contact", text: "Lancer mon projet" }}
      />
  </>
  );
}