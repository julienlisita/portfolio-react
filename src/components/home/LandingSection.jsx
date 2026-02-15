// src/components/home/LandingSection.jsx

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "../UI/Button";
import styles from "./LandingSection.module.css";

export default function LandingSection() {
  const reduce = useReducedMotion();

  const title = "Julien Lisita";
  const subtitle = "Création de sites web professionnels à Bordeaux";

  // desktop only
  const tagline =
    "Un site clair et professionnel pour présenter vos services et générer des demandes, sans complexité.";

  const VISUAL_SRC = "/assets/mockups/portfolio-services-ipad.png";

  const fadeUp = useMemo(
    () =>
      reduce
        ? {}
        : {
            initial: { y: 18, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.55, ease: "easeOut" },
          },
    [reduce]
  );

  const fade = useMemo(
    () =>
      reduce
        ? {}
        : {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.45, ease: "easeOut" },
          },
    [reduce]
  );

const spotlightStyle = {
  background:
    "radial-gradient(700px 360px at 50% 22%, rgba(90,200,250,0.12), transparent 60%)",
};

// variante desktop (halo décalé vers le mockup)
const spotlightStyleDesktop = {
  background:
    "radial-gradient(900px 520px at 70% 50%, rgba(90,200,250,0.14), transparent 60%)",
};

  return (
    <section
      id="landing"
      className="relative min-h-[100svh] bg-[#222222] overflow-hidden"
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={spotlightStyle}
      >
        <div className="hidden lg:block absolute inset-0" style={spotlightStyleDesktop} />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-[100svh]">
        {/* GRID */}
        <div
          className="
            min-h-[100svh]
            grid-rows-[auto_auto]
            lg:grid-rows-1
            lg:grid-cols-2

            /* IMPORTANT : centre le contenu de la grid dans la hauteur dispo */
            content-center

            /* IMPORTANT : items centrés (sinon ça colle en haut) */
            items-center

            gap-12 sm:gap-12 lg:gap-12

            /* on garde un peu d’air mais pas trop */
            py-8 sm:py-12 lg:py-0

            /* réserve la place de la flèche */
            pb-16 sm:pb-20 lg:pb-0
          "
        >
          {/* TEXT */}
          <div
            className="
              text-center lg:text-left
              flex flex-col
              space-y-4 sm:space-y-5
            "
          >
            <motion.img
              src="/assets/logos/site/logo-blur.png"
              alt="Logo initiales Julien Lisita"
              width={112}
              height={112}
              className="
                mx-auto lg:mx-0
                h-12 w-12
                sm:h-20 sm:w-20
                md:h-24 md:w-24
              "
              {...(!reduce && {
                initial: { opacity: 0, scale: 0.94 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.45, ease: "easeOut" },
              })}
            />

            <motion.h1
              className={`text-white text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] ${styles.neonTitleStrong}`}
              {...fadeUp}
              {...(!reduce && { transition: { ...fadeUp.transition, delay: 0.05 } })}
            >
              {title}
            </motion.h1>

            <motion.h2
              className={`text-xl sm:text-3xl md:text-4xl tracking-wide ${styles.subtitleOutline}`}
              {...fadeUp}
              {...(!reduce && { transition: { ...fadeUp.transition, delay: 0.14 } })}
            >
              {subtitle}
            </motion.h2>

            <motion.p
              className={`hidden lg:block max-w-2xl text-lg sm:text-xl md:text-2xl ${styles.tagline}`}
              {...fade}
              {...(!reduce && { transition: { ...fade.transition, delay: 0.22 } })}
            >
              {tagline}
            </motion.p>

            <motion.div
              className="pt-2 flex justify-center lg:justify-start"
              {...fade}
              {...(!reduce && { transition: { ...fade.transition, delay: 0.3 } })}
            >
              <Button to="/contact" variant="primary">
                Me contacter
              </Button>
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div
            className="w-full flex items-center justify-center lg:justify-end"
            {...fade}
            {...(!reduce && { transition: { ...fade.transition, delay: 0.18 } })}
          >
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* glow */}
              <div
                className="pointer-events-none absolute -inset-10 blur-3xl opacity-35"
                style={{
                  background:
                    "radial-gradient(520px 340px at 55% 45%, rgba(90,200,250,0.22), transparent 60%)",
                }}
              />

              <img
                src={VISUAL_SRC}
                alt="Aperçu d’une page de services"
                className="
                  relative z-10
                  w-[94%] sm:w-[82%] lg:w-full
                  max-w-[720px]
                  h-auto
                  max-h-[46svh] sm:max-h-none
                  object-contain
                  drop-shadow-[0_30px_70px_rgba(0,0,0,0.55)]
                "
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-3 sm:bottom-5 left-0 right-0 flex flex-col items-center"
        {...fade}
        {...(!reduce && { transition: { ...fade.transition, delay: 0.7 } })}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#pour-qui")?.scrollIntoView({ behavior: "smooth" });
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