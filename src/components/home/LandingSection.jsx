import { ArrowDown } from "lucide-react";

export default function LandingSection() {
  return (
    <section id="landing" className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#000000] to-[#222222] px-4">
        {/* Phrase d'accroche */}
        <p className="mb-8 max-w-xl text-white text-lg sm:text-xl md:text-2xl font-poppins">
            "Des solutions <span className="text-[#5AC8FA]">sur mesure</span><br />
            pour des projets <span className="text-[#FF66B2]">à votre image"</span>.
        </p>
      
        {/* Logo */}
        <img
            src="./src/assets/logos/site/logo2.png"
            alt="Logo Julien Lisita"
            className="h-40 w-auto sm:h-48 md:h-64 mb-6 sm:mb-8 md:mb-10"
        />

        {/* Nom & Titre */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text mt-6 sm:mt-8 md:mt-10" style={{ backgroundImage: 'linear-gradient(to bottom, #5AC8FA, #FF66B2)' }}>
            Julien LISITA
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-white font-medium mt-4 sm:mt-6 md:mt-8">
            Développeur Web Full Stack
        </h2>

        {/* Flèche scroll */}
        <div className="mt-10 animate-bounce">
            <a href="#about">
                <ArrowDown className="h-8 w-8 text-blue-500" />
            </a>
        </div>
    </section>
  );
}