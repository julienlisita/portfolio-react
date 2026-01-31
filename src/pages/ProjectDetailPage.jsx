// src/pages/ProjectDetailsPages.jsx

import PageTitle from "../components/common/PageTitle";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <PageTitle>Projet introuvable</PageTitle>
        <Section>
          <p className="text-gray-300">Ce projet n’existe pas (ou a été déplacé).</p>
          <p className="mt-4">
            <Link to="/realisations" className="text-blue-400 underline">
              ← Retour aux réalisations
            </Link>
          </p>
        </Section>
      </>
    );
  }

  const hasLinks = Boolean(project.liveSite || (project.demo && project.demo.length) || (project.sourceCode && project.sourceCode.length));

  return (
    <>
      <PageTitle>{project.title}</PageTitle>

      {/* Hero / visuel + résumé */}
      <Section>
        <div className="flex justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-[820px] max-h-[360px] object-cover rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Tag client type (si dispo) */}
        {project.clientType && (
          <p className="mt-6 text-sm text-gray-400">
            {project.clientType}
          </p>
        )}

        {/* Résumé (fallback) */}
        {project.summary?.length > 0 && (
          <div className="space-y-4 mt-6 text-gray-300">
            {project.summary.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}
      </Section>

      {/* Contexte (si dispo) */}
      {project.context && (
        <Section title="Contexte">
          <p className="text-gray-300">{project.context}</p>
        </Section>
      )}

      {/* Objectifs (si dispo) */}
      {project.goals?.length > 0 && (
        <Section title="Objectifs">
          <ul className="list-disc list-inside space-y-2 mt-6 text-gray-300">
            {project.goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* Fonctionnalités */}
      {project.features?.length > 0 && (
        <Section title="Fonctionnalités principales">
          <ul className="list-disc list-inside space-y-2 mt-6 text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* Résultats (si dispo) */}
      {project.results?.length > 0 && (
        <Section title="Résultats">
          <ul className="list-disc list-inside space-y-2 mt-6 text-gray-300">
            {project.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Section>
      )}

      {/* Rôle (si dispo) */}
      {project.myRole && (
        <Section title="Mon rôle">
          <p className="text-gray-300">{project.myRole}</p>
        </Section>
      )}

      {/* Stack technique */}
      {project.stack && (
        <Section title="Détails techniques (pour les curieux)">
          <div className="space-y-6 mt-6">
            {Object.entries(project.stack).map(([category, items]) =>
              items && items.length > 0 ? (
                <div key={category}>
                  <h3 className="text-lg font-semibold capitalize text-gray-100">
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
                      : category === "emails"
                      ? "Emails"
                      : category}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {items.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#2a2a2a] border border-[#3a3a3a] px-3 py-1 rounded-md text-sm text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </Section>
      )}

      {/* Liens */}
      {hasLinks && (
        <Section title="Liens">
          <div className="flex flex-wrap justify-between gap-8 mt-6">
            {project.liveSite && (
              <div className="flex-1 min-w-[220px]">
                <h4 className="text-lg font-semibold text-white mb-2">Site en ligne</h4>
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline break-all"
                >
                  {project.liveSite}
                </a>
              </div>
            )}

            {project.demo?.length > 0 && (
              <div className="flex-1 min-w-[220px]">
                <h4 className="text-lg font-semibold text-white mb-2">Démo</h4>
                <ul className="space-y-1">
                  {project.demo.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.sourceCode?.length > 0 && (
              <div className="flex-1 min-w-[220px]">
                <h4 className="text-lg font-semibold text-white mb-2">Code source</h4>
                <ul className="space-y-1">
                  {project.sourceCode.map((repo, i) => (
                    <li key={i}>
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                      >
                        {repo.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}
      <Section title="Le projet en détail">
        <p className="text-gray-300">
          Ce projet a été réalisé avec ma méthode habituelle (performance, SEO, évolutivité).
          <br />
          <Link to="/comment-je-travaille" className="text-blue-400 underline">
            Voir comment je travaille
          </Link>
        </p>
      </Section>
      <CtaFinal
        title="Vous voulez un site dans ce style ?"
        tagline="Expliquez-moi votre activité et vos objectifs, je vous propose une solution adaptée."
        primary={{ href: "/contact", text: "Me contacter" }}
        secondary={{ href: "/services", text: "Voir mes services" }}
      />
    </>
  );
}