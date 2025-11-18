import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Star, Trophy } from "lucide-react";

const stats = [
  { icon: Users, label: "Community Members", value: "500+" },
  { icon: Heart, label: "Happy Customers", value: "1,000+" },
  { icon: Star, label: "5-Star Reviews", value: "250+" },
  { icon: Trophy, label: "Awards Won", value: "12" },
];

const Community = () => {
  return (
    <section className="py-20 bg-forest">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hyde's Hermit Society
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join our creative community of makers, collectors, and enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="bg-terracotta border-0 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <Icon className="h-10 w-10 text-white mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/90">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="bg-terracotta hover:bg-terracotta-dark">
            Join the Society
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
