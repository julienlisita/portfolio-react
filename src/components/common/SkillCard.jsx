// src/components/common/SkillCard.jsx

export default function SkillCard({title, icons, description})
{
    return (
     <div  className="relative pl-10 text-gray-200">
        {/* Lueur subtile et fondue */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-t from-[#9B59B6] to-[#007AFF] blur-[6px] z-10 pointer-events-none" />
      
        {/* Bordure nette par-dessus */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-t from-[#9B59B6] to-[#007AFF] z-20" />
      
        <div className="relative z-30">
          
          <h3 className="text-lg font-semibold text-gray-100 mb-2">{title}</h3>
          <p className="text-base mb-4">{description}</p>
          <div className="flex flex-wrap items-center gap-4 text-[#9B59B6] text-[28px]">
            {icons.map((IconComponent, i) => (
              <span key={i}>{IconComponent}</span>
            ))}
          </div>
        </div>
      </div>
    )
}