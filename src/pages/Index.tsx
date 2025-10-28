import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Conferences from "@/components/Conferences";
import PhysicalFitness from "@/components/PhysicalFitness";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Conferences />
      <PhysicalFitness />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
