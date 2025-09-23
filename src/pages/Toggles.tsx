export default function Toggles() {
  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Toggles & Checkboxes
        </h1>
        <p className="text-body">
          Interactive controls for boolean states and selections.
        </p>
      </header>

      {/* Checkboxes */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Checkboxes
        </h2>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Traditional Checkbox
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" defaultChecked />
              Checked checkbox
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" />
              Unchecked checkbox
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" disabled />
              Disabled checkbox
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" disabled defaultChecked />
              Disabled checked
            </label>
          </div>
          <div style={{ marginTop: 'var(--spacing-3)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              .checkbox
            </code>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Gradient Checkbox
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-gradient" defaultChecked />
              Gradient checkbox (checked)
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-gradient" />
              Gradient checkbox (unchecked)
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-gradient" disabled />
              Disabled gradient
            </label>
          </div>
          <div style={{ marginTop: 'var(--spacing-3)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              .checkbox-gradient
            </code>
          </div>
        </div>

        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Checkbox Sizes
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox checkbox-sm" defaultChecked />
              Small
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" defaultChecked />
              Default
            </label>
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox checkbox-lg" defaultChecked />
              Large
            </label>
          </div>
          <div style={{ marginTop: 'var(--spacing-3)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              .checkbox-sm | .checkbox | .checkbox-lg
            </code>
          </div>
        </div>
      </section>

      {/* Toggle Switches */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Toggle Switches
        </h2>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Toggle States
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <label className="toggle-label">
              <div className="toggle">
                <input type="checkbox" className="toggle-input" defaultChecked />
                <div className="toggle-switch"></div>
              </div>
              Toggle On
            </label>
            <label className="toggle-label">
              <div className="toggle">
                <input type="checkbox" className="toggle-input" />
                <div className="toggle-switch"></div>
              </div>
              Toggle Off
            </label>
            <label className="toggle-label">
              <div className="toggle">
                <input type="checkbox" className="toggle-input" disabled />
                <div className="toggle-switch"></div>
              </div>
              Disabled Toggle
            </label>
            <label className="toggle-label">
              <div className="toggle">
                <input type="checkbox" className="toggle-input" disabled defaultChecked />
                <div className="toggle-switch"></div>
              </div>
              Disabled On
            </label>
          </div>
        </div>

        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Toggle Sizes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <label className="toggle-label">
              <div className="toggle toggle-sm">
                <input type="checkbox" className="toggle-input" defaultChecked />
                <div className="toggle-switch"></div>
              </div>
              Small Toggle
            </label>
            <label className="toggle-label">
              <div className="toggle">
                <input type="checkbox" className="toggle-input" defaultChecked />
                <div className="toggle-switch"></div>
              </div>
              Default Toggle
            </label>
            <label className="toggle-label">
              <div className="toggle toggle-lg">
                <input type="checkbox" className="toggle-input" defaultChecked />
                <div className="toggle-switch"></div>
              </div>
              Large Toggle
            </label>
          </div>
          <div style={{ marginTop: 'var(--spacing-3)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              .toggle-sm | .toggle | .toggle-lg
            </code>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Code Examples
        </h2>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Checkboxes
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<!-- Basic checkbox -->
<label className="checkbox-label">
  <input type="checkbox" className="checkbox" />
  Accept terms and conditions
</label>

<!-- Gradient checkbox -->
<label className="checkbox-label">
  <input type="checkbox" className="checkbox-gradient" defaultChecked />
  Premium feature enabled
</label>

<!-- Different sizes -->
<input type="checkbox" className="checkbox checkbox-sm" />
<input type="checkbox" className="checkbox" />
<input type="checkbox" className="checkbox checkbox-lg" />

<!-- Disabled state -->
<label className="checkbox-label">
  <input type="checkbox" className="checkbox" disabled />
  Disabled option
</label>`}</code>
          </pre>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Toggle Switches
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<!-- Basic toggle -->
<label className="toggle-label">
  <div className="toggle">
    <input type="checkbox" className="toggle-input" />
    <div className="toggle-switch"></div>
  </div>
  Enable notifications
</label>

<!-- Different sizes -->
<div className="toggle toggle-sm">
  <input type="checkbox" className="toggle-input" />
  <div className="toggle-switch"></div>
</div>

<div className="toggle">
  <input type="checkbox" className="toggle-input" defaultChecked />
  <div className="toggle-switch"></div>
</div>

<div className="toggle toggle-lg">
  <input type="checkbox" className="toggle-input" />
  <div className="toggle-switch"></div>
</div>`}</code>
          </pre>
        </div>

        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Form with Multiple Controls
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<form>
  <h3>Preferences</h3>

  <!-- Checkboxes for multiple selection -->
  <div style={{ marginBottom: 'var(--spacing-4)' }}>
    <label className="checkbox-label">
      <input type="checkbox" className="checkbox" />
      Email updates
    </label>
    <label className="checkbox-label">
      <input type="checkbox" className="checkbox" />
      SMS notifications
    </label>
    <label className="checkbox-label">
      <input type="checkbox" className="checkbox-gradient" />
      Premium features
    </label>
  </div>

  <!-- Toggles for on/off settings -->
  <div style={{ marginBottom: 'var(--spacing-4)' }}>
    <label className="toggle-label">
      <div className="toggle">
        <input type="checkbox" className="toggle-input" />
        <div className="toggle-switch"></div>
      </div>
      Dark mode
    </label>
    <label className="toggle-label">
      <div className="toggle">
        <input type="checkbox" className="toggle-input" defaultChecked />
        <div className="toggle-switch"></div>
      </div>
      Auto-save
    </label>
  </div>
</form>`}</code>
          </pre>
        </div>
      </section>
    </>
  );
}