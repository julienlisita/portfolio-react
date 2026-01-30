// src/pages/PortfolioPage.jsx

import { projects } from "../data/projectsData";
import PageTitle from "../components/common/PageTitle";
import ProjectCard from "../components/common/ProjectCard";
import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";

export default function Portfolio() {
  const vitrines = projects.filter((p) => p.category === "vitrines");
  const tools = projects.filter((p) => p.category === "web");

  return (
    <>
      <PageTitle>Réalisations</PageTitle>

      <Section>
        <p className="text-left text-base sm:text-lg lg:text-xl text-gray-300">
          Quelques projets représentatifs : sites vitrines et
          Applications web. Chaque fiche détaille le contexte, les objectifs
          et les choix clés (UX, SEO, performance, évolutivité).
        </p>
      </Section>

      <Section title="Sites vitrines">
        <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {vitrines.map((project) => (
            <ProjectCard key={project.slug || project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section title="Applications web">
        <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((project) => (
            <ProjectCard key={project.slug || project.title} {...project} />
          ))}
        </div>
      </Section>

      <CtaFinal
        title="Votre projet, le prochain ?"
        tagline="Je vous propose une solution claire, moderne et adaptée à votre activité."
        primary={{ href: "/contact", text: "Discuter de votre projet" }}
        secondary={{ href: "/services", text: "Voir mes services" }}
      />
    </>
  );
}