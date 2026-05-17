# Cauchy Centro Academico

Production-grade landing page for **Cauchy Centro Academico**, built with Next.js, React, TypeScript, Tailwind CSS, App Router, ESLint, and Prettier.

## Local Setup

1. Install Node.js from the official Node website. Use the current LTS version for production work.
2. Open the project in Visual Studio Code.
3. Install dependencies:

```bash
npm install
```

4. Start the local development server:

```bash
npm run dev
```

5. Open the local URL shown in the terminal, usually `http://localhost:3000`.

On Windows PowerShell, if `npm` scripts are blocked by execution policy, use `npm.cmd` instead.

## Scripts

- `npm run dev` starts the local Next.js development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint across the project.
- `npm run typecheck` validates TypeScript without emitting files.
- `npm run format` formats the codebase with Prettier.
- `npm run format:check` checks formatting without changing files.

## Recommended VS Code Extensions

- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin is not needed; use the built-in TypeScript support.
- Error Lens
- GitLens

## Folder Structure

- `app/`: Next.js App Router routes, metadata, layouts, and pages.
- `components/`: Shared React components.
- `components/ui/`: Reusable design-system primitives such as buttons, cards, containers, and section headings.
- `components/layout/`: Layout-level components such as the navbar.
- `components/sections/`: Landing page sections composed from UI primitives.
- `lib/`: Shared low-level helpers, such as class name merging.
- `hooks/`: Future reusable React hooks for client-side behavior.
- `services/`: Future API and integration services.
- `types/`: Shared TypeScript domain and API types.
- `utils/`: General utility functions that do not belong to a specific feature.
- `constants/`: Static copy, navigation, stats, and feature data.
- `config/`: Future app, environment, analytics, and feature-flag configuration.
- `public/`: Static assets served by Next.js.
- `styles/`: Global styles and design tokens.

## Architecture Notes

The current landing page is mostly static, so it uses React Server Components by default. Client Components should be introduced only when the interface needs browser state, event-heavy interactions, animation timelines, forms with live validation, or third-party client libraries.

The page is composed from modular sections:

- `Navbar`
- `HeroSection`
- `StatsSection`
- `SubjectsSection`
- `WhyChooseUsSection`
- `CTASection`
- `Footer`

The design system keeps spacing, typography, colors, radius, and shadows consistent through reusable UI primitives. Section data lives in `constants/site.ts`, keeping UI components clean and easy to extend.

## Future Scalability

The structure is ready to grow into a full educational SaaS platform:

- Authentication can be added through a dedicated `services/auth` area and route groups in `app/`.
- PostgreSQL and Prisma can live under future `prisma/`, `services/database`, and typed repository modules.
- Student dashboards can be introduced with authenticated route groups.
- Diagnostic exams can become feature modules with shared question, scoring, and analytics types.
- Admin workflows can be separated into role-based route groups and service boundaries.
- Analytics can be configured centrally through `config/` and isolated client components.

## Development Flow

The implementation should progress in slices:

1. Setup and tooling.
2. Folder structure.
3. Global layout and design tokens.
4. Reusable UI system.
5. Landing sections one by one.
6. Responsive and visual QA.
7. Production checks.

This keeps the project teachable, reviewable, and easier to evolve.
