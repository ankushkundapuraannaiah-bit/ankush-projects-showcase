import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

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
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer dedicated to crafting exceptional digital experiences 
            and solving real-world problems through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
