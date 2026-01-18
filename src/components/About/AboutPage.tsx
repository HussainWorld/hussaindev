import './AboutPage.css'
// import pfp from '../../assets/mePFP.png'
import bahrainPolytechnicLogo from '../../assets/BahrainPolytechnicLogo.png'
import generalAssemblyLogo from '../../assets/generalAssemblyLogo.svg'
import reboot01Logo from '../../assets/reboot01Logo.png'

function AboutPage() {
  return (
    <section className="about-page">
      <header className="about-header">
        {/* <div className="about-avatar">
          <img src={pfp} alt="Hussain Nader" className="about-avatar-img" />
        </div> */}
        <p className="about-kicker">About</p>
        <h1 className="about-title">Hussain Nader</h1>
        <p className="about-subtitle">Software Engineer | Mobile App Developer</p>
      </header>

      <div className="about-section">
        <h2 className="about-section-title">Professional Summary</h2>
        <p className="about-section-body">
          Full stack and mobile developer with hands-on experience building modern applications
          using React, React Native, TypeScript, Node.js, Go, and GraphQL. <tr/> I enjoy translating
          product goals into reliable, user-friendly experiences.
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
            <div className="about-timeline-heading">
              <img
                src={bahrainPolytechnicLogo}
                alt="Bahrain Polytechnic logo"
                className="about-logo"
              />
              <p className="about-timeline-role">Bahrain Polytechnic</p>
            </div>
            <p className="about-timeline-body">
              Bachelor Degree in Programming
            </p>
            <p className="about-timeline-meta">Expected May 2026</p>
          </li>

          <li className="about-timeline-item">
            <div className="about-timeline-heading">
              <img src={reboot01Logo} alt="Reboot01 logo" className="about-logo" />
              <p className="about-timeline-role">
                Reboot01 <tr/> Full Stack Developer Program
              </p>
            </div>
            <p className="about-timeline-body">
              Project-based full-stack program focused on real-world projects.
            </p>
            <p className="about-timeline-meta">Expected Aug 2025 - Aug 2027</p>
          </li>

          <li className="about-timeline-item">
            <div className="about-timeline-heading">
              <img
                src={generalAssemblyLogo}
                alt="General Assembly logo"
                className="about-logo"
              />
              <p className="about-timeline-role">
                General Assembly <tr/> Software Engineering Bootcamp
              </p>
            </div>
            <p className="about-timeline-body">
              Completed an intensive software engineering program covering frontend, backend, and APIs, with hands-on experience building
              <tr/> full-stack CRUD web applications.
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
          <p className="about-skill-label">Languages</p>
          <p className="about-skill-value">JavaScript, TypeScript, Python, Java, C#, Go</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Frontend</p>
          <p className="about-skill-value">React, TypeScript, Vite, Bootstrap, Tailwind CSS</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Mobile Development</p>
          <p className="about-skill-value">React Native, Expo</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Backend & Frameworks</p>
          <p className="about-skill-value">Node.js, Express.js, Go, Django, .NET</p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">APIs</p>
          <p className="about-skill-value">
            REST APIs, GraphQL APIs
          </p>
        </div>
        <div className="about-skill-row">
          <p className="about-skill-label">Databases & Data</p>
          <p className="about-skill-value">PostgreSQL, SQL Server, MySQL, MongoDB, Supabase, Firebase</p>
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
            Batelco Night Duathlon Race 2023 <tr/> 🥇 1st Place (Team)<tr/> 🥈 2nd Place (Individual)
          </li>
          <li>
            Bahrain National Team - 🥉 3rd Place <tr/> Arab Cross Country Running Championship 2023 (Egypt)
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutPage
