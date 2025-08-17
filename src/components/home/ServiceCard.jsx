// ServiceCard.jsx
import { motion } from "framer-motion";
import Button from "../common/Button"; // ← adapte le chemin si ton Button est ailleurs

export default function ServiceCard({ icon, title, description, color, link }) {
  const gradientStyle = { backgroundImage: `linear-gradient(135deg, ${color[0]}, ${color[1]})` };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ 
        y: { duration: 0.6, ease: "easeOut", delay: 0.2 }, 
        scale: { duration: 0.25 } 
      }}
      viewport={{ once: true }}
      className="w-72"
    >
      <div className="bg-[#2a2a2a] text-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
        {/* Bandeau haut */}
        <div 
          className="w-full h-24 flex flex-col items-center justify-center space-y-1" 
          style={gradientStyle}
        >
          <div className="text-3xl">{icon}</div>
          <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
        </div>

        {/* Corps */}
        <div className="p-6 pt-4 flex flex-col flex-1">
          <p className="text-base text-center text-gray-200 flex-1">{description}</p>

          {link && (
            <div className="mt-4 flex justify-center">
              <Button to={link}>Découvrir</Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}