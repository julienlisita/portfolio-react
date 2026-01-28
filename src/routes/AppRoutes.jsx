// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import CompetencesPage from "../pages/CompetencesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import BlogPage from "../pages/BlogPage";
import ArticlePage from "../pages/ArticlePage";
import ContactPage from "../pages/ContactPage";
import LegalAndPrivacyPage from "../pages/LegalAndPrivacyPage";
import MerciPage from "../pages/MerciPage";
import NotFoundPage from "../pages/NotFoundPage";
import PricingPage from "../pages/PricingPage";
import WebApplicationsPage from "../pages/WebApplicationsPage";
import BusinessWebsitesPage from "../pages/BusinessWebsitesPage";
import SupportPage from "../pages/SupportPage";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/creation-site-internet" element={<BusinessWebsitesPage />} />
      <Route path="/services/creation-site-internet-fonctionnalites-sur-mesure" element={<WebApplicationsPage />} />
      <Route path="/services/suivi-et-evolutions" element={<SupportPage />} />
      <Route path="/tarifs" element={<PricingPage />} />
      <Route path="/comment-je-travaille" element={<CompetencesPage />} />
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