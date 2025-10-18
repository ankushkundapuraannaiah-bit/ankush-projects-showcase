import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management system with team features, real-time updates, and productivity analytics.",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
      tags: ["React", "API Integration", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and performance insights.",
      tags: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      githubUrl: "https://github.com",
    },
    {
      title: "AI Chatbot",
      description: "Intelligent chatbot with natural language processing, context awareness, and multi-language support.",
      tags: ["Python", "NLP", "TensorFlow", "React"],
      liveUrl: "https://example.com",
    },
    {
      title: "Portfolio CMS",
      description: "Custom content management system for portfolio websites with drag-and-drop builder and SEO optimization.",
      tags: ["React", "Express", "MySQL", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, 
            problem-solving, and creating user-centric applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
