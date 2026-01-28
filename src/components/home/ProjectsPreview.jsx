// src/components/home/ProjectsPreview.jsx

import HomeSection from "./HomeSection";
import ProjectCard from "../common/ProjectCard";
import { projects } from "../../data/projectsData";

export default function ProjectPreview()
{
    return (
        <HomeSection
            id="portfolio"
            title="Derniers projets"
            link={{href:"/realisations", text:"Portfolio"}}
        > 
            <p className="text-base sm:text-lg lg:text-xl">Quelques exemples de projets sur lesquels j’ai travaillé récemment : applications web, sites vitrines et plus encore.</p>
            <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </HomeSection>
    )
}

