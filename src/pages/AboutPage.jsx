// src/pages/AboutPage.jsx

import Button from "../components/common/Button";
import PageTitle from "../components/common/PageTitle";
import Section from "../components/common/Section";

export default function AboutPage() {
  return (
    <>
      <PageTitle>À propos</PageTitle>

      {/* Photo + Intro */}
      <Section title="Une passion constante pour la technologie" className="text-base sm:text-lg lg:text-xl">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10  m-auto">
        <img
          src="/assets/images/profile-pic.png"
          alt="Julien Lisita"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
        />
        <div className="text-left">
          <p>
            Avant de me consacrer pleinement au développement web, j’ai exercé pendant plusieurs années dans le domaine de l’ingénierie logicielle embarquée. C’est dans ce contexte que j’ai découvert le langage C, un langage à la base de nombreux systèmes d’exploitation comme Windows ou Linux. Ce contact initial avec la programmation m’a passionné : le fait de pouvoir transformer des lignes de code en fonctionnalités concrètes, utiles au quotidien, m’est apparu comme une forme de création à part entière. La logique, la rigueur et la créativité qu’exige le développement logiciel ont immédiatement résonné avec ma personnalité.
          </p>
        </div>
      </div>
       <p className="mt-4">
          J’ai eu l’opportunité de travailler sur des systèmes embarqués utilisés dans des domaines aussi sensibles que l’automobile ou la défense. L’un des projets qui m’a le plus marqué concernait un système de sécurité intelligent capable d’adapter le déploiement des airbags en fonction de la position des passagers en temps réel. Ce genre de mission m’a permis de mesurer l’impact que peut avoir un logiciel bien conçu sur la sécurité des personnes.
        </p>
      </Section>
  

      <Section title="De l’industrie aux applications web" className="text-base sm:text-lg lg:text-xl">
        <p>
          Même si ces projets étaient stimulants, j’ai peu à peu ressenti le besoin de me rapprocher des utilisateurs finaux. Dans les grands groupes industriels, il peut y avoir plusieurs années entre la conception d’une solution et son déploiement, et souvent une certaine distance avec les personnes qui l’utiliseront.
        </p>
        <p className="mt-4">
          C’est ce désir de proximité, de concrétisation plus rapide, et de polyvalence qui m’a poussé à me reconvertir dans le développement web. Grâce à l’essor de technologies comme Node.js (qui permet d’exécuter du JavaScript côté serveur), le web est devenu un terrain d’innovation illimité. On ne se contente plus d’afficher des pages statiques : on crée aujourd’hui de véritables applications interactives, ergonomiques et puissantes, accessibles depuis n’importe quel appareil.
        </p>
      </Section>

      <Section title="Apprendre, créer, accompagner" className="text-base sm:text-lg lg:text-xl">
        <p>
          Pour opérer ce virage, j’ai suivi un bootcamp intensif en développement full stack, où j’ai consolidé mes compétences en JavaScript, React, Node.js, HTML/CSS… Depuis, je n’ai jamais cessé d’apprendre et de créer. En parallèle de projets freelance, je continue à me former sur les frameworks les plus actuels, que je choisis en fonction des besoins de chaque client.
        </p>
        <p className="mt-4">
          Aujourd’hui, ce qui me plaît dans le web, c’est de pouvoir concevoir une application ou un site de A à Z : comprendre le besoin du client, modéliser la solution, choisir l’architecture technique, créer une interface fluide et attractive, et déployer l’ensemble en ligne. Le tout avec des cycles de développement courts, des échanges réguliers, et une vraie agilité.
        </p>
        <p className="mt-4">
          Je travaille de façon structurée : découpage du projet en phases, priorisation par tickets (via Trello), validation à chaque étape. Cette méthode me permet de rester réactif, transparent, et d’aligner mes choix techniques avec les attentes du client. Si besoin, j’élabore des maquettes ou des modèles de données, et je propose toujours des solutions adaptées au budget et aux objectifs du projet.
        </p>
      </Section>

      <Section title="Mon approche" className="text-base sm:text-lg lg:text-xl">
        <p>
          Ma démarche est simple : je m’investis pleinement dans chaque projet, comme si c’était le mien. J’aime relever les défis, notamment lorsqu’il s’agit de concevoir une solution originale ou encore jamais réalisée. Mon goût pour la technique reste fort, mais toujours au service de l’humain. Car ce qui compte au final, ce n’est pas la complexité du code, mais l’utilité du résultat.
        </p>
        <p className="mt-4">
          Je tiens aussi à rester accessible et pédagogue : que mes interlocuteurs soient à l’aise avec le numérique ou non, je m’assure de toujours expliquer mes choix de manière claire. Je crois qu’un bon développeur, c’est aussi quelqu’un qui sait écouter, vulgariser et accompagner.
        </p>
      </Section>

      {/* Conclusion */}
      <Section title="Envie de concrétiser votre projet ?" className="text-base sm:text-lg lg:text-xl">
        <p className="mt-2 text-center">
          Que vous ayez besoin d’un site vitrine, d’une application web sur mesure ou simplement de conseils techniques pour démarrer, je suis là pour vous accompagner.
        </p>
        <div className="text-center mt-6">
          <Button href="/services">
            Découvrez mes services
          </Button>
        </div>
      </Section>
    </>
  );
}