import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import NeuralBackground from '@/components/NeuralBackground';
import FloatingElements from '@/components/FloatingElements';
import AIAssistant from '@/components/AIAssistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Futuristic Background Layers */}
      <NeuralBackground />
      <ParticleField />
      <FloatingElements />
      
      {/* Scanline Effect (subtle) */}
      <div className="scanline opacity-30" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      
      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default Index;
