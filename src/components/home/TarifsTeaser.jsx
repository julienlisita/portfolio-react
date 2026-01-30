// src/components/home/TarifsTeaser.jsx

import HomeSection from "./HomeSection";
import Button from "../common/Button";
import { BadgeEuro, Clock, Wrench } from "lucide-react";

export default function TarifsTeaser() {
  return (
    <HomeSection
      id="tarifs"
      title="Tarifs (repères simples)"
      link={{ href: "/tarifs", text: "Voir les tarifs" }}
    >
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Des tarifs clairs, adaptés à votre besoin. Je vous propose un devis après un échange gratuit,
        en fonction de vos pages, de vos objectifs et du niveau de personnalisation.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <TeaserCard
          icon={<BadgeEuro className="text-[#007AFF]" size={22} aria-hidden />}
          title="Site vitrine"
          desc="Dès 800 € (selon pages & design)"
        />
        <TeaserCard
          icon={<Wrench className="text-[#007AFF]" size={22} aria-hidden />}
          title="Fonctionnalités sur mesure"
          desc="Réservation, admin, formulaires avancés…"
        />
        <TeaserCard
          icon={<Clock className="text-[#007AFF]" size={22} aria-hidden />}
          title="Délais"
          desc="En général 2 à 4 semaines"
        />
      </div>
    </HomeSection>
  );
}

function TeaserCard({ icon, title, desc }) {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-6 h-full shadow-lg">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-100">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-200 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}