// src/pages/Project.jsx

import PageTitle from '../components/PageTitle';
import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import SectionTitle from '../components/SectionTitle';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  return (
      <div className="text-white bg-[#222222]  pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      <PageTitle>{project.title}</PageTitle>
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-[400px] object-cover rounded-lg mt-8 sm:mt-10 lg:mt-12"
      />
      {project.summary && (
      <div className="space-y-4 text-gray-300 mt-8 sm:mt-10 lg:mt-12">
        {project.summary.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>  
      )}
      <SectionTitle>Fonctionnalités principales</SectionTitle>
      {project.features && (
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      )}
      <SectionTitle>Spécifications techniques</SectionTitle>
      <div className="flex gap-4 flex-wrap mt-8 sm:mt-10 lg:mt-12">
      <div className="space-y-4">
        {Object.entries(project.stack).map(([category, items]) =>
          items && items.length > 0 ? (
            <div key={category}>
              <h3 className="text-lg font-semibold capitalize text-white">
                {category === "frontend"
                  ? "Front-end"
                  : category === "backend"
                  ? "Back-end"
                  : category === "database"
                  ? "Base de données"
                  : category === "test"
                  ? "Tests"
                  : category === "deployment"
                  ? "Déploiement"
                  : category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {items.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#9B59B6] text-white px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
      </div>
     <SectionTitle>Démonstration du Projet & Code GitHub</SectionTitle>
    {(project.demo || project.github) && (
      <div className="flex justify-between gap-8 mt-8 sm:mt-10 lg:mt-12">
        
        {/* Section Démo */}
        {project.demo && (
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-2">Démo</h4>
            <ul className="space-y-1">
              {project.demo.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Section Code Source */}
        {project.github && (
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-2">Code source</h4>
            <ul className="space-y-1">
              {project.github.map((repo, i) => (
                <li key={i}>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                    {repo.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )}
    </div>
  );
}