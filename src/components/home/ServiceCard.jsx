export default function ServiceCard({ icon, title, description, color }) {
    const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${color[0]}, ${color[1]})`,
  };
  return (
    <div className="flex flex-col items-center justify-start w-72 h-80 bg-[#2a2a2a] text-white rounded-2xl p-6"
    style={gradientStyle}>
      
      {/* Icône */}
      <div className="text-white text-4xl mb-4">
        {icon}
      </div>

      {/* Titre */}
      <h3 className="text-2xl text-center font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-white text-center">
        {description}
      </p>
    </div>
  );
}