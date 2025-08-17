// src/components/home/ServicesPreview.jsx

import { Monitor, Layers, LifeBuoy } from "lucide-react";
import ServiceCard from "./ServiceCard";
import HomeSection from "./HomeSection";
import { motion } from "framer-motion";

export default function ServicesPreview()
{
  const services = [
    {
      title: "Sites vitrines modernes",
      icon: <Monitor />,
      description:
        "Site clair, performant et responsive. Idéal indépendants, artisans, cabinets.",
      color: ["#5AC8FA", "#007AFF"],
      link: "/services/business-websites",    
    },
    {
      title: "Applications web sur mesure",
      icon: <Layers />,
      description:
        "Outils métier, SaaS, dashboards, auth. Dév. full stack React/Node.",
      color: ["#007AFF", "#9B59B6"],
      link: "/services/web-applications",        
    },
    {
      title: "Suivi & maintenance",
      icon: <LifeBuoy />,
      description:
        "Mises à jour, sécurité, petites évolutions. Forfaits ou à la demande.",
      color: ["#9B59B6", "#FF66B2"],
      link: "/services/support"

                
    },
  ];

    return (
        <HomeSection
            id="service"
            title="Ce que je propose"
            link={{href:"/services", text:"Services"}}
        > 

        <p className="text-base sm:text-lg lg:text-xl">
          De l’idée initiale à la mise en ligne, je vous accompagne à chaque étape pour construire des solutions web performantes et durables.
        </p>
        
        <div className="w-full flex flex-wrap justify-center lg:justify-between gap-6 sm:gap-7 lg:gap-8">
          {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
        </div>
      
        </HomeSection>
    )
}
