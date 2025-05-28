import HomeSection from "./HomeSection";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectsData";

export default function ProjectPreview()
{
    return (
        <HomeSection
            id="portfolio"
            title="Derniers projets"
            link={{href:"/portfolio", text:"Voir le portfolio"}}
        > 
            <p className="text-white text-base sm:text-lg lg:text-xl">Quelques exemples de projets sur lesquels j’ai travaillé récemment : applications web, sites vitrines et plus encore.</p>
            <div className="w-full flex flex-wrap justify-center lg:justify-between gap-6 sm:gap-7 lg:gap-8">
            {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </HomeSection>
    )
}

