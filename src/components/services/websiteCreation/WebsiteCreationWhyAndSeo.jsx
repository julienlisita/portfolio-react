// src/components/services/websiteCreation/WebsiteCreationWhyAndSeo.jsx

import { Zap, Search } from "lucide-react";
import Section from "../../layout/Section";

const whyItems = [
  "Performance : site léger et rapide",
  "Sécurité : moins de dépendance à des plugins",
  "Évolutivité : ajout de pages/fonctions sans repartir de zéro",
  "Maintenance : plus simple et plus stable dans le temps",
];

export default function WebsiteCreationWhyAndSeo() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
        <Zap className="w-5 h-5 text-[#9B59B6]" />
        Pourquoi une solution sur mesure ?
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {whyItems.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Zap className="w-5 h-5 text-[#9B59B6] mt-1" />
            <div className="flex-1">{item}</div>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
        <Search className="w-5 h-5 text-[#9B59B6]" />
        Visibilité locale & référencement
      </h3>

      <p className="text-gray-300 ml-6">
        Je mets en place une base SEO propre (structure, performance, balises).
        Ensuite, on peut aller plus loin selon votre activité : pages locales, contenus, avis, blog…
      </p>
    </Section>
  );
}