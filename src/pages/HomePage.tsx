import ResumeShowcase from '../components/ResumeShowcase';
import ProjectArtwork from '../components/ProjectArtwork';
import { projectMediaUrl } from '../utils/assets';
import { experience, profile, projects } from '../content/portfolio';
import RegressionLab from '../demos/RegressionLab';
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
              Explore my work <span>↘</span>
            </a>
          </div>
        </div>
        <ResumeShowcase />
        <div className="hero-bottom mono">
          <span>THINK DEEPLY. BUILD SOMETHING REAL.</span>
          <a href="#work">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>
      <section id="work" className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / IDEAS INTO IMPLEMENTATION</p>
            <h2>
              Selected work<span className="mint">.</span>
            </h2>
          </div>
          <p>
            A selection of systems, experiments,
            <br /> and products I’ve built.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article key={p.id} className={`project project-${i}`}>
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
              <div className="project-copy">
                <div className="project-meta mono">
                  <span>
                    {String(i + 1).padStart(2, '0')} / {p.title}
                  </span>
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
                  Explore project <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="lab" className="section lab-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / A LITTLE LESS ABSTRACT</p>
              <h2>
                The lab<span className="mint">.</span>
              </h2>
            </div>
            <p>
              Small experiments that make
              <br /> the engineering visible.
            </p>
          </div>
          <RegressionLab />
        </div>
      </section>
      <section className="section container experience-section">
        <div>
          <p className="eyebrow">03 / THE PATH SO FAR</p>
          <h2>
            Learning.
            <br />
            Building.
            <br />
            <span className="muted">Connecting dots.</span>
          </h2>
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
            alt="Ophir Maor in front of a Charlotte, North Carolina mural."
            loading="lazy"
            width="634"
            height="1124"
          />
        )}
        <div>
          <p className="eyebrow">04 / THE PERSON BEHIND THE PROJECTS</p>
          <h2>
            Beyond the code<span className="mint">.</span>
          </h2>
          <p className="about-lead">{profile.about}</p>
          <p>{profile.personal}</p>
          <div className="interests mono">
            {profile.interests.map((interest) => (
              <span key={interest}>↗ {interest}</span>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="section container contact-section">
        <p className="eyebrow">05 / WHAT’S NEXT?</p>
        <h2>
          Let’s build something
          <br />
          <span className="mint">meaningful.</span>
        </h2>
        <div className="contact-bottom">
          <p>
            Interesting problems. Thoughtful people.
            <br />
            Software that makes a difference.
          </p>
          <div className="contact-links">
            <a
              className="button"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            {profile.email && <a href={`mailto:${profile.email}`}>Email ↗</a>}
            {profile.linkedin && (
              <a
                className="text-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
