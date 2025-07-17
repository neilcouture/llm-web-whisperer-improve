import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Database, FileText, Zap, Shield, Cog } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Prompt Engineering",
    description: "Optimize AI model performance with expert prompt design and fine-tuning strategies.",
    features: ["Custom prompt architectures", "Performance optimization", "A/B testing frameworks", "Response quality metrics"],
    color: "text-primary"
  },
  {
    icon: Database,
    title: "RAG Implementation",
    description: "Advanced real-time data retrieval capabilities that enhance your AI systems with current information.",
    features: ["Vector database setup", "Semantic search optimization", "Real-time data integration", "Scalable architectures"],
    color: "text-accent"
  },
  {
    icon: FileText,
    title: "PDF Extraction",
    description: "Automated document processing with precision accuracy for contracts, invoices, and research papers.",
    features: ["Multi-format support", "OCR integration", "Structured data output", "Batch processing"],
    color: "text-matrix-green"
  }
];

const additionalServices = [
  {
    icon: Cog,
    title: "LLM Customization",
    description: "Tailored language models for your specific industry and use cases."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with data protection and regulatory compliance."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Maximize efficiency and reduce costs with optimized AI workflows."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-hero relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI consulting services designed to transform your business operations with cutting-edge technology.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 card-hover shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-card/50 flex items-center justify-center shadow-glow">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl mb-2 text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors duration-300">
              <CardHeader className="text-center">
                <service.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;