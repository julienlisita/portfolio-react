import HomeSection from "./HomeSection";
import ProjectCard from "./ProjectCard";

export default function ProjectPreview()
{

const projects = [
  {
    title: "ShogiConnect",
    description: "Une plateforme communautaire autour du shogi, avec profils joueurs, forum de discussion",
    image: "./src/assets/images/projects/shogiconnect.png",
    technos: ["React", "Node/Express", "Sequelize", "Socket.io"],
    demo: "#",
    github: "https://github.com/julienlisita/shogiconnect-client",
  },
  {
    title: "Planify",
    description: "Une plateforme de création de recettes de cuisine avec planification des repas",
    image: "./src/assets/images/projects/planify.png",
    technos: ["React", "Node/Express", "Sequelize", "Taiwind"],
    demo: "#", 
    github: "https://github.com/julienlisita/planify-frontend",
  },
  {
    title: "Site Portfolio React",
    description: "Un site responsive pour un freelance, intégration à partir de maquette Figma.",
    image: "./src/assets/images/projects/portfolio.png",
    technos: ["React", "Tailwind", "Frame-Motion"],
    demo: "#",
    github: "https://github.com/julienlisita/portfolio-react",
  },
];
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

