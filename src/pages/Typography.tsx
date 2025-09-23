export default function Typography() {
  const fontSizes = [
    { name: 'xs', token: 'var(--font-size-xs)', size: '12px' },
    { name: 'sm', token: 'var(--font-size-sm)', size: '14px' },
    { name: 'base', token: 'var(--font-size-base)', size: '16px' },
    { name: 'lg', token: 'var(--font-size-lg)', size: '18px' },
    { name: 'xl', token: 'var(--font-size-xl)', size: '20px' },
    { name: '2xl', token: 'var(--font-size-2xl)', size: '24px' },
    { name: '3xl', token: 'var(--font-size-3xl)', size: '30px' },
    { name: '4xl', token: 'var(--font-size-4xl)', size: '36px' },
    { name: '5xl', token: 'var(--font-size-5xl)', size: '48px' },
    { name: '6xl', token: 'var(--font-size-6xl)', size: '60px' },
  ];

  const fontWeights = [
    { name: 'Thin', token: 'var(--font-weight-thin)', value: '100' },
    { name: 'Extra Light', token: 'var(--font-weight-extralight)', value: '200' },
    { name: 'Light', token: 'var(--font-weight-light)', value: '300' },
    { name: 'Normal', token: 'var(--font-weight-normal)', value: '400' },
    { name: 'Medium', token: 'var(--font-weight-medium)', value: '500' },
    { name: 'Semibold', token: 'var(--font-weight-semibold)', value: '600' },
    { name: 'Bold', token: 'var(--font-weight-bold)', value: '700' },
    { name: 'Extra Bold', token: 'var(--font-weight-extrabold)', value: '800' },
    { name: 'Black', token: 'var(--font-weight-black)', value: '900' },
  ];

  const lineHeights = [
    { name: 'None', token: 'var(--line-height-none)', value: '1' },
    { name: 'Tight', token: 'var(--line-height-tight)', value: '1.25' },
    { name: 'Snug', token: 'var(--line-height-snug)', value: '1.375' },
    { name: 'Normal', token: 'var(--line-height-normal)', value: '1.5' },
    { name: 'Relaxed', token: 'var(--line-height-relaxed)', value: '1.625' },
    { name: 'Loose', token: 'var(--line-height-loose)', value: '2' },
  ];

  const letterSpacings = [
    { name: 'Tighter', token: 'var(--letter-spacing-tighter)', value: '-0.05em' },
    { name: 'Tight', token: 'var(--letter-spacing-tight)', value: '-0.025em' },
    { name: 'Normal', token: 'var(--letter-spacing-normal)', value: '0em' },
    { name: 'Wide', token: 'var(--letter-spacing-wide)', value: '0.025em' },
    { name: 'Wider', token: 'var(--letter-spacing-wider)', value: '0.05em' },
    { name: 'Widest', token: 'var(--letter-spacing-widest)', value: '0.1em' },
  ];

  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Typography
        </h1>
        <p className="text-body">
          Comprehensive typography system with font sizes, weights, line heights, and letter spacing options.
        </p>
      </header>

      {/* Typography Components */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Typography Components
        </h2>
        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h1 className="heading-1">Heading 1</h1>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .heading-1
          </code>
        </div>
        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h2 className="heading-2">Heading 2</h2>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .heading-2
          </code>
        </div>
        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-3">Heading 3</h3>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .heading-3
          </code>
        </div>
        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h4 className="heading-4">Heading 4</h4>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .heading-4
          </code>
        </div>
        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h5 className="heading-5">Heading 5</h5>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .heading-5
          </code>
        </div>
        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <p className="text-body">
            Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .text-body
          </code>
        </div>
        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <p className="text-small">
            Small text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .text-small
          </code>
        </div>
        <div className="card">
          <p className="text-caption">
            Caption text - Lorem ipsum dolor sit amet
          </p>
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .text-caption
          </code>
        </div>
      </section>

      {/* Font Sizes */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Font Sizes
        </h2>
        <div className="card">
          {fontSizes.map((size) => (
            <div
              key={size.name}
              style={{
                padding: 'var(--spacing-4)',
                borderBottom: '1px solid var(--border-primary)',
                display: 'flex',
                alignItems: 'baseline',
                gap: 'var(--spacing-4)'
              }}
            >
              <span style={{ fontSize: size.token }}>
                The quick brown fox
              </span>
              <span style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--spacing-4)' }}>
                <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                  {size.name}
                </code>
                <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)' }}>
                  {size.size}
                </code>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Font Weights
        </h2>
        <div className="card">
          {fontWeights.map((weight) => (
            <div
              key={weight.name}
              style={{
                padding: 'var(--spacing-3)',
                borderBottom: '1px solid var(--border-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-4)'
              }}
            >
              <span style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: weight.token,
                flex: 1
              }}>
                The quick brown fox jumps
              </span>
              <span style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                  {weight.name}
                </span>
                <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)' }}>
                  {weight.value}
                </code>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Line Heights
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          {lineHeights.map((lineHeight) => (
            <div key={lineHeight.name} className="card">
              <h4 className="heading-4" style={{ marginBottom: 'var(--spacing-2)' }}>
                {lineHeight.name} ({lineHeight.value})
              </h4>
              <p style={{
                fontSize: 'var(--font-size-base)',
                lineHeight: lineHeight.token
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <code style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)',
                marginTop: 'var(--spacing-2)',
                display: 'block'
              }}>
                {lineHeight.token}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Letter Spacing */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Letter Spacing
        </h2>
        <div className="card">
          {letterSpacings.map((spacing) => (
            <div
              key={spacing.name}
              style={{
                padding: 'var(--spacing-4)',
                borderBottom: '1px solid var(--border-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-4)'
              }}
            >
              <span style={{
                fontSize: 'var(--font-size-lg)',
                letterSpacing: spacing.token,
                flex: 1
              }}>
                THE QUICK BROWN FOX JUMPS
              </span>
              <span style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                  {spacing.name}
                </span>
                <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)' }}>
                  {spacing.value}
                </code>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}