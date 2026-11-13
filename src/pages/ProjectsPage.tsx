import { useEffect, useRef } from 'react';
import ProjectArtwork from '../components/ProjectArtwork';
import { projects } from '../content/portfolio';

export default function ProjectsPage() {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, []);
  return (
    <main id="main">
      {' '}
      <section className="section container projects-page">
        <div className="section-heading">
          <div>
            <h1 ref={heading} tabIndex={-1}>
              Projects
            </h1>
          </div>
          <p>
            Projects from internships, coursework,
            <br /> and building with friends.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article key={p.id} className={`project project-${i}`}>
              {p.videos?.length ? (
                <div className="project-image-link">
                  <ProjectArtwork project={p} compact />
                </div>
              ) : (
                <a
                  className="project-image-link"
                  href={`#/work/${p.id}`}
                  aria-label={`Explore ${p.context.split(' · ')[0]} project`}
                >
                  <ProjectArtwork project={p} compact />
                  <span className="project-open" aria-hidden="true">
                    ↗
                  </span>
                </a>
              )}
              <div className="project-copy">
                <div className="project-meta mono">
                  <span>{p.category}</span>
                </div>
                <h3>
                  <a href={`#/work/${p.id}`}>{p.name}</a>
                </h3>
                <p className="context">{p.context}</p>
                <p>{p.description}</p>
                {p.highlight && (
                  <p className="project-highlight">{p.highlight}</p>
                )}
                <ul className="tech-list" aria-label="Technologies">
                  {p.technologies.slice(0, 4).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <a className="text-link" href={`#/work/${p.id}`}>
                  Read project notes <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
