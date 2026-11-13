import { useState } from 'react';
import { resumeUrl } from '../utils/assets';
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="Ophir Maor home"
        onClick={() => setOpen(false)}
      >
        OM<span>.</span>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close −' : 'Menu +'}
      </button>
      <nav
        id="site-nav"
        className={open ? 'nav-open' : ''}
        aria-label="Main navigation"
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setOpen(false);
            document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
          }
        }}
      >
        {[
          { label: 'Projects', href: '#/projects' },
          { label: 'About', href: '#about' },
        ].map(({ label, href }) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        {resumeUrl && (
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        )}
        <a
          href="#contact"
          className="nav-contact"
          onClick={() => setOpen(false)}
        >
          Contact <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
