// src/pages/AboutPage.jsx

import AboutIntro from "../components/about/AboutIntro";
import AboutJourney from "../components/about/AboutJourney";
import AboutMethod from "../components/about/AboutMethod";
import AboutRole from "../components/about/AboutRole";
import CtaFinal from "../components/common/CtaFinal";
import FaqSection from "../components/common/FaqSection";
import PageTitle from "../components/UI/PageTitle";

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

      <AboutIntro />
      <AboutRole />
      <AboutJourney />
      <AboutMethod />

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