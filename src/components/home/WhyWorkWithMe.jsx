// src/components/home/WhyWorkWithMe.jsx

import HomeSection from "./HomeSection";
import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Un seul interlocuteur",
    description:
      "Je gère tout de A à Z : design, développement, mise en ligne et petites mises à jour.",
  },
  {
    title: "Un site qui parle à vos clients",
    description:
      "Contenu clair, design moderne, navigation intuitive : votre site devient un vrai outil de confiance.",
  },
  {
    title: "Référencement naturel (SEO) efficace",
    description:
      "Code propre, chargement rapide et bonnes pratiques SEO pour être plus visible sur Google.",
  },
  {
    title: "Transparence & simplicité",
    description:
      "Un langage clair, des échanges fluides et un budget défini dès le départ.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <HomeSection
      id="pourquoi"
      title="Pourquoi travailler avec moi ?"
    >
      <p className="text-base sm:text-lg lg:text-xl">
        Un accompagnement simple, clair et efficace pour vous aider à obtenir un site moderne,
        professionnel et adapté à votre activité.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((point) => (
          <div
            key={point.title}
            className="flex items-start gap-3 bg-[#1f1f1f] rounded-2xl p-5 shadow-lg"
          >
            <CheckCircle2 className="mt-1 flex-shrink-0 text-[#007AFF]" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}