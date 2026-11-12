import { experience, profile } from '../content/portfolio';
import { resumePreviewUrl, resumeUrl } from '../utils/assets';

export default function ResumeShowcase() {
  return (
    <aside className="resume-showcase" aria-label="Résumé showcase">
      <div className="resume-heading mono">
        <span>{resumeUrl ? 'RÉSUMÉ' : 'PROFILE'}</span>
        <span>{resumeUrl ? 'PDF' : 'PREVIEW'}</span>
      </div>
      {resumeUrl ? (
        <>
          <a
            className="resume-document"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Ophir Maor’s academic résumé PDF in a new tab"
          >
            {resumePreviewUrl ? (
              <img
                src={resumePreviewUrl}
                width="1224"
                height="1584"
                alt="First page of Ophir Maor’s academic résumé. Open the PDF for full-size reading."
                fetchPriority="high"
              />
            ) : (
              <div className="resume-placeholder">
                <h3>{profile.name}</h3>
                <p>Academic résumé</p>
                <p>Open the original PDF for full-size reading. ↗</p>
              </div>
            )}
          </a>
          <div className="resume-actions">
            <a
              className="text-link"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Résumé <span aria-hidden="true">↗</span>
              <span className="sr-only"> (PDF, new tab)</span>
            </a>
            <a
              className="resume-download"
              href={resumeUrl}
              download="Ophir_Maor_Resume.pdf"
            >
              Download PDF <span aria-hidden="true">↓</span>
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="resume-document resume-placeholder">
            <h3>{profile.name}</h3>
            <p>Software engineering · UC San Diego</p>
            <ul>
              {experience.map(([, name, role]) => (
                <li key={name}>
                  {name}
                  <br />
                  {role}
                </li>
              ))}
            </ul>
          </div>
          <p className="resume-note">
            Profile summary, not a résumé PDF. Document coming soon.
          </p>
        </>
      )}
    </aside>
  );
}
