# KJ Design System - Navigation Guide

## Overview
The design system now features a sidebar navigation with separate sections for easy exploration.

## Running the Project
```bash
bun install  # Install dependencies
bun run dev  # Start development server
```

## Navigation Structure

### Sections Available:
1. **Overview** - Introduction and quick start guide
2. **Colors** - Semantic and primitive color palettes
3. **Typography** - Font sizes, weights, line heights, and text styles
4. **Spacing** - Spacing scale and utilities
5. **Borders & Shadows** - Border radius and shadow effects
6. **Buttons** - Button variants, sizes, and states
7. **Form Elements** - Inputs, textareas, and selects
8. **Toggles & Checkboxes** - Interactive boolean controls
9. **Cards & Alerts** - Container components and notifications
10. **Components** - Advanced Radix UI components (Button Groups, Popovers)
11. **Utilities** - Helper classes and layout utilities

## Features
- **Theme Switching**: Toggle between Light, Dark, and Leaf themes
- **Collapsible Sidebar**: Click the arrow to expand/collapse navigation
- **Active State Highlighting**: Current page is highlighted with gradient accent
- **Live Preview**: All components are interactive and themed

## Technology Stack
- React 19 with TypeScript
- React Router for navigation
- Radix UI for accessible components
- CSS custom properties for theming
- Vite for fast development

## Design System Architecture
```
src/
├── components/
│   └── Layout.tsx          # Sidebar navigation layout
├── pages/                  # Individual showcase pages
│   ├── Overview.tsx
│   ├── Colors.tsx
│   ├── Typography.tsx
│   └── ...
├── styles/
│   ├── index.css           # Main entry point
│   ├── primitive-tokens.css # Base design tokens
│   ├── semantic-tokens.css  # Theme-aware tokens
│   └── component-tokens.css # Component styles
└── App.tsx                 # Router configuration
```

## Usage in Your Projects
To use components from this design system:

1. Copy the `/styles` folder to your project
2. Import `styles/index.css` in your main component
3. Apply theme class to your root element
4. Use the component classes and CSS variables

Example:
```tsx
import './styles/index.css';

function App() {
  return (
    <div className="kj-reset kj-font light">
      <button className="button button-primary">
        Click Me
      </button>
    </div>
  );
}
```