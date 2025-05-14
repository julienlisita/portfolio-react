import { ArrowDown } from "lucide-react";

export default function LandingSection() {
  return (
    <section id="landing" className="relative h-screen flex flex-col items-center justify-center gap-12 text-center bg-gradient-to-b from-[#000000] to-[#222222] px-4">
        
        {/* Phrase d'accroche */}
        <p className= "text-white text-lg sm:text-xl md:text-2xl font-poppins">
            Des solutions <span className="text-[#5AC8FA]">sur mesure <br/></span>pour des projets <span className="text-[#FF66B2]">à votre image</span>
        </p>
    
        {/* Logo */}
        <img
            src="/assets/logos/site/logo2.png"
            alt="Logo Julien Lisita"
            className="h-40 w-auto sm:h-48 md:h-64 "
        />

        {/* Nom & Titre */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to bottom, #5AC8FA, #FF66B2)' }}>
            Julien LISITA
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl text-white font-medium ">
            Développeur Web Full Stack
        </h2>

        {/* Flèche scroll */}
        <div className="absolute bottom-6 animate-pulse">
            <a href="#about" className="inline-block">
                <ArrowDown className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-[#5AC8FA]" />
            </a>
            <p className="text-white text-sm">Scroll or Click</p>
        </div>
    </section>
  );
}