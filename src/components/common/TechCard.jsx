// src/components/common/TechCard.jsx

export default function TechnologyCard({ icon: Icon, name, description, color }) {
  return (
    <div 
    className="flex flex-col items-center text-center bg-[#2A2A2A] text-gray-200 p-4 rounded-2xl border border-[#333] transition-all duration-300 shadow-[0_0_8px_var(--color)] hover:shadow-[0_0_15px_var(--color)] hover:border-[var(--color)]"
    style={{ '--color': color }}
    >
      {Icon && <Icon className="h-10 w-10 text-[var(--color)] mb-2 transition-colors duration-300" style={{ '--color': color }}/>}
      <h3 className="text-lg font-semibold text-gray-100 mb-1">{name}</h3>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}