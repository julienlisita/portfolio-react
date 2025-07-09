// src/pages/ServicesPage.jsx

import Button from "../components/common/Button";
import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";

export default function ServicesPage()
{
  return (
    <>
      <PageTitle>Mes services</PageTitle>
      <nav className="mt-6 mb-10 text-sm sm:text-base text-center">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[#5AC8FA] font-medium">
          <li><a href="#vitrines" className="hover:underline">Sites vitrines</a></li>
          <li><a href="#apps" className="hover:underline">Applications web</a></li>
          <li><a href="#missions" className="hover:underline">Missions longues</a></li>
          <li><a href="#maintenance" className="hover:underline">Suivi & maintenance</a></li>
          <li><a href="#method" className="hover:underline">Méthode de travail</a></li>
        </ul>
      </nav>
      <Section>
        <p>
          Je conçois et développe des solutions web <strong>modernes</strong>, <strong>rapides</strong> et <strong>personnalisées</strong>,
          adaptées aux besoins des professionnels, indépendants, artisans ou entrepreneurs.
          Mon approche privilégie la clarté, la performance, et un accompagnement de bout en bout.
        </p>
      </Section>
      
      {/* Sites vitrines */}
      <Section id="vitrines" title="Sites vitrines modernes (sans WordPress)">
        <h3 className="text-xl font-semibold mt-8 sm:mt-10 lg:mt-12 mb-2">Pour qui ?</h3>
        <p>
          Indépendants, artisans, commerçants, professions libérales ou petites structures ayant besoin d’un site
          <strong> simple</strong>, <strong> rapide</strong> et <strong> professionnel</strong> pour présenter leur activité.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Ce que je propose :</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Site vitrine sur mesure avec <strong>React (Vite ou Next.js)</strong></li>
          <li><strong>Design épuré</strong> et adapté à votre identité visuelle</li>
          <li><strong>Performance optimale</strong> (pas de CMS lourd, pas de plugins inutiles)</li>
          <li>Contenu typique : présentation, galerie, menu, carte, formulaire de contact</li>
          <li><strong>Déploiement et mise en ligne compris</strong></li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2 ">Pourquoi sans WordPress ?</h3>
        <ul className="list-list-none ml-6 space-y-1">
          <li>✔️ Aucun plugin à gérer</li>
          <li>✔️ Code léger et sécurisé</li>
          <li>✔️ Maintenance simplifiée</li>
          <li>✔️ Expérience utilisateur rapide et fluide</li>
        </ul>

        <p className="mt-4 italic">
          Idéal pour se démarquer avec un site moderne et sans contraintes techniques.
        </p>

        {/* <p className="mt-2 font-semibold text-[#5AC8FA]">💰 Tarifs : à partir de 400 €, selon la structure du site et les contenus fournis.</p> */}
      </Section>

      {/* Applications web sur mesure */}
      <Section id="apps" title="Applications web sur mesure">
        <h3 className="text-xl font-semibold mb-2">Pour qui ?</h3>
        <p>
          Startups, entreprises, associations, ou porteurs de projet souhaitant développer une application web complète,
          un outil métier ou une plateforme SaaS.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Exemples de projets :</h3>
        <ul className="list-disc  ml-6 space-y-1">
          <li>Application métier ou CRM personnalisé</li>
          <li>Dashboard interactif ou outil d’administration</li>
          <li>Plateforme SaaS (abonnements, gestion utilisateur, etc.)</li>
          <li>Forum ou jeu en ligne connecté</li>
          <li>Prototype technique ou MVP pour levée de fonds</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Ce que je propose :</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Développement full stack</strong> : React, Node.js, Express, MongoDB, MySQL...</li>
          <li><strong>Architecture solide et évolutive</strong>, pensée pour durer</li>
          <li><strong>Design responsive</strong>, clair et fonctionnel</li>
          <li><strong>Sécurité</strong>, authentification, logique métier, WebSocket si nécessaire</li>
          <li><strong>Déploiement complet</strong> sur Netlify, Vercel, Railway ou hébergement dédié</li>
        </ul>

        <p className="mt-4 italic">
          Idéal pour celles et ceux qui cherchent un <strong>accompagnement global</strong>, de l'idée à la mise en ligne.
        </p>
      </Section>

      <Section id="missions" title="Missions longues en entreprise">
        <p>
          Je propose également des <strong>prestations longues en entreprise</strong> pour renforcer vos équipes de développement sur la durée,
          en freelance, avec une intégration fluide à vos outils et méthodes.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Pour qui ?</h3>
        <p>
          ESN, agences web, startups ou entreprises tech à la recherche d’un développeur
          <strong> React / Node.js</strong> capable de s’intégrer à un projet existant et de livrer des fonctionnalités
          en autonomie ou en collaboration avec une équipe produit.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Ce que je propose :</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Développement front-end (React, Next.js, Tailwind) ou fullstack JS</li>
          <li>Participation à la conception technique et aux rituels agiles</li>
          <li>Collaboration via Git, Jira, Notion, Slack…</li>
          <li>Bonnes pratiques : composants réutilisables, code maintenable, documentation</li>
          <li>Disponibilité en télétravail ou hybride (Bordeaux + remote)</li>
        </ul>

        <p className="mt-4 italic">
          Idéal pour renforcer votre équipe de manière <strong>souple et fiable</strong>, sans charge administrative.
        </p>
      </Section>

      {/* Maintenance */}
      <Section id="maintenance" title="Suivi & maintenance">
        <p>
          Une fois votre projet en ligne, je propose un <strong>accompagnement continu</strong> pour garantir la stabilité,
          la performance et l’évolution de votre site ou application.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Ce qui est inclus :</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Correction de bugs & support technique</li>
          <li>Ajout de nouvelles fonctionnalités</li>
          <li>Optimisations de performance</li>
          <li>Mises à jour techniques (dépendances, sécurité...)</li>
          <li>Conseil & suivi technique personnalisé</li>
        </ul>

        <p className="mt-4 italic">Disponible sous forme de forfait ou à la demande.</p>
      </Section>

      <Section id="method" title="Ma méthode de travail">
        <p>
          Quel que soit votre projet, j’adopte une approche <strong>structurée, pédagogique et collaborative</strong>,
          du premier échange jusqu’à la mise en ligne, afin de garantir un livrable fiable et maintenable.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Étapes typiques :</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li><strong>Échange initial</strong> pour cerner vos besoins, vos priorités et vos contraintes</li>
          <li><strong>Conception technique & maquettes</strong> (si besoin)</li>
          <li><strong>Développement par itérations</strong> avec démonstrations intermédiaires</li>
          <li><strong>Livraison avec documentation</strong> et accompagnement</li>
          <li><strong>Support post-livraison</strong> et évolutions possibles</li>
        </ol>

        <p className="mt-4 italic">
          Une méthode simple, adaptée à la taille de chaque projet, pour éviter les zones floues et garantir la qualité.
        </p>
      </Section>

      {/* Stack */}
      <Section title="Stack & technologies utilisées">
        <p>
          React – Vite – Next.js – Tailwind CSS – Node.js – Express – MySQL – WebSocket – Git – Railway – Netlify – C / C++ / Java (backend serveur avancé) 
        </p>
        <p>voir <a href="/competences" className="text-[#5AC8FA] underline"> ma stack complète</a></p>
      </Section>

      {/* Contact */}
      <Section className="text-center mt-12">
        <SectionTitle>Envie de collaborer ?</SectionTitle>
        <p className="mb-4 mt-8 sm:mt-10 lg:mt-12">
          Chaque projet commence par une discussion.<br />
          <strong>Expliquez-moi vos besoins</strong>, vos idées ou vos contraintes : je vous accompagne avec écoute, pédagogie et transparence.
        </p>
        <Button to="/contact"> Me contacter</Button>
      </Section>
    </>
  )
}