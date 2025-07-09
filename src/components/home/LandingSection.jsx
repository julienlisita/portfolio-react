// src/components/home/LandingSection.jsx

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaReact, FaJsSquare, FaNodeJs, FaCode } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export default function LandingSection() {

  const keywords = [
    "Conception",
    "Développement",
    "Maintenance",
  ];

  return (
    <section
      id="landing"
      className="relative h-screen flex flex-col items-center justify-center gap-10 text-center bg-gradient-to-b from-[#000000] to-[#222222] px-4 overflow-hidden"
    >
       {/* 🧠 Fond illustré avec react-icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FaReact className="text-[#5AC8FA] opacity-15 blur-sm absolute top-16 left-10 text-7xl rotate-12" />
        <FaJsSquare className="text-yellow-300 opacity-15 blur-sm absolute bottom-16 right-10 text-6xl -rotate-6" />
        <FaNodeJs className="text-green-400 opacity-15 blur-sm absolute top-1/3 right-10 text-5xl rotate-6" />
        <SiCplusplus className="text-blue-400 opacity-15 blur-sm absolute bottom-20 left-14 text-6xl rotate-3" />
        <FaCode className="text-white opacity-15 blur-sm absolute top-12 left-1/2 transform -translate-x-1/2 text-6xl pointer-events-none" />
      </div>

      {/* Logo carré néon */}
      <motion.img
        src="/assets/logos/site/logo.png"
        alt="Logo initiales Julien Lisita"
        className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Nom */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-body text-transparent bg-clip-text"
        style={{ backgroundImage: 'linear-gradient(to bottom, #7FDFFF 30%, #FF99CC 90%)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Julien Lisita
      </motion.h1>

      {/* Titre */}
      <motion.h2
        className="text-gray-100 text-lg sm:text-xl md:text-2xl font-medium font-heading tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 2 }}
      >
        Développeur web & solutions digitales
      </motion.h2>

      {/* Phrase d'accroche */}
      <motion.p
        className="text-gray-200 text-base sm:text-lg md:text-xl font-light font-body tracking-wide max-w-xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 2 }}
      >
        Des solutions <span className="text-[#007AFF] font-semibold">sur mesure</span><br />
        à l'image de <span className="text-[#9B59B6] font-semibold">votre projet</span>
      </motion.p>

      {/* Mots clés offre*/}

      <motion.div
          className="flex flex-col sm:flex-row sm:space-x-4 items-center text-white text-lg sm:text-xl md:text-2xl font-medium font-code tracking-wide"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.6,
              },
            },
          }}
        >
          {keywords.map((word, i) => (
            <motion.div
              key={i}
              className="flex space-x-1 sm:space-x-0 sm:mx-2"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 1.6 + i * 0.1,
                    staggerChildren: 0.06,
                  },
                },
              }}
            >
              {[...word].map((char, j) => (
                <motion.span
                  key={j}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.div>

      {/* Flèche scroll */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <a href="#about"
            onClick={(e) => {
            e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            >
          <ArrowDown className="h-10 w-10 sm:h-12 sm:w-12 text-[#5AC8FA]" />
        </a>
        <p className="text-gray-500 text-xs mt-1">Faites défiler ou cliquez</p>
      </motion.div>
    </section>
  );
}