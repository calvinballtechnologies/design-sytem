# KJ Design System

A comprehensive CSS-based design system built from the existing KJ platform styles, providing consistent design tokens and component patterns.

## Structure

```
src/styles/design-system/
├── index.css              # Main entry point, imports all tokens
├── primitive-tokens.css   # Base tokens (colors, spacing, typography)
├── semantic-tokens.css    # Theme-aware semantic tokens
├── component-tokens.css   # Component-specific styles
└── README.md             # This documentation
```

## Dependencies

The design system leverages Radix UI for advanced interactive components:
- `@radix-ui/react-toggle-group` - For button groups with single/multiple selection
- `@radix-ui/react-popover` - For popovers, dropdowns, and overlays
- `@radix-ui/react-icons` - For consistent iconography

These provide accessible, unstyled primitives that we enhance with our design tokens for a consistent, themed experience.

## Usage

### Import in your component/page:
```javascript
import '../styles/design-system/index.css';
```

### Apply theme class to container:
```html
<div className="neutral-dark ds-reset ds-font">
  <!-- Your content -->
</div>
```

### Use design system classes:
```html
<!-- Primary gradient button like in sign-in -->
<button className="ds-button ds-button-primary justify-center w-full">
  Sign In
</button>

<!-- Secondary OAuth buttons with borders -->
<button className="ds-button ds-button-secondary w-full border border-indigo-600 rounded py-2 text-sm">
  Continue with Google
</button>

<!-- White SSO button -->
<button className="ds-button ds-button-secondary ds-button-white w-full">
  Continue using SSO
</button>

<!-- Checkboxes -->
<label className="ds-checkbox-label">
  <input type="checkbox" className="ds-checkbox" defaultChecked />
  Traditional checkbox
</label>

<label className="ds-checkbox-label">
  <input type="checkbox" className="ds-checkbox-custom" />
  Custom checkbox with gradient
</label>

<label className="ds-checkbox-label">
  <input type="checkbox" className="ds-checkbox-gradient" />
  Alternative gradient checkbox
</label>

<!-- Toggle switches like in scheduler -->
<label className="ds-toggle-label">
  <div className="ds-toggle">
    <input type="checkbox" className="ds-toggle-input" defaultChecked />
    <div className="ds-toggle-switch"></div>
  </div>
  Add to highlight
</label>

<!-- Button Groups with Radix UI -->
<ToggleGroup.Root className="ds-button-group" type="single" defaultValue="center">
  <ToggleGroup.Item className="ds-button-group-item" value="left">Left</ToggleGroup.Item>
  <ToggleGroup.Item className="ds-button-group-item" value="center">Center</ToggleGroup.Item>
  <ToggleGroup.Item className="ds-button-group-item" value="right">Right</ToggleGroup.Item>
</ToggleGroup.Root>

<!-- Popovers with Radix UI -->
<Popover.Root>
  <Popover.Trigger className="ds-popover-trigger">
    Open Menu
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content className="ds-popover-content">
      <div className="ds-popover-title">Title</div>
      <div className="ds-popover-description">Description text</div>
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>

<div className="ds-card">Card content</div>
<h1 className="ds-heading-1">Page Title</h1>
```

### Use CSS custom properties directly:
```css
.custom-component {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
}
```

## Themes

The design system supports three themes that match your existing system:
- **Light Theme** (default): Clean light interface
- **Dark Theme** (.neutral-dark): Dark mode with high contrast
- **Leaf Theme** (.leaf): Green-tinted nature theme

## Token Categories

### Primitive Tokens
- **Colors**: Complete color scales (gray, slate, red, orange, etc.)
- **Typography**: Font sizes, weights, line heights, letter spacing
- **Spacing**: Consistent spacing scale from 0 to 96
- **Borders**: Border widths and radius values
- **Shadows**: Box shadow variations
- **Transitions**: Consistent animation timings

### Semantic Tokens
- **Background Colors**: --bg-primary, --bg-secondary, etc.
- **Text Colors**: --text-primary, --text-secondary, etc.
- **Border Colors**: --border-primary, --border-secondary, etc.
- **Button Colors**: --button-white-bg, --button-white-color, etc.
- **Status Colors**: Success, warning, error, info variants

### Component Classes
- **Buttons**: .ds-button-primary, .ds-button-secondary, etc.
- **Inputs**: .ds-input, .ds-input-error, etc.
- **Cards**: .ds-card, .ds-card-interactive, etc.
- **Typography**: .ds-heading-1, .ds-text-body, etc.
- **Alerts**: .ds-alert-success, .ds-alert-error, etc.
- **Checkboxes**: .ds-checkbox, .ds-checkbox-custom, .ds-checkbox-gradient with size variants
- **Toggle Switches**: .ds-toggle, .ds-toggle-input, .ds-toggle-switch with size variants
- **Button Groups**: .ds-button-group, .ds-button-group-item with Radix UI integration
- **Popovers**: .ds-popover-content, .ds-popover-trigger, .ds-popover-title with Radix UI integration
- **Utilities**: Spacing, border radius, layout helpers

## Showcase Page

Visit `/design-system` to see all tokens and components in action with live theme switching.

## Migration from Existing Styles

The design system maintains compatibility with your existing theme system:
- CSS custom properties map to your current theme variables
- Existing `.button`, `.input-form`, and other classes remain unchanged
- New `.ds-` prefixed classes provide enhanced alternatives
- Gradual migration path - use new classes for new components

## Best Practices

1. **Use semantic tokens** for colors rather than primitive colors
2. **Prefix all design system classes** with `ds-` to avoid conflicts
3. **Apply theme classes** to high-level containers
4. **Use spacing tokens** consistently for margins and padding
5. **Follow component patterns** for consistent user experience

## Development

To modify the design system:
1. Update primitive tokens for foundational changes
2. Adjust semantic tokens for theme-specific values
3. Extend component tokens for new component patterns
4. Test changes in the showcase page