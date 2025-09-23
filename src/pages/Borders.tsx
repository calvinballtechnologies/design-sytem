export default function Borders() {
  const borderRadiusValues = [
    { name: 'none', token: 'var(--border-radius-none)', value: '0px' },
    { name: 'sm', token: 'var(--border-radius-sm)', value: '2px' },
    { name: 'default', token: 'var(--border-radius-default)', value: '4px' },
    { name: 'md', token: 'var(--border-radius-md)', value: '6px' },
    { name: 'lg', token: 'var(--border-radius-lg)', value: '8px' },
    { name: 'xl', token: 'var(--border-radius-xl)', value: '12px' },
    { name: '2xl', token: 'var(--border-radius-2xl)', value: '16px' },
    { name: '3xl', token: 'var(--border-radius-3xl)', value: '24px' },
    { name: 'full', token: 'var(--border-radius-full)', value: '9999px' },
  ];

  const shadows = [
    { name: 'None', token: '--shadow-none' },
    { name: 'Small', token: '--shadow-sm' },
    { name: 'Default', token: '--shadow-default' },
    { name: 'Medium', token: '--shadow-md' },
    { name: 'Large', token: '--shadow-lg' },
    { name: 'Extra Large', token: '--shadow-xl' },
    { name: '2XL', token: '--shadow-2xl' },
    { name: 'Inner', token: '--shadow-inner' },
  ];

  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Borders & Shadows
        </h1>
        <p className="text-body">
          Border styles, radius values, and shadow effects for depth and definition.
        </p>
      </header>

      {/* Border Radius */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Border Radius
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          {borderRadiusValues.map((radius) => (
            <div key={radius.name} className="card" style={{ textAlign: 'center' }}>
              <div style={{
                width: '100%',
                height: '80px',
                background: 'linear-gradient(240deg, var(--primary-2) 7%, var(--primary-1) 50%, var(--primary-3))',
                borderRadius: radius.token,
                marginBottom: 'var(--spacing-3)'
              }} />
              <div style={{ fontWeight: 'var(--font-weight-medium)' }}>
                {radius.name}
              </div>
              <code style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)'
              }}>
                {radius.value}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Box Shadows
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          {shadows.map((shadow) => (
            <div key={shadow.name} style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--border-radius-lg)',
                padding: 'var(--spacing-6)',
                boxShadow: `var(${shadow.token})`,
                marginBottom: 'var(--spacing-3)',
                minHeight: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontWeight: 'var(--font-weight-medium)' }}>
                  {shadow.name}
                </span>
              </div>
              <code style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)'
              }}>
                {shadow.token}
              </code>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}