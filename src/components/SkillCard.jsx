export default function SkillCard({className,name, logo, description})
{
    return (
        <div className="
            flex flex-col items-center justify-start gap-4
            w-52 h-60 p-4
            border border-[#5AC8FA] rounded-lg">
            {/* Nom  */}
            <p className="text-white font-semibold">{name}</p>
            {/* Logo */}
            <img
                src={logo}
                alt={name}
                className="h-10 w-auto object-fill"
            />
            {/* description */}
            <p className="text-white text-sm">{description}</p>
        </div>
    )
}