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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </HomeSection>
    )
}

