import { useEffect, useRef } from 'react';
import type { Project } from '../content/portfolio';
import { projects } from '../content/portfolio';
import ProjectArtwork from '../components/ProjectArtwork';

export default function ProjectPage({ project }: { project: Project }) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, [project.id]);
  const next =
    projects[
      (projects.findIndex((p) => p.id === project.id) + 1) % projects.length
    ]!;
  return (
    <main id="main" className={`container case-study case-${project.id}`}>
      <a className="text-link" href="#work">
        ← All work
      </a>
      <p className="eyebrow">{project.category} / CASE STUDY</p>
      <h1 ref={heading} tabIndex={-1}>
        {project.title}
      </h1>
      <p className="case-intro">{project.description}</p>
      <p className="context">{project.context}</p>
      <ProjectArtwork project={project} />
      {project.highlight && (
        <p className="case-highlight">{project.highlight}</p>
      )}
      {project.awards && (
        <div
          className="case-awards"
          aria-label="Miramar Water Jets team achievements"
        >
          {project.awards.map((award) => (
            <strong key={award}>{award}</strong>
          ))}
        </div>
      )}
      <div className="case-body">
        <aside>
          <p className="eyebrow">TOOLS & TECHNOLOGIES</p>
          <ul className="tech-list">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <nav className="case-toc" aria-label="Case study contents">
            {project.sections.map((section) => (
              <a
                key={section.id}
                href={`#/work/${project.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: window.matchMedia(
                      '(prefers-reduced-motion: reduce)',
                    ).matches
                      ? 'instant'
                      : 'smooth',
                  });
                  document
                    .getElementById(section.id)
                    ?.focus({ preventScroll: true });
                }}
              >
                {section.heading}
              </a>
            ))}
          </nav>
          {!project.videos?.length &&
            ['xometrics', 'brandes'].includes(project.id) && (
              <p className="fine">
                Project graphics are conceptual illustrations.
              </p>
            )}
          {project.note && <p className="case-note">{project.note}</p>}
        </aside>
        <div>
          {project.sections.map((section) => (
            <section key={section.id} id={section.id} tabIndex={-1}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="case-bullets">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {project.flow && (
            <figure className="case-flow">
              <figcaption>{project.flow.label}</figcaption>
              <ol>
                {project.flow.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </figure>
          )}
          {project.comparison && (
            <section className="case-comparison">
              <h2>Comparing experimental choices</h2>
              {project.comparison.map((item) => (
                <article key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </section>
          )}
          {project.sources && (
            <section className="case-sources">
              <h2>Sources & team documentation</h2>
              {project.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {source.label} ↗
                </a>
              ))}
            </section>
          )}
        </div>
      </div>
      <a className="next-project" href={`#/work/${next.id}`}>
        <span className="eyebrow">NEXT PROJECT ↗</span>
        <h2>{next.name}</h2>
      </a>
    </main>
  );
}
