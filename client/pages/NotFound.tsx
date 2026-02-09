import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container py-20 md:py-32 flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-foreground/80 mb-2">Page Not Found</p>
          <p className="text-foreground/60 mb-8">
            The page you're looking for doesn't exist or might be in development.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
