import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import useToggle from "../hooks/useToggle";

export default function Header() {
  const {state:isOpen, toggleState} = useToggle(false);

  return (
    <header className="h-14 sm:h-16 lg:h-20 flex items-center justify-between px-4 bg-black sticky top-0 z-50">
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
        <Link to="/">Accueil</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/competences">Compétences</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
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
        {isOpen && (
        <div className="absolute top-full right-0 w-full bg-black shadow-md flex text-white flex-col items-center space-y-4 py-4 lg:hidden">
            <Link to="/" onClick={toggleState}>Accueil</Link>
            <Link to="/competences" onClick={toggleState}>Compétences</Link>
            <Link to="/portfolio" onClick={toggleState}>Portfolio</Link>
            <Link to="/contact" onClick={toggleState}>Contact</Link>
        </div>
        )}
    </header>
  );
}