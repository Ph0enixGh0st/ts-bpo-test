import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, Database, LineChart, MonitorSmartphone, 
  Search, Server, ShieldCheck, Zap 
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Modern, responsive interfaces with React, Vue, and Angular",
      tags: ["React", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture",
      tags: ["Node.js", "Python", "Express", "MongoDB"]
    },
    {
      icon: <MonitorSmartphone className="h-6 w-6" />,
      title: "Responsive Web Design",
      description: "Websites that work seamlessly across all devices",
      tags: ["Mobile-first", "Adaptive Layout", "UI/UX"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Fast-loading websites with optimized code and assets",
      tags: ["Speed Testing", "Core Web Vitals", "SEO"]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "AI Data Processing",
      description: "Transform raw data into actionable insights",
      tags: ["Data Mining", "Big Data", "Analytics"]
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "AI Search Solutions",
      description: "Intelligent search and recommendation systems",
      tags: ["Semantic Search", "ML Algorithms", "NLP"]
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "AI Predictive Analysis",
      description: "Use ML to forecast trends and business outcomes",
      tags: ["Machine Learning", "Forecasting", "Decision Support"]
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Security & Compliance",
      description: "Secure applications with best practices and standards",
      tags: ["Authentication", "Data Protection", "GDPR"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of web development and AI integration services
            to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-all hover:shadow-md bg-background">
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}