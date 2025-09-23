export default function Cards() {
  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Cards & Alerts
        </h1>
        <p className="text-body">
          Container components for content grouping and notifications.
        </p>
      </header>

      {/* Cards */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Cards
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-4)',
          marginBottom: 'var(--spacing-6)'
        }}>
          <div className="card">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-2)' }}>
              Default Card
            </h3>
            <p className="text-body">
              This is a basic card component with padding and subtle shadow.
            </p>
            <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
              .card
            </code>
          </div>

          <div className="card card-interactive">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-2)' }}>
              Interactive Card
            </h3>
            <p className="text-body">
              Hover over this card to see the interactive effects.
            </p>
            <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
              .card .card-interactive
            </code>
          </div>

          <div className="card card-secondary">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-2)' }}>
              Secondary Card
            </h3>
            <p className="text-body">
              A secondary card variant with different styling.
            </p>
            <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
              .card .card-secondary
            </code>
          </div>
        </div>

        <div className="card card-no-bg" style={{ border: '1px solid var(--border-primary)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-2)' }}>
            No Background Card
          </h3>
          <p className="text-body">
            This card has transparent background with a visible border.
          </p>
          <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
            .card .card-no-bg
          </code>
        </div>
      </section>

      {/* Alerts */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Alerts
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div className="alert alert-success">
            <strong>Success!</strong> Your changes have been saved successfully.
          </div>

          <div className="alert alert-info">
            <strong>Info:</strong> New features are available in your dashboard.
          </div>

          <div className="alert alert-warning">
            <strong>Warning:</strong> Your session will expire in 5 minutes.
          </div>

          <div className="alert alert-error">
            <strong>Error:</strong> Unable to connect to the server. Please try again.
          </div>
        </div>

        <div className="card" style={{ marginTop: 'var(--spacing-6)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Alert Classes
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-default)',
            overflow: 'auto'
          }}>
            <code>{`.alert .alert-success
.alert .alert-info
.alert .alert-warning
.alert .alert-error`}</code>
          </pre>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Code Examples
        </h2>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Card Variants
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<!-- Basic card -->
<div className="card">
  <h3 className="heading-4">Card Title</h3>
  <p className="text-body">Card content goes here.</p>
</div>

<!-- Interactive card (hover effects) -->
<div className="card card-interactive">
  <h3 className="heading-4">Interactive Card</h3>
  <p>Hover to see effects</p>
</div>

<!-- Secondary card -->
<div className="card card-secondary">
  <h3 className="heading-4">Secondary Style</h3>
  <p>Different visual style</p>
</div>

<!-- Card with no background -->
<div className="card card-no-bg" style={{ border: '1px solid var(--border-primary)' }}>
  <h3 className="heading-4">Transparent Card</h3>
  <p>No background color</p>
</div>`}</code>
          </pre>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Alert Messages
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<!-- Success alert -->
<div className="alert alert-success">
  <strong>Success!</strong> Operation completed.
</div>

<!-- Info alert -->
<div className="alert alert-info">
  <strong>Info:</strong> New updates available.
</div>

<!-- Warning alert -->
<div className="alert alert-warning">
  <strong>Warning:</strong> Please review your settings.
</div>

<!-- Error alert -->
<div className="alert alert-error">
  <strong>Error:</strong> Something went wrong.
</div>`}</code>
          </pre>
        </div>

        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Card with Rich Content
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<div className="card">
  <img src="image.jpg" alt="Feature" style={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: 'var(--spacing-4)'
  }} />
  <h3 className="heading-3">Feature Title</h3>
  <p className="text-body" style={{ marginBottom: 'var(--spacing-4)' }}>
    Description of the feature or content.
  </p>
  <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
    <button className="button button-primary">Learn More</button>
    <button className="button button-secondary">Dismiss</button>
  </div>
</div>`}</code>
          </pre>
        </div>
      </section>
    </>
  );
}