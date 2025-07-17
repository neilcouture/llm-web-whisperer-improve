import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center matrix-bg overflow-hidden">
      {/* Matrix rain effect backdrop */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-card border border-primary/20 flex items-center justify-center shadow-glow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Company name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
            Hermes LLM
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-6 gradient-text">
            Consulting
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert AI Solutions for Document Extraction & RAG Implementation
          </p>

          {/* Service highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/20">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Document Processing</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/20">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">RAG Systems</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/20">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">LLM Customization</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-glow hover:shadow-glow transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-4 rounded-lg"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;