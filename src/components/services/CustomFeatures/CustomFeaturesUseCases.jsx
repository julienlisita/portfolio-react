// src/components/services/customFeatures/CustomFeaturesUseCases.jsx

import { Briefcase, BarChart3, Lock, Rocket } from "lucide-react";
import Section from "../../layout/Section";

const useCases = [
  { icon: Briefcase, text: "Outil métier (CRM léger, gestion interne, planning…)" },
  { icon: BarChart3, text: "Dashboard / back-office sécurisé" },
  { icon: Lock, text: "Espace client (documents, suivi, messages…)" },
  { icon: Rocket, text: "Prototype / MVP pour valider une idée" },
];

export default function CustomFeaturesUseCases() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-[#007AFF]" />
        Exemples de cas d’usage
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {useCases.map((it) => (
          <li key={it.text} className="flex items-start gap-2">
            <it.icon className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">{it.text}</div>
          </li>
        ))}
      </ul>

      <p className="mt-6 italic text-gray-300">
        L’objectif : un outil <strong>utile</strong> dès la première version, puis{" "}
        <strong>améliorable</strong> au fil du temps.
      </p>
    </Section>
  );
}