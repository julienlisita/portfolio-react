// src/components/common/Header.jsx

import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import useToggle from "../../hooks/useToggle";

export default function Header() {
  const { state: isOpen, toggleState } = useToggle(false);

  return (
    <header className="h-14 sm:h-16 lg:h-20 flex items-center justify-between px-4 bg-[#222222] sticky top-0 z-50 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      {/* Logo à gauche */}
      <div>
        <img src="/assets/logos/site/logo1.png" alt="Logo Julien Lisita" className="h-8 sm:h-10 lg:h-12 w-auto" />
      </div>

      {/* Menu desktop */}
      <nav className="hidden lg:flex space-x-6 text-gray-100">
        <Link className="hover:outline-1 hover:outline-[#5AC8FA]  px-2 py-1 rounded-md  hover:shadow-[0_0_8px_#5AC8FA] " to="/">Accueil</Link>
        <Link className="hover:outline-1 hover:outline-[#5AC8FA]  px-2 py-1 rounded-md  hover:shadow-[0_0_8px_#5AC8FA] " to="/about">À propos</Link>
        <Link className="hover:outline-1 hover:outline-[#5AC8FA]  px-2 py-1 rounded-md  hover:shadow-[0_0_8px_#5AC8FA] " to="/services">Services</Link>
        <Link className="hover:outline-1 hover:outline-[#5AC8FA]  px-2 py-1 rounded-md  hover:shadow-[0_0_8px_#5AC8FA] " to="/competences">Compétences</Link>
        <Link className="hover:outline-1 hover:outline-[#5AC8FA]  px-2 py-1 rounded-md  hover:shadow-[0_0_8px_#5AC8FA] " to="/portfolio">Portfolio</Link>
        <Link className="hover:outline-1 hover:outline-[#5AC8FA]  px-2 py-1 rounded-md  hover:shadow-[0_0_8px_#5AC8FA] " to="/blog">Blog</Link>
        <Link className="hover:outline-1 hover:outline-[#5AC8FA]  px-2 py-1 rounded-md  hover:shadow-[0_0_8px_#5AC8FA] " to="/contact">Contact</Link>
      </nav>

      {/* Burger menu mobile/tablette */}
      <button
        className="lg:hidden relative p-2 rounded-full transition-colors hover:ring-2 hover:ring-[#5AC8FA] hover:ring-opacity-50 hover:shadow-[0_0_8px_#5AC8FA]"
        onClick={toggleState}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X 
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gray-100 duration-300"
          />
        ) : (
          <Menu
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gray-100 duration-300"
          />
        )}
      </button>

      {/* Menu mobile/tablette déroulant */}
      <div className={[
        "absolute top-full left-0 w-full bg-[#222222] text-gray-100 flex flex-col items-center space-y-4 overflow-hidden transition-all duration-300 lg:hidden",
        isOpen ? "max-h-[400px] opacity-100 translate-y-0 py-4" : "max-h-0 opacity-0 -translate-y-2 py-0"
      ]
        .filter(Boolean)
        .join(" ")}>
        <Link to="/" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Accueil</Link>
        <Link to="/about" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">À propos</Link>
        <Link to="/services" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Services</Link>
        <Link to="/competences" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Compétences</Link>
        <Link to="/portfolio" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Portfolio</Link>
        <Link to="/blog" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Blog</Link>
        <Link to="/contact" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Contact</Link>
      </div>
    </header>
  );
}