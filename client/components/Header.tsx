import { Link } from "react-router-dom";
import { Github } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-xl font-bold text-primary">Ophir</div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        <a 
          href="https://github.com/Ophir-Maor" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-foreground/60 hover:text-foreground hover:bg-secondary transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}
