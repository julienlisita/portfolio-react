// src/components/services/websiteCreation/WebsiteCreationDeliverables.jsx

import { ListChecks, Layout } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  "Un design propre et cohérent avec votre identité",
  "Une structure claire (services, réalisations, infos pratiques)",
  "Un site rapide et agréable sur mobile",
  "Un formulaire de contact fiable (et renforçable si besoin)",
  "Une base SEO solide (structure, balises, performance, indexation)",
  "Mise en ligne incluse + conseils pour la suite",
];

export default function WebsiteCreationDeliverables() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
        <ListChecks className="w-5 h-5 text-[#007AFF]" />
        Ce que vous obtenez
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Layout className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">{item}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}