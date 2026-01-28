// ServiceCard.jsx

import Button from "../common/Button";

export default function ServiceCard({ icon, title, description, color, link }) {
  const gradientStyle = { backgroundImage: `linear-gradient(135deg, ${color[0]}, ${color[1]})` };
  const isMobile = window.innerWidth < 768;
  return (
      <div className="bg-[#2a2a2a] w-full text-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
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
          <p className="text-base text-left text-gray-200 flex-1">{description}</p>

          {link && (
            <div className="mt-4 flex justify-center">
              <Button to={link} variant="text">Découvrir →</Button>
            </div>
          )}
        </div>
      </div>
  );
}