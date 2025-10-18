import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import namasteArbitrum from "@/assets/namaste-arbitrum.jpg";

const Conferences = () => {
  const conferences = [
    {
      title: "Namaste Arbitrum - Bangalore Edition",
      date: "October 12, 2025",
      location: "Bengaluru",
      description: "Attended conference about DevLayer, a developer ecosystem that helps coders become builders. Through courses, hackathons, and verifiable on-chain proof, it bridges learning and real-world opportunities—turning skills into reputation and projects into impact.",
      topics: ["Web3", "Blockchain", "Developer Ecosystem", "Arbitrum"],
      image: namasteArbitrum,
    },
  ];

  return (
    <section id="conferences" className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Conferences & Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Attending industry conferences and events to stay updated with the latest technologies and network with professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {conferences.map((conference, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              {/* Conference Image */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={conference.image} 
                  alt={conference.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {conference.title}
                  </h3>
                  
                  {/* Date and Location */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{conference.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{conference.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {conference.description}
                  </p>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {conference.topics.map((topic, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
