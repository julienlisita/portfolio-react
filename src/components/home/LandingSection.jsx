import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaReact, FaJsSquare, FaNodeJs, FaCode } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export default function LandingSection() {
  return (
    <section
      id="landing"
      className="relative h-screen flex flex-col items-center justify-center gap-10 text-center bg-gradient-to-b from-[#000000] to-[#222222] px-4 overflow-hidden"
    >
       {/* 🧠 Fond illustré avec react-icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FaReact className="text-[#5AC8FA] opacity-10 blur-sm absolute top-14 left-12 text-7xl rotate-12" />
        <FaJsSquare className="text-yellow-300 opacity-10 blur-sm absolute bottom-16 right-10 text-6xl -rotate-6" />
        <FaNodeJs className="text-green-400 opacity-10 blur-sm absolute top-1/3 right-10 text-5xl rotate-6" />
        <SiCplusplus className="text-blue-400 opacity-10 blur-sm absolute bottom-20 left-16 text-6xl rotate-3" />
        <FaCode className="text-white opacity-10 blur-sm absolute top-12 left-1/2 transform -translate-x-1/2 text-6xl pointer-events-none" />
      </div>

      {/* Logo carré néon */}
      <motion.img
        src="/assets/logos/site/logo1.png"
        alt="Logo initiales Julien Lisita"
        className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 drop-shadow-[0_0_10px_#5AC8FA] transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Nom */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#5AC8FA] to-[#FF66B2]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Julien LISITA
      </motion.h1>

      {/* Titre */}
      <motion.h2
        className="text-white text-lg sm:text-xl md:text-2xl font-medium tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Développeur Web Full Stack
      </motion.h2>

      {/* Phrase d'accroche */}
      <motion.p
        className="text-white text-base sm:text-lg md:text-xl font-light tracking-wide max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Des solutions <span className="text-[#FF66B2] font-semibold">sur mesure</span><br />
        pour des projets <span className="text-[#5AC8FA] font-semibold">à votre image</span>
      </motion.p>

      {/* Flèche scroll */}
      <motion.div
        className="absolute bottom-14 flex flex-col items-center animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#about"
            onClick={(e) => {
            e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            >
          <ArrowDown className="h-10 w-10 sm:h-12 sm:w-12 text-[#5AC8FA]" />
        </a>
        <p className="text-white text-xs mt-1">Scrollez ou cliquez</p>
      </motion.div>
    </section>
  );
}