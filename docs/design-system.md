---
title: Design System Guide
description: Source of truth for the KJ platform's UI architecture, token system, component patterns, and developer rules.
---

Source of truth for the KJ platform's UI architecture. This document covers the token system, component patterns, and developer rules that all contributors must follow.

> **Interactive reference:** Browse the sidebar to explore components and themes visually.

---

## Table of Contents

- [Token Architecture](#token-architecture)
- [Theme System](#theme-system)
- [Color Usage](#color-usage)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Component Patterns](#component-patterns)
- [Icons](#icons)
- [Responsive Design](#responsive-design)
- [Animation](#animation)
- [Developer Rules](#developer-rules)
- [Key Files](#key-files)

---

## Token Architecture

The design system uses a **3-tier token hierarchy**. Always consume tokens from the highest applicable tier:

| Tier | File | Examples | When to use |
|------|------|----------|-------------|
| **Component tokens** | `component-tokens.css` | `.button-primary`, `.card`, `.ds-input` | First choice — ready-to-use classes |
| **Semantic tokens** | `semantic-tokens.css` | `--bg-primary`, `--text-secondary` | Custom components that need theme awareness |
| **Primitive tokens** | `primitive-tokens.css` | `--color-gray-500`, `--spacing-4` | Avoid direct use — go through semantic |

### Why this matters

Primitive tokens are **static values** — they don't change between themes. Semantic tokens **adapt per theme**. If you use `--color-gray-500` directly, your component breaks in dark mode. If you use `--text-secondary`, it resolves correctly in all themes.

---

## Theme System

Three themes, applied via CSS class on a root element:

| Theme | Class | Brand Colors |
|-------|-------|-------------|
| Light | `.light` | Purple / Magenta / Blue |
| Dark | `.neutral-dark` | Purple / Magenta / Blue |
| Leaf | `.leaf` | Green / Teal / Forest |

### Applying a theme

```tsx
<div className="kj-reset kj-font light">
  <App />
</div>
```

### How theme switching works

Each theme class overrides the semantic tokens:

```css
/* Light */
.light { --bg-primary: #f6f3f2; --text-primary: var(--color-black); }

/* Dark */
.neutral-dark { --bg-primary: var(--color-black); --text-primary: var(--color-white); }

/* Leaf */
.leaf { --bg-primary: #e2f2e8; --primary-1: rgb(15, 164, 102); }
```

All components automatically adapt because they reference semantic tokens, not hardcoded values.

---

## Color Usage

### Semantic color tokens (always use these)

| Token | Purpose |
|-------|---------|
| `--bg-primary` | Page background |
| `--bg-secondary` | Card/panel background |
| `--bg-tertiary` | Subtle background (code blocks, hover fill) |
| `--bg-alternative` | Alternative surface |
| `--bg-hover` | Hover state background |
| `--text-primary` | Main body text |
| `--text-secondary` | Subdued text (descriptions, labels) |
| `--text-tertiary` | Placeholder, disabled text |
| `--border-primary` | Default borders |
| `--border-hover` | Border on hover/focus |
| `--primary-1` | Brand primary (purple / green) |
| `--primary-2` | Brand secondary (magenta / teal) |
| `--primary-3` | Brand tertiary (deep blue / forest) |

### Status colors

| Status | Background | Text | Border |
|--------|-----------|------|--------|
| Success | `--status-success-bg` | `--status-success-text` | `--status-success-border` |
| Warning | `--status-warning-bg` | `--status-warning-text` | `--status-warning-border` |
| Error | `--status-error-bg` | `--status-error-text` | `--status-error-border` |
| Info | `--status-info-bg` | `--status-info-text` | `--status-info-border` |

### Brand gradient

Used for primary buttons and brand elements:

```css
background: linear-gradient(
  240deg,
  var(--primary-2) 7%,
  var(--primary-1) 50%,
  var(--primary-3)
) var(--x, 0) / 200%;
```

---

## Typography

### Font stack

| Font | Usage |
|------|-------|
| P22 Mackinac Pro | Headlines, branding |
| Libre Baskerville | Serif content |
| Dancing Script | Decorative |

### Scale

| Token | Size | Px |
|-------|------|-----|
| `--font-size-xs` | 0.75rem | 12px |
| `--font-size-sm` | 0.875rem | 14px |
| `--font-size-base` | 1rem | 16px |
| `--font-size-lg` | 1.125rem | 18px |
| `--font-size-xl` | 1.25rem | 20px |
| `--font-size-2xl` | 1.5rem | 24px |
| `--font-size-3xl` | 1.875rem | 30px |
| `--font-size-4xl` | 2.25rem | 36px |

### Component classes

```html
<h1 class="ds-heading-1">Page Title</h1>
<h2 class="ds-heading-2">Section</h2>
<p class="ds-text-body">Body text</p>
<p class="ds-text-small">Caption</p>
```

---

## Spacing & Layout

Uses a consistent spacing scale from `--spacing-0` to `--spacing-96`.

Common values:

| Token | Value | Use case |
|-------|-------|----------|
| `--spacing-1` | 4px | Inline gaps |
| `--spacing-2` | 8px | Small padding |
| `--spacing-4` | 16px | Default padding |
| `--spacing-6` | 24px | Section spacing |
| `--spacing-8` | 32px | Large spacing |
| `--spacing-12` | 48px | Page sections |

### Border radius

| Token | Value |
|-------|-------|
| `--border-radius-sm` | 2px |
| `--border-radius-default` | 4px |
| `--border-radius-md` | 6px |
| `--border-radius-lg` | 8px |
| `--border-radius-xl` | 12px |
| `--border-radius-full` | 9999px |

---

## Component Patterns

### Buttons

4 variants, 5 sizes:

```html
<button class="button button-primary">Primary</button>
<button class="button button-secondary">Secondary</button>
<button class="button button-outline">Outline</button>
<button class="button button-bright">Bright</button>

<!-- Sizes -->
<button class="button button-primary button-xs">XS</button>
<button class="button button-primary button-sm">SM</button>
<button class="button button-primary button-lg">LG</button>
<button class="button button-primary button-xl">XL</button>
```

### Form inputs

```html
<input class="ds-input" placeholder="Default" />
<input class="ds-input ds-input-error" placeholder="Error state" />
<textarea class="ds-input"></textarea>
<select class="ds-input">...</select>
```

### Cards

```html
<div class="ds-card">Default card</div>
<div class="ds-card-interactive">Hoverable card</div>
<div class="ds-card-secondary">Secondary card</div>
<div class="ds-card-transparent">Transparent card</div>
```

### Alerts

```html
<div class="ds-alert-success">Success message</div>
<div class="ds-alert-warning">Warning message</div>
<div class="ds-alert-error">Error message</div>
<div class="ds-alert-info">Info message</div>
```

### Checkboxes & Toggles

```html
<!-- Standard -->
<input type="checkbox" class="ds-checkbox" />

<!-- Custom gradient -->
<input type="checkbox" class="ds-checkbox-gradient" />

<!-- Toggle switch -->
<label class="ds-toggle-label">
  <div class="ds-toggle">
    <input type="checkbox" class="ds-toggle-input" />
    <div class="ds-toggle-switch"></div>
  </div>
  Label
</label>
```

### Radix UI components

Button Groups and Popovers use Radix UI primitives with design system classes:

```tsx
<ToggleGroup.Root className="ds-button-group" type="single">
  <ToggleGroup.Item className="ds-button-group-item" value="a">A</ToggleGroup.Item>
  <ToggleGroup.Item className="ds-button-group-item" value="b">B</ToggleGroup.Item>
</ToggleGroup.Root>
```

---

## Icons

**Lucide React** is the sole icon library. Do not introduce others.

```tsx
import { AlertCircle, Check, ChevronDown, Menu, X } from "lucide-react";

<AlertCircle className="h-4 w-4" />
```

---

## Responsive Design

Mobile-first with Tailwind breakpoints:

| Breakpoint | Min width |
|------------|-----------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

```tsx
<div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-8">
<div className="hidden lg:flex">
```

---

## Animation

### Motion library (complex animations)

```tsx
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
/>
```

### CSS transitions (simple state changes)

Use CSS transitions for hover, focus, and simple state changes. Reserve Motion for entrance/exit animations and layout transitions.

### Effect components

| Component | Effect |
|-----------|--------|
| `BorderBeam` | Traveling gradient light along borders |
| `ShineBorder` | Shimmer animation |

---

## Developer Rules

These rules are mandatory for all contributors working on the KJ Frontend.

### Rule 1: Use existing colors — never invent new ones

The design system has a complete color palette defined in `primitive-tokens.css` (9 color scales, 10 shades each) and mapped through `semantic-tokens.css`. **Use what exists.**

```tsx
// WRONG — arbitrary color that doesn't exist in the system
<div className="bg-[#f0e6ff]">
<div style={{ color: '#7c3aed' }}>

// WRONG — hardcoded hex that happens to match a token
<div className="bg-[#f6f3f2]">

// CORRECT — semantic token
<div className="bg-[var(--bg-primary)]">

// CORRECT — Tailwind semantic class
<div className="bg-background text-foreground">
```

**Before reaching for a color:**
1. Check `semantic-tokens.css` — is there a token for your use case?
2. Check `primitive-tokens.css` — does the exact color already exist in a scale?
3. If neither has what you need, **propose adding a new semantic token** in a PR — don't inline a random hex

This ensures every color in the app is traceable back to the design system and adapts correctly across all 3 themes.

### Rule 2: Follow the token hierarchy

**Never skip layers.** Always consume from the highest applicable tier.

```tsx
// WRONG — uses primitive token, skips semantic layer (breaks in dark/leaf)
<div style={{ background: 'var(--color-gray-50)' }}>

// WRONG — hardcoded values bypass the entire system
<div className="bg-white text-black border-gray-200">

// CORRECT — semantic tokens adapt per theme
<div className="bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border-primary)]">
```

If you need a color that doesn't exist as a semantic token, propose a new token — don't reach for a primitive.

### Rule 3: Search before you build

Before creating any component, search the codebase for existing implementations:

1. **Check `/src/components/ui/`** for design system primitives
2. **Check `/src/components/commons/`** for shared components
3. **Check the design system app** (`kj-design-system/`) for documented patterns
4. **Grep the codebase** for similar functionality

If a similar component exists, extend it — don't create a parallel version.

### Rule 4: Don't Repeat Yourself (DRY)

- Extract repeated UI patterns into shared components in `commons/`
- Extract repeated styling into the design system's `component-tokens.css`
- Reuse existing utility functions from `/src/lib/utils.ts`
- If you copy-paste a block of JSX/CSS more than twice, it needs to be a component or a token

### Rule 5: Accessibility is non-negotiable

- Use **Radix UI primitives** for all interactive elements (dialogs, popovers, toggles, select menus)
- Never build custom interactive widgets from raw `<div>` elements
- All interactive elements must be keyboard navigable
- Provide proper ARIA attributes where Radix doesn't handle them automatically
- Test with keyboard-only navigation before submitting

### Rule 6: One icon library — Lucide React

Do not introduce additional icon libraries. If Lucide doesn't have the icon you need:

1. Check the [Lucide icon set](https://lucide.dev/icons/) — it has 1500+ icons
2. If truly missing, create a custom SVG component in `components/ui/`
3. Never install `react-icons`, `heroicons`, `font-awesome`, or similar

### Rule 7: Test across all 3 themes

Every UI change must be verified in **Light**, **Dark**, and **Leaf** themes. Common mistakes:

- Hardcoded white backgrounds invisible in light theme
- Text unreadable against dark backgrounds
- Brand gradients clashing with leaf green

### Rule 8: Mobile-first responsive

Build for mobile first, then enhance for larger screens:

```tsx
// CORRECT — mobile-first
<div className="p-4 md:p-6 lg:p-8">
<div className="flex flex-col md:flex-row">

// WRONG — desktop-first (breaks on mobile)
<div className="p-8 sm:p-4">
```

### Rule 9: Use `cn()` for conditional classes

Never concatenate class strings manually. Use the `cn()` utility:

```tsx
// WRONG
<div className={`button ${isActive ? 'button-primary' : 'button-outline'} ${disabled ? 'opacity-50' : ''}`}>

// CORRECT
<div className={cn(
  "button",
  isActive ? "button-primary" : "button-outline",
  disabled && "opacity-50 cursor-not-allowed"
)}>
```

### Rule 10: Component placement

| Where | What goes there |
|-------|----------------|
| `components/ui/` | Reusable primitives (buttons, inputs, tooltips) |
| `components/commons/` | Shared composite components (alert, loading, dropdown) |
| `components/layouts/` | Page-level structure |
| `components/[feature]/` | Feature-specific components (conversations, playbooks) |

If your component is used by **2+ features**, it belongs in `commons/`. If it's a styled primitive, it belongs in `ui/`.

### Rule 11: Extend the design system, don't bypass it

When you need a pattern that doesn't exist:

1. Add the token to `primitive-tokens.css` (if it's a new raw value)
2. Map it in `semantic-tokens.css` (if it needs theme awareness)
3. Create the component class in `component-tokens.css`
4. Add a showcase in the design system app
5. Document it in this file

This keeps the design system as the single source of truth and prevents style drift.

---

## Key Files

### Design system app (`kj-design-system/`)

| File | Purpose |
|------|---------|
| `src/styles/primitive-tokens.css` | Raw values: colors, spacing, type |
| `src/styles/semantic-tokens.css` | Theme-aware mappings |
| `src/styles/component-tokens.css` | Component classes |
| `src/styles/index.css` | Entry point |
| `src/showcases/*.tsx` | Interactive component showcase |
| `src/components/Sidebar.tsx` | Sidebar navigation with theme switcher |

### Frontend app (`kj/apps/frontend/`)

| File | Purpose |
|------|---------|
| `src/styles/globals.css` | Global styles |
| `src/styles/theme-light.css` | Light theme overrides |
| `src/styles/theme-dark.css` | Dark theme overrides |
| `src/styles/theme-leaf.css` | Leaf theme overrides |
| `src/lib/utils.ts` | `cn()` utility |
| `tailwind.config.js` | Tailwind configuration |
| `components.json` | shadcn/ui configuration |

---

## Quick Reference Card

| Need | Use |
|------|-----|
| Color | `var(--bg-primary)`, `var(--text-secondary)` |
| Button | `.button .button-primary` |
| Card | `.ds-card` or `.ds-card-interactive` |
| Icon | `import { IconName } from "lucide-react"` |
| Conditional CSS | `cn("base", condition && "modifier")` |
| New token | primitive → semantic → component → showcase → docs |
