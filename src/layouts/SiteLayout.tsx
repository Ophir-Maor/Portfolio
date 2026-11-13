import type { ReactNode } from 'react';
import Navigation from '../components/Navigation';
import { goHome } from '../utils/navigation';
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById('main');
          if (main) {
            main.setAttribute('tabindex', '-1');
            main.focus();
            main.scrollIntoView();
          }
        }}
      >
        Skip to content
      </a>
      <Navigation />
      {children}
      <footer className="container footer">
        <a className="brand" href={import.meta.env.BASE_URL} onClick={goHome}>
          OM<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Ophir Maor</span>
        <a
          href={import.meta.env.BASE_URL}
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
                .matches
                ? 'instant'
                : 'smooth',
            });
          }}
        >
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
