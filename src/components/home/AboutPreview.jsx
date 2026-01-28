// src/components/home/AboutPreview.jsx

import HomeSection from "./HomeSection";
import '../../../src/index.css';

export default function AboutPreview() {
  return (
    <HomeSection
        id="about"
        title="Qui suis-je ?"
        link={{href:"/a-propos",text:"Mon parcours"}}
    >
        {/* Contenu : photo + biographie */}
        <div className="
            flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-0 lg:gap-0">
            {/* Photo de profil */}
            <div className=" w-full sm:w-2/5 lg:w-1/3 rounded-lg overflow-hidden relative">
                <img
                    src="/assets/images/homepage-profile.avif" 
                    alt="Julien LISITA"
                    className="w-full h-full object-cover"
                />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#222222] to-transparent"></div>
            </div>

            {/* Biographie */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center mt-4 sm:mt:0">
                <p className="text-base sm:text-lg lg:text-xl leading-snug text-100">
                    Je suis Julien, développeur web freelance à Bordeaux. J’accompagne
                    principalement les indépendants et petites entreprises qui souhaitent
                    un site moderne, clair et professionnel pour présenter leur activité.
                </p>

                <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10">
                    Après plusieurs années en ingénierie logicielle embarquée, j’ai choisi
                    de me tourner vers le web afin de me rapprocher des utilisateurs finaux
                    et de travailler sur des projets concrets&nbsp;: sites vitrines,
                    applications web et outils métier.
                </p>

                <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10">
                    <span className="font-bold">Mon objectif :</span>{" "}
                    vous aider à clarifier vos besoins, concevoir la bonne solution et
                    livrer un site rapide, fiable et évolutif, qui parle à vos clients
                    et vous représente vraiment.
                </p>
            </div>
        </div>
    </HomeSection>
  );
}
