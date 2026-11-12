# Ophir Maor — Portfolio foundation

A minimal React + TypeScript application built with Vite and Tailwind CSS.
The homepage is a development placeholder; the portfolio design and features are intentionally deferred.

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
  app/App.tsx          Application composition
  pages/HomePage.tsx   Placeholder homepage
  styles/global.css   Tailwind entry and neutral baseline
  main.tsx            React entry
  vite-env.d.ts       Vite client types
```

Add `src/components`, `src/features`, `src/hooks`, and `src/lib` when actual shared code needs them. Add static assets to `public/` or imported assets alongside their features when needed.

## Future GitHub Pages deployment

`npm run build` produces a static `dist/` directory suitable for GitHub Pages.
Vite's `base` is `/` for the planned custom domain `ophirmaor.com`.
A repository-subpath preview would require a matching base path.

No deployment workflow, CNAME, DNS change, or routing library is configured.
Configure hosting and domain ownership separately before publishing. If routes are added later, plan direct-link handling for static hosting.

## Environment and history

Environment files are ignored and are not required. Never put secrets in `VITE_*` variables: those values are public in client builds.
The old tracked `.env` was removed, without carrying its values into this application. It remains in Git history and the local archive; review the old key's permissions and rotate it if it grants sensitive access. Removing a file does not revoke credentials.

The original site is preserved at local branch `backup/portfolio-v1` and annotated tag `archive/portfolio-v1` (commit `5735d0d`). Rebuild work lives on `rebuild/portfolio-v2`.

## Known tooling advisory

At initialization, `npm audit` reports 10 moderate findings in the ESLint/typescript-eslint dependency chain rooted in minimatch's globparts amplification advisory (GHSA-g3hv-75wg-m249). `npm audit --omit=dev` reports zero findings. No forced downgrade or cross-major dependency override was applied; revisit compatible upstream fixes before expanding CI.
