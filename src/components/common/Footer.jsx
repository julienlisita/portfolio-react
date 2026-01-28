// src/components/common/Footer.jsx

import { Link } from "react-router-dom";
import { LuLinkedin, LuGithub, LuFacebook } from "react-icons/lu";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#222222] border-t border-gray-600 text-white">
      <div className="px-4 sm:px-8 py-8 space-y-6 max-w-6xl mx-auto">
        {/* Bloc haut : logo / menu / réseaux */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/logos/site/logo.png"
              alt="Logo Julien Lisita"
              className="h-10 sm:h-11 lg:h-12 w-auto"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Menu principal */}
          <nav
            aria-label="Navigation principale"
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center text-center gap-y-2 gap-x-6 text-sm font-medium"
          >
            <Link className="hover:underline" to="/">Accueil</Link>
            <Link className="hover:underline" to="/services">Services</Link>
            <Link className="hover:underline" to="/realisations">Réalisations</Link>
            <Link className="hover:underline" to="/tarifs">Tarifs</Link>
            <Link className="hover:underline" to="/a-propos">A propos</Link>
            <Link className="hover:underline" to="/comment-je-travaille">Comment je travaille</Link>
            <Link className="hover:underline" to="/blog">Blog</Link>
            <Link className="hover:underline" to="/contact">Contact</Link>
          </nav>

          {/* Réseaux sociaux */}
          <div className="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61584478395151"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-moi sur Facebook"
              className="rounded-md p-2 hover:outline hover:outline-1 hover:outline-[#5AC8FA] hover:shadow-[0_0_10px_#5AC8FA]"
            >
              <LuFacebook className="h-7 w-7" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/julienlisita/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-moi sur LinkedIn"
              className="rounded-md p-2 hover:outline hover:outline-1 hover:outline-[#5AC8FA] hover:shadow-[0_0_10px_#5AC8FA]"
            >
              <LuLinkedin className="h-7 w-7" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/julienlisita"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir mon GitHub"
              className="rounded-md p-2 hover:outline hover:outline-1 hover:outline-[#5AC8FA] hover:shadow-[0_0_10px_#5AC8FA]"
            >
              <LuGithub className="h-7 w-7" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Séparateur */}
        <div className="w-full h-px bg-gray-600/40" />

        {/* Bloc bas : copyright / liens légaux */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-300">
          <p className="text-xs sm:text-sm text-center sm:text-left opacity-80">
            © {year} Tout droit réservés — Julien LISITA — Développeur Web — Entreprise Individuelle (EI)
          </p>

          <nav
            aria-label="Liens légaux"
            className="flex flex-col sm:flex-row items-center gap-y-1 gap-x-4 text-xs sm:text-sm"
          >
            <Link className="hover:underline" to="/mentions-legales">
              Mentions légales & confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}