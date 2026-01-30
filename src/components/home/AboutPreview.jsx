// src/components/home/AboutPreview.jsx

import HomeSection from "./HomeSection";

export default function AboutPreview() {
  return (
    <HomeSection
      id="about"
      title="Qui suis-je ?"
      link={{ href: "/a-propos", text: "Découvrir mon parcours" }}
    >
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10">
        {/* Photo */}
        <div className="w-full sm:w-2/5 lg:w-1/3 rounded-2xl overflow-hidden relative">
          <img
            src="/assets/images/homepage-profile.avif"
            alt="Julien Lisita, développeur web freelance à Bordeaux"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#222222] to-transparent" />
        </div>

        {/* Texte */}
        <div className="w-full sm:flex-1 flex flex-col justify-center">
          <p className="text-base sm:text-lg lg:text-xl leading-snug text-gray-300">
            Je suis Julien, développeur web freelance basé à Bordeaux.
            J’accompagne mes clients de l’idée à la mise en ligne,
            avec une approche simple, structurée et orientée résultats.
          </p>

          <p className="text-base sm:text-lg lg:text-xl mt-5 sm:mt-6 text-gray-300">
            Après plusieurs années en ingénierie logicielle, je me suis spécialisé dans
            le web pour créer des projets concrets : sites vitrines et outils sur mesure.
          </p>

          <p className="text-base sm:text-lg lg:text-xl mt-5 sm:mt-6 text-gray-300">
            Mon objectif est simple&nbsp;: vous aider à clarifier le besoin,
            construire la bonne solution et livrer un site pensé pour durer.
          </p>
        </div>
      </div>
    </HomeSection>
  );
}