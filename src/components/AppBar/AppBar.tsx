import { IoArrowBack, IoMoon, IoSunny } from 'react-icons/io5'
import './AppBar.css'

interface AppBarProps {
  title: string
  theme?: 'light' | 'dark'
  onToggleTheme?: () => void
  /** Renders a leading back arrow when a sub-screen is open. */
  onBack?: () => void
}

function AppBar({ title, theme, onToggleTheme, onBack }: AppBarProps) {
  return (
    <header className="app-bar">
      <div className="app-bar-row">
        {onBack ? (
          <button
            className="app-bar-btn"
            type="button"
            onClick={onBack}
            aria-label="Go back"
          >
            <IoArrowBack />
          </button>
        ) : (
          <span className="app-bar-btn app-bar-btn-ghost" aria-hidden="true" />
        )}

        <h1 className="app-bar-title">{title}</h1>

        {onToggleTheme ? (
          <button
            className="app-bar-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <IoMoon /> : <IoSunny />}
          </button>
        ) : (
          <span className="app-bar-btn app-bar-btn-ghost" aria-hidden="true" />
        )}
      </div>
    </header>
  )
}

export default AppBar
