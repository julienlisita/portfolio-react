// src/pages/PricingPage.jsx

import PageTitle from "../components/UI/PageTitle";

import PricingIntroAndPacks from "../components/pricing/PricingIntroAndPacks";
import PricingOptions from "../components/pricing/PricingOptions";
import PricingExamples from "../components/pricing/PricingExamples";
import PricingFaqAndCta from "../components/pricing/PricingFaqAndCta";

export default function PricingPage() {

  return (
    <>
      <PageTitle>Tarifs</PageTitle>
      <PricingIntroAndPacks />
      <PricingOptions />
      <PricingExamples />
      <PricingFaqAndCta  />
    </>
  );
}