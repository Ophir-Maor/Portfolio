import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-20 md:py-32 lg:py-40">
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

      {/* Interactive Demo Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Try It Out</h2>
            <p className="text-center text-foreground/60 mb-12">
              Upload an image to see the potential of intelligent background removal
            </p>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 bg-card/50"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              
              {!uploadedImage ? (
                <>
                  <Upload className="w-12 h-12 mx-auto mb-4 text-foreground/40" />
                  <p className="text-lg font-medium mb-2">Drop your image here</p>
                  <p className="text-sm text-foreground/60">or click to browse</p>
                </>
              ) : (
                <div className="space-y-4">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded" 
                    className="max-w-full h-auto rounded-lg mx-auto max-h-96"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedImage(null);
                    }}
                    className="px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors text-sm"
                  >
                    Upload Another Image
                  </button>
                </div>
              )}
            </div>

            {uploadedImage && (
              <div className="mt-8 p-6 rounded-lg bg-card border border-border">
                <p className="text-sm text-foreground/70 mb-2">
                  This demo shows the upload capability. For the full background removal processing, 
                  visit the{" "}
                  <a 
                    href="https://github.com/Ophir-Maor/Xometrics_Background_Remover"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    project repository
                  </a>
                  {" "}to integrate the SAM2 model.
                </p>
              </div>
            )}
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
