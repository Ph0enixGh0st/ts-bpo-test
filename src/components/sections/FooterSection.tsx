import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight 
} from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-muted/30 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center">
                <span className="font-bold text-white text-xl">D</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                DevAI Studio
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Combining cutting-edge web development with intelligent AI solutions to create 
              extraordinary digital experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#work" className="text-muted-foreground hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#career" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#tutorials" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest news and offers.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                type="email"
                className="bg-background"
              />
              <Button size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} DevAI Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}