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
        <p className="text-left text-base sm:text-lg lg:text-xl">
          Voici quelques-uns des projets sur lesquels j’ai travaillé. Vous y trouverez des sites vitrines modernes, des applications web complètes. Cliquez sur chaque projet pour en savoir plus.
        </p>
      </Section>

      {/* Liste des projets sites vitrines */}
      <Section title="Sites vitrines">
        <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...projects].filter(project => project.category === "vitrines").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </Section>

      {/* Liste des projets Web */}
      <Section title="Applications web">
        <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...projects].filter(project => project.category === "web").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </Section>
      
      {/* Listes des autres projets de développement */}
      {/* <Section title="Autres projets de développement">
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8">
          {[...projects].filter(project => project.category === "dev").map((project) => (
              <ProjectCard key={project.title} {...project} />
              ))}
        </div>
      </Section> */}

      <CtaFinal
        title="Votre projet, le prochain à mettre en valeur ?"
        tagline="Après ces réalisations, pourquoi pas la vôtre ?"
        primary={{ href: "/contact", text: "Contact" }}
        secondary={{href: "/tarifs", text: "Tarifs"}}
      />
  </>
  );
}