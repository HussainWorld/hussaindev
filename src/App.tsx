import './App.css'
import IPhoneMockup from './components/IPhoneMockup'
import PortfolioPage from './components/PortfolioPage'

function App() {
  return (
    <main className="hero">
      <div className="intro">
        <p className="eyebrow">Hello, I am</p>
        <h1>Hussain</h1>
        <p className="lede">Software Engineer | Mobile App Developer</p>
      </div>

      <div className="device">
        <IPhoneMockup>
          <PortfolioPage />
        </IPhoneMockup>
      </div>
    </main>
  )
}

export default App
