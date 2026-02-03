// src/components/portfolio/PortfolioGrid.jsx

import Section from "../common/Section";
import ProjectCard from "../common/ProjectCard";

export default function PortfolioGrid({ title, projects }) {
  return (
    <Section title={title}>
      <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug || project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}