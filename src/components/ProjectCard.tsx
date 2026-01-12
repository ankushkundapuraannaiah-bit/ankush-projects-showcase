import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ZoomIn, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  qrCode?: string;
  imageRotation?: number;
}

const ProjectCard = ({ title, description, tags, githubUrl, liveUrl, image, qrCode, imageRotation = 0 }: ProjectCardProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full">
        {/* Project Image/Placeholder */}
        <motion.div 
          className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          onClick={() => image && setIsZoomed(true)}
        >
          {image ? (
            <>
              <motion.img 
                src={image} 
                alt={title} 
                className="w-full h-full object-contain bg-white/90 dark:bg-gray-900/90"
                style={{ transform: `rotate(${imageRotation}deg)` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              {/* Zoom indicator */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="bg-primary/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <ZoomIn className="h-6 w-6 text-primary-foreground" />
                </motion.div>
              </motion.div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-4xl font-bold text-primary/30">{title.charAt(0)}</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60 pointer-events-none"></div>
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

      {/* Fullscreen Image Modal */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-md border-primary/20 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{title} Certificate</DialogTitle>
          </VisuallyHidden>
          <AnimatePresence>
            {isZoomed && (
              <motion.div
                className="relative w-full h-full flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setIsZoomed(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <X className="h-6 w-6 text-foreground" />
                </button>
                <motion.img
                  src={image}
                  alt={title}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  style={{ transform: `rotate(${imageRotation}deg)` }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                />
                <motion.p
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {title}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
