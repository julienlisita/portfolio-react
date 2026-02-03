// src/pages/legal/LegalAndPrivacyPage.jsx

import PageTitle from "../../components/common/PageTitle";
import LegalNoticeSection from "../../components/legal/LegalNoticeSection";
import PrivacyPolicySection from "../../components/legal/PrivacyPolicySection";

export default function LegalAndPrivacyPage() {
  return (
    <>
      <PageTitle>Mentions légales & Politique de confidentialité</PageTitle>
      <LegalNoticeSection />
      <PrivacyPolicySection />
    </>
  );
}