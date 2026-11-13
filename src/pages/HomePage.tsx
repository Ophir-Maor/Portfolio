import ResumeShowcase from '../components/ResumeShowcase';
import { projectMediaUrl } from '../utils/assets';
import { experience, profile } from '../content/portfolio';
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
            <a className="button" href="#/projects">
              View my projects <span>↗</span>
            </a>
          </div>
        </div>
        <ResumeShowcase />
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
