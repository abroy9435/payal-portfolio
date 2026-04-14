import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection"; // Import the new section

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection /> {/* The grand finale! */}
    </main>
  );
}