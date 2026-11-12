import { useEffect, useRef } from 'react';
import type { Project } from '../content/portfolio';
import { projects } from '../content/portfolio';
import ProjectVisual from '../components/ProjectVisual';
export default function ProjectPage({ project }: { project: Project }) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, [project.id]);
  const next =
    projects[
      (projects.findIndex((p) => p.id === project.id) + 1) % projects.length
    ]!;
  const sections = [
    ['The problem', project.problem],
    ['My approach', project.approach],
    ['Technical challenges', project.challenges],
    ['Outcome', project.outcome],
    ['Lessons learned', project.lessons],
  ];
  return (
    <main id="main" className="container case-study">
      <a className="text-link" href="#work">
        ← All work
      </a>
      <p className="eyebrow">{project.title} / PROJECT NOTES</p>
      <h1 ref={heading} tabIndex={-1}>
        {project.name}
      </h1>
      <p className="case-intro">{project.description}</p>
      <p className="context">{project.context}</p>
      <ProjectVisual id={project.id} />
      <div className="case-body">
        <aside>
          <p className="eyebrow">TOOLS & TECHNOLOGIES</p>
          <ul className="tech-list">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="fine">
            All visuals are original conceptual illustrations, not production
            screenshots.
          </p>
        </aside>
        <div>
          {sections
            .filter(([, copy]) => copy)
            .map(([title, copy]) => (
              <section key={title}>
                <h2>{title}</h2>
                <p>{copy}</p>
              </section>
            ))}
          <section className="coming-soon">
            <p className="eyebrow">A WORK IN PROGRESS</p>
            <h2>More details coming soon.</h2>
            <p>
              Verified technical challenges, outcomes, lessons, and project
              media will be added as this case study develops.
            </p>
          </section>
        </div>
      </div>
      <a className="next-project" href={`#/work/${next.id}`}>
        <span className="eyebrow">NEXT PROJECT ↗</span>
        <h2>{next.name}</h2>
      </a>
    </main>
  );
}
