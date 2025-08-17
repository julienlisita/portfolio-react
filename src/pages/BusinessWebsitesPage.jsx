// src/pages/VitrinePage.jsx

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
        {/* Intro */}
        <p className="mb-6">
          Idéal pour <strong>indépendants, artisans, commerçants, professions libérales</strong> 
          ou petites structures souhaitant un site <strong>simple</strong>, 
          <strong> rapide</strong> et <strong>professionnel</strong> pour présenter leur activité.
        </p>

        {/* Ce que je propose */}
        <h3 className="text-xl font-semibold mt-8 mb-3">Ce que je propose :</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Site vitrine sur mesure avec <strong>React (Vite ou Next.js)</strong></li>
          <li><strong>Design épuré</strong>, moderne et adapté à votre identité visuelle</li>
          <li><strong>Performance optimale</strong> (pas de CMS lourd, pas de plugins inutiles)</li>
          <li>Contenus typiques : présentation, galerie, menu, carte, formulaire de contact</li>
          <li><strong>Déploiement et mise en ligne inclus</strong></li>
        </ul>

        {/* Pourquoi sans WordPress */}
        <h3 className="text-xl font-semibold mt-8 mb-3">Pourquoi sans WordPress ?</h3>
        <ul className="list-none ml-1 space-y-1">
          <li>✔️ Aucun plugin à gérer</li>
          <li>✔️ Code léger et sécurisé</li>
          <li>✔️ Maintenance simplifiée</li>
          <li>✔️ Expérience utilisateur rapide et fluide</li>
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