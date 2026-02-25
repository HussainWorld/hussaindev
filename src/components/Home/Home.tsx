import './Home.css'
import pfp from '../../assets/mePFP-White.jpg'
import type { NavTab } from '../Nav/NavBar'

interface HomeProps {
  onTabChange?: (tab: NavTab) => void
}

function Home({ onTabChange }: HomeProps) {
  return (
    <section className="home-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={pfp} alt="Hussain Nader" className="profile-avatar-img" />
        </div>
        <h1 className="profile-name">Hussain Nader</h1>
        <p className="profile-title">Software Engineer | Mobile Developer</p>
      </div>


      {/* Availability Chip */}
      <div className="availability">
        <span className="availability-dot" aria-hidden="true" />
        <p className="availability-text">Open to roles & freelance</p>
      </div>

      {/* Quick Action Buttons */}
      <div className="action-row">
        <button
          className="action-btn"
          type="button"
          onClick={() => onTabChange?.('projects')}
        >
          View Projects
        </button>
        <button
          className="action-btn action-btn-outline"
          type="button"
          onClick={() => onTabChange?.('contact')}
        >
          Contact Me
        </button>
      </div>

      {/* What I Build */}
      <section className="highlights-section">
        <h2 className="section-title">What I Build</h2>
        <div className="highlights-grid">
          <article className="highlight-card">
            <h3 className="highlight-title">Mobile Apps</h3>
            <p className="highlight-body">
              React Native + Expo apps with smooth UX and solid performance.
            </p>
          </article>
          <article className="highlight-card">
            <h3 className="highlight-title">Web Platforms</h3>
            <p className="highlight-body">
              Modern React apps with responsive, polished UI.
            </p>
          </article>
          <article className="highlight-card">
            <h3 className="highlight-title">APIs & Services</h3>
            <p className="highlight-body">
              Node.js and Go backends, REST & GraphQL APIs.
            </p>
          </article>
        </div>
      </section>
    </section>
  )
}

export default Home
