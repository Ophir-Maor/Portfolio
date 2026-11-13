# Ophir Maor | Portfolio foundation

A minimal React + TypeScript application built with Vite and Tailwind CSS.
First complete portfolio draft: selected work, original conceptual project visuals, project notes, experience, and contact. GitHub Pages deployment is prepared in `.github/workflows/deploy.yml`; publication requires merging the release and configuring Pages.

## Local development

Use Node.js 24 (see `.nvmrc`) and npm. With nvm installed, run `nvm use`.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. No environment variables or backend are required.

## Commands

| Command                | Purpose                                           |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start Vite with hot reload                        |
| `npm run typecheck`    | Check application and tooling TypeScript          |
| `npm run lint`         | Run ESLint with zero warnings allowed             |
| `npm run format:check` | Check Prettier formatting                         |
| `npm run format`       | Apply Prettier formatting                         |
| `npm run check`        | Run type checking, linting, and formatting checks |
| `npm run build`        | Type-check and build static files into `dist/`    |
| `npm run preview`      | Serve the production build locally                |

## Structure

```text
src/
  app/           Hash navigation and document titles
  components/    Navigation, résumé showcase, project illustrations
  content/       Typed, editable profile, projects, and experience
  layouts/       Shared site shell
  pages/         Homepage and reusable project-detail page
  styles/        Design tokens, responsive layout, reduced-motion support
  utils/         Public asset URLs and conditional resume URL
public/          Monogram favicon, résumé PDF, first-page preview
tests/          Asset and leaderboard-data tests
```

## Content and resume

Edit `src/content/portfolio.ts` to verify copy and add project details. Project narratives use ordered, typed `sections` with headings, paragraphs, and optional bullet lists. Optional flow diagrams, comparison notes, highlights, awards, sources, and media render only when supplied. Conceptual graphics are distinguished from authentic project screenshots and photos. Reported results are labeled with their source context. Configure optional email in `profile`; the confirmed LinkedIn profile is already included.

The supplied academic PDF is included at `public/Ophir_Maor_Resume.pdf` (renamed from `Ophir-Maor-Academic-Resume copy.pdf`, contents unchanged). The hero uses `public/resume-preview.png`, a raster rendering of its first page. Clicking it or “View Résumé” opens the original PDF in a new tab; “Download PDF” saves it.

To update the document, replace the PDF and regenerate its preview. On macOS:

```sh
swift -module-cache-path /private/tmp/portfolio-swift-cache scripts/render-resume.swift
```

This maintenance helper uses native PDFKit, paints the actual first page onto white, and exports a lossless PNG. It is not run at build time and adds no runtime dependencies. On other platforms, export page one at 1224 × 1584 pixels to `public/resume-preview.png`. Restart Vite or rebuild after changing assets. Keep the preview synchronized with the PDF.

If the PDF is absent at startup/build, links disappear and a clearly labeled profile summary uses verified portfolio data. If only the image is absent, a document cover links to the PDF without a broken image. The full-size PDF is the accessible reading source; the hero image is a visual preview.

## Routing and future deployment

Case studies use `#/work/project-id`. Section links use `#work`, `#about`, and `#contact`. Hash navigation supports refresh and direct links on GitHub Pages without server rewrites or another routing dependency. Tradeoffs: hash URLs and limited per-project search indexing/social previews; metadata is shared, with document titles updated client-side. If individual case-study SEO becomes a priority, use prerendered static pages later.

`npm run build` produces static `dist/` output. Vite's base is `/` for the eventual custom domain `ophirmaor.com`. For repository-subpath hosting, adjust the Vite base. The Pages workflow is included; no CNAME or DNS changes were made. Canonical metadata names the intended domain, not a claim of current deployment.

Typography uses Google Fonts (Space Grotesk, Inter, IBM Plex Mono) with local system fallbacks. Core functionality requires no external APIs. Consider self-hosting fonts before launch. Motion is CSS/SVG with reduced-motion fallbacks; no animation or chart library is installed.

## Validation

Run `npm run check`, `npm test`, and `npm run build`. Tests verify referenced images and reported leaderboard checkpoint data and improvement calculations. Manual review should verify all project facts, add real media and technical outcomes, and review the actual resume PDF before publishing.

## Environment and history

Environment files are ignored and are not required. Never put secrets in `VITE_*` variables: those values are public in client builds.
The old tracked `.env` was removed, without carrying its values into this application. It remains in Git history and the local archive; review the old key's permissions and rotate it if it grants sensitive access. Removing a file does not revoke credentials.

The original site is preserved at local branch `backup/portfolio-v1` and annotated tag `archive/portfolio-v1` (commit `5735d0d`). Rebuild work lives on `rebuild/portfolio-v2`.

## Known tooling advisory

At initialization, `npm audit` reports 10 moderate findings in the ESLint/typescript-eslint dependency chain rooted in minimatch's globparts amplification advisory (GHSA-g3hv-75wg-m249). `npm audit --omit=dev` reports zero findings. No forced downgrade or cross-major dependency override was applied; revisit compatible upstream fixes before expanding CI.

## Case-study content and assets

The project IDs and hash routes remain unchanged. ROV achievements are attributed to the Miramar Water Jets team, with linked college and competition documentation. Personal subsystem ownership is not inferred. Xometrics throughput is a user-supplied approximate batch-workflow result; no undefined segmentation-success percentage is published. Airbnb has no claimed final score or placement. Brandes content stays at the level of contributions and does not expose internal architecture.

