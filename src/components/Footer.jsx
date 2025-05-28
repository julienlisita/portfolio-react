import { Link } from "react-router-dom";
import { LuLinkedin, LuGithub } from 'react-icons/lu';

export default function Footer()
{
    return (       
        <footer className="bg-[#222222] border-t border-gray-600 flex flex-col space-y-3 sm:flex-row sm:space-y-0 justify-between items-center px-4 py-3">
            
            {/* Logo à gauche */}
            <div>
                <img src="/assets/logos/site/logo1.png" alt="Logo Julien Lisita" className="h-8 sm:h-10 lg:h-12 w-auto" />
            </div>
            
            {/* Menu et mentions légales au centre */}
            <div className="flex flex-col items-center">
                <nav className="text-sm sm:text-sm lg:text-sm flex flex-col sm:flex-row items-center space-x-6 mb-2  text-white">
                    <Link className="text-center hover:underline" to="/about">A propos</Link>
                    <Link className="text-center hover:underline" to="/mentions-legales">Mentions légales et politique de confidentialité</Link>
                </nav>
                <p className=" text-xs sm:text-sm text-center text-gray-400">© 2025 Tout droit réservés Julien LISITA – Développeur Web – Entreprise Individuelle (EI)</p>
            </div>

            {/* Réseaux sociaux à droite */}
           <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                <a href="https://www.linkedin.com/in/julienlisita/" target="_blank" rel="noopener noreferrer">
                    <LuLinkedin className="h-7 sm:h-8 lg:h-11 w-auto text-white px-1 py-1 hover:outline hover:outline-1 hover:outline-[#5AC8FA] rounded-md hover:shadow-[0_0_10px_#5AC8FA]" />
                </a>
                <a href="https://github.com/julienlisita" target="_blank" rel="noopener noreferrer">
                    <LuGithub className="h-7 sm:h-8 lg:h-11 w-auto text-white px-1 py-1 hover:outline hover:outline-1 hover:outline-[#5AC8FA] rounded-md hover:shadow-[0_0_10px_#5AC8FA]" />
                </a>
            </div>
        </footer>
    )
}