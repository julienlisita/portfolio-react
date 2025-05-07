import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import useToggle from "../hooks/useToggle";

export default function Header() {
  const {state:isOpen, toggleState} = useToggle(false);

  return (
    <header className="h-14 sm:h-16 lg:h-20 flex items-center justify-between px-4 bg-[#222222] sticky top-0 z-50 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      {/* Logo à gauche */}
        <div>
            <img src="./src/assets/logos/site/logo1.png" alt="Logo Julien Lisita" className="h-8 sm:h-10 lg:h-12 w-auto" />
        </div>

        {/* Nom (centré en tablette & desktop) */}
        <div className="hidden sm:block sm:text-lg lg:text-xl font-semibold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to bottom, #5AC8FA, #FF66B2)' }}>
            Julien Lisita
        </div>

        {/* Menu desktop */}
        <nav className="hidden lg:flex space-x-6 text-white">
        <Link className="hover:underline" to="/" >Accueil</Link>
        <Link className="hover:underline" to="/competences">Compétences</Link>
        <Link className="hover:underline" to="/portfolio" >Portfolio</Link>
        <Link className="hover:underline" to="/blog">Blog</Link>
        <Link className="hover:underline" to="/contact">Contact</Link>
        </nav>

        {/* Burger menu mobile/tablette */}
        <button
        className="lg:hidden text-white"
        onClick={toggleState}
        aria-label="Toggle menu"
        >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />}
        </button>

        {/* Menu mobile/tablette déroulant */}
         
        <div className={[
          "absolute top-full left-0 w-full bg-[#222222] text-white flex flex-col items-center space-y-4 overflow-hidden transition-all duration-300 lg:hidden",
          isOpen ? "max-h-96 opacity-100 translate-y-0 py-4" : "max-h-0 opacity-0 -translate-y-2 py-0"
        ]
          .filter(Boolean)
          .join(" ")}>
            <Link to="/" onClick={toggleState}>Accueil</Link>
            <Link to="/competences" onClick={toggleState}>Compétences</Link>
            <Link to="/portfolio" onClick={toggleState}>Portfolio</Link>
            <Link to="/blog" onClick={toggleState}>Blog</Link>
            <Link to="/contact" onClick={toggleState}>Contact</Link>
        </div>
        
    </header>
  );
}