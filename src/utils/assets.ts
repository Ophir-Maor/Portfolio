export const resumeUrl = __RESUME_AVAILABLE__
  ? `${import.meta.env.BASE_URL}Ophir_Maor_Resume.pdf`
  : null;

export const resumePreviewUrl = __RESUME_PREVIEW_AVAILABLE__
  ? `${import.meta.env.BASE_URL}resume-preview.png`
  : null;

export function projectMediaUrl(path: string): string | null {
  return __PROJECT_MEDIA_AVAILABLE__.includes(path)
    ? `${import.meta.env.BASE_URL}${path}`
    : null;
}
