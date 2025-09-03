// src/pages/HomePage.jsx

import LandingSection from "../components/home/LandingSection";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import SkillsPreview from "../components/home/SkillsPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import BlogPreview from "../components/home/BlogPreview";
import ContactTeaser from "../components/home/ContactTeaser";
import { MapPin } from "lucide-react";
import HomeSection from "../components/home/HomeSection";

export default function HomePage() {
  return (
    <>
      <LandingSection />
      <AboutPreview />
      <ServicesPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <BlogPreview />
      <ContactTeaser />
      {/* Localisation */}
      <HomeSection className="text-base sm:text-lg lg:text-xl">
        <p className="flex flex-col items-center text-center max-w-5xl m-auto gap-2">
          <MapPin className="text-[#007AFF] mx-auto" size={32} />
          <span>Mérignac</span>
          <span>Disponible sur Bordeaux Métropole & à distance</span>
        </p>
      </HomeSection>
    </>
  );
}