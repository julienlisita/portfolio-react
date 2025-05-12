import LandingSection from "../components/home/LandingSection";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import SkillsPreview from "../components/home/SkillsPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import BlogPreview from "../components/home/BlogPreview";
import ContactTeaser from "../components/home/ContactTeaser";

export default function HomePage() {
  return (
    <main className="scroll-smooth bg-[#222222]">
      <LandingSection />
      <AboutPreview />
      <ServicesPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <BlogPreview />
      <ContactTeaser />
    </main>
  );
}