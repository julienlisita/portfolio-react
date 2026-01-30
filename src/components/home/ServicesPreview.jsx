// src/components/home/ServicesPreview.jsx

import { Monitor, Layers, LifeBuoy } from "lucide-react";
import ServiceCard from "./ServiceCard";
import HomeSection from "./HomeSection";
import { motion } from "framer-motion";

export default function ServicesPreview() {
  const services = [
    {
      title: "Création de site internet",
      subtitle: "Site vitrine clair & pro",
      icon: <Monitor />,
      description:
        "Un site moderne (mobile-first) pour présenter votre activité, inspirer confiance et générer des prises de contact.",
      color: ["#5AC8FA", "#007AFF"],
      link: "/services/creation-site-internet",
    },
    {
      title: "Fonctionnalités & outils sur mesure",
      subtitle: "Réservation, admin, outils métiers",
      icon: <Layers />,
      description:
        "Réservation en ligne, espace admin, formulaires avancés… Une solution adaptée à votre activité, évolutive et sécurisée.",
      color: ["#007AFF", "#9B59B6"],
      link: "/services/creation-site-internet-fonctionnalites-sur-mesure",
    },
    {
      title: "Suivi & maintenance du site",
      subtitle: "Sécurité & évolutions",
      icon: <LifeBuoy />,
      description:
        "Mises à jour, sécurité, corrections et petites évolutions : votre site reste fiable et performant dans le temps.",
      color: ["#9B59B6", "#FF66B2"],
      link: "/services/suivi-et-evolutions",
    },
  ];

  return (
    <HomeSection
      id="service"
      title="Ce que je propose"
      link={{ href: "/services", text: "Voir les services ›" }}
    >
      <p className="text-base sm:text-lg lg:text-xl">
        Un accompagnement simple : on clarifie le besoin, je
        développe, je mets en ligne, et je
        peux assurer le suivi si besoin.
      </p>

      <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="overflow-x-clip"
            initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.15 + i * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </HomeSection>
  );
}