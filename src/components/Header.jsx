import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import useToggle from "../hooks/useToggle";

export default function Header() {
  const { state: isOpen, toggleState } = useToggle(false);

  return (
    <header className="h-14 sm:h-16 lg:h-20 flex items-center justify-between px-4 bg-[#222222] sticky top-0 z-50 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      {/* Logo à gauche */}
      <div>
        <img src="../src/assets/logos/site/logo1.png" alt="Logo Julien Lisita" className="h-8 sm:h-10 lg:h-12 w-auto" />
      </div>

      {/* Nom (centré en tablette & desktop) */}
      <div className="hidden sm:block sm:text-lg lg:text-xl font-semibold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to bottom, #5AC8FA, #FF66B2)' }}>
        Julien Lisita
      </div>

      {/* Menu desktop */}
      <nav className="hidden lg:flex space-x-6 text-white">
        <Link className="hover:bg-[#5AC8FA] hover:text-[#222222] px-2 py-1 rounded-md transition-all duration-300" to="/" >Accueil</Link>
        <Link className="hover:bg-[#5AC8FA] hover:text-[#222222] px-2 py-1 rounded-md transition-all duration-300" to="/services" >Services</Link>
        <Link className="hover:bg-[#5AC8FA] hover:text-[#222222] px-2 py-1 rounded-md transition-all duration-300" to="/competences">Compétences</Link>
        <Link className="hover:bg-[#5AC8FA] hover:text-[#222222] px-2 py-1 rounded-md transition-all duration-300" to="/portfolio" >Portfolio</Link>
        <Link className="hover:bg-[#5AC8FA] hover:text-[#222222] px-2 py-1 rounded-md transition-all duration-300" to="/blog">Blog</Link>
        <Link className="hover:bg-[#5AC8FA] hover:text-[#222222] px-2 py-1 rounded-md transition-all duration-300" to="/contact">Contact</Link>
      </nav>

      {/* Burger menu mobile/tablette */}
      <button
        className="lg:hidden relative p-3 rounded-full transition-all duration-300 hover:bg-[#5AC8FA]"
        onClick={toggleState}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X 
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white hover:text-[#222222] transition-colors duration-300"
          />
        ) : (
          <Menu
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white hover:text-[#222222] transition-colors duration-300"
          />
        )}
      </button>

      {/* Menu mobile/tablette déroulant */}
      <div className={[
        "absolute top-full left-0 w-full bg-[#222222] text-white flex flex-col items-center space-y-4 overflow-hidden transition-all duration-300 lg:hidden",
        isOpen ? "max-h-96 opacity-100 translate-y-0 py-4" : "max-h-0 opacity-0 -translate-y-2 py-0"
      ]
        .filter(Boolean)
        .join(" ")}>
        <Link to="/" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Accueil</Link>
        <Link to="/services" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Services</Link>
        <Link to="/competences" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Compétences</Link>
        <Link to="/portfolio" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Portfolio</Link>
        <Link to="/blog" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Blog</Link>
        <Link to="/contact" onClick={toggleState} className="hover:bg-[#5AC8FA] hover:text-[#222222] w-full px-4 py-2 rounded-md text-center transition-all duration-300">Contact</Link>
      </div>
    </header>
  );
}