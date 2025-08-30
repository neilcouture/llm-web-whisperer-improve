# Agent Guidelines for LLM Web Whisperer

## Build & Development Commands
- **Development server**: `vite dev` or `npm run dev`
- **Build production**: `vite build` or `npm run build`
- **Build development**: `vite build --mode development` or `npm run build:dev`
- **Lint code**: `eslint .` or `npm run lint`
- **Preview build**: `vite preview` or `npm run preview`
- **Package manager**: Use `bun` (bun.lock present)

## Code Style Guidelines

### Imports & Exports
- Use named imports: `import { Button } from "@/components/ui/button"`
- Use path aliases: `@/` for `src/` directory
- Default exports for React components
- Named exports for utilities and hooks

### React Components
- Use arrow functions: `const Component = () => {}`
- Use TypeScript with relaxed settings (strict: false)
- Leverage shadcn/ui component library
- Use `cn()` utility from `@/lib/utils` for conditional Tailwind classes

### Styling
- Primary: Tailwind CSS with custom design system
- Use CSS variables for theming (defined in tailwind.config.ts)
- Custom gradients: `bg-gradient-primary`, `bg-gradient-hero`
- Custom shadows: `shadow-glow`, `shadow-card`, `shadow-elegant`
- Matrix theme colors: `text-matrix-green`, `text-matrix-green-dim`

### TypeScript
- Target: ES2020 with JSX transform
- Relaxed type checking (noImplicitAny: false, strictNullChecks: false)
- Path mapping: `"@/*": ["./src/*"]`

### Linting
- ESLint with TypeScript and React rules
- React hooks linting enabled
- React refresh plugin for hot reload optimization
- Ignores `dist/` directory

### File Structure
- Components in `src/components/` (custom) and `src/components/ui/` (shadcn)
- Pages in `src/pages/`
- Hooks in `src/hooks/`
- Utilities in `src/lib/`
- Assets in `src/assets/` or `public/`

### Dependencies
- React 18 with TypeScript
- React Router for routing
- TanStack Query for data fetching
- Radix UI primitives via shadcn/ui
- Lucide React for icons
- Tailwind CSS for styling