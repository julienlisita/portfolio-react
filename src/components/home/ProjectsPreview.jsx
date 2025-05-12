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
            <div className="w-full flex flex-wrap justify-center gap-8 lg:justify-between">
            {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </HomeSection>
    )
}

