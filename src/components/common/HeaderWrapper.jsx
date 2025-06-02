// src/components/common/HeaderWrapper.jsx

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

export default function HeaderWrapper() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      // Sur toutes les pages sauf Home, on affiche toujours le header
      setShowHeader(true);
      return;
    }

    const landingSection = document.getElementById("landing");

    const handleScroll = () => {
      if (!landingSection) return;
      const rect = landingSection.getBoundingClientRect();

      // On affiche le Header si le haut de la section est en dehors de l'écran
      const isPastLanding = rect.bottom <= 100;

      setShowHeader(isPastLanding);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // pour gérer si on recharge la page scrollée

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <>
      {showHeader && (
        <div className="fixed top-0 left-0 w-full z-50 transition-opacity duration-300">
          <Header />
        </div>
      )}
    </>
  );
}