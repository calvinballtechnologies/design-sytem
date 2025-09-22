import { useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as Popover from '@radix-ui/react-popover';
import { ChevronDownIcon, Cross2Icon } from '@radix-ui/react-icons';
import './styles/index.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const themes = [
    { id: 'light', name: 'Light Theme', className: 'light' },
    { id: 'dark', name: 'Dark Theme', className: 'neutral-dark' },
    { id: 'leaf', name: 'Leaf Theme', className: 'leaf' }
  ];

  const colorScales = [
    'gray', 'slate', 'red', 'orange', 'yellow', 'green',
    'blue', 'indigo', 'purple'
  ];

  const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const fontSizes = [
    { name: 'xs', token: 'var(--font-size-xs)', size: '12px' },
    { name: 'sm', token: 'var(--font-size-sm)', size: '14px' },
    { name: 'base', token: 'var(--font-size-base)', size: '16px' },
    { name: 'lg', token: 'var(--font-size-lg)', size: '18px' },
    { name: 'xl', token: 'var(--font-size-xl)', size: '20px' },
    { name: '2xl', token: 'var(--font-size-2xl)', size: '24px' },
    { name: '3xl', token: 'var(--font-size-3xl)', size: '30px' },
    { name: '4xl', token: 'var(--font-size-4xl)', size: '36px' },
  ];

  const spacingValues = [
    { name: '0', token: 'var(--spacing-0)', size: '0px' },
    { name: '1', token: 'var(--spacing-1)', size: '4px' },
    { name: '2', token: 'var(--spacing-2)', size: '8px' },
    { name: '3', token: 'var(--spacing-3)', size: '12px' },
    { name: '4', token: 'var(--spacing-4)', size: '16px' },
    { name: '5', token: 'var(--spacing-5)', size: '20px' },
    { name: '6', token: 'var(--spacing-6)', size: '24px' },
    { name: '8', token: 'var(--spacing-8)', size: '32px' },
    { name: '10', token: 'var(--spacing-10)', size: '40px' },
    { name: '12', token: 'var(--spacing-12)', size: '48px' },
  ];

  const borderRadiusValues = [
    { name: 'none', token: 'var(--border-radius-none)' },
    { name: 'sm', token: 'var(--border-radius-sm)' },
    { name: 'default', token: 'var(--border-radius-default)' },
    { name: 'md', token: 'var(--border-radius-md)' },
    { name: 'lg', token: 'var(--border-radius-lg)' },
    { name: 'xl', token: 'var(--border-radius-xl)' },
    { name: '2xl', token: 'var(--border-radius-2xl)' },
    { name: 'full', token: 'var(--border-radius-full)' },
  ];

  return (
    <div className={`kj-reset kj-font ${themes.find(t => t.id === currentTheme)?.className}`}
         style={{ background: 'var(--bg-primary)', minHeight: '100vh', padding: 'var(--spacing-6)' }}>
      <div className="container-xl" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ marginBottom: 'var(--spacing-8)' }}>
          <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
            KJ Design System
          </h1>
          <p className="text-body" style={{ marginBottom: 'var(--spacing-6)' }}>
            A comprehensive design system with primitive and semantic tokens for consistent UI development.
          </p>

          {/* Theme Switcher */}
          <div style={{ display: 'flex', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-6)' }}>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setCurrentTheme(theme.id)}
                className={`button ${currentTheme === theme.id ? 'button-primary' : 'button-secondary'}`}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </header>

        {/* Color Palette */}
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>Color Palette</h2>

          {/* Semantic Colors */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Semantic Colors</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-4)' }}>
              {[
                { name: 'Background Primary', token: 'var(--bg-primary)' },
                { name: 'Background Secondary', token: 'var(--bg-secondary)' },
                { name: 'Background Alternative', token: 'var(--bg-alternative)' },
                { name: 'Background Hover', token: 'var(--bg-hover)' },
                { name: 'Text Primary', token: 'var(--text-primary)' },
                { name: 'Text Secondary', token: 'var(--text-secondary)' },
                { name: 'Primary Brand', token: 'var(--primary-1)' },
                { name: 'Border Primary', token: 'var(--border-primary)' },
                { name: 'Border Alternative', token: 'var(--bg-alternative-border)' },
              ].map((color) => (
                <div key={color.name} className="card" style={{ padding: 'var(--spacing-3)' }}>
                  <div
                    style={{
                      backgroundColor: color.token,
                      height: '60px',
                      borderRadius: 'var(--border-radius-default)',
                      marginBottom: 'var(--spacing-2)',
                      border: '1px solid var(--border-primary)'
                    }}
                  ></div>
                  <div className="text-small" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                    {color.name}
                  </div>
                  <div className="text-caption">{color.token}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Color Demonstration */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Interactive Color Tokens</h3>
            <div className="card" style={{ padding: 'var(--spacing-4)' }}>
              <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Hover and State Demonstration</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-4)' }}>

                {/* Background Alternative Demo */}
                <div>
                  <div className="text-small" style={{ marginBottom: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>
                    --bg-alternative (hover me)
                  </div>
                  <div
                    style={{
                      padding: 'var(--spacing-3)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-primary)',
                      borderRadius: 'var(--border-radius-default)',
                      transition: 'var(--transition-all)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'var(--bg-alternative)'}
                    onMouseLeave={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  >
                    Hover to see alternative background
                  </div>
                </div>

                {/* Border Alternative Demo */}
                <div>
                  <div className="text-small" style={{ marginBottom: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>
                    --bg-alternative-border (hover me)
                  </div>
                  <div
                    style={{
                      padding: 'var(--spacing-3)',
                      background: 'var(--bg-secondary)',
                      border: '2px solid var(--border-primary)',
                      borderRadius: 'var(--border-radius-default)',
                      transition: 'var(--transition-all)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.borderColor = 'var(--bg-alternative-border)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'var(--border-primary)'}
                  >
                    Hover to see alternative border
                  </div>
                </div>

                {/* Background Hover Demo */}
                <div>
                  <div className="text-small" style={{ marginBottom: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>
                    --bg-hover (hover me)
                  </div>
                  <div
                    style={{
                      padding: 'var(--spacing-3)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-primary)',
                      borderRadius: 'var(--border-radius-default)',
                      transition: 'var(--transition-all)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'var(--bg-hover)'}
                    onMouseLeave={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  >
                    Hover to see hover background
                  </div>
                </div>

                {/* Combined Demo */}
                <div>
                  <div className="text-small" style={{ marginBottom: 'var(--spacing-2)', fontWeight: 'var(--font-weight-semibold)' }}>
                    Combined tokens (hover me)
                  </div>
                  <div
                    style={{
                      padding: 'var(--spacing-3)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-primary)',
                      borderRadius: 'var(--border-radius-default)',
                      transition: 'var(--transition-all)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--bg-alternative)';
                      e.target.style.borderColor = 'var(--bg-alternative-border)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'var(--bg-secondary)';
                      e.target.style.borderColor = 'var(--border-primary)';
                    }}
                  >
                    Real component behavior
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 'var(--spacing-4)', padding: 'var(--spacing-3)', background: 'var(--bg-alternative)', borderRadius: 'var(--border-radius-sm)' }}>
                <div className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  💡 <strong>Pro tip:</strong> These tokens automatically adapt to all themes (light, dark, leaf) ensuring consistent hover and interactive states across your entire application.
                </div>
              </div>
            </div>
          </div>

          {/* Primitive Colors */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Primitive Color Scales</h3>
            {colorScales.map((scale) => (
              <div key={scale} style={{ marginBottom: 'var(--spacing-6)' }}>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)', textTransform: 'capitalize' }}>
                  {scale}
                </h4>
                <div style={{ display: 'flex', gap: 'var(--spacing-1)', flexWrap: 'wrap' }}>
                  {colorShades.map((shade) => (
                    <div key={shade} style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          backgroundColor: `var(--color-${scale}-${shade})`,
                          width: '60px',
                          height: '60px',
                          borderRadius: 'var(--border-radius-default)',
                          marginBottom: 'var(--spacing-1)',
                          border: '1px solid var(--border-primary)'
                        }}
                      ></div>
                      <div className="text-caption">{shade}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>Typography</h2>

          {/* Font Sizes */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Font Sizes</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              {fontSizes.map((fontSize) => (
                <div key={fontSize.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                  <div style={{ minWidth: '100px' }}>
                    <span className="text-small" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                      {fontSize.name}
                    </span>
                    <div className="text-caption">{fontSize.size}</div>
                  </div>
                  <div style={{ fontSize: fontSize.token, color: 'var(--text-primary)' }}>
                    The quick brown fox jumps over the lazy dog
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Styles */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Text Styles</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              <h1 className="heading-1">Heading 1 - Main page titles</h1>
              <h2 className="heading-2">Heading 2 - Section titles</h2>
              <h3 className="heading-3">Heading 3 - Subsection titles</h3>
              <h4 className="heading-4">Heading 4 - Component titles</h4>
              <h5 className="heading-5">Heading 5 - Small headings</h5>
              <p className="text-body">Body text - Main content text with good readability and comfortable line spacing.</p>
              <p className="text-small">Small text - Secondary information and captions.</p>
              <p className="text-caption">Caption text - Fine print and metadata.</p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>Spacing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-4)' }}>
            {spacingValues.map((spacing) => (
              <div key={spacing.name} className="card" style={{ padding: 'var(--spacing-3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-2)' }}>
                  <div
                    style={{
                      backgroundColor: 'var(--primary-1)',
                      width: spacing.token,
                      height: spacing.token,
                      minWidth: '8px',
                      minHeight: '8px',
                      borderRadius: 'var(--border-radius-sm)'
                    }}
                  ></div>
                  <span className="text-small" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                    spacing-{spacing.name}
                  </span>
                </div>
                <div className="text-caption">{spacing.size}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>Border Radius</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--spacing-4)' }}>
            {borderRadiusValues.map((radius) => (
              <div key={radius.name} className="card" style={{ padding: 'var(--spacing-3)', textAlign: 'center' }}>
                <div
                  style={{
                    backgroundColor: 'var(--primary-1)',
                    width: '60px',
                    height: '60px',
                    borderRadius: radius.token,
                    margin: '0 auto var(--spacing-2)',
                  }}
                ></div>
                <div className="text-small" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                  {radius.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>Components</h2>

          {/* Buttons */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Buttons</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-4)' }}>
              <button className="button button-primary">Primary Button</button>
              <button className="button button-secondary">Secondary Button</button>
              <button className="button button-outline">Outline Button</button>
              <button className="button button-bright">Bright Button</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-3)', alignItems: 'center' }}>
              <button className="button button-primary button-xs">Extra Small</button>
              <button className="button button-primary button-sm">Small</button>
              <button className="button button-primary">Default</button>
              <button className="button button-primary button-lg">Large</button>
              <button className="button button-primary button-xl">Extra Large</button>
            </div>
          </div>

          {/* Inputs */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Inputs</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', maxWidth: '400px' }}>
              <input className="input" placeholder="Default input" />
              <input className="input input-sm" placeholder="Small input" />
              <input className="input input-lg" placeholder="Large input" />
              <input className="input input-error" placeholder="Error state" />
              <input className="input input-success" placeholder="Success state" />
            </div>
          </div>

          {/* Cards */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Cards</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-4)' }}>
              <div className="card">
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-2)' }}>Default Card</h4>
                <p className="text-small">This is a default card component with hover effects.</p>
              </div>
              <div className="card card-interactive">
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-2)' }}>Interactive Card</h4>
                <p className="text-small">This card has interactive hover animations.</p>
              </div>
              <div className="card card-no-bg">
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-2)' }}>No Background Card</h4>
                <p className="text-small">This card has no background, just borders.</p>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Alerts</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <div className="alert alert-success">
                <strong>Success!</strong> Your changes have been saved successfully.
              </div>
              <div className="alert alert-warning">
                <strong>Warning!</strong> Please review your input before proceeding.
              </div>
              <div className="alert alert-error">
                <strong>Error!</strong> There was a problem processing your request.
              </div>
              <div className="alert alert-info">
                <strong>Info:</strong> This is some helpful information for you.
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Checkboxes</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>

              {/* Traditional Checkboxes */}
              <div>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Traditional Checkboxes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox" defaultChecked />
                    Default checkbox (checked)
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox" />
                    Default checkbox (unchecked)
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox checkbox-sm" defaultChecked />
                    Small checkbox
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox checkbox-lg" defaultChecked />
                    Large checkbox
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox" disabled defaultChecked />
                    Disabled checkbox (checked)
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox" disabled />
                    Disabled checkbox (unchecked)
                  </label>
                </div>
              </div>

              {/* Custom Styled Checkboxes */}
              <div>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Custom Styled Checkboxes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-custom" defaultChecked />
                    Custom checkbox with gradient (checked)
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-custom" />
                    Custom checkbox with gradient (unchecked)
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-gradient" defaultChecked />
                    Gradient checkbox alternative (checked)
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-gradient" />
                    Gradient checkbox alternative (unchecked)
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-custom" disabled defaultChecked />
                    Disabled custom checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Switches */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Toggle Switches</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>

              {/* Default Toggle Switches */}
              <div>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Default Toggle Switches</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  <label className="toggle-label">
                    <div className="toggle">
                      <input type="checkbox" className="toggle-input" defaultChecked />
                      <div className="toggle-switch"></div>
                    </div>
                    Toggle switch (on)
                  </label>
                  <label className="toggle-label">
                    <div className="toggle">
                      <input type="checkbox" className="toggle-input" />
                      <div className="toggle-switch"></div>
                    </div>
                    Toggle switch (off)
                  </label>
                  <label className="toggle-label">
                    <div className="toggle">
                      <input type="checkbox" className="toggle-input" disabled defaultChecked />
                      <div className="toggle-switch"></div>
                    </div>
                    Disabled toggle (on)
                  </label>
                  <label className="toggle-label">
                    <div className="toggle">
                      <input type="checkbox" className="toggle-input" disabled />
                      <div className="toggle-switch"></div>
                    </div>
                    Disabled toggle (off)
                  </label>
                </div>
              </div>

              {/* Toggle Switch Sizes */}
              <div>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Toggle Switch Sizes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                  <label className="toggle-label">
                    <div className="toggle toggle-sm">
                      <input type="checkbox" className="toggle-input" defaultChecked />
                      <div className="toggle-switch"></div>
                    </div>
                    Small toggle switch
                  </label>
                  <label className="toggle-label">
                    <div className="toggle">
                      <input type="checkbox" className="toggle-input" defaultChecked />
                      <div className="toggle-switch"></div>
                    </div>
                    Default toggle switch
                  </label>
                  <label className="toggle-label">
                    <div className="toggle toggle-lg">
                      <input type="checkbox" className="toggle-input" defaultChecked />
                      <div className="toggle-switch"></div>
                    </div>
                    Large toggle switch
                  </label>
                </div>
              </div>

              {/* Real-world Examples */}
              <div>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Real-world Examples</h4>
                <div className="card" style={{ padding: 'var(--spacing-4)' }}>
                  <h5 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Settings Panel</h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                    <label className="toggle-label">
                      <div className="toggle">
                        <input type="checkbox" className="toggle-input" defaultChecked />
                        <div className="toggle-switch"></div>
                      </div>
                      Enable notifications
                    </label>
                    <label className="toggle-label">
                      <div className="toggle">
                        <input type="checkbox" className="toggle-input" />
                        <div className="toggle-switch"></div>
                      </div>
                      Add to highlight
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" className="checkbox-custom" defaultChecked />
                      I agree to the terms and conditions
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" className="checkbox-gradient" />
                      Send me marketing emails
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Components */}
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>Advanced Components</h2>

          {/* Button Groups */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Button Groups</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
              {/* Single Selection Button Group */}
              <div>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Single Selection</h4>
                <ToggleGroup.Root
                  className="button-group"
                  type="single"
                  defaultValue="center"
                  style={{ marginBottom: 'var(--spacing-3)' }}
                >
                  <ToggleGroup.Item className="button-group-item" value="left">
                    Left
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="center">
                    Center
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="right">
                    Right
                  </ToggleGroup.Item>
                </ToggleGroup.Root>

                <ToggleGroup.Root
                  className="button-group button-group-sm"
                  type="single"
                  defaultValue="view"
                  style={{ marginBottom: 'var(--spacing-3)' }}
                >
                  <ToggleGroup.Item className="button-group-item" value="edit">
                    Edit
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="view">
                    View
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="delete">
                    Delete
                  </ToggleGroup.Item>
                </ToggleGroup.Root>

                <ToggleGroup.Root
                  className="button-group button-group-lg"
                  type="single"
                  defaultValue="month"
                >
                  <ToggleGroup.Item className="button-group-item" value="day">
                    Day
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="week">
                    Week
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="month">
                    Month
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="year">
                    Year
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>

              {/* Multiple Selection Button Group */}
              <div>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Multiple Selection</h4>
                <ToggleGroup.Root
                  className="button-group"
                  type="multiple"
                  defaultValue={['bold', 'italic']}
                >
                  <ToggleGroup.Item className="button-group-item" value="bold">
                    Bold
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="italic">
                    Italic
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="underline">
                    Underline
                  </ToggleGroup.Item>
                  <ToggleGroup.Item className="button-group-item" value="strikethrough">
                    Strike
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
            </div>
          </div>

          {/* Popovers */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Popovers</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
              {/* Basic Popover */}
              <div>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Basic Popover</h4>
                <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
                  <Popover.Root>
                    <Popover.Trigger className="popover-trigger">
                      Open Popover
                      <ChevronDownIcon />
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content className="popover-content">
                        <Popover.Arrow className="popover-arrow" />
                        <div className="popover-title">Popover Title</div>
                        <div className="popover-description">
                          This is a popover with some content. It can contain any React components or text.
                        </div>
                        <Popover.Close className="popover-close">
                          <Cross2Icon />
                        </Popover.Close>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>

                  <Popover.Root>
                    <Popover.Trigger className="popover-trigger">
                      Settings
                      <ChevronDownIcon />
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content className="popover-content">
                        <Popover.Arrow className="popover-arrow" />
                        <div className="popover-title">Quick Settings</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                          <label className="toggle-label">
                            <div className="toggle toggle-sm">
                              <input type="checkbox" className="toggle-input" />
                              <div className="toggle-switch"></div>
                            </div>
                            Enable notifications
                          </label>
                          <label className="toggle-label">
                            <div className="toggle toggle-sm">
                              <input type="checkbox" className="toggle-input" defaultChecked />
                              <div className="toggle-switch"></div>
                            </div>
                            Auto-save
                          </label>
                          <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-custom" />
                            Remember my choice
                          </label>
                        </div>
                        <Popover.Close className="popover-close">
                          <Cross2Icon />
                        </Popover.Close>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>
              </div>

              {/* Popover with Actions */}
              <div>
                <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-3)' }}>Popover with Actions</h4>
                <Popover.Root>
                  <Popover.Trigger className="popover-trigger">
                    User Menu
                    <ChevronDownIcon />
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content className="popover-content">
                      <Popover.Arrow className="popover-arrow" />
                      <div className="popover-title">User Account</div>
                      <div className="popover-description">
                        john.doe@example.com
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                        <button className="button button-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
                          Profile Settings
                        </button>
                        <button className="button button-secondary" style={{ width: '100%', justifyContent: 'flex-start' }}>
                          Billing
                        </button>
                        <hr style={{ border: 'none', borderTop: '1px solid var(--border-primary)', margin: 'var(--spacing-2) 0' }} />
                        <button className="button button-secondary" style={{ width: '100%', justifyContent: 'flex-start', color: 'var(--status-error-text)' }}>
                          Sign Out
                        </button>
                      </div>
                      <Popover.Close className="popover-close">
                        <Cross2Icon />
                      </Popover.Close>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
            </div>
          </div>
        </section>

        {/* Console Components */}
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>Console Components</h2>

          {/* Console Main Section */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Console Main Section</h3>
            <div className="console-main" style={{ background: 'var(--bg-secondary)' }}>
              <div className="hero-title">
                What do you want to do today?
              </div>

              {/* Shortcut Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-4)', marginBottom: 'var(--spacing-8)' }}>
                <div className="shortcut-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                    <div className="shortcut-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7z"/>
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>One Click Report</h4>
                      <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>Quick insights & reports</p>
                    </div>
                  </div>
                </div>

                <div className="shortcut-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                    <div className="shortcut-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5v14"/>
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>Root Cause Analysis</h4>
                      <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>Experiment & plan</p>
                    </div>
                  </div>
                </div>

                <div className="shortcut-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                    <div className="shortcut-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>Early Warning</h4>
                      <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>Proactive alerts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Console Input Wrapper */}
              <div className="console-input-wrapper" style={{ margin: '0 auto' }}>
                <input
                  type="text"
                  className="input"
                  placeholder="Or you can talk with KJ ..."
                  style={{ width: '100%' }}
                />
              </div>

              {/* Recommendation Chips */}
              <div className="console-recommendations">
                <span className="recommendation-chip">Market Analysis</span>
                <span className="recommendation-chip">Customer Insights</span>
                <span className="recommendation-chip">Performance Metrics</span>
                <span className="recommendation-chip">Competitive Intelligence</span>
              </div>
            </div>
          </div>

          {/* Page Title */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Page Title with Icon</h3>
            <div className="page-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              <span>Active Conversations</span>
            </div>
          </div>

          {/* Container Items */}
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>Container Items (Conversation Cards)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-4)' }}>
              <div className="container-item">
                <div style={{ flex: 1, padding: 'var(--spacing-4)', borderBottom: '1px solid var(--border-primary)' }}>
                  <div style={{ height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--line-height-relaxed)' }}>
                      "Can you analyze last quarter's sales performance and identify key growth areas?"
                    </p>
                  </div>
                </div>
                <div style={{ padding: 'var(--spacing-4)' }}>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--spacing-3)', textTransform: 'capitalize' }}>
                    Q4 Sales Analysis
                  </h4>
                </div>
                <div style={{ padding: 'var(--spacing-4)', paddingTop: 0 }}>
                  <button className="button button-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Open
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16l4-4-4-4M8 12h8"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="container-item">
                <div style={{ flex: 1, padding: 'var(--spacing-4)', borderBottom: '1px solid var(--border-primary)' }}>
                  <div style={{ height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--line-height-relaxed)' }}>
                      "Generate a competitive analysis report for our main product lines"
                    </p>
                  </div>
                </div>
                <div style={{ padding: 'var(--spacing-4)' }}>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--spacing-3)', textTransform: 'capitalize' }}>
                    Competitive Analysis
                  </h4>
                </div>
                <div style={{ padding: 'var(--spacing-4)', paddingTop: 0 }}>
                  <button className="button button-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Open
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16l4-4-4-4M8 12h8"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="container-item" style={{ justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    View More<br />Conversations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section style={{ marginBottom: 'var(--spacing-12)' }}>
          <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>Usage</h2>
          <div className="card" style={{ padding: 'var(--spacing-6)' }}>
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-4)' }}>Getting Started</h3>
            <div className="text-body" style={{ marginBottom: 'var(--spacing-4)' }}>
              To use the design system in your components:
            </div>
            <div style={{ backgroundColor: 'var(--bg-alternative)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-default)', marginBottom: 'var(--spacing-4)' }}>
              <code style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-sm)' }}>
                {`// Import the design system CSS
import '../styles/design-system/index.css';

// Import Radix UI components for advanced components
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as Popover from '@radix-ui/react-popover';

// Button Groups
<ToggleGroup.Root className="button-group" type="single">
  <ToggleGroup.Item className="button-group-item" value="left">
    Left
  </ToggleGroup.Item>
  <ToggleGroup.Item className="button-group-item" value="center">
    Center
  </ToggleGroup.Item>
</ToggleGroup.Root>

// Popovers
<Popover.Root>
  <Popover.Trigger className="popover-trigger">
    Open Menu
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content className="popover-content">
      <div className="popover-title">Menu</div>
      Content here...
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>

// Use CSS custom properties directly
<div style={{ color: 'var(--text-primary)', background: 'var(--bg-secondary)' }}>
  Custom styled element
</div>`}
              </code>
            </div>
            <div className="text-body">
              The design system includes primitive tokens (colors, spacing, typography) and semantic tokens that adapt to different themes.
              All components are prefixed with '' to avoid conflicts with existing styles.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;