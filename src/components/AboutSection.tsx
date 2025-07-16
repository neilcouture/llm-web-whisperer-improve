import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Best-in-class encryption and rigorous access controls to protect your data."
  },
  {
    icon: Target,
    title: "Precision Focus",
    description: "Specialized expertise in document extraction and AI implementation."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Technical depth combined with innovative strategies for measurable impact."
  },
  {
    icon: Zap,
    title: "Future-Ready",
    description: "Scalable solutions designed to evolve with your business needs."
  }
];

const expertise = [
  "Natural Language Processing",
  "Document Intelligence", 
  "Vector Databases",
  "LLM Fine-tuning",
  "Enterprise Security",
  "Cloud Architecture",
  "Data Pipeline Design",
  "Performance Optimization"
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              About Us
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At <span className="text-primary font-semibold">Hermes LLM Consulting</span>, we specialize in delivering cutting-edge artificial intelligence consulting services tailored to your business needs, with a distinct focus on document extraction, LLM customization, and Retrieval-Augmented Generation (RAG).
              </p>
              
              <p className="leading-relaxed">
                We empower organizations to futureproof their operations with AI-driven solutions by transforming complex challenges into streamlined, secure, and scalable solutions. Our team of experts combines technical depth with innovative strategies to ensure your AI systems deliver measurable impact while safeguarding your most valuable asset—your data.
              </p>
              
              <p className="leading-relaxed">
                Our expertise in document extraction is at the core of what we do. We leverage advanced natural language processing (NLP) techniques to extract critical insights from unstructured data, such as contracts, invoices, research papers, and financial documents.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 card-hover shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;