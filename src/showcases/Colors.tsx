export default function Colors() {
  const colorScales = [
    'gray', 'slate', 'red', 'orange', 'yellow', 'green',
    'blue', 'indigo', 'purple'
  ];

  const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const semanticColors = [
    { category: 'Backgrounds', colors: [
      { name: 'Primary', token: '--bg-primary' },
      { name: 'Secondary', token: '--bg-secondary' },
      { name: 'Tertiary', token: '--bg-tertiary' },
      { name: 'Alternative', token: '--bg-alternative' },
      { name: 'Hover', token: '--bg-hover' },
    ]},
    { category: 'Text', colors: [
      { name: 'Primary', token: '--text-primary' },
      { name: 'Secondary', token: '--text-secondary' },
      { name: 'Tertiary', token: '--text-tertiary' },
      { name: 'Hover', token: '--text-hover' },
    ]},
    { category: 'Borders', colors: [
      { name: 'Primary', token: '--border-primary' },
      { name: 'Secondary', token: '--border-secondary' },
      { name: 'Alternative', token: '--border-alternative' },
      { name: 'Hover', token: '--border-hover' },
    ]},
    { category: 'Brand', colors: [
      { name: 'Primary 1', token: '--primary-1' },
      { name: 'Primary 2', token: '--primary-2' },
      { name: 'Primary 3', token: '--primary-3' },
    ]},
    { category: 'Status', colors: [
      { name: 'Success BG', token: '--status-success-bg' },
      { name: 'Success Text', token: '--status-success-text' },
      { name: 'Warning BG', token: '--status-warning-bg' },
      { name: 'Warning Text', token: '--status-warning-text' },
      { name: 'Error BG', token: '--status-error-bg' },
      { name: 'Error Text', token: '--status-error-text' },
      { name: 'Info BG', token: '--status-info-bg' },
      { name: 'Info Text', token: '--status-info-text' },
    ]},
  ];

  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Colors
        </h1>
        <p className="text-body">
          The design system includes comprehensive color palettes with both primitive and semantic tokens.
        </p>
      </header>

      {/* Semantic Colors */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Semantic Colors
        </h2>
        <p className="text-body" style={{ marginBottom: 'var(--spacing-6)' }}>
          Semantic colors adapt to the current theme and provide consistent meaning across the application.
        </p>

        {semanticColors.map((category) => (
          <div key={category.category} style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>
              {category.category}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 'var(--spacing-4)'
            }}>
              {category.colors.map((color) => (
                <div
                  key={color.token}
                  className="card"
                  style={{ padding: 0, overflow: 'hidden' }}
                >
                  <div style={{
                    height: '80px',
                    background: `var(${color.token})`,
                    border: '1px solid var(--border-primary)'
                  }} />
                  <div style={{ padding: 'var(--spacing-3)' }}>
                    <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-1)' }}>
                      {color.name}
                    </div>
                    <code style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--text-secondary)',
                      fontFamily: 'monospace'
                    }}>
                      var({color.token})
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Border Colors in Context */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Border Colors in Context
        </h2>
        <p className="text-body" style={{ marginBottom: 'var(--spacing-6)' }}>
          See how border colors are used in actual components like inputs, cards, and containers.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-6)'
        }}>
          {/* Input Examples */}
          <div>
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              Input Borders
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <div>
                <label className="text-small" style={{ marginBottom: 'var(--spacing-1)', display: 'block' }}>
                  Default Input Border
                </label>
                <input
                  className="input"
                  placeholder="--bg-alternative-border"
                  defaultValue="Default border color"
                />
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border: 1px solid var(--bg-alternative-border)
                </code>
              </div>
              <div>
                <label className="text-small" style={{ marginBottom: 'var(--spacing-1)', display: 'block' }}>
                  Focus State Border
                </label>
                <input
                  className="input"
                  placeholder="--bg-hover on focus"
                  style={{
                    borderColor: 'var(--bg-hover)',
                    boxShadow: '0 0 0 1px var(--bg-hover)'
                  }}
                  defaultValue="Focused border"
                />
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border-color: var(--bg-hover)
                </code>
              </div>
              <div>
                <label className="text-small" style={{ marginBottom: 'var(--spacing-1)', display: 'block' }}>
                  Error State Border
                </label>
                <input
                  className="input input-error"
                  placeholder="Error state"
                  defaultValue="Error border color"
                />
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border-color: var(--status-error-border)
                </code>
              </div>
              <div>
                <label className="text-small" style={{ marginBottom: 'var(--spacing-1)', display: 'block' }}>
                  Success State Border
                </label>
                <input
                  className="input input-success"
                  placeholder="Success state"
                  defaultValue="Success border color"
                />
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border-color: var(--status-success-border)
                </code>
              </div>
            </div>
          </div>

          {/* Card Border Examples */}
          <div>
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              Card Borders
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <div className="card">
                <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-1)' }}>
                  Default Card
                </div>
                <p className="text-small" style={{ marginBottom: 'var(--spacing-2)' }}>
                  Uses --bg-secondary for border
                </p>
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border: 1px solid var(--bg-secondary)
                </code>
              </div>
              <div className="card" style={{
                borderColor: 'var(--border-primary)',
                borderWidth: '2px'
              }}>
                <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-1)' }}>
                  Primary Border
                </div>
                <p className="text-small" style={{ marginBottom: 'var(--spacing-2)' }}>
                  Uses --border-primary
                </p>
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border: 2px solid var(--border-primary)
                </code>
              </div>
              <div className="card" style={{
                borderColor: 'var(--border-secondary)',
                borderWidth: '2px'
              }}>
                <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-1)' }}>
                  Secondary Border
                </div>
                <p className="text-small" style={{ marginBottom: 'var(--spacing-2)' }}>
                  Uses --border-secondary
                </p>
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border: 2px solid var(--border-secondary)
                </code>
              </div>
            </div>
          </div>

          {/* Button Border Examples */}
          <div>
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              Button Borders
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <div>
                <button className="button button-secondary" style={{ width: '100%', marginBottom: 'var(--spacing-2)' }}>
                  Secondary Button
                </button>
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border-color: var(--button-white-border-color)
                </code>
              </div>
              <div>
                <button className="button button-outline" style={{
                  width: '100%',
                  marginBottom: 'var(--spacing-2)',
                  background: 'var(--bg-tertiary)'
                }}>
                  Outline Button
                </button>
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border-color: rgb(255 255 255 / 0.2)
                </code>
              </div>
              <div>
                <button className="button button-secondary" style={{
                  width: '100%',
                  marginBottom: 'var(--spacing-2)',
                  borderColor: 'var(--button-white-border-color-hover)'
                }}>
                  Hover State
                </button>
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border-color: var(--button-white-border-color-hover)
                </code>
              </div>
              <div>
                <button className="button button-secondary" style={{
                  width: '100%',
                  marginBottom: 'var(--spacing-2)',
                  borderColor: 'var(--primary-1)',
                  borderWidth: '2px'
                }}>
                  Custom Primary Border
                </button>
                <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                  border: 2px solid var(--primary-1)
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Border Demo */}
        <div className="card" style={{ marginTop: 'var(--spacing-6)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-4)' }}>
            Interactive Border States
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-4)'
          }}>
            <div
              style={{
                padding: 'var(--spacing-4)',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--border-primary)',
                borderRadius: 'var(--border-radius-default)',
                transition: 'var(--transition-all)',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--border-hover)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--border-primary)';
              }}
            >
              <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-1)' }}>
                Hover Me
              </div>
              <div className="text-caption">
                border-primary → border-hover
              </div>
            </div>
            <div
              style={{
                padding: 'var(--spacing-4)',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--border-secondary)',
                borderRadius: 'var(--border-radius-default)',
                transition: 'var(--transition-all)',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--bg-alternative-border)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--border-secondary)';
              }}
            >
              <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-1)' }}>
                Hover Me
              </div>
              <div className="text-caption">
                border-secondary → alternative
              </div>
            </div>
            <div
              style={{
                padding: 'var(--spacing-4)',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--border-alternative)',
                borderRadius: 'var(--border-radius-default)',
                transition: 'var(--transition-all)',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--primary-1)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--border-alternative)';
              }}
            >
              <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-1)' }}>
                Hover Me
              </div>
              <div className="text-caption">
                border-alternative → primary
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primitive Color Scales */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Primitive Color Scales
        </h2>
        <p className="text-body" style={{ marginBottom: 'var(--spacing-6)' }}>
          Raw color values that form the foundation of the design system. Each scale has 11 shades.
        </p>

        {colorScales.map((scale) => (
          <div key={scale} style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 className="heading-3" style={{
              marginBottom: 'var(--spacing-4)',
              textTransform: 'capitalize'
            }}>
              {scale}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
              gap: 'var(--spacing-2)'
            }}>
              {colorShades.map((shade) => {
                const token = `--color-${scale}-${shade}`;
                return (
                  <div
                    key={shade}
                    style={{ textAlign: 'center' }}
                  >
                    <div style={{
                      height: '60px',
                      background: `var(${token})`,
                      borderRadius: 'var(--border-radius-default)',
                      marginBottom: 'var(--spacing-2)',
                      border: shade === 50 ? '1px solid var(--border-primary)' : 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    title={`var(${token})`}
                    />
                    <div style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--text-secondary)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}>
                      {shade}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Neutral Colors */}
        <div style={{ marginTop: 'var(--spacing-8)' }}>
          <h3 className="heading-3" style={{ marginBottom: 'var(--spacing-4)' }}>
            Neutral Colors
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 'var(--spacing-4)'
          }}>
            {[
              { name: 'White', token: '--color-white', value: '#ffffff' },
              { name: 'Black', token: '--color-black', value: '#000000' },
              { name: 'Transparent', token: '--color-transparent', value: 'transparent' }
            ].map((color) => (
              <div
                key={color.token}
                className="card"
                style={{ padding: 0, overflow: 'hidden' }}
              >
                <div style={{
                  height: '80px',
                  background: color.value,
                  border: '1px solid var(--border-primary)'
                }} />
                <div style={{ padding: 'var(--spacing-3)' }}>
                  <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-1)' }}>
                    {color.name}
                  </div>
                  <code style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-secondary)',
                    fontFamily: 'monospace'
                  }}>
                    var({color.token})
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}