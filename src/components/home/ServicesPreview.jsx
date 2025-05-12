import { Code, Server, Smartphone, Cloud } from "lucide-react";
import ServiceCard from "./ServiceCard";
import HomeSection from "./HomeSection";

export default function ServicesPreview()
{
    const services = [
        {
          title: "Front-End (Interface utilisateur)",
          icon: <Code/>,
          description:
            "Création d’interfaces modernes, fluides et responsives pour offrir à vos utilisateurs une navigation agréable, quel que soit le support.",
          color: ["#5AC8FA","#007AFF"]  
        },
        {
          title: "Back-End (Serveur & Données)",
          icon: <Server/>,
          description:
            "Mise en place de l’infrastructure logique et technique pour vos applications : traitement des données, sécurité, API sur-mesure.",
            color: ["#007AFF","#9B59B6"]  
        },
        // {
        //   title: "Applications Mobiles",
        //   icon: <Smartphone/>,
        //   description:
        //     "Conception d’applications hybrides performantes pour Android et iOS, avec une expérience utilisateur fluide.",
        // },
        {
          title: "Hébergement & Maintenance",
          icon: <Cloud/>,
          description:
            "Mise en ligne, supervision des performances, sécurité et mises à jour : je vous accompagne dans la durée.",
            color: ["#9B59B6","#FF66B2"]  
        },
      ];

    return (
        <HomeSection
            id="service"
            title="Mes services"
            link={{href:"/about", text:"En savoir plus"}}
        > 
        
        <div className="w-full flex flex-wrap justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-8">
              {services.map((service) => (
              <ServiceCard key={service.title} {...service} 
              />
              ))}
        </div>
      
        </HomeSection>
    )
}
