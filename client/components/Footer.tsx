export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-sm text-foreground/60 text-center max-w-md">
            Exploring the intersection of computer vision and creative technology
          </p>
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <a 
              href="https://github.com/Ophir-Maor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs text-foreground/40">
            © {currentYear} Ophir Maor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
