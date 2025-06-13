// src/components/home/AboutPreview.jsx

import HomeSection from "./HomeSection";
import '../../../src/index.css';

export default function AboutPreview() {
  return (
    <HomeSection
        id="about"
        title="Qui suis-je ?"
        link={{href:"/about",text:"Mon parcours"}}
    >
        {/* Contenu : photo + biographie */}
        <div className="
            flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-0 lg:gap-0">
            {/* Photo de profil */}
            <div className=" w-full sm:w-2/5 lg:w-1/3 rounded-lg overflow-hidden relative">
                <img
                    src="/assets/images/workingProfile.jpg" 
                    alt="Julien LISITA"
                    className="w-full h-full object-cover"
                />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#222222] to-transparent"></div>
            </div>

            {/* biographie */}
            <div className="
                w-full sm:w-1/2 flex flex-col justify-center items-center">
                <p className="text-base sm:text-lg lg:text-xl leading-snug text-100">
                    Bonjour, je suis Julien, développeur web freelance passionné par la création de solutions numériques sur mesure.
                </p>   
                <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10">
                    Après plusieurs années en ingénierie logicielle embarquée, j’ai choisi de me spécialiser dans le développement web pour me rapprocher des utilisateurs finaux et créer des outils concrets, utiles et interactifs.
                </p>
                 <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10">
                    Je conçois des sites vitrines et des applications web personnalisées, avec HTML, CSS et JavaScript, et j’utilise des <span className="font-bold">technologies modernes</span> comme <span className="font-bold">React</span> ou <span className="font-bold">Node.js</span> selon les besoins.
                </p>
                 <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10">
                    <span className="font-bold">Mon objectif :</span> partir de votre besoin, concevoir la bonne solution, et mener à bien notre projet avec clarté et efficacité.
                </p>
                 <p className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10">
                    <span className="font-bold">Mon obsession :</span> livrer dans les délais, avec un code fiable, clair et documenté.
                </p>
            </div>
        </div>
    </HomeSection>
  );
}
