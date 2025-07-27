import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] translate-y-1/3" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 border border-primary/20 rounded-full bg-primary/5 text-primary">
            <span className="text-sm font-medium">Transforming Ideas into Digital Reality</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
            Next-Gen Web Development<br />Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Artificial Intelligence</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We combine cutting-edge web technologies with advanced AI solutions to create intelligent, 
            responsive, and future-proof digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              Get Started 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-muted-foreground">
              Modern, responsive websites and web applications using the latest frameworks and technologies.
            </p>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-lg bg-indigo-600/10 flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
            <p className="text-muted-foreground">
              Enhance your applications with machine learning, natural language processing, and data analysis.
            </p>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-muted-foreground">
              Tailored development services to meet your unique business requirements and challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}