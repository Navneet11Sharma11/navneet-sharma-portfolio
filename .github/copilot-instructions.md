# Repository Instructions

## Build, Lint, and Test

- Install dependencies with `npm install`.
- Run the development server with `npm run dev`; build with `npm run build`; serve a production build with `npm start`.
- Run ESLint across the project with `npm run lint`, or on one file with `npm run lint -- app/components/Navbar.tsx`.
- Run unit tests with `npm run test:unit`; run one file with `npm run test:unit -- unit-tests/Footer.test.tsx`; use `npm run test:unit:watch` while developing.
- Run the Playwright end-to-end suite with `npm run test:e2e`; run one spec with `npm run test:e2e -- tests/homepage.spec.ts`, or one test by title with `npm run test:e2e -- --grep "renders the portfolio sections"`.
- Playwright starts the Next.js development server automatically. Install its Chromium browser once with `npx playwright install chromium`.

## Architecture

- This is a Next.js 16 App Router application. `app/page.tsx` composes the portfolio sections into one page; `app/layout.tsx` owns document metadata, global CSS loading, and the MUI App Router cache provider.
- Root `instrumentation.ts` registers OpenTelemetry for Next.js server tracing; configure OTLP export through environment variables, never committed secrets.
- The page is divided into focused components in `app/components/`. Section content is currently defined in component-local arrays and rendered as a single, static portfolio rather than loaded from a service.
- `app/components/Navbar.tsx` is interactive (scroll state and mobile drawer); most MUI section components currently declare `'use client'`. Keep browser-dependent interaction in client components and avoid broadening client boundaries unnecessarily.

## Conventions

- Preserve the single-page anchor contract: navigation links target the section IDs `hero`, `about`, `skills`, `experience`, `education`, and `contact`.
- Use MUI components and the `sx` prop for component styling and responsive breakpoints. Shared page-wide colors, typography, and utility effects live in `app/globals.css`.
- Keep repeated portfolio entries as local typed/inferred arrays and render them with stable keys. Public image/icon assets are referenced from root-relative `/assets/...` paths.
- TypeScript is strict, and the `@/*` path alias resolves from the repository root.
- Before changing Next.js APIs or conventions, consult the relevant guide for the installed version under `node_modules/next/dist/docs/`; this repository's Next.js version and guidance in `AGENTS.md` are authoritative.

For project overview and setup context, see `README.md`.
