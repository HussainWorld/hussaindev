import './AboutPage.css'
// import pfp from '../../assets/mePFP.png'

function AboutPage() {
  return (
    <section className="about-page">
      <header className="about-header">
        {/* <div className="about-avatar">
          <img src={pfp} alt="Hussain Nader" className="about-avatar-img" />
        </div> */}
        <p className="about-kicker">About</p>
        {/* <h1 className="about-title">Hussain Nader</h1> */}
        <p className="about-subtitle">Programming | Software Engineer</p>
      </header>

      <div className="about-section">
        <h2 className="about-section-title">Professional Summary</h2>
        <p className="about-section-body">
          Full stack and mobile developer with hands-on experience building modern applications
          using React, React Native, TypeScript, Node.js, Go, and GraphQL. I enjoy translating
          product goals into reliable, <tr/> user-friendly experiences.
        </p>
      </div>

      {/* <div className="about-section">
        <h2 className="about-section-title">How I Work</h2>
        <p className="about-section-body">
          I care about clarity, feedback loops, and thoughtful UX. I prefer small releases,
          solid documentation, and data-informed improvements so teams can move fast without
          sacrificing quality.
        </p>
      </div> */}

      <div className="about-section">
        <h2 className="about-section-title">Education</h2>
        <ol className="about-timeline">
          <li className="about-timeline-item">
            <p className="about-timeline-role">Bahrain Polytechnic</p>
            <p className="about-timeline-body">
              Bachelor Degree in Programming
            </p>
            <p className="about-timeline-meta">Expected May 2026</p>
          </li>

          <li className="about-timeline-item">
            <p className="about-timeline-role">Reboot01 – Full Stack Developer Program (Current)</p>
            <p className="about-timeline-body">
              Project-based full-stack program focused on real-world web and mobile development.
            </p>
          </li>

          <li className="about-timeline-item">
            <p className="about-timeline-role">
              General Assembly - Software Engineering Immersive Bootcamp
            </p>
            <p className="about-timeline-body">
              Completed intensive full stack training with team-based delivery and production
              workflows.
            </p>
            <p className="about-timeline-meta">Oct 2024 - May 2025</p>
          </li>
        </ol>
      </div>

      {/* <div className="about-section">
        <h2 className="about-section-title">Notable Projects</h2>
        <div className="about-projects">
          <article className="about-project-card">
            <p className="about-project-kicker">Mobile - In Progress</p>
            <h3 className="about-project-title">Reboot01 Mobile App</h3>
            <p className="about-project-body">
              React Native, GraphQL, Supabase, Go middleware services.
            </p>
            <p className="about-project-outcome">
              Outcome: core flows and data layer in active development.
            </p>
          </article>
          <article className="about-project-card">
            <p className="about-project-kicker">Web - Live</p>
            <h3 className="about-project-title">Portfolio Experience</h3>
            <p className="about-project-body">React, TypeScript, Vite.</p>
            <p className="about-project-outcome">
              Outcome: mobile-first layout with clear navigation and content structure.
            </p>
          </article>
        </div>
      </div> */}

      <div className="about-section">
        <h2 className="about-section-title">Technical Skills</h2>
        <div className="about-skill-row">
          <p className="about-skill-label">Frontend</p>
          <p className="about-skill-value">React, TypeScript, Vite</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Mobile</p>
          <p className="about-skill-value">React Native, Expo</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Backend</p>
          <p className="about-skill-value">Node.js, Express.js, Go, .NET</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">APIs</p>
          <p className="about-skill-value">REST APIs, GraphQL APIs</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Data</p>
          <p className="about-skill-value">
            PostgreSQL, SQL Server, MySQL, MongoDB, Supabase, Firebase
          </p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Languages</p>
          <p className="about-skill-value">JavaScript, TypeScript, Python, Java, C#, Go</p>
        </div>
      </div>

      {/* <div className="about-section">
        <h2 className="about-section-title">Education & Programs</h2>
        <ul className="about-list">
          <li>Bachelor in Programming, Bahrain Polytechnic - Expected May 2026</li>
          <li>
            Software Engineering Immersive Bootcamp, General Assembly - Oct 2024 to May 2025
          </li>
          <li>Full Stack Development Program (In Progress) - Reboot01 Institution</li>
        </ul>
      </div> */}

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
