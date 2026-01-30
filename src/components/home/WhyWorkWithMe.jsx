// src/components/home/WhyWorkWithMe.jsx

import HomeSection from "./HomeSection";
import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Un seul interlocuteur",
    description:
      "Je vous accompagne de A à Z : conception, développement, mise en ligne et évolutions.",
  },
  {
    title: "Un site qui parle à vos clients",
    description:
      "Structure claire, design moderne et navigation intuitive pour inspirer confiance.",
  },
  {
    title: "Référencement naturel intégré",
    description:
      "Code propre, rapidité et bonnes pratiques SEO pour une meilleure visibilité.",
  },
  {
    title: "Transparence & simplicité",
    description:
      "Des échanges clairs, des choix expliqués et un budget défini dès le départ.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <HomeSection
      id="pourquoi"
      title="Pourquoi travailler avec moi ?"
    >
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Un accompagnement simple et efficace pour obtenir un site professionnel
        qui inspire confiance et soutient votre activité.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((point) => (
          <div
            key={point.title}
            className="flex items-start gap-3 bg-[#1f1f1f] rounded-2xl p-4 sm:p-5"
          >
            <CheckCircle2
              className="mt-1 flex-shrink-0 text-[#007AFF]"
              size={20}
            />
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 text-gray-100">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}