import { Button } from "@/components/ui/button";
import { ArrowDown, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
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
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
              linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rotate-45"
          animate={{ 
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-24 h-24 border-2 border-accent/20"
          animate={{ 
            rotate: [12, -12, 12],
            y: [0, -20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary-glow/20"
          animate={{ 
            rotate: [-12, 12, -12],
            x: [0, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="relative group">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-30 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <img 
                src={logo} 
                alt="AKA Logo" 
                className="relative w-32 h-32 rounded-full shadow-cyber hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Name with futuristic effect */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ankush Kundapura Annaiah
          </motion.h1>
          
          {/* Student Info Badge */}
          <motion.div 
            className="flex items-center justify-center gap-2 text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-lg md:text-xl font-medium">
              B.Tech CSE (AI & ML) • 1st Year • REVA University
            </span>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-foreground font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Full Stack Developer & AI Enthusiast
          </motion.p>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building innovative solutions with modern technologies. 
            Passionate about AI, machine learning, and creating impactful digital experiences.
          </motion.p>
          
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
          >
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
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
