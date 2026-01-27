// src/components/common/ProjectCard.jsx
import { motion } from "framer-motion";
import Button from "./Button";

export default function ProjectCard({ slug, image, title, description, technos }) {
  return (
    <motion.div
      initial={{
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      }}
      whileInView={{
        boxShadow:
          "0px 0px 18px rgba(155, 89, 182, 0.6), 0px 0px 18px rgba(0, 122, 255, 0.6)",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{
        boxShadow: { duration: 1.6, ease: "easeOut", delay: 0.6 },
        scale: { duration: 0.3, ease: "easeOut" },
      }}
      viewport={{ once: true }}
      className="w-full rounded-xl bg-[#2a2a2a] overflow-hidden flex flex-col"
    >
      {/* Image */}
      <img
        src={image}
        alt={`Aperçu du projet ${title}`}
        className="h-48 w-full object-cover"
      />

      {/* Contenu */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg text-white font-semibold mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-200 mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pb-3">
          {technos.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-[#9B59B6] text-white px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bouton centré */}
        <div className="mt-4 flex justify-center">
          <Button to={`/portfolio/${slug}`} variant="text">
            Voir le projet →
          </Button>
        </div>
      </div>
    </motion.div>
  );
}