export default function Forms() {
  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Form Elements
        </h1>
        <p className="text-body">
          Input fields and form controls with various states and sizes.
        </p>
      </header>

      {/* Text Inputs */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Text Inputs
        </h2>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Default Input
          </h3>
          <input
            type="text"
            className="input"
            placeholder="Enter text..."
            style={{ marginBottom: 'var(--spacing-3)' }}
          />
          <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
            .input
          </code>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Input Sizes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <input
              type="text"
              className="input input-sm"
              placeholder="Small input"
            />
            <input
              type="text"
              className="input"
              placeholder="Default input"
            />
            <input
              type="text"
              className="input input-lg"
              placeholder="Large input"
            />
          </div>
          <div style={{ marginTop: 'var(--spacing-3)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              .input-sm | .input | .input-lg
            </code>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Input States
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <div>
              <label className="text-small" style={{ marginBottom: 'var(--spacing-2)', display: 'block' }}>
                Normal State
              </label>
              <input
                type="text"
                className="input"
                placeholder="Normal input"
                defaultValue="Normal text"
              />
            </div>
            <div>
              <label className="text-small" style={{ marginBottom: 'var(--spacing-2)', display: 'block' }}>
                Focus State
              </label>
              <input
                type="text"
                className="input"
                placeholder="Focused input"
                style={{
                  borderColor: 'var(--bg-hover)',
                  boxShadow: '0 0 0 1px var(--bg-hover)'
                }}
              />
            </div>
            <div>
              <label className="text-small" style={{ marginBottom: 'var(--spacing-2)', display: 'block' }}>
                Disabled State
              </label>
              <input
                type="text"
                className="input"
                placeholder="Disabled input"
                disabled
                defaultValue="Disabled text"
              />
            </div>
            <div>
              <label className="text-small" style={{ marginBottom: 'var(--spacing-2)', display: 'block' }}>
                Error State
              </label>
              <input
                type="text"
                className="input input-error"
                placeholder="Error input"
                defaultValue="Invalid text"
              />
              <p className="text-caption" style={{ color: 'var(--status-error-text)', marginTop: 'var(--spacing-1)' }}>
                This field has an error
              </p>
            </div>
            <div>
              <label className="text-small" style={{ marginBottom: 'var(--spacing-2)', display: 'block' }}>
                Success State
              </label>
              <input
                type="text"
                className="input input-success"
                placeholder="Success input"
                defaultValue="Valid text"
              />
              <p className="text-caption" style={{ color: 'var(--status-success-text)', marginTop: 'var(--spacing-1)' }}>
                Looks good!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Textarea */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Textarea
        </h2>
        <div className="card">
          <textarea
            className="input"
            rows={4}
            placeholder="Enter your message..."
            style={{ resize: 'vertical' }}
          />
          <div style={{ marginTop: 'var(--spacing-3)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              .input (same class as text input)
            </code>
          </div>
        </div>
      </section>

      {/* Select */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Select Dropdown
        </h2>
        <div className="card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <select className="input input-sm">
              <option>Small select</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <select className="input">
              <option>Default select</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <select className="input input-lg">
              <option>Large select</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
      </section>

      {/* Form Layout Example */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Form Example
        </h2>
        <div className="card" style={{ maxWidth: '600px' }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <label className="text-body" style={{ marginBottom: 'var(--spacing-2)', display: 'block', fontWeight: 'var(--font-weight-medium)' }}>
                Full Name
              </label>
              <input
                type="text"
                className="input"
                placeholder="John Doe"
                required
              />
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <label className="text-body" style={{ marginBottom: 'var(--spacing-2)', display: 'block', fontWeight: 'var(--font-weight-medium)' }}>
                Email Address
              </label>
              <input
                type="email"
                className="input"
                placeholder="john@example.com"
                required
              />
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <label className="text-body" style={{ marginBottom: 'var(--spacing-2)', display: 'block', fontWeight: 'var(--font-weight-medium)' }}>
                Country
              </label>
              <select className="input" required>
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </select>
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <label className="text-body" style={{ marginBottom: 'var(--spacing-2)', display: 'block', fontWeight: 'var(--font-weight-medium)' }}>
                Message
              </label>
              <textarea
                className="input"
                rows={4}
                placeholder="Your message..."
                style={{ resize: 'vertical' }}
                required
              />
            </div>

            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox" />
                I agree to the terms and conditions
              </label>
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
              <button type="submit" className="button button-primary">
                Submit
              </button>
              <button type="reset" className="button button-secondary">
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Code Examples
        </h2>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Text Input
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<!-- Basic input -->
<input type="text" className="input" placeholder="Enter text..." />

<!-- Different sizes -->
<input type="text" className="input input-sm" placeholder="Small" />
<input type="text" className="input" placeholder="Default" />
<input type="text" className="input input-lg" placeholder="Large" />

<!-- States -->
<input type="text" className="input input-error" />
<input type="text" className="input input-success" />
<input type="text" className="input" disabled />`}</code>
          </pre>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Form with Labels
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<div style={{ marginBottom: 'var(--spacing-4)' }}>
  <label className="text-body" style={{
    marginBottom: 'var(--spacing-2)',
    display: 'block',
    fontWeight: 'var(--font-weight-medium)'
  }}>
    Email Address
  </label>
  <input
    type="email"
    className="input"
    placeholder="john@example.com"
    required
  />
</div>`}</code>
          </pre>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Textarea
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<textarea
  className="input"
  rows={4}
  placeholder="Enter your message..."
  style={{ resize: 'vertical' }}
/>`}</code>
          </pre>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Select Dropdown
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<select className="input">
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>`}</code>
          </pre>
        </div>

        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Complete Form Example
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<form onSubmit={(e) => e.preventDefault()}>
  <div style={{ marginBottom: 'var(--spacing-4)' }}>
    <label className="text-body">
      Full Name
    </label>
    <input type="text" className="input" placeholder="John Doe" required />
  </div>

  <div style={{ marginBottom: 'var(--spacing-4)' }}>
    <label className="checkbox-label">
      <input type="checkbox" className="checkbox" />
      I agree to the terms
    </label>
  </div>

  <button type="submit" className="button button-primary">
    Submit
  </button>
</form>`}</code>
          </pre>
        </div>
      </section>
    </>
  );
}