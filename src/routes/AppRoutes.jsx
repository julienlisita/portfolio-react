// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import HowIWorkPage from "../pages/HowIWorkPage";
import PortfolioPage from "../pages/portfolio/PortfolioPage";
import ProjectDetailPage from "../pages/portfolio/ProjectDetailPage";
import BlogPage from "../pages/blog/BlogPage";
import ArticlePage from "../pages/blog/ArticlePage";
import ContactPage from "../pages/ContactPage";
import LegalAndPrivacyPage from "../pages/legal/LegalAndPrivacyPage";
import MerciPage from "../pages/MerciPage";
import NotFoundPage from "../pages/NotFoundPage";
import PricingPage from "../pages/PricingPage";
import ServicesPage from "../pages/services/ServicesPage";
import WebsiteCreationPage from "../pages/services/WebsiteCreationPage";
import CustomFeaturesPage from "../pages/services/CustomFeaturesPage";
import MaintenancePage from "../pages/services/MaintenancePage";


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