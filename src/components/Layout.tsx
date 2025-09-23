import { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
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
  LayersIcon
} from '@radix-ui/react-icons';

interface LayoutProps {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
}

export default function Layout({ currentTheme, setCurrentTheme }: LayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const themes = [
    { id: 'light', name: 'Light', className: 'light' },
    { id: 'dark', name: 'Dark', className: 'neutral-dark' },
    { id: 'leaf', name: 'Leaf', className: 'leaf' }
  ];

  const navItems = [
    { path: '/', label: 'Overview', icon: <HomeIcon /> },
    { path: '/colors', label: 'Colors', icon: <ColorWheelIcon /> },
    { path: '/typography', label: 'Typography', icon: <FontStyleIcon /> },
    { path: '/spacing', label: 'Spacing', icon: <SpaceBetweenHorizontallyIcon /> },
    { path: '/borders', label: 'Borders & Shadows', icon: <BorderAllIcon /> },
    { path: '/buttons', label: 'Buttons', icon: <ButtonIcon /> },
    { path: '/forms', label: 'Form Elements', icon: <InputIcon /> },
    { path: '/toggles', label: 'Toggles & Checkboxes', icon: <CheckboxIcon /> },
    { path: '/cards', label: 'Cards & Alerts', icon: <MixIcon /> },
    { path: '/components', label: 'Components', icon: <ComponentInstanceIcon /> },
    { path: '/utilities', label: 'Utilities', icon: <LayersIcon /> },
  ];

  return (
    <div className={`kj-reset kj-font ${themes.find(t => t.id === currentTheme)?.className}`}
         style={{
           background: 'var(--bg-primary)',
           minHeight: '100vh',
           display: 'flex'
         }}>
      {/* Sidebar */}
      <aside
        style={{
          width: isSidebarCollapsed ? '60px' : '260px',
          background: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border-primary)',
          transition: 'width 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        {/* Sidebar Header */}
        <div style={{
          padding: 'var(--spacing-4)',
          borderBottom: '1px solid var(--border-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '60px'
        }}>
          {!isSidebarCollapsed && (
            <h2 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
              margin: 0,
              whiteSpace: 'nowrap'
            }}>
              KJ Design System
            </h2>
          )}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
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
              transition: 'var(--transition-colors)'
            }}
            aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={isSidebarCollapsed
                ? "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                : "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64043 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8646C8.64036 12.0535 8.32394 12.0433 8.13508 11.8418L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"}
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Theme Switcher */}
        {!isSidebarCollapsed && (
          <div style={{
            padding: 'var(--spacing-4)',
            borderBottom: '1px solid var(--border-primary)'
          }}>
            <label style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--text-secondary)',
              display: 'block',
              marginBottom: 'var(--spacing-2)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-wider)'
            }}>
              Theme
            </label>
            <select
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.target.value)}
              className="input input-sm"
              style={{ width: '100%' }}
            >
              {themes.map(theme => (
                <option key={theme.id} value={theme.id}>{theme.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Navigation */}
        <nav style={{
          flex: 1,
          padding: 'var(--spacing-2)',
          overflowY: 'auto'
        }}>
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `sidebar-nav-item ${isActive ? 'sidebar-nav-item-active' : ''}`
              }
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
                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start'
              }}
              title={isSidebarCollapsed ? item.label : undefined}
            >
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                flexShrink: 0
              }}>
                {item.icon}
              </span>
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{
        flex: 1,
        padding: 'var(--spacing-6)',
        overflow: 'auto'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}