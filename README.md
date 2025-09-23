# KJ Design System

A comprehensive, themeable design system built with React, TypeScript, and CSS custom properties. Features semantic color tokens, accessible components, and multiple theme support.

## Live Demo
Visit the live design system documentation to explore all components and themes.

## Features

- 🎨 **Three Built-in Themes**: Light, Dark, and Leaf themes
- 📦 **Component Library**: Buttons, Forms, Cards, Toggles, and more
- 🎯 **Token-based Architecture**: Primitive and semantic design tokens
- ♿ **Accessible**: Built with Radix UI for WCAG compliance
- 📱 **Responsive**: Mobile-first design approach
- 🚀 **Production Ready**: Tree-shakeable and optimized for performance

## Quick Start

### Installation
```bash
bun install
bun run dev
```

### Build for Production
```bash
bun run build
```

## Using in Your Project

1. **Copy the styles folder** from `/src/styles` to your project
2. **Import the CSS** in your root component:
   ```tsx
   import './styles/index.css';
   ```
3. **Apply theme class** to your root element:
   ```tsx
   <div className="kj-reset kj-font light">
     <App />
   </div>
   ```
4. **Use the components**:
   ```tsx
   <button className="button button-primary">
     Click Me
   </button>
   ```

## Available Components

- **Buttons**: Primary, Secondary, Outline, Bright variants in 5 sizes
- **Forms**: Inputs, Textareas, Selects with validation states
- **Cards**: Default, Interactive, Secondary, and Transparent variants
- **Alerts**: Success, Info, Warning, Error notifications
- **Toggles**: Checkboxes and Toggle switches with gradient options
- **Radix Components**: Button Groups, Popovers with custom styling

## Theme Switching

```tsx
// Apply theme class to root element
<div className="light">  // or "dark" or "leaf"
  <App />
</div>
```

## Design Tokens

The system uses a two-tier token architecture:
- **Primitive tokens**: Raw color values and base scales
- **Semantic tokens**: Theme-aware tokens that adapt to current theme

## Tech Stack

- React 19 + TypeScript
- Vite for development and building
- Radix UI for complex components
- CSS Custom Properties for theming
- React Router for navigation

## Deployment

Optimized for deployment on Vercel. Simply connect your GitHub repository and deploy.

## License

MIT