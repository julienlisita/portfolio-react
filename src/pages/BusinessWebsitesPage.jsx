// src/pages/VitrinePage.jsx

import { CheckCircle, MonitorSmartphone, Wand2, Users, Zap, ListChecks } from "lucide-react";
import Section from "../components/common/Section";
import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";

export default function BusinessWebsitesPage() {

const faq = [
  {
    q: "Combien coûte un site vitrine à Bordeaux ?",
    a: "À partir de 800 €, selon le nombre de pages, le design et les options (formulaire, réservation, blog…)."
  },
  {
    q: "Un site vitrine sans WordPress, c’est mieux ?",
    a: "Souvent oui : plus rapide, plus sécurisé, moins de plugins et une maintenance simplifiée."
  },
  {
    q: "Mon site sera-t-il responsive et optimisé SEO ?",
    a: "Oui : mobile-first, rapide, balises SEO de base et bonnes pratiques techniques."
  },
  {
    q: "Pouvez-vous m’aider pour le contenu (textes, images) ?",
    a: "Oui, je propose une aide au contenu et des maquettes si besoin."
  },
  {
    q: "Hébergement et nom de domaine : vous vous en occupez ?",
    a: "Je conseille et j’accompagne la mise en ligne (hébergeur, domaine, e-mail pro)."
  }
];

  return (
    <>
      <Section
        id="vitrines"
        title="Sites vitrines modernes (sans WordPress)"
        className="text-base sm:text-lg lg:text-xl"
      >
        {/* Intro  */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8">
          Idéal pour les <strong>indépendants et petites structures</strong> qui souhaitent un site 
          <strong> simple</strong>, <strong>rapide</strong> et <strong>professionnel</strong> pour mettre en valeur leur activité.
        </p>

        {/* Pour qui ? */}
         <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#007AFF]" />
          Pour qui :
        </h3>
        <ul className="list-none ml-6 space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
              Indépendants (artisans, freelances…)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
              Commerçants & petites boutiques locales
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
              Professions libérales (coachs, consultants…)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
               Petites structures / associations
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
              Créatifs (photographes, artistes…)
            </div>
          </li>
        </ul>

        {/* Ce que je propose */}
        <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
          <MonitorSmartphone className="w-5 h-5 text-[#007AFF]" />
          Ce que je propose :
        </h3>
        <ul className="list-none ml-6 space-y-2">
          <li className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
              Site vitrine sur mesure avec React (Vite ou Next.js)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
              Design épuré, moderne et adapté à votre identité visuelle
            </div>
          </li>
          <li className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
              Performance optimale (pas de CMS lourd, pas de plugins inutiles)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
               Contenus typiques : présentation, galerie, menu, carte, formulaire de contact
            </div>
          </li>
          <li className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[#007AFF] mt-1" />
            <div className="flex-1">
              Déploiement et mise en ligne inclus
            </div>
          </li>
        </ul>

        {/* Pourquoi sans WordPress */}
        <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
          <Wand2 className="w-5 h-5 text-[#9B59B6]" />
          Pourquoi sans WordPress ?
        </h3>
        <ul className="list-none ml-6 space-y-2">
          <li className="flex items-start gap-2">
            <Zap className="w-5 h-5 text-[#9B59B6] mt-1" />
            <div className="flex-1">
              Aucun plugin à gérer
            </div>
          </li >
          <li className="flex items-start gap-2">
             <Zap className="w-5 h-5 text-[#9B59B6] mt-1" />
             <div className="flex-1">
              Code léger et sécurisé
             </div>
          </li>
          <li className="flex items-start gap-2">
             <Zap className="w-5 h-5 text-[#9B59B6] mt-1" />
             <div className="flex-1">
              Maintenance simplifiée
             </div>
          </li>
          <li className="flex items-start gap-2">
             <Zap className="w-5 h-5 text-[#9B59B6] mt-1" />
             <div className="flex-1">
                Expérience utilisateur rapide et fluide
             </div>
          </li>
        </ul>

        {/* Conclusion */}
        <p className="mt-6 italic">
          Une solution idéale pour se démarquer avec un site moderne, rapide et sans contraintes techniques.
        </p>

       {/* FAQ Sites vitrines */}
        <FaqSection title="FAQ — Sites vitrines" faq={faq} ariaLabelledby="faq-vitrine-title" />

        {/* CTA final */}
        <CtaFinal
          title="Votre vitrine en ligne commence ici"
          tagline="Un site professionnel, rapide et élégant pour mettre en valeur votre activité."
          primary={{ href: "/contact", text: "Contact" }}
          secondary={{href: "/tarifs", text: "Tarifs"}}
        />
      </Section>
    </>
  );
}