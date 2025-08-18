// pages/WebApplicationsPage.jsx 

import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { CheckCircle, Users, Boxes, Layers, ListChecks, Briefcase, BarChart3, Server, Package, Rocket } from "lucide-react";

export default function WebApplicationsPage() {
  return (
    <>
      <Section
        id="apps"
        title="Applications web sur mesure"
        className="text-base sm:text-lg lg:text-xl"
      >
       {/* Intro */}
        <p className="mb-6 text-gray-300">
          Pensées pour les <strong>startups, PME, associations</strong> ou
          <strong> porteurs de projet</strong> ayant besoin d’un outil métier,
          d’une <strong>plateforme SaaS</strong> ou d’un
          <strong> back-office sécurisé</strong>.
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
              Startups en phase de lancement ou de levée de fonds
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              PME cherchant à digitaliser leurs process
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              Associations souhaitant une plateforme de gestion interne
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              Porteurs de projet voulant un prototype (MVP)
            </div>
          </li>
        </ul>

        {/* Ce que je propose */}
        <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#007AFF]" />
          Ce que je propose
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              <strong>Développement full-stack</strong> : Next.js / React, Node.js / Express,
            Prisma, PostgreSQL ou MongoDB
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              <strong>Architecture évolutive</strong> (modulaire, maintenable, prête à grandir)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              <strong>UX/UI responsive</strong> et adaptée aux usages réels
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              <strong>Sécurité intégrée</strong> : authentification, rôles, API protégées
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              <strong>Temps réel</strong> (WebSocket) si nécessaire : chat, notifications, collaboration
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#5AC8FA] mt-1" />
            <div className="flex-1">
              <strong>Déploiement</strong> sur Vercel, Railway, Docker ou hébergement dédié
            </div>
          </li>
        </ul>

        {/* Cas d’usage */}
        <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
           <Package className="w-5 h-5 text-[#9B59B6]" />
          Exemples de cas d’usage
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#9B59B6] mt-1" />
            <div className="flex-1">
               CRM / outil métier sur mesure
            </div>
          </li>
          <li className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#9B59B6] mt-1" />
            <div className="flex-1">
              Dashboard interactif ou back-office sécurisé
            </div>
          </li>
          <li className="flex items-center gap-2">
            <Server className="w-5 h-5 text-[#9B59B6] mt-1" />
            <div className="flex-1">
              Plateforme SaaS (abonnements, gestion des utilisateurs, etc.)
            </div>
          </li>
          <li className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#9B59B6] mt-1" />
            <div className="flex-1">
              Espace client, forum communautaire, fonctionnalités temps réel
            </div>
          </li>
          <li className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-[#9B59B6] mt-1" />
            <div className="flex-1">
              MVP / prototype pour tests marché ou levée de fonds
            </div>
          </li>
        </ul>

        {/* Conclusion + CTA */}
        <p className="mt-6 italic">
          Idéal si vous cherchez un <strong>accompagnement global</strong> :
          de l’idée au prototype, jusqu’à la mise en production.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Button to="/contact" variant="primary">Me contacter</Button>
          <Button to="/pricing">Voir les tarifs</Button>
        </div>
      </Section>
    </>
  );
}