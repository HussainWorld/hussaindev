import './App.css'
import DeviceMockup from './components/DeviceMockup'
import IPhoneScreen from './components/IPhoneScreen'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="hero">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <p className="wordmark">hussain.dev</p>

      <div className="device">
        <DeviceMockup>
          <IPhoneScreen />
        </DeviceMockup>
      </div>
    </main>
  )
}

export default App
