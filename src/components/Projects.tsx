import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import cyberguardQr from "@/assets/cyberguard-qr.jpg";
import codeathonCert from "@/assets/codeathon-certificate.png";
import wadhwaniCert from "@/assets/wadhwani-ignite-certificate.jpg";
import yuvaAiCert from "@/assets/yuva-ai-certificate.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

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
    {
      title: "Yuva AI for All - National AI Programme",
      description: "Successfully completed the Yuva AI for All national level AI programme conducted by FutureSkills and NASSCOM (IT-ITeS SSC) on December 22, 2025. Covered key modules including: Introduction to AI & ML fundamentals, Neural Networks & Deep Learning basics, Natural Language Processing (NLP), Computer Vision applications, AI Ethics & Responsible AI, and hands-on projects with real-world AI tools. Gained practical skills in Python for AI, data preprocessing, model training, and deploying AI solutions.",
      tags: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Python", "NASSCOM"],
      image: yuvaAiCert,
    },
    {
      title: "Ignite India 5.0 - Wadhwani Foundation",
      description: "Successfully completed the Ignite India 5.0 program conducted by Wadhwani Foundation on December 06, 2025. Gained key entrepreneurial skills in ideation, business modeling, and financial planning through 42 hours of comprehensive training and assessments.",
      tags: ["Entrepreneurship", "Ideation", "Business Modeling", "Financial Planning"],
      image: wadhwaniCert,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certification and Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, 
            problem-solving, and creating user-centric applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
