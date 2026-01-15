import './Home.css'
// import pfp from '../../assets/mePFP.png'

function Home() {
  return (
    <section className="home-page">
      {/* Profile Header */}
      <div className="profile-header">
        {/* <div className="profile-avatar">
          <img src={pfp} alt="Hussain Nader" className="profile-avatar-img" />
        </div> */}
        {/* <h1 className="profile-name">Hussain Nader</h1> */}
        {/* <p className="profile-title">Full-Stack & Mobile Developer</p> */}
        {/* <h1 className="profile-name">Full-Stack & Mobile Developer</h1> */}
        <p className="profile-kicker">Home</p>
        <p className="profile-bio">
          I build and deploy, web and mobile products with React, React Native, TypeScript,
          Node.js, and Go.
        </p>
      </div>

      <div className="availability">
        <span className="availability-dot" aria-hidden="true" />
        <p className="availability-text">Open to roles and freelance opportunities</p>
      </div>

      <section className="highlights-section">
        <h2 className="section-title">
          <span>🚀</span>
          What I Build
        </h2>
        <div className="highlights-grid">
          <article className="highlight-card">
            <h3 className="highlight-title">Mobile Apps</h3>
            <p className="highlight-body">
              React Native + Expo experiences with smooth UX, offline-friendly flows, and
              performance tuning.
            </p>
          </article>
          <article className="highlight-card">
            <h3 className="highlight-title">Web Platforms</h3>
            <p className="highlight-body">
              Modern React apps with clean architecture, responsive UI, and accessibility in
              mind.
            </p>
          </article>
          <article className="highlight-card">
            <h3 className="highlight-title">APIs & Data</h3>
            <p className="highlight-body">
              Node.js and Go services, REST/GraphQL APIs, and scalable data layers.
            </p>
          </article>
        </div>
      </section>

      {/* <section className="proof-section">
        <h2 className="section-title">
          <span>✅</span>
          Proof Points
        </h2>
        <ul className="proof-list">
          <li>General Assembly Software Engineering graduate.</li>
          <li>Building a React Native app with GraphQL, Supabase, and Go services.</li>
        </ul>
      </section> */}

      {/* Skills Section */}
      {/* <section className="skills-section">
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
            <div className="skill-icon">📱</div>
            <p className="skill-name">React Native</p>
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
            <div className="skill-icon">🐹</div>
            <p className="skill-name">Go</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🔗</div>
            <p className="skill-name">GraphQL</p>
          </div>
        </div>
      </section> */}

      {/* <section className="projects-section">
        <h2 className="section-title">
          <span>🧩</span>
          Featured Projects
        </h2>
        <div className="projects-grid">
          <article className="project-card">
            <p className="project-tag">Mobile - In Progress</p>
            <h3 className="project-title">Reboot01 Mobile App</h3>
            <p className="project-body">React Native, GraphQL, Supabase, Go middleware.</p>
            <p className="project-outcome">
              Outcome: building core flows with a reliable data layer.
            </p>
          </article>
          <article className="project-card">
            <p className="project-tag">Web - Live</p>
            <h3 className="project-title">Portfolio Experience</h3>
            <p className="project-body">React, TypeScript, Vite.</p>
            <p className="project-outcome">
              Outcome: a mobile-first showcase with clear navigation.
            </p>
          </article>
        </div>
      </section> */}
    </section>
  )
}

export default Home
