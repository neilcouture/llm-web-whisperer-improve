import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Hermes LLM</h3>
                <p className="text-sm text-muted-foreground">Consulting</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Expert AI solutions for document extraction, RAG implementation, and LLM customization. 
              Transforming businesses with secure, scalable AI technology.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Hermes LLM Consulting. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Prompt Engineering</button></li>
              <li><button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">RAG Implementation</button></li>
              <li><button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">PDF Extraction</button></li>
              <li><button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">LLM Customization</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@hermes-llm.ai" className="hover:text-primary transition-colors">
                  info@hermes-llm.ai
                </a>
              </li>
              <li>
                <button onClick={() => window.open('mailto:info@hermes-llm.ai?subject=Consultation Request', '_blank')} className="hover:text-primary transition-colors">
                  Schedule Consultation
                </button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">
                  Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Powered by cutting-edge AI technology • Secure • Scalable • Future-ready
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;