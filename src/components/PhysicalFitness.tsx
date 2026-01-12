import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import yogaCert from "@/assets/habuild-yoga-certificate.jpg";

const PhysicalFitness = () => {
  const details = [
    {
      title: "Official World Record Achievement",
      description: "Participated in setting the \"Highest Attendance in an Online Yoga Class Globally\""
    },
    {
      title: "7.52 Lakh Participants",
      description: "Joined participants from 169 countries worldwide"
    },
    {
      title: "Organized by Habuild",
      description: "In collaboration with Official World Record"
    }
  ];

  const badges = [
    "World Record",
    "International Yoga Day",
    "Global Wellness",
    "7.52L+ Participants"
  ];

  return (
    <section id="fitness" className="py-20 px-4 bg-gradient-to-b from-background to-background/50 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Trophy className="w-5 h-5" />
            </motion.div>
            <span className="font-semibold">World Record Participation</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Physical Fitness & Wellness
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Active participation in global wellness initiatives and fitness events
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <motion.div 
                  className="relative aspect-[4/3] md:aspect-auto overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={yogaCert}
                    alt="World Record Yoga Certificate"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
                
                <div className="p-8 flex flex-col justify-center space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                      World Record: Online Yoga Class
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      International Yoga Day 2025 • June 21, 2025
                    </p>
                  </motion.div>

                  <div className="space-y-4">
                    {details.map((detail, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-primary mt-2"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        />
                        <div>
                          <p className="font-semibold text-foreground">{detail.title}</p>
                          <p className="text-muted-foreground text-sm">
                            {detail.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="flex flex-wrap gap-2 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {badges.map((badge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {badge}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PhysicalFitness;
