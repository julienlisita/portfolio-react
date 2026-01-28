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
        "Un site clair, professionnel et adapté au mobile pour présenter votre activité, rassurer vos visiteurs et faciliter la prise de contact.",
      color: ["#5AC8FA", "#007AFF"],
      link: "/services/business-websites",    
    },
    {
      title: "Applications web sur mesure",
      icon: <Layers />,
      description:
        "Outils métier, espace client, gestion interne… Je conçois des applications adaptées à votre façon de travailler, pour vous faire gagner du temps.",
      color: ["#007AFF", "#9B59B6"],
      link: "/services/web-applications",        
    },
    {
      title: "Suivi & maintenance",
      icon: <LifeBuoy />,
      description:
        "Mises à jour, sécurité, petites évolutions : je peux assurer le suivi pour que votre site reste fiable dans le temps.",
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
          De l’idée initiale à la mise en ligne, je vous accompagne à chaque étape pour construire une présence en ligne qui met en valeur votre activité et parle à vos clients.
        </p>
        
        <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="overflow-x-clip"           // ← clip local
            initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}  // ← offset réduit
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}          // évite 1.03 si la carte touche le bord
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
        </div>
      
        </HomeSection>
    )
}
