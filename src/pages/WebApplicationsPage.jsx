// pages/WebApplicationsPage.jsx 

import Section from "../components/common/Section";
import Button from "../components/common/Button";

export default function WebApplicationsPage() {
  return (
    <>
      <Section
        id="apps"
        title="Applications web sur mesure"
        className="text-base sm:text-lg lg:text-xl"
      >
        {/* Intro : pour qui ? */}
        <p className="mb-6">
          Pensé pour les <strong>startups, PME, associations</strong> ou
          <strong> porteurs de projet</strong> ayant besoin d’une application complète :
          <strong> outil métier</strong>, <strong>plateforme SaaS</strong>,
          <strong> portail client</strong> ou <strong>interface d’administration</strong>.
        </p>

        {/* Cas d’usage */}
        <h3 className="text-xl font-semibold mt-8 mb-3">Exemples de cas d’usage</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>CRM / outil métier sur mesure</li>
          <li>Dashboard interactif ou back-office sécurisé</li>
          <li>Plateforme SaaS (abonnements, gestion des utilisateurs, etc.)</li>
          <li>Espace client, forum communautaire, fonctionnalités temps réel</li>
          <li>MVP / prototype pour tests marché ou levée de fonds</li>
        </ul>

        {/* Ce que je propose */}
        <h3 className="text-xl font-semibold mt-8 mb-3">Ce que je propose</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Développement full-stack</strong> : Next.js / React, Node.js / Express,
            Prisma, PostgreSQL ou MongoDB
          </li>
          <li>
            <strong>Architecture évolutive</strong> (modulaire, maintenable, prête à grandir)
          </li>
          <li>
            <strong>UX/UI responsive</strong> et adaptée aux usages réels
          </li>
          <li>
            <strong>Sécurité intégrée</strong> : authentification, rôles, API protégées
          </li>
          <li>
            <strong>Temps réel</strong> (WebSocket) si nécessaire : chat, notifications, collaboration
          </li>
          <li>
            <strong>Déploiement</strong> sur Vercel, Railway, Docker ou hébergement dédié
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