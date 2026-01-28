// src/components/common/Header.jsx

import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useToggle from "../../hooks/useToggle";

export default function Header() {
  const { state: isOpen, toggleState } = useToggle(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const baseLink =
    "px-2 py-1 rounded-md transition " +
    "hover:outline-1 hover:outline-[#5AC8FA] hover:shadow-[0_0_8px_#5AC8FA]";

  const activeLink = "text-[#5AC8FA] font-semibold shadow-[0_0_8px_#5AC8FA]";

  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur bg-[#1e1e1e]/90 border-b border-[#2f2f2f]
        shadow-[0_6px_20px_rgba(0,0,0,0.25)]
      "
    >
      {/* Barre du header */}
      <div className="h-16 sm:h-18 lg:h-20">
        <div className="max-w-screen-xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src="/assets/logos/site/logo.png"
              alt="Logo Julien Lisita"
              className="h-10 sm:h-12 lg:h-14 w-auto"
            />
          </div>

          {/* Menu desktop */}
          <nav className="hidden lg:flex items-center space-x-6 text-gray-100">
            <Link to="/" className={`${baseLink} ${isActive("/") ? activeLink : ""}`}>Accueil</Link>
            <Link to="/services" className={`${baseLink} ${isActive("/services") ? activeLink : ""}`}>Services</Link>
            <Link to="/realisations" className={`${baseLink} ${isActive("/portfolio") ? activeLink : ""}`}>Réalisations</Link>
            <Link to="/tarifs" className={`${baseLink} ${isActive("/pricing") ? activeLink : ""}`}>Tarifs</Link>
            <Link to="/a-propos" className={`${baseLink} ${isActive("/about") ? activeLink : ""}`}>À propos</Link>
            <Link to="/competences" className={`${baseLink} ${isActive("/competences") ? activeLink : ""}`}>Compétences</Link>
            <Link to="/blog" className={`${baseLink} ${isActive("/blog") ? activeLink : ""}`}>Blog</Link>
            <Link to="/contact" className={`${baseLink} ${isActive("/contact") ? activeLink : ""}`}>Contact</Link>
          </nav>

          {/* Burger menu */}
          <button
            className="lg:hidden p-2 rounded-full transition hover:ring-2 hover:ring-[#5AC8FA]/50 hover:shadow-[0_0_8px_#5AC8FA] focus-visible:ring-2 focus-visible:ring-[#5AC8FA]"
            onClick={toggleState}
            aria-label="Basculer le menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-8 w-8 text-gray-100 duration-300" />
            ) : (
              <Menu className="h-8 w-8 text-gray-100 duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={[
          "lg:hidden absolute top-full left-0 w-full",
          "bg-[#1e1e1e]/95 backdrop-blur border-b border-[#2f2f2f]",
          "overflow-hidden transition-[max-height,opacity,transform] duration-300",
          isOpen
            ? "max-h-[520px] opacity-100 translate-y-0 py-4"
            : "max-h-0 opacity-0 -translate-y-1 py-0",
        ].join(" ")}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col text-gray-100">
            <Link to="/" onClick={toggleState}
              className={`text-center py-3 rounded-md border-b border-[#2a2a2a] ${baseLink} ${isActive("/") ? activeLink : ""}`}>
              Accueil
            </Link>
            <Link to="/about" onClick={toggleState}
              className={`text-center py-3 rounded-md border-b border-[#2a2a2a] ${baseLink} ${isActive("/a-propos") ? activeLink : ""}`}>
              À propos
            </Link>
            <Link to="/services" onClick={toggleState}
              className={`text-center py-3 rounded-md border-b border-[#2a2a2a] ${baseLink} ${isActive("/services") ? activeLink : ""}`}>
              Services
            </Link>
            <Link to="/pricing" onClick={toggleState}
              className={`text-center py-3 rounded-md border-b border-[#2a2a2a] ${baseLink} ${isActive("/tarifs") ? activeLink : ""}`}>
              Tarifs
            </Link>
            <Link to="/competences" onClick={toggleState}
              className={`text-center py-3 rounded-md border-b border-[#2a2a2a] ${baseLink} ${isActive("/competences") ? activeLink : ""}`}>
              Compétences
            </Link>
            <Link to="/portfolio" onClick={toggleState}
              className={`text-center py-3 rounded-md border-b border-[#2a2a2a] ${baseLink} ${isActive("/realisations") ? activeLink : ""}`}>
              Portfolio
            </Link>
            <Link to="/blog" onClick={toggleState}
              className={`text-center py-3 rounded-md border-b border-[#2a2a2a] ${baseLink} ${isActive("/blog") ? activeLink : ""}`}>
              Blog
            </Link>
            <Link to="/contact" onClick={toggleState}
              className={`text-center py-3 rounded-md ${baseLink} ${isActive("/contact") ? activeLink : ""}`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}