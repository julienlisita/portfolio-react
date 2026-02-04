// src/components/services/maintenance/MaintenanceTerms.jsx

import { ClipboardList, CalendarCheck, Ticket, FileText } from "lucide-react";
import Section from "../../layout/Section";

const items = [
  {
    icon: CalendarCheck,
    title: "Forfait mensuel",
    desc: "Pour la tranquillité : préventif + support prioritaire + suivi régulier.",
  },
  {
    icon: Ticket,
    title: "Intervention à la demande",
    desc: "Vous me sollicitez quand vous en avez besoin, sans engagement.",
  },
  {
    icon: FileText,
    title: "Rapport possible",
    desc: "Un résumé des actions menées (mensuel si forfait).",
  },
];

export default function MaintenanceTerms() {
  return (
    <Section className="text-base sm:text-lg lg:text-xl">
      <h2 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2">
        <ClipboardList className="w-5 h-5 text-[#007AFF]" />
        Modalités
      </h2>

      <ul className="list-none ml-6 space-y-2">
        {items.map((it) => (
          <li key={it.title} className="flex items-start gap-2">
            <it.icon className="w-5 h-5 text-[#007AFF] mt-1 shrink-0" />
            <div className="flex-1">
              <strong>{it.title}</strong> — {it.desc}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}