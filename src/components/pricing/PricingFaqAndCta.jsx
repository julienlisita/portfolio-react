// src/components/pricing/PricingFaqAndCta.jsx

import FaqSection from "../common/FaqSection";
import CtaFinal from "../common/CtaFinal";

export default function PricingFaqAndCta({ faq }) {
  return (
    <>
      <FaqSection title="FAQ — Tarifs" faq={faq} ariaLabelledby="faq-pricing-title" />

      <CtaFinal
        title="On chiffre votre projet ?"
        tagline="Je vous réponds après un échange gratuit, avec un devis clair et une proposition adaptée."
        primary={{ href: "/contact?subject=devis", text: "Demander un devis >" }}
        secondary={{ href: "/realisations", text: "Voir des projets" }}
      />
    </>
  );
}