import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export default function ServicesPage()
{
  return (
    <div className="text-white pt-14 sm:pt-16 lg:pt-20  pb-16 sm:pb-20 lg:pb-24 px-6 space-y-12">
      <section>
        <PageTitle>Mes services</PageTitle>
        <p className="mt-8 sm:mt-10 lg:mt-12">
          Je conçois et développe des solutions web <strong>modernes</strong>, <strong>rapides</strong> et <strong>personnalisées</strong>,
          adaptées aux besoins des professionnels, indépendants, artisans ou entrepreneurs.
          Mon approche privilégie la clarté, la performance, et un accompagnement de bout en bout.
        </p>
      </section>
      
      {/* Sites vitrines */}
      <section>
        <SectionTitle id="vitrines">Sites vitrines modernes (sans WordPress)</SectionTitle>
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

        <h3 className="text-xl font-semibold mt-6 mb-2">Pourquoi sans WordPress ?</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>✔️ Aucun plugin à gérer</li>
          <li>✔️ Code léger et sécurisé</li>
          <li>✔️ Maintenance simplifiée</li>
          <li>✔️ Expérience utilisateur rapide et fluide</li>
        </ul>

        <p className="mt-4 italic">
          Idéal pour se démarquer avec un site moderne et sans contraintes techniques.
        </p>

        {/* <p className="mt-2 font-semibold text-[#5AC8FA]">💰 Tarifs : à partir de 400 €, selon la structure du site et les contenus fournis.</p> */}
      </section>

      {/* Applications web sur mesure */}
      <section>
        <SectionTitle id="apps">Applications web sur mesure</SectionTitle>
        <h3 className="text-xl font-semibold mt-8 sm:mt-10 lg:mt-12 mb-2">Pour qui ?</h3>
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

        <h3 className="text-xl font-semibold mt-6 mb-2">Ma méthode :</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Analyse des besoins & rédaction d’un cahier des charges</li>
          <li>Conception technique & maquettes UI</li>
          <li>Développement par étapes avec démonstrations régulières</li>
          <li>Livraison, documentation & support</li>
        </ol>

        <p className="mt-4 italic">
          Idéal pour celles et ceux qui cherchent un <strong>accompagnement global</strong>, de l'idée à la mise en ligne.
        </p>
      </section>

      {/* Maintenance */}
      <section>
        <SectionTitle id="maintenance">Suivi & maintenance</SectionTitle>
        <p className="mt-8 sm:mt-10 lg:mt-12">
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
      </section>

      {/* Stack */}
      <section>
        <SectionTitle>Stack & technologies utilisées</SectionTitle>
        <p className="mt-8 sm:mt-10 lg:mt-12">
          React – Vite – Next.js – Tailwind CSS – Node.js – Express – MySQL – WebSocket – Git – Railway – Netlify – C / C++ / Java (backend serveur avancé)
        </p>
      </section>

      {/* Contact */}
      <section className="text-center mt-12">
        <SectionTitle>Envie de collaborer ?</SectionTitle>
        <p className="mb-4 mt-8 sm:mt-10 lg:mt-12">
          Chaque projet commence par une discussion.<br />
          <strong>Expliquez-moi vos besoins</strong>, vos idées ou vos contraintes : je vous accompagne avec écoute, pédagogie et transparence.
        </p>
        <Button to="/contact"> Me contacter</Button>
      </section>
    </div>
  )
}