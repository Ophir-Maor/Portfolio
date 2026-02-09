import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="container py-20 md:py-32">
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">About</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-foreground/80">
              This is a placeholder page. Additional content about the Background Remover project, 
              technical details, use cases, and more can be added here.
            </p>
            
            <div className="p-6 rounded-lg bg-card border border-border">
              <p className="text-foreground/70">
                To continue building this page, just let me know what you'd like to add here. 
                We can include:
              </p>
              <ul className="mt-4 space-y-2 text-foreground/70 list-disc list-inside">
                <li>Detailed project background and motivation</li>
                <li>Technical architecture and implementation</li>
                <li>Use cases and applications</li>
                <li>Team information and credits</li>
                <li>Case studies or results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
