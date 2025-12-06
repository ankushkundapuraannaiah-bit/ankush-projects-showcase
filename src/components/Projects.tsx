import ProjectCard from "./ProjectCard";
import cyberguardQr from "@/assets/cyberguard-qr.jpg";
import codeathonCert from "@/assets/codeathon-certificate.png";

const Projects = () => {
  const projects = [
    {
      title: "Cyberguard - Codeathon",
      description: "Developed during the Codeathon conducted by AiFi at REVA University on September 18, 2025. A comprehensive platform (app & website) to report cyberbullying incidents through social media platforms like Facebook, Instagram, and more. Created with a dedicated team to combat online harassment and promote digital safety.",
      tags: ["React", "AI/ML", "Social Safety", "Mobile App"],
      liveUrl: "https://uni-safe-ai.lovable.app/",
      image: codeathonCert,
      qrCode: cyberguardQr,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certification and Projects
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
