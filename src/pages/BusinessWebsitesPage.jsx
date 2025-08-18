// src/pages/VitrinePage.jsx

import { CheckCircle, MonitorSmartphone, Wand2, ArrowRight, Users, Sparkles, Zap, Layout, GaugeCircle, MapPin, ShieldCheck, ListChecks } from "lucide-react";
import Button from "../components/common/Button";
import Section from "../components/common/Section";

export default function BusinessWebsitesPage() {
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
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              Indépendants (artisans, freelances…)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              Commerçants & petites boutiques locales
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              Professions libérales (coachs, consultants…)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
               Petites structures / associations
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
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
            <ListChecks className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              Site vitrine sur mesure avec React (Vite ou Next.js)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              Design épuré, moderne et adapté à votre identité visuelle
            </div>
          </li>
          <li className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              Performance optimale (pas de CMS lourd, pas de plugins inutiles)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
               Contenus typiques : présentation, galerie, menu, carte, formulaire de contact
            </div>
          </li>
          <li className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[#5AC8FA] mt-1" />
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
        <p className="mt-4 italic">
          Idéal pour se démarquer avec un site moderne et sans contraintes techniques.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Button to="/contact" variant="primary">Me contacter</Button>
          <Button to="/pricing">Voir les tarifs</Button>
        </div>
      </Section>
    </>
  );
}