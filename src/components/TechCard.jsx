export default function TechnologyCard({ icon: Icon, name, description }) {
  return (
    <div className="flex flex-col items-center text-center bg-[#2A2A2A] text-gray-200 p-4 rounded-2xl border border-[#333] transition-all duration-300 shadow-[0_0_8px_#9B59B6] hover:shadow-[0_0_15px_#9B59B6] hover:border-[#9B59B6]">
      {Icon && <Icon className="h-10 w-10 text-[#9B59B6] mb-2 transition-colors duration-300 group-hover:text-[#FF66B2]" />}
      <h3 className="text-lg font-semibold text-gray-100 mb-1">{name}</h3>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}