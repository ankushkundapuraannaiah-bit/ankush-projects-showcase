import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Conferences from "@/components/Conferences";
import PhysicalFitness from "@/components/PhysicalFitness";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import DeveloperBackground from "@/components/DeveloperBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500 relative">
      <DeveloperBackground />
      <ThemeToggle />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Conferences />
        <PhysicalFitness />
        <Skills />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
