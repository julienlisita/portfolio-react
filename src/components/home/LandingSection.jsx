import { ArrowDown } from "lucide-react";

export default function LandingSection() {
  return (
    <section id="landing" className="relative h-screen flex flex-col items-center justify-center gap-12 text-center bg-gradient-to-b from-[#000000] to-[#222222] px-4">
        
        {/* Phrase d'accroche */}
        <p className="max-w-xl text-white text-lg sm:text-xl md:text-2xl font-poppins">
            "Des solutions <span className="text-[#5AC8FA]">sur mesure</span><br />
            pour des projets <span className="text-[#FF66B2]">à votre image"</span>.
        </p>
    
        {/* Logo */}
        <img
            src="./src/assets/logos/site/logo2.png"
            alt="Logo Julien Lisita"
            className="mt-10 sm:mt-10 lg:mt-10 h-40 w-auto sm:h-48 md:h-64 "
        />

        {/* Nom & Titre */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to bottom, #5AC8FA, #FF66B2)' }}>
            Julien LISITA
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-white font-medium ">
            Développeur Web Full Stack
        </h2>

        {/* Flèche scroll */}
        <div className="absolute bottom-6  animate-bounce">
            <a href="#about">
                <ArrowDown className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-blue-500" />
            </a>
        </div>
    </section>
  );
}