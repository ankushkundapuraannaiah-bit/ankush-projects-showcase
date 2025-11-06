import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, GitBranch, Blocks, Terminal, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="h-6 w-6" />,
      category: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "CI/CD", "Git", "Linux", "Kubernetes"],
    },
    {
      icon: <Blocks className="h-6 w-6" />,
      category: "Blockchain",
      skills: ["Web3", "Solidity", "Smart Contracts", "Ethereum", "DApps"],
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      category: "Tools & Others",
      skills: ["VS Code", "Visual Studio", "App Studio", "Figma", "Postman", "Firebase", "Supabase", "Vercel"],
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      category: "Methodologies",
      skills: ["Agile", "Scrum", "TDD", "Microservices", "RESTful Design"],
    },
    {
      icon: <Award className="h-6 w-6" />,
      category: "Certifications & Achievements",
      skills: ["Google Study Jam - 19 Skill Badges", "Google Study Jam - 1 Arcade Game Badge"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
