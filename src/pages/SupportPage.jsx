// src/pages/SupportPage.jsx

import Section from "../components/common/Section";
import Button from "../components/common/Button";

export default function SupportPage() {
  return (
    <>
      <Section
        id="maintenance"
        title="Suivi & maintenance"
        className="text-base sm:text-lg lg:text-xl"
      >
        {/* Intro */}
        <p className="mb-6">
          Après la mise en ligne, je propose un <strong>accompagnement continu</strong> pour garantir la
          <strong> stabilité</strong>, la <strong>performance</strong> et la <strong>sécurité</strong> de votre site ou application.
        </p>

        {/* Ce qui est inclus */}
        <h3 className="text-xl font-semibold mt-8 mb-3">Ce qui est inclus</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Correction de bugs & support technique</li>
          <li>Ajout de fonctionnalités et petites évolutions</li>
          <li>Optimisations de performance</li>
          <li>Mises à jour techniques (dépendances, sécurité…)</li>
          <li>Conseil & suivi technique personnalisé</li>
        </ul>

        {/* Modalités / formules */}
        <h3 className="text-xl font-semibold mt-8 mb-3">Modalités</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Forfait mensuel</strong> pour la tranquillité (préventif + support prioritaire)</li>
          <li><strong>Intervention à la demande</strong> sur ticket (au besoin, sans engagement)</li>
          <li>Rapport synthétique sur les actions menées (si forfait)</li>
        </ul>

        {/* Conclusion + CTA */}
        <p className="mt-6 italic">
          L’objectif : garder votre outil <strong>fiable</strong> et <strong>à jour</strong>, au rythme de votre activité.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Button to="/contact" variant="primary">Me contacter</Button>
          <Button to="/pricing">Voir les tarifs</Button>
        </div>
      </Section>
    </>
  );
}