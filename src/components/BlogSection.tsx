import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Are Open-Source LLMs the Future? Pros and Cons for Enterprises",
    excerpt: "Exploring the advantages and challenges of implementing open-source language models in enterprise environments, including cost considerations, customization benefits, and security implications.",
    category: "Industry Analysis",
    readTime: "7 min read",
    date: "2024-01-20",
    author: "Hermes Team",
    featured: true,
    url: "/blog/Are-Open-Source-LLMs-the-Future-Pros-Cons-for-Enterprises.html",
    relatedService: "services",
    relatedServiceTitle: "View Our AI Consulting Services"
  },
  {
    title: "Scaling LLMs Securely: Data Protection Strategies You Need to Know",
    excerpt: "Essential security frameworks and data protection strategies for enterprises deploying large language models at scale while maintaining compliance and privacy.",
    category: "Security",
    readTime: "8 min read",
    date: "2024-01-15",
    author: "Hermes Team",
    featured: true,
    url: "/blog/Scaling-llms-securely.html",
    relatedService: "services",
    relatedServiceTitle: "Explore Security Solutions"
  },
  {
    title: "From PDFs to Insights: Automating Document Extraction",
    excerpt: "Learn how modern AI techniques can transform your document processing workflows and unlock valuable insights from complex business documents with precision accuracy.",
    category: "Document Processing",
    readTime: "6 min read",
    date: "2024-01-10",
    author: "Hermes Team",
    featured: true,
    url: "/blog/pdf-to-insights.html",
    relatedService: "services",
    relatedServiceTitle: "PDF Extraction Services"
  },
  {
    title: "RAG 101: How Retrieval-Augmented Generation Is Changing AI",
    excerpt: "A comprehensive introduction to Retrieval-Augmented Generation technology and how it's revolutionizing AI applications with real-time data integration capabilities.",
    category: "RAG Implementation",
    readTime: "9 min read",
    date: "2024-01-05",
    author: "Hermes Team",
    featured: false,
    url: "/blog/rag-101.html",
    relatedService: "services",
    relatedServiceTitle: "RAG Implementation Services"
  },
  {
    title: "The Future of Prompt Engineering",
    excerpt: "Insights into emerging trends and advanced techniques that are shaping the future of prompt engineering and LLM optimization strategies.",
    category: "Prompt Engineering",
    readTime: "5 min read",
    date: "2023-12-28",
    author: "Hermes Team",
    featured: false,
    url: "/blog/future-of-prompt-engineering.html",
    relatedService: "services",
    relatedServiceTitle: "Prompt Engineering Services"
  }
];

const categoryColors: Record<string, string> = {
  "RAG Implementation": "bg-primary/10 text-primary border-primary/20",
  "Prompt Engineering": "bg-accent/10 text-accent border-accent/20",
  "Document Processing": "bg-matrix-green/10 text-matrix-green border-matrix-green/20",
  "Security": "bg-destructive/10 text-destructive border-destructive/20",
  "Industry Analysis": "bg-secondary/50 text-secondary-foreground border-secondary/20"
};

const BlogSection = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const allPosts = blogPosts;

   return (
     <section id="blog" className="py-20 px-6 bg-background relative">
       <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Latest Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our expert analysis, implementation guides, and industry insights on AI, LLMs, and document processing.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Featured Articles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 card-hover shadow-card h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={categoryColors[post.category] || "bg-muted text-muted-foreground"}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight text-foreground line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                 <CardContent className="pt-0 mt-auto">
                   <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                     <div className="flex items-center gap-1">
                       <Calendar className="w-4 h-4" />
                       {new Date(post.date).toLocaleDateString('en-US', {
                         year: 'numeric',
                         month: 'short',
                         day: 'numeric'
                       })}
                     </div>
                     <span>{post.author}</span>
                   </div>

                   {/* Related Service Link */}
                   <div className="mb-3 p-2 bg-primary/5 rounded border border-primary/10">
                     <button
                       onClick={() => document.querySelector(`#${post.relatedService}`)?.scrollIntoView({ behavior: 'smooth' })}
                       className="text-xs text-primary hover:text-primary-glow underline transition-colors"
                     >
                       🔗 {post.relatedServiceTitle}
                     </button>
                   </div>

                   <Button
                     variant="outline"
                     className="w-full border-primary/50 text-primary hover:bg-primary/10"
                     onClick={() => window.open(post.url, '_blank')}
                   >
                     Read Article
                     <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                 </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">All Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${categoryColors[post.category] || "bg-muted text-muted-foreground"}`}
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight text-foreground line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary-glow p-0 h-auto"
                      onClick={() => window.open(post.url, '_blank')}
                    >
                      Read more →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA to full blog */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8"
             onClick={() => window.open('/blog/index.html', '_blank')}
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;