import { IoSunny, IoMoon } from 'react-icons/io5'
import './ThemeToggle.css'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      type="button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="theme-toggle-icon">
        {theme === 'light' ? <IoMoon /> : <IoSunny />}
      </span>
    </button>
  )
}

export default ThemeToggle
