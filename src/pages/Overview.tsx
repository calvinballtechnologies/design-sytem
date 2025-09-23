export default function Overview() {
  return (
    <>
      <header style={{ marginBottom: "var(--spacing-8)" }}>
        <h1 className="heading-1" style={{ marginBottom: "var(--spacing-4)" }}>
          KJ Design System
        </h1>
        <p
          className="text-body"
          style={{ marginBottom: "var(--spacing-6)", maxWidth: "800px" }}
        >
          A comprehensive CSS-based design system with primitive and semantic
          tokens for consistent UI development. This system provides a complete
          set of design tokens, components, and utilities that support multiple
          themes.
        </p>
      </header>

      {/* Quick Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "var(--spacing-4)",
          marginBottom: "var(--spacing-8)",
        }}
      >
        <div className="card">
          <h3
            className="heading-4"
            style={{ marginBottom: "var(--spacing-2)" }}
          >
            9 Color Scales
          </h3>
          <p className="text-small">
            Complete color palettes with 11 shades each
          </p>
        </div>
        <div className="card">
          <h3
            className="heading-4"
            style={{ marginBottom: "var(--spacing-2)" }}
          >
            3 Themes
          </h3>
          <p className="text-small">Light, Dark, and Leaf theme variations</p>
        </div>
        <div className="card">
          <h3
            className="heading-4"
            style={{ marginBottom: "var(--spacing-2)" }}
          >
            50+ Components
          </h3>
          <p className="text-small">
            Pre-styled component classes ready to use
          </p>
        </div>
        <div className="card">
          <h3
            className="heading-4"
            style={{ marginBottom: "var(--spacing-2)" }}
          >
            Radix UI Integration
          </h3>
          <p className="text-small">Accessible interactive components</p>
        </div>
      </div>

      {/* Token Categories */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: "var(--spacing-6)" }}>
          Token Categories
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-4)",
          }}
        >
          <div className="card">
            <h3
              className="heading-4"
              style={{
                marginBottom: "var(--spacing-2)",
                color: "var(--primary-1)",
              }}
            >
              Primitive Tokens
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li
                style={{
                  padding: "var(--spacing-2) 0",
                  borderBottom: "1px solid var(--border-primary)",
                }}
              >
                Color scales (gray, slate, red, orange, etc.)
              </li>
              <li
                style={{
                  padding: "var(--spacing-2) 0",
                  borderBottom: "1px solid var(--border-primary)",
                }}
              >
                Typography (sizes, weights, line heights)
              </li>
              <li
                style={{
                  padding: "var(--spacing-2) 0",
                  borderBottom: "1px solid var(--border-primary)",
                }}
              >
                Spacing scale (0px to 384px)
              </li>
              <li style={{ padding: "var(--spacing-2) 0" }}>
                Borders, shadows, transitions
              </li>
            </ul>
          </div>
          <div className="card">
            <h3
              className="heading-4"
              style={{
                marginBottom: "var(--spacing-2)",
                color: "var(--primary-1)",
              }}
            >
              Semantic Tokens
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li
                style={{
                  padding: "var(--spacing-2) 0",
                  borderBottom: "1px solid var(--border-primary)",
                }}
              >
                Background colors (primary, secondary, etc.)
              </li>
              <li
                style={{
                  padding: "var(--spacing-2) 0",
                  borderBottom: "1px solid var(--border-primary)",
                }}
              >
                Text colors (primary, secondary, tertiary)
              </li>
              <li
                style={{
                  padding: "var(--spacing-2) 0",
                  borderBottom: "1px solid var(--border-primary)",
                }}
              >
                Border colors
              </li>
              <li style={{ padding: "var(--spacing-2) 0" }}>
                Status colors (success, warning, error, info)
              </li>
            </ul>
          </div>
          <div className="card">
            <h3
              className="heading-4"
              style={{
                marginBottom: "var(--spacing-2)",
                color: "var(--primary-1)",
              }}
            >
              Component Classes
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li
                style={{
                  padding: "var(--spacing-2) 0",
                  borderBottom: "1px solid var(--border-primary)",
                }}
              >
                Buttons and button groups
              </li>
              <li
                style={{
                  padding: "var(--spacing-2) 0",
                  borderBottom: "1px solid var(--border-primary)",
                }}
              >
                Form inputs and controls
              </li>
              <li
                style={{
                  padding: "var(--spacing-2) 0",
                  borderBottom: "1px solid var(--border-primary)",
                }}
              >
                Cards and alerts
              </li>
              <li style={{ padding: "var(--spacing-2) 0" }}>
                Typography and layouts
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
