import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function Components() {
  return (
    <>
      <header style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 className="heading-1" style={{ marginBottom: 'var(--spacing-4)' }}>
          Advanced Components
        </h1>
        <p className="text-body">
          Complex interactive components powered by Radix UI with custom styling.
        </p>
      </header>

      {/* Button Groups */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Button Groups
        </h2>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Single Selection
          </h3>
          <ToggleGroup.Root className="button-group" type="single" defaultValue="center">
            <ToggleGroup.Item className="button-group-item" value="left">
              Left
            </ToggleGroup.Item>
            <ToggleGroup.Item className="button-group-item" value="center">
              Center
            </ToggleGroup.Item>
            <ToggleGroup.Item className="button-group-item" value="right">
              Right
            </ToggleGroup.Item>
          </ToggleGroup.Root>
          <div style={{ marginTop: 'var(--spacing-3)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              ToggleGroup with type="single"
            </code>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Multiple Selection
          </h3>
          <ToggleGroup.Root className="button-group" type="multiple" defaultValue={['bold', 'italic']}>
            <ToggleGroup.Item className="button-group-item" value="bold">
              Bold
            </ToggleGroup.Item>
            <ToggleGroup.Item className="button-group-item" value="italic">
              Italic
            </ToggleGroup.Item>
            <ToggleGroup.Item className="button-group-item" value="underline">
              Underline
            </ToggleGroup.Item>
          </ToggleGroup.Root>
          <div style={{ marginTop: 'var(--spacing-3)' }}>
            <code style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              ToggleGroup with type="multiple"
            </code>
          </div>
        </div>

        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Button Group Sizes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <div className="button-group-sm">
              <ToggleGroup.Root className="button-group" type="single" defaultValue="1">
                <ToggleGroup.Item className="button-group-item" value="1">
                  Small
                </ToggleGroup.Item>
                <ToggleGroup.Item className="button-group-item" value="2">
                  Group
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <ToggleGroup.Root className="button-group" type="single" defaultValue="1">
              <ToggleGroup.Item className="button-group-item" value="1">
                Default
              </ToggleGroup.Item>
              <ToggleGroup.Item className="button-group-item" value="2">
                Group
              </ToggleGroup.Item>
            </ToggleGroup.Root>
            <div className="button-group-lg">
              <ToggleGroup.Root className="button-group" type="single" defaultValue="1">
                <ToggleGroup.Item className="button-group-item" value="1">
                  Large
                </ToggleGroup.Item>
                <ToggleGroup.Item className="button-group-item" value="2">
                  Group
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
          </div>
        </div>
      </section>

      {/* Popovers */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--spacing-6)' }}>
          Popovers
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-4)'
        }}>
          <div className="card">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              Basic Popover
            </h3>
            <Popover.Root>
              <Popover.Trigger className="popover-trigger">
                Click me
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="popover-content" sideOffset={5}>
                  <div className="popover-title">Popover Title</div>
                  <div className="popover-description">
                    This is a popover with some content inside.
                  </div>
                  <Popover.Arrow className="popover-arrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>

          <div className="card">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              With Close Button
            </h3>
            <Popover.Root>
              <Popover.Trigger className="popover-trigger">
                Open Menu
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="popover-content" sideOffset={5}>
                  <Popover.Close className="popover-close" aria-label="Close">
                    <Cross2Icon />
                  </Popover.Close>
                  <div className="popover-title">Settings</div>
                  <div className="popover-description">
                    Adjust your preferences here.
                  </div>
                  <div style={{ marginTop: 'var(--spacing-3)' }}>
                    <button className="button button-primary button-sm">
                      Save Changes
                    </button>
                  </div>
                  <Popover.Arrow className="popover-arrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>

          <div className="card">
            <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
              Form in Popover
            </h3>
            <Popover.Root>
              <Popover.Trigger className="popover-trigger">
                Edit Profile
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="popover-content" sideOffset={5}>
                  <div className="popover-title">Edit Profile</div>
                  <div style={{ marginTop: 'var(--spacing-3)' }}>
                    <input
                      type="text"
                      className="input input-sm"
                      placeholder="Name"
                      style={{ marginBottom: 'var(--spacing-2)' }}
                    />
                    <input
                      type="email"
                      className="input input-sm"
                      placeholder="Email"
                      style={{ marginBottom: 'var(--spacing-3)' }}
                    />
                    <button className="button button-primary button-sm button-full-width">
                      Update
                    </button>
                  </div>
                  <Popover.Arrow className="popover-arrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
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
            Button Group (Toggle Group)
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`import * as ToggleGroup from '@radix-ui/react-toggle-group';

// Single selection
<ToggleGroup.Root className="button-group" type="single" defaultValue="center">
  <ToggleGroup.Item className="button-group-item" value="left">
    Left
  </ToggleGroup.Item>
  <ToggleGroup.Item className="button-group-item" value="center">
    Center
  </ToggleGroup.Item>
  <ToggleGroup.Item className="button-group-item" value="right">
    Right
  </ToggleGroup.Item>
</ToggleGroup.Root>

// Multiple selection
<ToggleGroup.Root className="button-group" type="multiple"
                  defaultValue={['bold', 'italic']}>
  <ToggleGroup.Item className="button-group-item" value="bold">
    Bold
  </ToggleGroup.Item>
  <ToggleGroup.Item className="button-group-item" value="italic">
    Italic
  </ToggleGroup.Item>
  <ToggleGroup.Item className="button-group-item" value="underline">
    Underline
  </ToggleGroup.Item>
</ToggleGroup.Root>`}</code>
          </pre>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Popover Component
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`import * as Popover from '@radix-ui/react-popover';

// Basic popover
<Popover.Root>
  <Popover.Trigger className="popover-trigger">
    Click me
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content className="popover-content" sideOffset={5}>
      <div className="popover-title">Title</div>
      <div className="popover-description">
        Content goes here
      </div>
      <Popover.Arrow className="popover-arrow" />
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>

// With close button
<Popover.Root>
  <Popover.Trigger className="popover-trigger">
    Open Menu
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content className="popover-content" sideOffset={5}>
      <Popover.Close className="popover-close" aria-label="Close">
        <Cross2Icon />
      </Popover.Close>
      <div className="popover-title">Settings</div>
      <div className="popover-description">
        Content here
      </div>
      <Popover.Arrow className="popover-arrow" />
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>`}</code>
          </pre>
        </div>

        <div className="card">
          <h3 className="heading-4" style={{ marginBottom: 'var(--spacing-3)' }}>
            Popover with Form
          </h3>
          <pre style={{
            background: 'var(--bg-tertiary)',
            padding: 'var(--spacing-3)',
            borderRadius: 'var(--border-radius-sm)',
            overflow: 'auto'
          }}>
            <code>{`<Popover.Root>
  <Popover.Trigger className="popover-trigger">
    Edit Profile
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content className="popover-content" sideOffset={5}>
      <div className="popover-title">Edit Profile</div>
      <div style={{ marginTop: 'var(--spacing-3)' }}>
        <input
          type="text"
          className="input input-sm"
          placeholder="Name"
          style={{ marginBottom: 'var(--spacing-2)' }}
        />
        <input
          type="email"
          className="input input-sm"
          placeholder="Email"
          style={{ marginBottom: 'var(--spacing-3)' }}
        />
        <button className="button button-primary button-sm button-full-width">
          Update
        </button>
      </div>
      <Popover.Arrow className="popover-arrow" />
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>`}</code>
          </pre>
        </div>
      </section>
    </>
  );
}