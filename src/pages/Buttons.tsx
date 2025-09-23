export default function Buttons() {
  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Buttons
        </h1>
        <p className="text-body">
          Various button styles and sizes for different use cases in your application.
        </p>
      </header>

      {/* Button Variants */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Button Variants
        </h2>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Primary Button
          </h3>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-3)' }}>
            <button className="button button-primary">
              Primary Button
            </button>
            <button className="button button-primary" disabled>
              Disabled
            </button>
          </div>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .button .button-primary
          </code>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Secondary Button
          </h3>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-3)' }}>
            <button className="button button-secondary">
              Secondary Button
            </button>
            <button className="button button-secondary" disabled>
              Disabled
            </button>
          </div>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .button .button-secondary
          </code>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Outline Button
          </h3>
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-3)',
            marginBottom: 'var(--spacing-3)',
            padding: 'var(--spacing-4)',
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--border-radius-default)'
          }}>
            <button className="button button-outline">
              Outline Button
            </button>
            <button className="button button-outline" disabled>
              Disabled
            </button>
          </div>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .button .button-outline
          </code>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Bright Button
          </h3>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-3)' }}>
            <button className="button button-bright">
              Bright Button
            </button>
            <button className="button button-bright" disabled>
              Disabled
            </button>
          </div>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .button .button-bright
          </code>
        </div>
      </section>

      {/* Button Sizes */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Button Sizes
        </h2>
        <div className="card">
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-3)',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <button className="button button-primary button-xs">
              Extra Small
            </button>
            <button className="button button-primary button-sm">
              Small
            </button>
            <button className="button button-primary">
              Default
            </button>
            <button className="button button-primary button-lg">
              Large
            </button>
            <button className="button button-primary button-xl">
              Extra Large
            </button>
          </div>
          <div style={{ marginTop: 'var(--spacing-4)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              .button-xs | .button-sm | default | .button-lg | .button-xl
            </code>
          </div>
        </div>
      </section>

      {/* Button States */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Button States
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          <div className="card">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              Normal State
            </h3>
            <button className="button button-primary">
              Click Me
            </button>
          </div>
          <div className="card">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              Hover State
            </h3>
            <button
              className="button button-primary"
              style={{ '--x': '100%' } as React.CSSProperties}
            >
              Hovered
            </button>
          </div>
          <div className="card">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              Focus State
            </h3>
            <button
              className="button button-primary"
              style={{
                outline: '2px solid var(--primary-1)',
                outlineOffset: '2px'
              }}
            >
              Focused
            </button>
          </div>
          <div className="card">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              Disabled State
            </h3>
            <button className="button button-primary" disabled>
              Disabled
            </button>
          </div>
        </div>
      </section>

      {/* Full Width Button */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Full Width Button
        </h2>
        <div className="card">
          <button className="button button-primary button-full-width">
            Full Width Button
          </button>
          <div style={{ marginTop: 'var(--spacing-3)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              .button-full-width
            </code>
          </div>
        </div>
      </section>

      {/* Button with Icons */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Buttons with Icons
        </h2>
        <div className="card">
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-3)',
            flexWrap: 'wrap',
            marginBottom: 'var(--spacing-4)'
          }}>
            <button className="button button-primary">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
              Add Item
            </button>
            <button className="button button-secondary">
              Edit
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1464 1.14645L3.71429 8.57857C3.62234 8.67053 3.55785 8.78604 3.52827 8.91221L2.85339 11.6122C2.7818 11.9002 2.9002 12.2182 3.18778 12.2898L5.88778 11.6148C6.01395 11.5853 6.12946 11.5208 6.22143 11.4288L13.6536 3.99669C13.8488 3.80143 13.8488 3.48485 13.6536 3.28959L11.8536 1.14645ZM4.42143 9.28571L11.5 2.20711L12.7929 3.5L5.71429 10.5786L4.42143 9.28571Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
            <button className="button button-secondary">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4H3.5C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
              Delete
            </button>
          </div>
          <p className="text-small">
            Buttons can include icons using any icon library. The button component automatically handles spacing between icons and text.
          </p>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Code Examples
        </h2>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Basic Usage
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<button className="button button-primary">
  Click Me
</button>

<button className="button button-secondary">
  Secondary
</button>

<button className="button button-outline">
  Outline
</button>`}</code>
          </pre>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Different Sizes
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<button className="button button-primary button-xs">Extra Small</button>
<button className="button button-primary button-sm">Small</button>
<button className="button button-primary">Default</button>
<button className="button button-primary button-lg">Large</button>
<button className="button button-primary button-xl">Extra Large</button>`}</code>
          </pre>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            With Icons (using any icon library)
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<button className="button button-primary">
  <IconPlus />
  Add Item
</button>

<button className="button button-secondary">
  Edit
  <IconEdit />
</button>`}</code>
          </pre>
        </div>

        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            States
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<!-- Disabled state -->
<button className="button button-primary" disabled>
  Disabled
</button>

<!-- Full width -->
<button className="button button-primary button-full-width">
  Full Width Button
</button>`}</code>
          </pre>
        </div>
      </section>
    </>
  );
}