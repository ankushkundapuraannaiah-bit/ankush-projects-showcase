import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  char: string;
}

const codeChars = ['0', '1', '{', '}', '<', '>', '/', '*', '=', '+', '-', '(', ')', ';', ':', '$', '#', '@'];

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: Math.random() * 0.5 + 0.2,
          size: Math.random() * 12 + 10,
          opacity: Math.random() * 0.3 + 0.1,
          char: codeChars[Math.floor(Math.random() * codeChars.length)],
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');
      const color = isDark ? '34, 197, 94' : '22, 163, 74';

      particles.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.y > canvas.height) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
          particle.char = codeChars[Math.floor(Math.random() * codeChars.length)];
        }
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;

        ctx.font = `${particle.size}px "JetBrains Mono", "Fira Code", monospace`;
        ctx.fillStyle = `rgba(${color}, ${particle.opacity})`;
        ctx.fillText(particle.char, particle.x, particle.y);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

const FloatingCodeSnippets = () => {
  const snippets = [
    'const dev = () => {}',
    '<Component />',
    'npm install',
    'git commit -m',
    'async/await',
    'useState()',
    'export default',
    '// TODO:',
    'interface Props',
    'return ()',
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {snippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-xs text-primary/10 whitespace-nowrap"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
            opacity: [0, 0.15, 0.15, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            repeat: Infinity,
            delay: index * 2,
            ease: "linear",
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
};

const CircuitLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Horizontal circuit lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{
            top: `${20 + i * 20}%`,
            width: '100%',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Vertical circuit lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-accent/15 to-transparent"
          style={{
            left: `${15 + i * 18}%`,
            height: '100%',
          }}
          animate={{
            opacity: [0.05, 0.2, 0.05],
            scaleY: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Glowing nodes at intersections */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: `${10 + (i % 4) * 25}%`,
            top: `${15 + Math.floor(i / 4) * 35}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
            boxShadow: [
              '0 0 5px hsl(var(--primary) / 0.3)',
              '0 0 20px hsl(var(--primary) / 0.6)',
              '0 0 5px hsl(var(--primary) / 0.3)',
            ],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

const DeveloperBackground = () => {
  return (
    <>
      <MatrixBackground />
      <FloatingCodeSnippets />
      <CircuitLines />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      
      {/* Radial glow effects */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.06) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default DeveloperBackground;
