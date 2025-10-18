import { Button } from "@/components/ui/button";
import { ArrowDown, GraduationCap } from "lucide-react";
import heroBg from "@/assets/hero-bg-futuristic.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Grid Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-accent/20 rotate-12 animate-pulse delay-150"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary-glow/20 -rotate-12 animate-pulse delay-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity"></div>
              <img 
                src={logo} 
                alt="AKA Logo" 
                className="relative w-32 h-32 rounded-full shadow-cyber hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Name with futuristic effect */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-glow">
            Ankush Kundapura Annaiah
          </h1>
          
          {/* Student Info Badge */}
          <div className="flex items-center justify-center gap-2 text-foreground/80">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-lg md:text-xl font-medium">
              B.Tech CSE (AI & ML) • 1st Year • REVA University
            </span>
          </div>

          <p className="text-xl md:text-2xl text-foreground font-semibold">
            Full Stack Developer & AI Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building innovative solutions with modern technologies. 
            Passionate about AI, machine learning, and creating impactful digital experiences.
          </p>
          
          <div className="pt-4">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber transition-all hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="h-6 w-6 text-primary" />
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
