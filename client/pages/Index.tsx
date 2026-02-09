import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {

  return (
    <Layout>
      {/* About Me Section */}
      <section className="container py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who am I?</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            I am a Computer Science student and Software Engineering intern with experience building
            production-grade systems, including AI-enhanced video processing pipelines and real-time
            control software. At Xometrics, I developed and optimized Python-based tools used in
            end-to-end workflows, focusing on automation, performance, and reliability.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I also lead cross-functional engineering teams as President of the Miramar Engineering Club,
            delivering award-winning software for an international ROV competition.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Background Remover
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-4 leading-relaxed">
              Advanced automated background removal powered by{" "}
              <span className="text-primary font-semibold">SAM2</span> (Segment Anything Model 2)
            </p>
            <p className="text-base text-foreground/60 mb-8 max-w-2xl mx-auto">
              Seamlessly isolate subjects from complex backgrounds in batch video processing.
              Remove backgrounds, isolate gear and accessories, and composite over any background with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Ophir-Maor/Xometrics_Background_Remover"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors group"
              >
                View on GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Batch Processing",
                description: "Process multiple videos efficiently with automated workflow for large-scale operations"
              },
              {
                title: "Intelligent Segmentation",
                description: "SAM2 powered isolation of subjects including accessories, cords, and light gear"
              },
              {
                title: "Clean Compositing",
                description: "Professional background replacement with seamless integration over solid or custom backgrounds"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card hover:bg-card/80"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technology</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {["Python", "SAM2", "Video Processing", "Batch Operations"].map((tech) => (
              <div 
                key={tech}
                className="p-4 rounded-lg bg-card border border-border text-center hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
