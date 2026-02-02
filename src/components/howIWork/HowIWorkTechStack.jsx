// src/components/howIWork/HowIWorkTechStack.jsx

import Section from "../common/Section";
import TechCard from "../common/TechCard";

export default function HowIWorkTechStack({ technologies }) {
  return (
    <>
      <Section title="Choix techniques (pour les curieux)" className="text-base sm:text-lg lg:text-xl">
        <p className="text-gray-300">
          Pour garantir performance, SEO et maintenabilité, j’utilise une stack moderne.
          Si vous n’êtes pas “tech”, vous pouvez ignorer cette partie.
        </p>
      </Section>

      <Section title="Front-end">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {technologies.filter((t) => t.category === "frontend").map((t) => (
            <TechCard key={t.name} color="#007AFF" {...t} />
          ))}
        </div>
      </Section>

      <Section title="Back-end & données">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {technologies.filter((t) => t.category === "backend").map((t) => (
            <TechCard key={t.name} color="#007AFF" {...t} />
          ))}
        </div>
      </Section>

      <Section title="Déploiement & outils">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {technologies.filter((t) => t.category === "deployment").map((t) => (
            <TechCard key={t.name} color="#007AFF" {...t} />
          ))}
        </div>
      </Section>

      <Section title="Complément (profil technique)">
        <p className="text-base sm:text-lg lg:text-xl text-gray-300">
          Avant le web, j’ai travaillé sur des projets plus techniques (C, C++, Java). Ça renforce ma rigueur
          et ma capacité à concevoir des solutions robustes.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {technologies.filter((t) => t.category === "complementary").map((t) => (
            <TechCard key={t.name} color="#5AC8FA" {...t} />
          ))}
        </div>

        <p className="text-sm text-center text-gray-500 mt-6">
          🔗 GitHub :
          <a
            href="https://github.com/julienlisita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007AFF] hover:underline ml-1"
          >
            github.com/julienlisita
          </a>
        </p>
      </Section>
    </>
  );
}