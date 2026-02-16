import './App.css'
import DeviceMockup from './components/DeviceMockup'
import IPhoneScreen from './components/IPhoneScreen'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './hooks/useTheme'
import pfp from './assets/mePFP-White.jpg'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="hero">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <div className="intro">
        <img src={pfp} alt="Hussain Nader" className="intro-avatar" />
        <p className="eyebrow">Hello, I am</p>
        <h1>Hussain</h1>
        <p className="lede">Software Engineer | Mobile App Developer</p>
      </div>

      <div className="device">
        <DeviceMockup>
          <IPhoneScreen />
        </DeviceMockup>
      </div>
    </main>
  )
}

export default App
