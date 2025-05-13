import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/SevicesPage";
import CompetencesPage from "./pages/CompetencesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import LegalAndPrivacyPage from "./pages/LegalAndPrivacyPage"; // Mentions légales + politique de confidentialité
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import HeaderWrapper from "./components/HeaderWrapper";

export default function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const { pathname } = useLocation(); // Utilisation de useLocation() à l'intérieur du Router
  
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWrapper />
      <main className={pathname === "/" ? "" : "px-4 sm:px-6 lg:px-12 flex-grow bg-[#222222]"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/competences" element={<CompetencesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<LegalAndPrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}