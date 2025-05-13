import { Link } from "react-router-dom";

export default function ProjectCard({ slug, image, title, description, technos }) {
  return (
    <Link
      to={`/portfolio/${slug}`}
      className="bg-[#2a2a2a] w-72 h-96 rounded-xl overflow-hidden shadow-[0_0_10px_rgba(155,89,182,0.3),0_0_20px_rgba(0,122,255,0.3)] transition block hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(155,89,182,0.6),0_0_18px_rgba(0,122,255,0.6)] "
    >
      <img
        src={image}
        alt={`Aperçu du projet ${title}`}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-base sm:text-lg text-white font-semibold mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 pb-2">
          {technos.map((tech, i) => (
        <span
        key={i}
        className="text-xs bg-[#9B59B6] text-white px-2 py-1 rounded-md"
        >
        {tech}
        </span>
          ))}
        </div>
      </div>
    </Link>
  );
}