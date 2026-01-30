// src/components/home/ProjectsPreview.jsx

import HomeSection from "./HomeSection";
import ProjectCard from "../common/ProjectCard";
import { projects } from "../../data/projectsData";

export default function ProjectsPreview() {
  const featuredSlugs = ["ccs", "thomas-delaunay", "brunchbordelais"];

  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <HomeSection
      id="portfolio"
      title="Derniers projets"
      link={{ href: "/realisations", text: "Voir d'autres projets" }}
    >
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Quelques exemples concrets : sites vitrines et applications web — avec un vrai focus sur la clarté, la performance et le SEO.
      </p>

      <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </HomeSection>
  );
}
