import HomeSection from "./HomeSection";
import '../../../src/index.css';

export default function AboutPreview() {
  return (
    <HomeSection
        id="about"
        title="Qui suis-je ?"
        link={{href:"/about",text:"En savoir plus"}}
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
                <p className="text-base sm:text-lg lg:text-xl leading-snug text-white">
                    Bonjour, je suis Julien, développeur freelance passionné par la création de solutions web innovantes. Après une expérience en ingénierie logicielle embarquée, j’ai choisi de me spécialiser dans le développement web, attiré par la possibilité de transformer des idées en outils numériques concrets.
                </p>   
                <p className="text-base sm:text-lg lg:text-xl text-white mt-6 sm:mt-8 md:mt-10">
                  Grâce à une formation intensive, j’ai acquis des compétences solides en HTML, CSS, JavaScript, ainsi qu’avec des frameworks modernes comme React et Node.js. J’ai eu l’occasion de travailler sur des projets variés, allant de sites vitrines à des applications complexes. Mon objectif : produire un code fiable, clair, et livrer chaque projet dans les délais.
                </p>
            </div>
        </div>
    </HomeSection>
  );
}
