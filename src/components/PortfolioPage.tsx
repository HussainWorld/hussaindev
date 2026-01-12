import { useState } from 'react'
import './PortfolioPage.css'
import AboutPage from './About/AboutPage'
import NavBar, { type NavTab } from './Nav/NavBar'
import pfp from '../assets/mePFP.png'

function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<NavTab>('home')

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab)
  }

  return (
    <div className="portfolio-screen">
      <div className="portfolio-content">
        {activeTab === 'about' ? (
          <AboutPage />
        ) : (
          <>
            {/* Profile Header */}
            <div className="profile-header">
              <div className="profile-avatar">
                <img src={pfp} alt="Hussain Nader" className="profile-avatar-img" />
              </div>
              <h1 className="profile-name">Hussain Nader</h1>
              <p className="profile-title">Software Engineer</p>
              <p className="profile-bio">
                Building modern websites and mobile apps with React, TypeScript, and Node.js
              </p>
            </div>

            {/* Skills Section */}
            <section className="skills-section">
              <h2 className="section-title">
                <span>💡</span>
                Skills & Technologies
              </h2>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon">⚛️</div>
                  <p className="skill-name">React</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">📘</div>
                  <p className="skill-name">TypeScript</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">🟢</div>
                  <p className="skill-name">Node.js</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">⚡</div>
                  <p className="skill-name">Vite</p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
              <h2 className="section-title">
                <span>📬</span>
                Get in Touch
              </h2>
              <div className="contact-links">
                <a href="mailto:hello@hussaindev.com" className="contact-link">
                  <span className="contact-icon">✉️</span>
                  hello@hussaindev.com
                </a>
                <a href="https://github.com/hussaindev" className="contact-link">
                  <span className="contact-icon">💻</span>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/hussaindev" className="contact-link">
                  <span className="contact-icon">💼</span>
                  LinkedIn
                </a>
              </div>
            </section>
          </>
        )}
      </div>

      <NavBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}

export default PortfolioPage
