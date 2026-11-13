import { useEffect, useRef, useState } from 'react';
import type { ProjectVideoMedia } from '../content/portfolio';
import { projectMediaUrl } from '../utils/assets';

export default function ProjectVideo({
  video,
  compact,
}: {
  video: ProjectVideoMedia;
  compact: boolean;
}) {
  const player = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      setReduced(preference.matches);
      if (preference.matches) player.current?.pause();
    };
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  return (
    <figure
      className={`project-video ${compact ? 'project-video-compact' : 'project-video-detail'}`}
    >
      <div className="project-video-frame">
        <div className="project-video-crop">
          <video
            ref={player}
            style={{ transform: `scale(${video.cropScale})` }}
            src={projectMediaUrl(video.path)}
            autoPlay={!reduced}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={video.label}
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
          >
            Your browser does not support this video.{' '}
            <a href={projectMediaUrl(video.path)}>Open the MP4</a>.
          </video>
        </div>
        <button
          className="video-toggle"
          type="button"
          aria-label={`${paused ? 'Play' : 'Stop'} ${video.label}`}
          onClick={() => {
            const element = player.current;
            if (!element) return;
            if (element.paused)
              void element.play().catch(() => setPaused(true));
            else {
              element.pause();
              element.currentTime = 0;
            }
          }}
        >
          {paused ? 'Play video' : 'Stop video'}{' '}
          <span aria-hidden="true">{paused ? '▶' : '■'}</span>
        </button>
      </div>
      {!compact && (
        <figcaption>
          {video.caption}{' '}
          <a
            href={projectMediaUrl(video.path)}
            target="_blank"
            rel="noreferrer"
          >
            Open video ↗
          </a>
        </figcaption>
      )}
    </figure>
  );
}
