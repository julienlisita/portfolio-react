// src/components/home/LandingSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Monitor, Layers } from "lucide-react";
import Button from "../common/Button";

export default function LandingSection() {
  const [mode, setMode] = useState("vitrine"); // "vitrine" | "app"

  const title = "Julien Lisita";
  const subtitle = "Développeur web";
  const line =
    mode === "vitrine"
      ? "Sites vitrines modernes, rapides et sans WordPress."
      : "Applications web sur mesure, robustes et évolutives.";

  // ✅ on reprend tes keywords
  const keywords = ["Conception", "Développement", "Maintenance"];

  return (
    <section
      id="landing"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center bg-[#222222] px-4 overflow-hidden"
    >
      {/* Spotlight discret */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 30%, rgba(90,200,250,0.10), transparent 60%)",
        }}
      />

      {/* Logo */}
      <motion.img
        src="/assets/logos/site/logo.png"
        alt="Logo initiales Julien Lisita"
        className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Nom */}
      <motion.h1
        className="text-gray-100 text-4xl sm:text-5xl md:text-6xl font-extrabold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h1>

      {/* Sous-titre */}
      <motion.h2
        className="text-[#007AFF] text-2xl sm:text-3xl md:text-4xl font-medium tracking-wide mt-1"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.h2>

      {/* Toggle besoin */}
      <motion.div
        className="mt-5 flex items-center gap-2 bg-[#2a2a2a] rounded-full p-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <button
          onClick={() => setMode("vitrine")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition 
            ${mode === "vitrine" ? "bg-[#5AC8FA] text-[#1e1e1e]" : "text-gray-200 hover:text-white"}`}
        >
          <Monitor className="w-4 h-4" />
          <span>Site vitrine</span>
        </button>
        <button
          onClick={() => setMode("app")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition 
            ${mode === "app" ? "bg-[#5AC8FA] text-[#1e1e1e]" : "text-gray-200 hover:text-white"}`}
        >
          <Layers className="w-4 h-4" />
          <span>Application web</span>
        </button>
      </motion.div>

      {/* Accroche */}
      <motion.p
        key={mode}
        className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {line} <br className="hidden sm:block" />
        Des solutions <span className="text-[#007AFF] font-semibold">sur mesure</span> à l’image de votre projet.
      </motion.p>

      {/* Mots clés */}
      <motion.div
        className="mt-6 flex flex-col sm:flex-row sm:space-x-4 items-center text-gray-400 text-lg sm:text-xl md:text-2xl font-medium font-code tracking-wide"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.35,
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
                  delayChildren: 0.9 + i * 0.15,
                  staggerChildren: 0.04,
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

      {/* CTAs */}
      <motion.div
        className="mt-6 flex flex-col sm:flex-row gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <Button
          to={mode === "vitrine" ? "/services/business-websites" : "/services/web-applications"}
          variant="primary"
        >
          Découvrir {mode === "vitrine" ? "les vitrines" : "les applications"}
        </Button>
        <Button to="/contact" variant="secondary">Me contacter</Button>
      </motion.div>

      {/* Hint scroll */}
      <motion.div
        className="absolute bottom-5 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group"
        >
          <ArrowDown className="h-10 w-10 sm:h-12 sm:w-12 text-[#5AC8FA] group-hover:translate-y-0.5 transition-transform" />
        </a>
        <p className="text-gray-500 text-xs mt-1">Faites défiler ou cliquez</p>
      </motion.div>
    </section>
  );
}