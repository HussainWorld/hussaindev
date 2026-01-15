import './App.css'
import IPhoneMockup from './components/IPhoneMockup'
import IPhoneScreen from './components/IPhoneScreen'
import pfp from './assets/mePFP-White.jpg'

function App() {
  return (
    <main className="hero">
      <div className="intro">
        <img src={pfp} alt="Hussain Nader" className="intro-avatar" />
        <p className="eyebrow">Hello, I am</p>
        <h1>Hussain</h1>
        <p className="lede">Software Engineer | Mobile App Developer</p>
      </div>

      <div className="device">
        <IPhoneMockup>
          <IPhoneScreen />
        </IPhoneMockup>
      </div>
    </main>
  )
}

export default App
