# Claude Code Instructions for RCG Site

## Project Overview
This is a Next.js 16 healthcare website built with the App Router, focusing on home healthcare services in Portugal. The site emphasizes performance, SEO, and user experience through server-side rendering and minimal client-side JavaScript.

## Core Architecture Principle

### Server-First Approach
**This is the most important rule for this project:**

- **Default to Server Components**: All components should be server components unless they specifically need client-side features
- **Minimize Client Components**: When client components are necessary, they should be minimized to handle only user interactions (state, event handlers, browser APIs)
- **Keep Business Logic on Server**: Core functionality, data fetching, and business logic should remain in server components or server actions

### Client Component Pattern
When you need to create a client component:
1. Extract only the interactive parts that require client-side features
2. Keep surrounding layout and content as server components
3. Pass data from server components to client components as props
4. Use server actions for form submissions and data mutations

**Example - GOOD:**
```tsx
// Server component (default)
export default function ServicePage() {
  const services = await fetchServices(); // Server-side data fetching

  return (
    <div>
      <h1>Our Services</h1>
      <ServiceList services={services} /> {/* Client component receives data */}
    </div>
  );
}

// Client component - minimal, only handles interactivity
"use client";
export function ServiceList({ services }: { services: Service[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      {services.map(service => (
        <ServiceCard
          key={service.id}
          service={service}
          isExpanded={expanded === service.id}
          onToggle={() => setExpanded(service.id)}
        />
      ))}
    </div>
  );
}
```

**Example - AVOID:**
```tsx
// DON'T: Make entire component client when only small part needs interactivity
"use client";
export default function ServicePage() {
  const [services, setServices] = useState([]); // Unnecessary client state
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetchServices().then(setServices); // Should be server-side
  }, []);

  // ... rest of component
}
```

## Tech Stack

### Core Framework
- **Next.js 16** with App Router (not Pages Router)
- **React 19.2.3**
- **TypeScript** with strict mode enabled

### Styling
- **Tailwind CSS 4** with PostCSS
- **CSS-in-JS** via Tailwind utility classes
- **tw-animate-css** for animations

### UI Components
- **Radix UI** primitives (Dialog, Select, Label, Separator)
- **shadcn/ui** component patterns
- Custom components in `/src/components/ui/`

### Forms
- **React Hook Form** for form management
- **Zod** for validation schemas
- Forms submit to API routes (e.g., `/api/salesforce-webhook`)

### Media
- **Next.js Image** component for optimized images
- **next-cloudinary** for video hosting and optimization
- **Cloudinary** for media delivery

### Utilities
- **clsx** and **tailwind-merge** for class name merging
- **class-variance-authority** for component variants
- **lucide-react** for icons

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout
│   └── services/[slug]/     # Dynamic service pages
├── components/
│   ├── sections/            # Page sections (Hero, WhyChooseUs, etc.)
│   ├── ui/                  # Reusable UI components
│   ├── forms/               # Form components (client components)
│   └── layout/              # Layout components (Header, Footer, Navigation)
└── lib/                     # Utility functions
```

## Component Patterns

### Server Components (Default)
- All pages and sections
- Data fetching components
- Static content components
- Layout components

### Client Components (Mark with "use client")
- Form components with user input
- Interactive UI elements (modals, dropdowns, toggles)
- Components using browser APIs (localStorage, window, etc.)
- Components with useState/useEffect for UI state only

## File Naming Conventions

- **Component files**: kebab-case (e.g., `appointment-form.tsx`, `video-button.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: PascalCase interfaces/types when exported

## Code Style

### TypeScript
- Strict mode enabled
- Use interfaces for object shapes
- Use type aliases for union types and primitives
- Always type component props
- Avoid `any` type

### React
- Use functional components with hooks
- Prefer component composition over complex props
- Keep components focused and single-purpose
- Use proper TypeScript typing for all props

### Tailwind CSS
- Use utility classes for styling
- Extract repeated patterns to UI components
- Use responsive design (mobile-first)
- Maintain consistent spacing/sizing scales

## Performance Guidelines

1. **Server-side data fetching**: Use async/await in server components
2. **Image optimization**: Always use Next.js Image component
3. **Code splitting**: Leverage Next.js automatic code splitting
4. **Minimal client JS**: Only use "use client" when absolutely necessary
5. **Lazy loading**: Use dynamic imports for heavy client components

## Form Handling

Forms should follow this pattern:
1. Client component for UI and user input (React Hook Form + Zod)
2. Server actions or API routes for form submission
3. Server-side validation and business logic
4. Proper error handling and user feedback

Example: See `/src/components/forms/appointment-form.tsx`

## Media Handling

- **Images**: Use Next.js Image component with proper sizing
- **Videos**: Use next-cloudinary CldVideoPlayer for hosted videos
- **YouTube videos**: Use iframe embeds with proper privacy settings

## Accessibility

- Use semantic HTML elements
- Ensure proper ARIA labels on interactive elements
- Maintain keyboard navigation support
- Test with screen readers

## Internationalization

- The site primarily uses Portuguese (pt-PT)
- Form labels, buttons, and user-facing text should be in Portuguese
- Code comments and documentation should be in English

## Git Workflow

- Use conventional commit messages
- Always test changes before committing
- Run build process to catch errors
- Ensure TypeScript compilation passes

## Testing Before Deployment

Before considering work complete:
1. Run `bun run build` to ensure production build works
2. Test forms and interactive elements
3. Check responsive design on mobile and desktop
4. Verify console for errors/warnings
5. Test video playback on different devices
6. Verify form submissions work correctly

## Common Tasks

### Adding a New Section
1. Create server component in `/src/components/sections/`
2. Add to page.tsx or layout.tsx
3. Keep as server component unless interactivity needed

### Adding a Form
1. Create client component in `/src/components/forms/`
2. Use React Hook Form + Zod for validation
3. Create API route in `/src/app/api/` for submission
4. Handle errors and loading states properly

### Adding Interactive UI
1. Create client component in `/src/components/ui/`
2. Minimize client-side logic
3. Accept data via props from parent server component
4. Keep UI state separate from business logic

## Important Notes

- Always prefer server components over client components
- Keep client components focused on UI interactions only
- Use server actions for data mutations when possible
- Maintain performance by minimizing client-side JavaScript
- Follow existing patterns and conventions in the codebase
- When in doubt, ask yourself: "Does this NEED to be a client component?"