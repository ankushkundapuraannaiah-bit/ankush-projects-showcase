import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, and cloud platforms.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with attention to detail.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Problem Solving",
      description: "Tackling complex challenges with innovative solutions and clean code.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-cyber relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            A passionate developer dedicated to crafting exceptional digital experiences 
            and solving real-world problems through technology.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card 
                className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-cyber group relative overflow-hidden h-full"
              >
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="text-primary mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
