import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center">
              <span className="font-bold text-white text-xl">D</span>
            </div>
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
              DevAI Studio
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">Services</a>
            <a href="#work" className="text-foreground/80 hover:text-primary transition-colors font-medium">Our Work</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">About</a>
            <a href="#tech" className="text-foreground/80 hover:text-primary transition-colors font-medium">Technologies</a>
            <Button variant="default">Contact Us</Button>
          </nav>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg py-4">
          <nav className="flex flex-col space-y-4 px-6">
            <a 
              href="#services" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#work" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </a>
            <a 
              href="#about" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tech" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Technologies
            </a>
            <Button variant="default" className="w-full">Contact Us</Button>
          </nav>
        </div>
      )}
    </header>
  );
}