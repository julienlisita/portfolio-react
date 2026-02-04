// src/components/services/maintenance/MaintenanceIncluded.jsx

import { LifeBuoy, Wrench, Shield, Gauge, ListChecks, ClipboardList } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  { icon: Wrench, text: "Correction de bugs & support technique" },
  { icon: Shield, text: "Mises à jour & sécurité (prévention + correctifs)" },
  { icon: Gauge, text: "Optimisations de performance (vitesse, stabilité)" },
  { icon: ListChecks, text: "Petites évolutions et ajustements au fil des besoins" },
  { icon: ClipboardList, text: "Conseil & suivi technique personnalisé" },
];

export default function MaintenanceIncluded() {
  return (
     <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <LifeBuoy className="w-5 h-5 text-[#007AFF]" />
        Ce qui est inclus
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((it) => (
          <li key={it.text} className="flex items-start gap-2">
            <it.icon className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            <div className="flex-1">{it.text}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}