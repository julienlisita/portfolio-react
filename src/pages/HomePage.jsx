// src/pages/HomePage.jsx

import LandingSection from "../components/home/LandingSection";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import SkillsPreview from "../components/home/SkillsPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import BlogPreview from "../components/home/BlogPreview";
import ContactTeaser from "../components/home/ContactTeaser";
import { MapPin } from "lucide-react";

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
      <div className="flex justify-center items-center gap-2 px-4 mt-10 text-sm sm:text-base text-slate-300">
          <MapPin className="text-[#007AFF]" size={20} />
          <span>Mérignac · Disponible en Gironde & à distance</span>
      </div>
    </>
  );
}