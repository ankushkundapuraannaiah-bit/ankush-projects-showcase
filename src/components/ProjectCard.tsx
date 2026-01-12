import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  qrCode?: string;
}

const ProjectCard = ({ title, description, tags, githubUrl, liveUrl, image, qrCode }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full">
      {/* Project Image/Placeholder */}
      <motion.div 
        className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {image ? (
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl font-bold text-primary/30">{title.charAt(0)}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
      </motion.div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Badge 
                variant="secondary"
                className="bg-secondary/50 text-secondary-foreground cursor-default"
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* QR Code for App Download */}
        {qrCode && (
          <motion.div 
            className="mt-4 p-4 bg-background/50 rounded-lg border border-border"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs text-muted-foreground mb-2 text-center">Scan to Download App</p>
            <img src={qrCode} alt="App Download QR Code" className="w-full max-w-[200px] mx-auto" />
          </motion.div>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05, x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Github className="h-4 w-4" />
              Code
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05, x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
