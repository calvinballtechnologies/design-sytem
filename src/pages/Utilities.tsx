export default function Utilities() {
  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Utilities
        </h1>
        <p className="text-body">
          Helper classes and utilities for common styling needs.
        </p>
      </header>

      {/* Layout Utilities */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Container Utilities
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div className="container-sm" style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-4)',
            borderRadius: 'var(--border-radius-default)',
            margin: '0'
          }}>
            <code>.container-sm</code> - Max width: 640px
          </div>
          <div className="container-md" style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-4)',
            borderRadius: 'var(--border-radius-default)',
            margin: '0'
          }}>
            <code>.container-md</code> - Max width: 768px
          </div>
          <div className="container-lg" style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-4)',
            borderRadius: 'var(--border-radius-default)',
            margin: '0'
          }}>
            <code>.container-lg</code> - Max width: 1024px
          </div>
          <div className="container-xl" style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-4)',
            borderRadius: 'var(--border-radius-default)',
            margin: '0'
          }}>
            <code>.container-xl</code> - Max width: 1280px
          </div>
        </div>
      </section>

      {/* Border Radius Utilities */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Border Radius Utilities
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          <div
            className="rounded-none"
            style={{
              background: 'var(--primary-1)',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            .rounded-none
          </div>
          <div
            className="rounded-sm"
            style={{
              background: 'var(--primary-1)',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            .rounded-sm
          </div>
          <div
            className="rounded"
            style={{
              background: 'var(--primary-1)',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            .rounded
          </div>
          <div
            className="rounded-md"
            style={{
              background: 'var(--primary-1)',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            .rounded-md
          </div>
          <div
            className="rounded-lg"
            style={{
              background: 'var(--primary-1)',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            .rounded-lg
          </div>
          <div
            className="rounded-xl"
            style={{
              background: 'var(--primary-1)',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            .rounded-xl
          </div>
          <div
            className="rounded-2xl"
            style={{
              background: 'var(--primary-1)',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            .rounded-2xl
          </div>
          <div
            className="rounded-full"
            style={{
              background: 'var(--primary-1)',
              height: '80px',
              width: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            .full
          </div>
        </div>
      </section>

      {/* Utility Classes Reference */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Quick Reference
        </h2>
        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Available Utility Classes
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-6)'
          }}>
            <div>
              <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-2)' }}>
                Spacing
              </h4>
              <pre style={{
                background: 'var(--bg-tertiary)',
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-default)',
                fontSize: 'var(--font-size-xs)'
              }}>
                <code>{`Padding:
.p-0 through .p-6

Margin:
.m-0 through .m-6

Gap:
.gap-1 through .gap-6`}</code>
              </pre>
            </div>

            <div>
              <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-2)' }}>
                Border Radius
              </h4>
              <pre style={{
                background: 'var(--bg-tertiary)',
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-default)',
                fontSize: 'var(--font-size-xs)'
              }}>
                <code>{`.rounded-none
.rounded-sm
.rounded
.rounded-md
.rounded-lg
.rounded-xl
.rounded-2xl
.rounded-full`}</code>
              </pre>
            </div>

            <div>
              <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-2)' }}>
                Containers
              </h4>
              <pre style={{
                background: 'var(--bg-tertiary)',
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-default)',
                fontSize: 'var(--font-size-xs)'
              }}>
                <code>{`.container (1200px)
.container-sm (640px)
.container-md (768px)
.container-lg (1024px)
.container-xl (1280px)`}</code>
              </pre>
            </div>

            <div>
              <h4 className="heading-5" style={{ marginBottom: 'var(--spacing-2)' }}>
                Design System Classes
              </h4>
              <pre style={{
                background: 'var(--bg-tertiary)',
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-default)',
                fontSize: 'var(--font-size-xs)'
              }}>
                <code>{`.kj-reset
.kj-font

Themes:
.light
.neutral-dark
.leaf`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}