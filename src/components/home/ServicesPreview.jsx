import { Monitor, Layers, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import HomeSection from "./HomeSection";

export default function ServicesPreview()
{
  const services = [
    {
      title: "Sites vitrines modernes",
      icon: <Monitor />,
      description:
        "Création de sites professionnels rapides, responsive et sur mesure pour artisans, restaurants, freelances et indépendants. Pas besoin de WordPress : tout est optimisé, maintenable et élégant.",
      color: ["#5AC8FA", "#007AFF"],
      link: "/services#vitrines",
    },
    {
      title: "Applications web sur mesure",
      icon: <Layers />,
      description:
        "Développement complet d’applications web sur mesure, front-end et back-end : SaaS, outils métiers, plateformes interactives, jeux en ligne. Solutions robustes, évolutives et sécurisées, adaptées à vos besoins.",
      color: ["#007AFF", "#9B59B6"],
      link: "/services#apps",
    },
    {
      title: "Suivi & maintenance",
      icon: <LifeBuoy />,
      description:
        "Je vous accompagne après la mise en ligne : corrections, améliorations, ajout de fonctionnalités, mises à jour, sécurité, hébergement et assistance continue.",
      color: ["#9B59B6", "#FF66B2"],
      link: "/services#maintenance",
    },
  ];

    return (
        <HomeSection
            id="service"
            title="Mes services"
            link={{href:"/services", text:"Voir détail"}}
        > 
        
        <div className="w-full flex flex-wrap justify-center lg:justify-between gap-6 sm:gap-7 lg:gap-8">
          {services.map((service) => (
              <Link key={service.title} to={service.link} >
                <ServiceCard {...service} />
              </Link>
          ))}
        </div>
      
        </HomeSection>
    )
}
