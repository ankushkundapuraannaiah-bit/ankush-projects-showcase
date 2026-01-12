import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Conferences from "@/components/Conferences";
import PhysicalFitness from "@/components/PhysicalFitness";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <ThemeToggle />
      <Hero />
      <Projects />
      <Conferences />
      <PhysicalFitness />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