Authentic Study Agent screenshots are expected at:

- `public/projects/study-agent/control-panel.png`
- `public/projects/study-agent/session-summary.png`

Both authentic screenshots are included. The typed media entries include captions, alt text, and full-size links. Referenced project images are committed public assets and served directly using the Vite base path. `npm test` checks that every referenced image is present. Screenshots represent one example session, not aggregate performance. The supplied ROV photo is included at `public/projects/rov/sub.jpg`; the personal photo is at `public/ophir.jpg`. Xometrics now uses the supplied video demonstration at `public/projects/xometrics/video-demo.mp4`.

Before deployment, verify the Xometrics throughput context, review the employer-facing descriptions for confidentiality, confirm your ROV role wording, and inspect screenshot content for information you do not want public.

## Personal content update

The homepage includes an i4NS Software Engineering Intern entry through UC San Diego, with the Department of War context supplied by Ophir. Detailed responsibilities and dates are deferred. The confirmed LinkedIn profile is configured in the centralized profile data. Airbnb concept art is replaced by the reported public-score Model Evolution chart on its card and case study. Study Agent uses the two original screenshots; ROV uses the supplied underwater photo. All editable website copy avoids em dashes; the original résumé PDF and its preview remain unchanged.

## Airbnb Model Evolution

`src/content/airbnbResults.ts` stores six selected, user-reported historical Kaggle **public leaderboard** checkpoints at full precision. Phase 5 is intentionally absent. These are not local cross-validation scores, private leaderboard results, or final rankings. Submission IDs, dates, the competition URL, and exported leaderboard records have not been supplied. Phase descriptions remain at the level provided by Ophir; no causal attribution to individual changes is inferred.

`ModelEvolution.tsx` renders a compact, noninteractive chart inside the homepage project link and an expanded, selectable chart in the case study. Buttons support Enter/Space, arrow keys, Home, and End; the SVG markers also accept pointer input. Straight segments connect known checkpoints and do not imply measured intermediate results. The nonzero RMSE axis spans 78–84; the horizontal axis uses phase numbers, not elapsed time. Animation runs once on viewport entry and respects reduced motion. The improvement is calculated from the first checkpoint to the lowest reported score.

No saved out-of-fold predictions or ground-truth targets were found in this repository. Authentic error-by-price analysis needs aligned row/listing IDs, observed prices, out-of-fold predictions, fold assignments, and model/run identifiers. Include target-transform and inverse-transform details plus validation split definitions so residuals and RMSE can be calculated in original price units without leakage. These local validation results must remain separately labeled from Kaggle public scores. No synthetic error-by-price chart is presented as project evidence.

## GitHub Pages release

`.github/workflows/deploy.yml` follows GitHub’s official custom-workflow pattern: separate build and deploy jobs, official configure/upload/deploy actions, and the `github-pages` environment. Node 24 runs `npm ci`, `npm run check`, `npm test`, and `npm run build`. Only `dist/` is uploaded. Permissions are read-only for source/build and limited to Pages/OIDC writes in the deploy job. A shared concurrency group queues production runs without interrupting an active deployment.

Pushes to `main` trigger deployment. Manual dispatch is supported on `main`; both jobs are guarded against deploying other branches. Pushing the release branch or opening its PR does not deploy. The workflow intentionally does not enable Pages or change repository settings.

Before the first production workflow can succeed, an owner must select **Settings → Pages → Build and deployment → Source: GitHub Actions**. After reviewing and merging the release, the push to `main` starts the workflow automatically. If Pages is still disabled, configuration/deployment will fail until it is enabled; rerun the workflow from `main` afterward. No Actions run has been dispatched as part of release preparation.

For `https://ophirmaor.com`, keep Vite `base: '/'`, then set the custom domain in repository Pages settings when ready. A CNAME file alone does not configure an Actions-based Pages deployment, and no CNAME is added. Configure Porkbun DNS separately, verify GitHub’s domain/HTTPS checks, and enable HTTPS when available. Root-relative assets intentionally target the custom-domain root; the default `Ophir-Maor.github.io/Portfolio/` URL will not be a reliable preview with this base before domain setup. Hash case-study URLs such as `https://ophirmaor.com/#/work/airbnb` support direct navigation and refresh without server rewrites.

The release includes the original résumé unchanged, including its contact details and employer descriptions, plus supplied photos/screenshots. Review those public-facing details before merging. Brandes narrative remains high-level with no proprietary screenshots or source. No employer can be certified to have approved publication by a code audit alone. The old tracked `.env` remains in existing Git history, not in the current tree or Pages artifact; the release does not rewrite history or revoke the old key.

## Xometrics video

The supplied `Brandon_51.forward_plus_reverse.mp4` is copied unchanged to `public/projects/xometrics/video-demo.mp4`. The homepage and case study use the shared `ProjectVideo` component with muted autoplay, continuous looping, inline mobile playback, and a keyboard-accessible pause/play button. Reduced-motion preferences disable autoplay; visitors can still start playback manually. Browser autoplay restrictions may also require pressing Play. The original portrait aspect ratio is preserved without cropping. No video-processing library or backend is required.
