// src/components/home/LandingSection.jsx

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Monitor, Layers } from "lucide-react";
import Button from "../common/Button";
import styles from "./LandingSection.module.css";

export default function LandingSection() {
  const reduce = useReducedMotion();

  const title = "Julien Lisita";
  const subtitle = "Création de sites web professionnels à Bordeaux";
  const keywords = ["Site vitrine", "Fonctionnalités sur mesure", "Suivi & maintenance"];

  const fadeUp = useMemo(
    () =>
      reduce
        ? {}
        : { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6 } },
    [reduce]
  );
  const fade = useMemo(
    () =>
      reduce
        ? {}
        : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.45 } },
    [reduce]
  );

  const spotlightStyle = {
    background:
      "radial-gradient(600px 300px at 50% 30%, rgba(90,200,250,0.10), transparent 60%)",
  };

  return (
    <section
      id="landing"
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center bg-[#222222] px-4 overflow-hidden"
    >
      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0" style={spotlightStyle} />

      {/* Logo */}
      <motion.img
        src="/assets/logos/site/logo.png"
        alt="Logo initiales Julien Lisita"
        width={112}
        height={112}
        className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 mb-4"
        {...(!reduce && { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6 } })}
      />

      {/* Titre */}
      <motion.h1
        className={`text-white text-4xl sm:text-5xl md:text-6xl font-extrabold ${styles.neonTitleStrong}`}
        {...fadeUp}
        {...(!reduce && { transition: { ...fadeUp.transition, delay: 0.1 } })}
      >
        {title}
      </motion.h1>

      {/* Sous-titre */}
      <motion.h2
        className={`text-2xl sm:text-3xl md:text-4xl tracking-wide mt-3 sm:mt-4 ${styles.subtitleOutline}`}
        {...fadeUp}
        {...(!reduce && { transition: { ...fadeUp.transition, delay: 0.2 } })}
      >
        {subtitle}
      </motion.h2>

      {/* Tagline */}
      <motion.p
        className={`mt-5 sm:mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl ${styles.tagline}`}
        {...fade}
        {...(!reduce && { transition: { ...fade.transition, delay: 0.28 } })}
      >
        Un site web clair, rapide et adapté à votre activité.
      </motion.p>

      {/* Séparateur */}
      <div className="mt-6 h-px w-44 bg-gradient-to-r from-transparent via-[#007AFF] to-transparent" />

      {/* Mots-clés visibles MOBILE uniquement */}
      <motion.div
        className="mt-6 flex flex-col items-center text-gray-400 text-base sm:text-xl lg:text-2xl font-medium tracking-wide"
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "visible"}
        variants={reduce ? undefined : { visible: { transition: { staggerChildren: 0.35 } } }}
      >
        {keywords.map((word, i) => (
          <motion.div
            key={i}
            className="flex space-x-1"
            variants={
              reduce
                ? undefined
                : { hidden: {}, visible: { transition: { delayChildren: 0.6 + i * 0.12, staggerChildren: 0.03 } } }
            }
          >
            {[...word].map((char, j) => (
              <motion.span key={j} variants={reduce ? undefined : { hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* CTA unique */}
      <motion.div
        className="mt-8"
        {...fade}
        {...(!reduce && { transition: { ...fade.transition, delay: 0.45 } })}
      >
        <Button to="/contact" variant="primary" aria-label="Me contacter pour un projet web">
          Me contacter
        </Button>
      </motion.div>

      {/* Hint scroll */}
      <motion.div
        className="absolute bottom-5 flex flex-col items-center"
        {...fade}
        {...(!reduce && { transition: { ...fade.transition, delay: 0.8 } })}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group"
          aria-label="Aller à la section À propos"
        >
          <ArrowDown
            className={`h-10 w-10 sm:h-12 sm:w-12 text-[#5AC8FA] ${styles.pulseArrow}`}
            aria-hidden
          />
        </a>
        <p className="text-gray-500 text-xs mt-1">Faites défiler ou cliquez</p>
      </motion.div>
    </section>
  );
}