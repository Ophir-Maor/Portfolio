import { useEffect, useState } from 'react';
import SiteLayout from '../layouts/SiteLayout';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import { projects } from '../content/portfolio';
export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  const isProject = hash.startsWith('#/work/');
  const isProjects = hash === '#/projects' || hash === '#work';
  const project = projects.find((p) => hash === `#/work/${p.id}`);
  useEffect(() => {
    document.title = project
      ? `${project.context.split(' · ')[0]} | Ophir Maor`
      : isProjects
        ? 'Projects | Ophir Maor'
        : 'Ophir Maor | Software Engineer';
    if (isProject || isProjects)
      window.scrollTo({ top: 0, behavior: 'instant' });
    else {
      const id = hash.slice(1) || 'home';
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView(),
      );
    }
  }, [hash, isProject, isProjects, project]);
  return (
    <SiteLayout>
      {isProjects ? (
        <ProjectsPage />
      ) : project ? (
        <ProjectPage project={project} />
      ) : isProject ? (
        <main id="main" className="container section">
          <h1>Project not found.</h1>
          <a className="button" href="#/projects">
            Back to projects
          </a>
        </main>
      ) : (
        <HomePage />
      )}
    </SiteLayout>
  );
}
