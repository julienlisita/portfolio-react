// src/components/services/customFeatures/CustomFeaturesAudience.jsx

import { Users, CheckCircle } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  "Indépendants qui veulent automatiser certaines tâches (réservation, demandes, suivi…)",
  "Entreprises de services qui reçoivent des demandes ou gèrent des informations régulièrement",
  "Structures qui ont besoin d’un espace administrateur pour gérer leurs contenus ou leurs données",
  "Porteurs de projet qui veulent créer un outil ou tester une idée (prototype / MVP)",
];

export default function CustomFeaturesAudience() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <Users className="w-5 h-5 text-[#007AFF]" />
        Pour qui ?
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">{item}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}