export const resumeUrl = __RESUME_AVAILABLE__
  ? `${import.meta.env.BASE_URL}Ophir_Maor_Resume.pdf`
  : null;

export const resumePreviewUrl = __RESUME_PREVIEW_AVAILABLE__
  ? `${import.meta.env.BASE_URL}resume-preview.png`
  : null;

// These are committed public assets. Their availability must not depend on
// a snapshot captured when the development server first started.
export function projectMediaUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`;
}
