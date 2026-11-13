import ResumeShowcase from '../components/ResumeShowcase';
import ProjectArtwork from '../components/ProjectArtwork';
import { projectMediaUrl } from '../utils/assets';
import { experience, profile, projects } from '../content/portfolio';
export default function HomePage() {
  return (
    <main id="main">
      <section className="hero container" id="home">
        <div className="hero-copy">
          <p className="eyebrow entrance">SOFTWARE ENGINEER · UC SAN DIEGO</p>
          <h1 className="entrance">
            Ophir Maor<span>.</span>
          </h1>
          <h2 className="entrance">
            Building intelligent systems,
            <br className="desktop-break" /> from models to products.
          </h2>
          <p className="hero-description entrance">{profile.description}</p>
          <div className="hero-actions entrance">
            <a className="button" href="#work">
              View my work <span>↘</span>
            </a>
          </div>
        </div>
        <ResumeShowcase />
      </section>
      <section id="work" className="section container">
        <div className="section-heading">
          <div>
            <h2>Selected work</h2>
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
      <section className="section container experience-section">
        <div>
          <h2>Experience &amp; education</h2>
        </div>
        <div className="timeline">
          {experience.map(([date, company, role, description]) => (
            <article key={company}>
              <span className="timeline-dot" />
              <p className="eyebrow">{date}</p>
              <h3>{company}</h3>
              <p className="role">{role}</p>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className="section container about-section">
        {projectMediaUrl(profile.portrait) && (
          <img
            className="about-portrait"
            src={projectMediaUrl(profile.portrait)!}
            alt="Ophir Maor at Charlotte, North Carolina airport during a 5 a.m. layover on the way to New York in summer 2026."
            loading="lazy"
            width="634"
            height="1124"
          />
        )}
        <div>
          <h2>About me</h2>
          <p className="about-lead">{profile.about}</p>
          {profile.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about-photo-note">{profile.photoNote}</p>
        </div>
      </section>
      <section id="contact" className="section container contact-section">
        <h2>{profile.contact.heading}</h2>
        <div className="contact-bottom">
          <p>{profile.contact.description}</p>
          <div className="contact-links">
            {[
              {
                label: 'LinkedIn',
                url: profile.linkedin,
                detail: 'Send me a message',
              },
              { label: 'GitHub', url: profile.github, detail: 'See my code' },
            ]
              .filter((link) => link.url)
              .map((link) => (
                <a
                  key={link.label}
                  className="contact-button"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <strong>{link.label}</strong>
                    <span>{link.detail}</span>
                  </span>
                  <span className="contact-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            {profile.email && (
              <a
                className="contact-button contact-email"
                href={`mailto:${profile.email}`}
              >
                <span>
                  <strong>Email</strong>
                  <span>{profile.email}</span>
                </span>
                <span className="contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
