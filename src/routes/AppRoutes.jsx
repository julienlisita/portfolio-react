// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import HowIWorkPage from "../pages/HowIWorkPage";
import PortfolioPage from "../pages/PortfolioPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import BlogPage from "../pages/BlogPage";
import ArticlePage from "../pages/ArticlePage";
import ContactPage from "../pages/ContactPage";
import LegalAndPrivacyPage from "../pages/LegalAndPrivacyPage";
import MerciPage from "../pages/MerciPage";
import NotFoundPage from "../pages/NotFoundPage";
import PricingPage from "../pages/PricingPage";
import CustomFeaturesPage from "../pages/CustomFeaturesPage";
import WebsiteCreationPage from "../pages/WebsiteCreationPage";
import MaintenancePage from "../pages/MaintenancePage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/creation-site-internet" element={<WebsiteCreationPage />} />
      <Route path="/services/creation-site-internet-fonctionnalites-sur-mesure" element={<CustomFeaturesPage />} />
      <Route path="/services/suivi-et-evolutions" element={<MaintenancePage />} />
      <Route path="/tarifs" element={<PricingPage />} />
      <Route path="/comment-je-travaille" element={<HowIWorkPage />} />
      <Route path="/realisations" element={<PortfolioPage />} />
      <Route path="/realisations/:slug" element={<ProjectDetailPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<ArticlePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/mentions-legales" element={<LegalAndPrivacyPage />} />
      <Route path="/merci" element={<MerciPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}