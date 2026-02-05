export default function Spacing() {
  const spacingValues = [
    { name: '0', token: 'var(--spacing-0)', size: '0px' },
    { name: 'px', token: 'var(--spacing-px)', size: '1px' },
    { name: '0.5', token: 'var(--spacing-0-5)', size: '2px' },
    { name: '1', token: 'var(--spacing-1)', size: '4px' },
    { name: '1.5', token: 'var(--spacing-1-5)', size: '6px' },
    { name: '2', token: 'var(--spacing-2)', size: '8px' },
    { name: '2.5', token: 'var(--spacing-2-5)', size: '10px' },
    { name: '3', token: 'var(--spacing-3)', size: '12px' },
    { name: '3.5', token: 'var(--spacing-3-5)', size: '14px' },
    { name: '4', token: 'var(--spacing-4)', size: '16px' },
    { name: '5', token: 'var(--spacing-5)', size: '20px' },
    { name: '6', token: 'var(--spacing-6)', size: '24px' },
    { name: '7', token: 'var(--spacing-7)', size: '28px' },
    { name: '8', token: 'var(--spacing-8)', size: '32px' },
    { name: '9', token: 'var(--spacing-9)', size: '36px' },
    { name: '10', token: 'var(--spacing-10)', size: '40px' },
    { name: '11', token: 'var(--spacing-11)', size: '44px' },
    { name: '12', token: 'var(--spacing-12)', size: '48px' },
    { name: '14', token: 'var(--spacing-14)', size: '56px' },
    { name: '16', token: 'var(--spacing-16)', size: '64px' },
    { name: '20', token: 'var(--spacing-20)', size: '80px' },
    { name: '24', token: 'var(--spacing-24)', size: '96px' },
    { name: '28', token: 'var(--spacing-28)', size: '112px' },
    { name: '32', token: 'var(--spacing-32)', size: '128px' },
  ];

  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Spacing
        </h1>
        <p className="text-body">
          Consistent spacing scale for margins, padding, and gaps throughout your application.
        </p>
      </header>

      {/* Visual Spacing Scale */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Spacing Scale
        </h2>
        <div className="card">
          {spacingValues.map((spacing) => (
            <div
              key={spacing.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: 'var(--spacing-3) 0',
                borderBottom: '1px solid var(--border-primary)',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                gap: 'var(--spacing-4)'
              }}>
                <div style={{
                  width: '60px',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--text-primary)'
                }}>
                  {spacing.name}
                </div>
                <div style={{
                  width: spacing.token,
                  height: spacing.token,
                  background: 'linear-gradient(240deg, var(--primary-2) 7%, var(--primary-1) 50%, var(--primary-3))',
                  borderRadius: 'var(--border-radius-sm)',
                  minWidth: '2px',
                  minHeight: '16px'
                }} />
              </div>
              <div style={{
                display: 'flex',
                gap: 'var(--spacing-4)',
                alignItems: 'center'
              }}>
                <code style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'monospace'
                }}>
                  {spacing.token.replace('var(', '').replace(')', '')}
                </code>
                <span style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-tertiary)',
                  width: '50px',
                  textAlign: 'right'
                }}>
                  {spacing.size}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing Utilities */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Spacing Utilities
        </h2>
        <p className="text-body" style={{ marginBottom: 'var(--spacing-6)' }}>
          Pre-defined utility classes for common spacing needs.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          {/* Padding Utilities */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>
              Padding
            </h3>
            <div className="card">
              {[0, 1, 2, 3, 4, 5, 6].map(size => (
                <div
                  key={`p-${size}`}
                  style={{
                    marginBottom: 'var(--spacing-3)',
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--border-radius-default)'
                  }}
                >
                  <div
                    className={`p-${size}`}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '2px dashed var(--border-primary)',
                      borderRadius: 'var(--border-radius-default)'
                    }}
                  >
                    <code>.p-{size}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Margin Utilities */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>
              Margin
            </h3>
            <div className="card">
              {[0, 1, 2, 3, 4, 5, 6].map(size => (
                <div
                  key={`m-${size}`}
                  style={{
                    marginBottom: 'var(--spacing-3)',
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--border-radius-default)',
                    padding: '2px'
                  }}
                >
                  <div
                    className={`m-${size}`}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '2px dashed var(--border-primary)',
                      borderRadius: 'var(--border-radius-default)',
                      padding: 'var(--spacing-2)'
                    }}
                  >
                    <code>.m-{size}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gap Utilities */}
          <div>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>
              Gap (Flexbox/Grid)
            </h3>
            <div className="card">
              {[1, 2, 3, 4, 5, 6].map(size => (
                <div key={`gap-${size}`} style={{ marginBottom: 'var(--spacing-4)' }}>
                  <code style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-2)',
                    display: 'block'
                  }}>
                    .gap-{size}
                  </code>
                  <div
                    className={`gap-${size}`}
                    style={{
                      display: 'flex',
                      background: 'var(--bg-tertiary)',
                      padding: 'var(--spacing-2)',
                      borderRadius: 'var(--border-radius-default)'
                    }}
                  >
                    <div style={{
                      background: 'var(--primary-1)',
                      width: '40px',
                      height: '20px',
                      borderRadius: 'var(--border-radius-sm)'
                    }} />
                    <div style={{
                      background: 'var(--primary-2)',
                      width: '40px',
                      height: '20px',
                      borderRadius: 'var(--border-radius-sm)'
                    }} />
                    <div style={{
                      background: 'var(--primary-3)',
                      width: '40px',
                      height: '20px',
                      borderRadius: 'var(--border-radius-sm)'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Usage Examples
        </h2>
        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            CSS Variables
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-default)',
            overflow: 'auto',
            marginBottom: 'var(--spacing-4)'
          }}>
            <code>{`.my-component {
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-8);
  gap: var(--spacing-2);
}`}</code>
          </pre>

          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Utility Classes
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-default)',
            overflow: 'auto'
          }}>
            <code>{`<div className="p-4 m-2 gap-3">
  <!-- Content with padding-4, margin-2, gap-3 -->
</div>`}</code>
          </pre>
        </div>
      </section>
    </>
  );
}