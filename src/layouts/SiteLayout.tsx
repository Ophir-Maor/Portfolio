import type { ReactNode } from 'react';
import Navigation from '../components/Navigation';
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      {children}
      <footer className="container footer">
        <a className="brand" href="#home">
          OM<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Ophir Maor</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
