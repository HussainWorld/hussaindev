import './AboutPage.css'
import pfp from '../../assets/mePFP.png'

function AboutPage() {
  return (
    <section className="about-page">
      <header className="about-header">
        <div className="about-avatar">
          <img src={pfp} alt="Hussain Nader" className="about-avatar-img" />
        </div>
        <p className="about-kicker">About</p>
        <h1 className="about-title">Hussain Nader</h1>
        <p className="about-subtitle">Software Engineer</p>
      </header>

      <div className="about-section">
        <h2 className="about-section-title">Professional Summary</h2>
        <p className="about-section-body">
          Aspiring full stack and mobile developer with hands-on experience building modern,
          scalable applications using React, React Native, TypeScript, Node.js, Go, MongoDB,
          PostgreSQL, and REST and GraphQL APIs. Graduate of the General Assembly Software
          Engineering bootcamp with solid experience in building end-to-end full stack
          applications. Currently completing a Bachelor's in Programming at Bahrain Polytechnic
          and developing a real-world mobile application for Reboot01, involving React Native,
          GraphQL, Supabase, and custom Golang middleware services. Passionate about building
          real world digital solutions.
        </p>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">Technical Skills</h2>
        <div className="about-skill-row">
          <p className="about-skill-label">Languages</p>
          <p className="about-skill-value">JavaScript, TypeScript, Python, Java, C#, Go</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Frameworks and Libraries</p>
          <p className="about-skill-value">
            React.js, React Native, Express.js, Node.js, Django, .NET, Bootstrap, EJS
          </p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Databases</p>
          <p className="about-skill-value">
            PostgreSQL, SQL Server, MySQL, MongoDB, Supabase, Firebase
          </p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Mobile Development</p>
          <p className="about-skill-value">React Native, Expo</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Backend and APIs</p>
          <p className="about-skill-value">REST APIs, GraphQL APIs, Go middleware services</p>
        </div>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">Languages</h2>
        <ul className="about-list">
          <li>
            <span className="about-list-label">Arabic:</span> Native
          </li>
          <li>
            <span className="about-list-label">English:</span> Fluent
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">Education</h2>
        <ul className="about-list">
          <li>
            Software Engineering Immersive Bootcamp, General Assembly - Oct 2024 to May 2025
          </li>
          <li>Bachelor in Programming, Bahrain Polytechnic - Expected May 2026</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">Additional Programs</h2>
        <ul className="about-list">
          <li>Full Stack Development Program (In Progress) - Reboot01 Institution</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">Awards</h2>
        <ul className="about-list">
          <li>
            Bahrain National Team - 3rd Place, Arab Cross Country Running Championship (2023)
          </li>
          <li>Batelco Night Duathlon - 1st Place (Team), 2nd Place (Individual) - 2023</li>
        </ul>
      </div>
    </section>
  )
}

export default AboutPage
