// src/pages/AboutPage.jsx

import { href } from "react-router-dom";
import CtaFinal from "../components/common/CtaFinal";
import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";

export default function AboutPage() {
  return (
    <>
      <PageTitle>À propos</PageTitle>

      {/* Photo en tête */}
      <div className="flex justify-center my-8">
        <img
          src="/assets/images/profile-pic.png"
          alt="Portrait de Julien Lisita, développeur web"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
          loading="lazy"
        />
      </div>

      {/* En bref */}
      <Section className="text-base sm:text-lg lg:text-xl">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
          <li><strong>Spécialités :</strong> React, Next.js, Node.js</li>
          <li><strong>Localisation :</strong> Mérignac – Bordeaux (remote possible)</li>
          <li><strong>Clients :</strong> indépendants, TPE/PME, assoc.</li>
          <li><strong>Approche :</strong> claire, itérative, orientée résultat</li>
        </ul>
      </Section>

      {/* Parcours */}
      <Section title="Une passion constante pour la technologie" className="text-base sm:text-lg lg:text-xl">
        <p>
          Avant de me consacrer pleinement au web, j’ai travaillé plusieurs années en
          ingénierie logicielle embarquée. Ce contact initial avec le C et les systèmes
          bas niveau m’a appris la rigueur, la fiabilité et l’exigence de performance.
        </p>
        <p className="mt-4">
          J’ai notamment contribué à des systèmes critiques dans les secteurs de l’automobile
          et de la défense. Ce genre de mission m’a permis de mesurer concrètement l’impact
          qu’un logiciel bien conçu peut avoir sur la sécurité des personnes.
        </p>
      </Section>

      {/* Transition vers le web */}
      <Section title="De l’industrie aux applications web" className="text-base sm:text-lg lg:text-xl">
        <p>
          Avec le temps, j’ai voulu me rapprocher des utilisateurs finaux et réduire le délai
          entre idée et impact. Le développement web s’est imposé naturellement : créer des
          outils concrets, utiles et accessibles sur tous les appareils.
        </p>
        <p className="mt-4">
          Porté par l’écosystème JavaScript (React, Next.js, Node.js), je conçois aujourd’hui des
          sites vitrines modernes et des applications web sur mesure.
        </p>
      </Section>

      {/* Méthode + philosophie (fusion de l'ancienne section "Mon approche") */}
      <Section title="Apprendre, créer, accompagner" className="text-base sm:text-lg lg:text-xl">
        <p>
          Formé via un bootcamp full-stack, je continue à me tenir à jour et à choisir les
          technologies en fonction des besoins réels. Mon objectif : livrer des interfaces
          fluides, des architectures saines et un code maintenable — avec une communication
          claire à chaque étape.
        </p>

        {/* Étapes de collaboration */}
        <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
          <li>Analyse du besoin & cadrage</li>
          <li>Maquettes et choix d’architecture</li>
          <li>Développement par itérations courtes (démos régulières)</li>
          <li>Mise en ligne, documentation et transfert</li>
        </ul>

        {/* Piliers d'approche (ex-« Mon approche ») */}
        <p className="mt-6">
          Ma méthode s’appuie sur quatre piliers simples:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {[
            { t: "Écoute", d: "comprendre vos objectifs et contraintes" },
            { t: "Conception", d: "des choix techniques expliqués" },
            { t: "Itérations", d: "démos régulières, ajustements rapides" },
            { t: "Soutien", d: "documentation, suivi et évolutions" },
          ].map((s, i) => (
            <div key={i} className="bg-[#2a2a2a] rounded-lg p-4">
              <p className="font-semibold text-gray-100">{s.t}</p>
              <p className="text-gray-300 text-sm mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <CtaFinal
        title="Envie de collaborer ?"
        tagline="Je suis disponible pour échanger sur vos projets et partager mon expertise."
        primary={{ href: "/contact", text: "Contact" }}
        secondary={{href:"/services", text: "Services" }}
      />
    </>
  );
}