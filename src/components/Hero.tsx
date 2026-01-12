import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, GraduationCap, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const useTypewriter = (text: string, speed: number = 80, delay: number = 500) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      
      timeoutId = setTimeout(typeNextChar, delay);
    };

    startTyping();

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};

const Hero = () => {
  const fullName = "Ankush Kundapura Annaiah";
  const { displayedText, isComplete } = useTypewriter(fullName, 80, 800);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      {/* Terminal-style grid */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated code brackets */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 text-6xl font-mono text-primary/10 font-bold"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            y: [0, -10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {'</>'}
        </motion.div>
        <motion.div 
          className="absolute bottom-40 right-20 text-5xl font-mono text-accent/10 font-bold"
          animate={{ 
            opacity: [0.1, 0.25, 0.1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {'{ }'}
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 text-4xl font-mono text-primary/10"
          animate={{ 
            opacity: [0.05, 0.2, 0.05],
            x: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {'//'}
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4 text-3xl font-mono text-accent/10"
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {'=> {}'}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Terminal prompt badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 font-mono text-sm text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Terminal className="w-4 h-4" />
            <span className="opacity-70">$</span> hello_world.exe
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-4 bg-primary ml-1"
            />
          </motion.div>

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
                className="relative w-32 h-32 rounded-full shadow-cyber hover:scale-110 transition-transform duration-300 border-2 border-primary/30"
              />
            </div>
          </motion.div>

          {/* Name with typewriter effect */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold min-h-[1.2em] md:min-h-[1.2em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-blue-500 dark:text-blue-400" style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)' }}>
              {displayedText}
            </span>
            {!isComplete && (
              <motion.span
                className="inline-block w-1 md:w-2 h-12 md:h-16 bg-blue-500 ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </motion.h1>
          
          {/* Student Info Badge */}
          <motion.div 
            className="flex items-center justify-center gap-2 text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-lg md:text-xl font-medium font-mono">
              B.Tech CSE (AI & ML) • 1st Year • REVA University
            </span>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-foreground font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-primary font-mono">{'<'}</span>
            Full Stack Developer & AI Enthusiast
            <span className="text-primary font-mono">{' />'}</span>
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
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber transition-all hover:scale-105 group overflow-hidden font-mono"
            >
              <span className="relative z-10 flex items-center">
                <span className="opacity-70 mr-2">$</span>
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
