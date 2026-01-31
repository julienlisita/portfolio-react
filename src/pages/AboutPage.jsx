// src/pages/AboutPage.jsx

import Button from "../components/common/Button";
import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";
import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";

export default function AboutPage() {
  const faq = [
    {
      q: "Travaillez-vous uniquement à Bordeaux ?",
      a: "Je suis basé à Mérignac (Bordeaux) et j’accompagne des clients localement et à distance partout en France."
    },
    {
      q: "Avec quels types de clients travaillez-vous ?",
      a: "J’accompagne principalement des artisans, indépendants, commerces et petites entreprises."
    },
    {
      q: "Proposez-vous un premier échange gratuit ?",
      a: "Oui, le premier échange est gratuit et sans engagement afin de cadrer votre projet et vos besoins."
    },
    {
      q: "Est-ce que mon site pourra évoluer plus tard ?",
      a: "Oui. Les sites sont développés sur mesure et peuvent évoluer dans le temps : nouvelles pages, fonctionnalités ou améliorations SEO."
    }
  ];

  return (
    <>
      <PageTitle>À propos</PageTitle>

      {/* Photo */}
      <div className="flex justify-center my-8">
        <img
          src="/assets/images/profile-pic.avif"
          alt="Portrait de Julien Lisita, développeur web freelance"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="208"
          height="208"
        />
      </div>

      {/* En bref */}
      <Section className="text-base sm:text-lg lg:text-xl">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
          <li><strong>Spécialités :</strong> React, Next.js, Node.js</li>
          <li><strong>Localisation :</strong> Mérignac – Bordeaux (remote possible)</li>
          <li><strong>Clients :</strong> artisans, indépendants, commerces, TPE/PME</li>
          <li><strong>Approche :</strong> claire, itérative, orientée résultat</li>
        </ul>
      </Section>

      {/* Ce que je fais */}
      <Section title="Ce que je fais" className="text-base sm:text-lg lg:text-xl">
        <p>
          J’accompagne les artisans, indépendants, commerces et petites entreprises
          dans la création de sites web professionnels, clairs et efficaces.
        </p>

        <p className="mt-4">
          Selon votre activité et vos objectifs, je peux réaliser :
        </p>

        <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
          <li>
            des sites vitrines pour présenter votre activité, vos services
            et faciliter la prise de contact
          </li>
          <li>
            des sites avec des fonctionnalités sur mesure :
            réservation en ligne, formulaires avancés, espace administrable, candidatures…
          </li>
          <li>
            la mise en ligne complète (hébergement, configuration)
            et le suivi après livraison
          </li>
        </ul>

        <p className="mt-4">
          L’objectif est simple : un site rapide, bien référencé et pensé pour durer.
        </p>
      </Section>

      {/* Parcours */}
      <Section title="Un parcours orienté rigueur et fiabilité" className="text-base sm:text-lg lg:text-xl">
        <p>
          J’ai commencé ma carrière dans le développement logiciel en environnement exigeant,
          où la rigueur, la fiabilité et la clarté sont essentielles.
        </p>
        <p className="mt-4">
          Cette expérience m’a donné une méthode de travail structurée : bien comprendre le besoin,
          construire proprement, tester et livrer quelque chose de stable et durable.
        </p>
      </Section>

      {/* Transition vers le web */}
      <Section title="Du logiciel aux applications web" className="text-base sm:text-lg lg:text-xl">
        <p>
          J’ai choisi le développement web pour me rapprocher des utilisateurs finaux et voir
          rapidement l’impact d’un site bien conçu : plus de clarté, plus de confiance,
          plus de demandes entrantes.
        </p>
        <p className="mt-4">
          Aujourd’hui, je conçois des sites et applications web avec <strong>React</strong> et
          <strong> Next.js</strong>, en mettant l’accent sur la performance, l’accessibilité
          et le référencement naturel.
        </p>
      </Section>

      {/* Méthode */}
      <Section title="Une méthode simple et transparente" className="text-base sm:text-lg lg:text-xl">
        <p>
          Mon rôle est de vous guider et de transformer votre besoin en un site clair et efficace,
          sans jargon inutile. Vous suivez l’avancement et validez chaque étape.
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Pour aller plus loin sur ma méthode de travail :
          <Button variant="text" to="/comment-je-travaille">
            voir comment je travaille ›
          </Button>
        </p>

        <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
          <li>Analyse du besoin et cadrage du projet</li>
          <li>Structure du site et propositions visuelles</li>
          <li>Développement par itérations courtes avec points réguliers</li>
          <li>Mise en ligne, prise en main et accompagnement</li>
        </ul>

        <p className="mt-6">
          Ma méthode repose sur quatre piliers :
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {[
            { t: "Écoute", d: "comprendre vos objectifs et contraintes" },
            { t: "Clarté", d: "des choix expliqués simplement" },
            { t: "Itérations", d: "ajustements rapides et visibles" },
            { t: "Suivi", d: "documentation et évolutions possibles" },
          ].map((s, i) => (
            <div key={i} className="bg-[#2a2a2a] rounded-lg p-4">
              <p className="font-semibold text-gray-100">{s.t}</p>
              <p className="text-gray-300 text-sm mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <FaqSection
        title="FAQ — À propos"
        faq={faq}
        ariaLabelledby="faq-about-title"
      />

      {/* CTA final */}
      <CtaFinal
        title="Envie de collaborer ?"
        tagline="Discutons ensemble de votre projet et voyons comment le concrétiser."
        primary={{ href: "/contact", text: "Me contacter" }}
        secondary={{ href: "/realisations", text: "Voir des projets réalisés" }}
      />
    </>
  );
}