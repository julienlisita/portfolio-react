// src/components/services/customFeatures/CustomFeaturesOffer.jsx

import { Layers, Wrench } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  "Réservation en ligne avec créneaux, demandes et notifications",
  "Formulaires métier adaptés à vos besoins : candidature, devis, inscription, demande client",
  "Espace administrateur pour modifier vos contenus ou gérer certaines demandes",
  "Espace client sécurisé pour centraliser documents, informations ou suivi",
  "Outil interne simple : planning, suivi, tableau de bord ou gestion de contenus",
];

export default function CustomFeaturesOffer() {
  return (
     <Section className="text-base sm:text-lg lg:text-xl">
        <h2 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#007AFF]" />
          Ce que je propose
        </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Wrench className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">{item}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}