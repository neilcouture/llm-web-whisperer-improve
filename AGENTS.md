# Agent Guidelines for LLM Web Whisperer

## Build & Development Commands
- **Dev server**: `vite dev` or `npm run dev`
- **Build prod**: `vite build` or `npm run build`
- **Build dev**: `vite build --mode development` or `npm run build:dev`
- **Lint**: `eslint .` or `npm run lint`
- **Preview**: `vite preview` or `npm run preview`
- **Package manager**: Use `bun` (bun.lock present)
- **No test commands** - project has no testing setup

## Code Style Guidelines

### Imports & Exports
- Named imports: `import { Button } from "@/components/ui/button"`
- Path aliases: `@/` for `src/` directory
- Default exports for React components, named for utilities/hooks

### React Components
- Arrow functions: `const Component = () => {}`
- TypeScript with relaxed settings (strict: false, noImplicitAny: false)
- Use shadcn/ui components and `cn()` utility for Tailwind classes

### Styling
- Tailwind CSS with custom design system
- Custom gradients: `bg-gradient-primary`, `bg-gradient-hero`
- Custom shadows: `shadow-glow`, `shadow-card`, `shadow-elegant`
- Matrix theme colors: `text-matrix-green`, `text-matrix-green-dim`

### TypeScript
- Target: ES2020, JSX transform: react-jsx
- Relaxed checking: noImplicitAny: false, strictNullChecks: false
- Path mapping: `"@/*": ["./src/*"]`

### File Structure
- Components: `src/components/` (custom), `src/components/ui/` (shadcn)
- Pages: `src/pages/`, Hooks: `src/hooks/`, Utils: `src/lib/`
- Assets: `src/assets/` or `public/`

### Dependencies
- React 18 + TypeScript, React Router, TanStack Query
- Radix UI via shadcn/ui, Lucide React icons, Tailwind CSS