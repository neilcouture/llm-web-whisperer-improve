import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Breadcrumb Navigation Component
const BreadcrumbNav = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center space-x-4 text-sm">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary hover:text-primary-glow transition-colors"
          >
            Home
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => scrollToSection('blog')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Blog
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BreadcrumbNav />
        <div className="pt-16"> {/* Add padding to account for fixed breadcrumb */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/index.html" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
