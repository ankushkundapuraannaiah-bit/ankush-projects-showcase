import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import yogaCert from "@/assets/habuild-yoga-certificate.jpg";

const PhysicalFitness = () => {
  return (
    <section id="fitness" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">World Record Participation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Physical Fitness & Wellness
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Active participation in global wellness initiatives and fitness events
          </p>
        </div>

        <Card className="overflow-hidden border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <img
                  src={yogaCert}
                  alt="World Record Yoga Certificate"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                    World Record: Online Yoga Class
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    International Yoga Day 2025 • June 21, 2025
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-semibold text-foreground">Official World Record Achievement</p>
                      <p className="text-muted-foreground text-sm">
                        Participated in setting the "Highest Attendance in an Online Yoga Class Globally"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-semibold text-foreground">7.52 Lakh Participants</p>
                      <p className="text-muted-foreground text-sm">
                        Joined participants from 169 countries worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-semibold text-foreground">Organized by Habuild</p>
                      <p className="text-muted-foreground text-sm">
                        In collaboration with Official World Record
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    World Record
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    International Yoga Day
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Global Wellness
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    7.52L+ Participants
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PhysicalFitness;
