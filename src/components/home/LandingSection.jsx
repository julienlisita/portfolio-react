// src/components/home/LandingSection.jsx

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Monitor, Layers } from "lucide-react";
import Button from "../common/Button";
import styles from "./LandingSection.module.css";

export default function LandingSection() {
  // const [mode, setMode] = useState("vitrine");
  const reduce = useReducedMotion();

  const title = "Julien Lisita";
  const subtitle = "Développeur web à Bordeaux";

  // const line =
  //   mode === "vitrine"
  //     ? "Charge ultra-rapide, SEO propre, sans WordPress."
  //     : "Architecture robuste, évolutive et testée.";

  const keywords = ["Conception", "Développement", "Maintenance"];

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
        <span className="font-semibold">Des solutions</span>{" "}
        <span className="font-semibold" style={{ color: "#007AFF" }}>
          sur mesure
        </span>{" "}
        <span className="font-semibold">à votre image.</span>
      </motion.p>

      {/* Séparateur */}
      <div className="mt-6 h-px w-44 bg-gradient-to-r from-transparent via-[#007AFF] to-transparent" />

      {/* Toggle besoin */}
      {/* <motion.div
        role="tablist"
        aria-label="Type de projet"
        className="mt-6 flex items-center gap-2 bg-[#2a2a2a] rounded-full p-1"
        {...fade}
        {...(!reduce && { transition: { ...fade.transition, delay: 0.35 } })}
      >
        <button
          role="tab"
          aria-selected={mode === "vitrine"}
          aria-controls="pitch"
          onClick={() => setMode("vitrine")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
            mode === "vitrine" ? "bg-[#5AC8FA] text-[#1e1e1e]" : "text-gray-200 hover:text-white"
          }`}
        >
          <Monitor className="w-4 h-4" aria-hidden />
          <span>Site vitrine</span>
        </button>
        <button
          role="tab"
          aria-selected={mode === "app"}
          aria-controls="pitch"
          onClick={() => setMode("app")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
            mode === "app" ? "bg-[#5AC8FA] text-[#1e1e1e]" : "text-gray-200 hover:text-white"
          }`}
        >
          <Layers className="w-4 h-4" aria-hidden />
          <span>Application web</span>
        </button>
      </motion.div> */}

      {/* Accroche liée au toggle */}
      {/* <motion.p
        id="pitch"
        key={mode}
        className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 sm:mt-5 max-w-2xl"
        {...fade}
      >
        {line}
      </motion.p> */}

      {/* Mots-clés visibles MOBILE uniquement */}
      <motion.div
        className="mt-6 flex flex-col items-center text-gray-400 text-base font-medium tracking-wide"
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
        <Button to="/contact" variant="secondary" aria-label="Me contacter pour un projet web">
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