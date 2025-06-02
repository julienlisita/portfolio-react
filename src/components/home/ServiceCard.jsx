// src/components/home/ServiceCard.jsx

import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description, color }) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${color[0]}, ${color[1]})`,
  };

  return (
    <motion.div

    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{
      y: { duration: 0.6, ease: "easeOut", delay: 0.6 },
      scale: { duration: 0.3, ease: "easeOut" }
      }}
    viewport={{ once: true }}
    className="w-72 h-80"
    >
    <div className="w-72 h-80 bg-[#2a2a2a] text-white rounded-2xl shadow-xl overflow-hidden">
      {/* Bandeau dégradé avec icône + titre */}
      <div
        className="w-full h-24 flex flex-col items-center justify-center space-y-1"
        style={gradientStyle}
      >
        <div className="text-3xl">{icon}</div>
        <h3 className="text-lg font-semibold text-white text-center">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="flex flex-col items-center justify-start p-6 pt-4">
        <p className="text-base text-center text-gray-200">
          {description}
        </p>
      </div>
    </div>
    </motion.div>
  );
}