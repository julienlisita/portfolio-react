import HomeSection from "./HomeSection";

export default function AboutPreview() {
  return (
    <HomeSection
        id="about"
        title="Qui suis-je ?"
        link={{href:"/about",text:"En savoir plus"}}
    >
        {/* Contenu : photo + biographie */}
        <div className="
            flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-0 lg:gap-0">
            {/* Photo de profil */}
            <div className=" h-80 sm:h-96  rounded-lg overflow-hidden relative">
                <img
                    src="./src/assets/images/workingProfile.jpg" 
                    alt="Julien LISITA"
                    className="w-full h-full object-cover"
                />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#222222] to-transparent"></div>
            </div>

            {/* biographie */}
            <div className="
                sm:w-1/2 flex flex-col justify-center items-center">
                <p className="text-sm sm:text-sm lg:text-xl text-white">
                    Bonjour, je suis Julien, un développeur freelance passionné par la création de solutions web innovantes. Après avoir travaillé en ingénierie logicielle embarquée, j’ai décidé de me spécialiser dans le développement web, attiré par la possibilité de transformer des idées en réalité numérique.
                </p>
                <p className="text-sm sm:text-sm lg:text-xl text-white mt-6 sm:mt-8 md:mt-10">
                    Avec une formation intensive dans la conception et le développement d’applications front-end et back-end, je mets à profit mes compétences en HTML, CSS, JavaScript, ainsi que dans des frameworks comme React et Node.js. Mon parcours m’a permis de travailler sur divers projets, allant de sites vitrines simples à des applications complexes, et je m’efforce toujours de livrer un code de qualité, tout en respectant les délais.
                </p>
            </div>
        </div>
    </HomeSection>
  );
}
