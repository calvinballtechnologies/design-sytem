import { useState, useEffect } from 'react';
import {
  HomeIcon,
  ColorWheelIcon,
  FontStyleIcon,
  SpaceBetweenHorizontallyIcon,
  BorderAllIcon,
  ButtonIcon,
  InputIcon,
  CheckboxIcon,
  MixIcon,
  ComponentInstanceIcon,
  LayersIcon,
  ReaderIcon,
} from '@radix-ui/react-icons';

interface SidebarProps {
  activePath: string;
}

const themes = [
  { id: 'light', name: 'Light', className: 'light' },
  { id: 'dark', name: 'Dark', className: 'neutral-dark' },
  { id: 'leaf', name: 'Leaf', className: 'leaf' },
];

const navSections = [
  {
    title: 'Foundations',
    items: [
      { path: '/', label: 'Overview', icon: <HomeIcon /> },
      { path: '/colors', label: 'Colors', icon: <ColorWheelIcon /> },
      { path: '/typography', label: 'Typography', icon: <FontStyleIcon /> },
      { path: '/spacing', label: 'Spacing', icon: <SpaceBetweenHorizontallyIcon /> },
      { path: '/borders', label: 'Borders & Shadows', icon: <BorderAllIcon /> },
    ],
  },
  {
    title: 'Components',
    items: [
      { path: '/buttons', label: 'Buttons', icon: <ButtonIcon /> },
      { path: '/forms', label: 'Form Elements', icon: <InputIcon /> },
      { path: '/toggles', label: 'Toggles & Checkboxes', icon: <CheckboxIcon /> },
      { path: '/cards', label: 'Cards & Alerts', icon: <MixIcon /> },
      { path: '/components', label: 'Components', icon: <ComponentInstanceIcon /> },
      { path: '/utilities', label: 'Utilities', icon: <LayersIcon /> },
    ],
  },
  {
    title: 'Documentation',
    items: [
      { path: '/docs/design-system', label: 'Design System Guide', icon: <ReaderIcon /> },
    ],
  },
];

function applyTheme(themeId: string) {
  const themeClass = themes.find((t) => t.id === themeId)?.className || 'light';
  document.body.className = `kj-reset kj-font ${themeClass}`;
}

export default function Sidebar({ activePath }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('kj-theme') || 'light';
    setCurrentTheme(saved);
    applyTheme(saved);
  }, []);

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem('kj-theme', themeId);
    applyTheme(themeId);
  };

  const isActive = (path: string) => {
    if (path === '/') return activePath === '/' || activePath === '';
    return activePath.startsWith(path);
  };

  return (
    <aside
      style={{
        width: collapsed ? '60px' : '260px',
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border-primary)',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: 'var(--spacing-4)',
          borderBottom: '1px solid var(--border-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '60px',
        }}
      >
        {!collapsed && (
          <h2
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            KJ Design System
          </h2>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: 'var(--spacing-2)',
            borderRadius: 'var(--border-radius-default)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-colors)',
          }}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d={
                collapsed
                  ? 'M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z'
                  : 'M8.84182 3.13514C9.04327 3.32401 9.05348 3.64043 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8646C8.64036 12.0535 8.32394 12.0433 8.13508 11.8418L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z'
              }
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Theme Switcher */}
      {!collapsed && (
        <div
          style={{
            padding: 'var(--spacing-4)',
            borderBottom: '1px solid var(--border-primary)',
          }}
        >
          <label
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--text-secondary)',
              display: 'block',
              marginBottom: 'var(--spacing-2)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-wider)',
            }}
          >
            Theme
          </label>
          <select
            value={currentTheme}
            onChange={(e) => handleThemeChange(e.target.value)}
            className="input input-sm"
            style={{ width: '100%' }}
          >
            {themes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Navigation */}
      <nav
        style={{
          flex: 1,
          padding: 'var(--spacing-2)',
          overflowY: 'auto',
        }}
      >
        {navSections.map((section) => (
          <div key={section.title} style={{ marginBottom: 'var(--spacing-4)' }}>
            {!collapsed && (
              <div
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--letter-spacing-wider)',
                  padding: 'var(--spacing-2) var(--spacing-3)',
                  fontWeight: 'var(--font-weight-semibold)',
                }}
              >
                {section.title}
              </div>
            )}
            {section.items.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`sidebar-nav-item ${isActive(item.path) ? 'sidebar-nav-item-active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-3)',
                  padding: 'var(--spacing-2) var(--spacing-3)',
                  marginBottom: 'var(--spacing-1)',
                  borderRadius: 'var(--border-radius-default)',
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition-all)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                }}
                title={collapsed ? item.label : undefined}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </span>
                {!collapsed && <span>{item.label}</span>}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
