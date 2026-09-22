import { useEffect } from 'react'
import './App.css'
import DeviceMockup from './components/DeviceMockup'
import IPhoneScreen from './components/IPhoneScreen'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './hooks/useTheme'
import { useIsMobile } from './hooks/useIsMobile'

function App() {
  const { theme, toggleTheme } = useTheme()
  const isMobile = useIsMobile()

  // Phones already are the phone — showing a phone mockup inside one wastes the
  // screen. The flag lets the CSS swap the mockup palette for a real app shell.
  useEffect(() => {
    const root = document.documentElement
    if (isMobile) {
      root.setAttribute('data-app-mode', 'fullscreen')
    } else {
      root.removeAttribute('data-app-mode')
    }
  }, [isMobile])

  if (isMobile) {
    return (
      <div className="app-standalone">
        <IPhoneScreen standalone theme={theme} onToggleTheme={toggleTheme} />
      </div>
    )
  }

  return (
    <main className="hero">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <p className="wordmark">hussaindev.com</p>

      <div className="device">
        <DeviceMockup>
          <IPhoneScreen />
        </DeviceMockup>
      </div>
    </main>
  )
}

export default App
