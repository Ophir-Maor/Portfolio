import ModelEvolution from './ModelEvolution';
import type { Project } from '../content/portfolio';
import { projectMediaUrl } from '../utils/assets';
import ProjectVisual from './ProjectVisual';

export default function ProjectArtwork({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  if (project.id === 'airbnb') return <ModelEvolution compact={compact} />;
  const media = (project.media ?? []).flatMap((image) => {
    const url = projectMediaUrl(image.path);
    return url ? [{ ...image, url }] : [];
  });
  if (media.length)
    return (
      <div
        className={`project-photos ${compact ? 'project-photos-compact' : 'project-photos-detail'}`}
      >
        {media.map((image) => (
          <figure key={image.path}>
            {compact ? (
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <a
                href={image.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open full-size image: ${image.alt}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            )}
            {!compact && (
              <figcaption>
                {image.caption} <span className="mint">Open full-size ↗</span>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  // Authentic images replace the old concepts. Omit missing media instead of inventing replacements.
  if (project.id === 'study-agent' || project.id === 'rov') return null;
  return <ProjectVisual id={project.id} />;
}
