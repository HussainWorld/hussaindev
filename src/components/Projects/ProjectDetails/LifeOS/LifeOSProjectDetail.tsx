import '../Reboot01/Reboot01ProjectDetail.css'
import HostingNote from '../shared/HostingNote'
import ProjectShot from '../shared/ProjectShot'
import lifeosActivity from '../../../../assets/lifeosActivity.jpg'

type LifeOSProjectDetailProps = {
  onBack: () => void
  portalTarget?: HTMLElement | null
}

function LifeOSProjectDetail({ onBack, portalTarget }: LifeOSProjectDetailProps) {
  return (
    <section className="project-detail lifeos-detail">
      <header className="project-detail-header">
        <div className="project-detail-heading">
          <h1 className="project-detail-title">LifeOS</h1>
        </div>
        <p className="project-detail-summary">
          Personal life dashboard with an AI assistant that acts on my data. Built and
          self-hosted solo.
        </p>
      </header>

      <HostingNote>Runs on my own home server.</HostingNote>

      <ProjectShot
        src={lifeosActivity}
        alt="LifeOS activity detail with GPS route and heart rate"
        title="Activity Detail"
        caption="Activity detail — GPS route and heart rate zones from a synced run."
        portalTarget={portalTarget}
      />

      <div className="project-detail-grid">
        <div className="project-detail-card">
          <p className="project-detail-card-label">Role</p>
          <p className="project-detail-card-body">Solo — Build to Deploy</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Status</p>
          <p className="project-detail-card-body">Live — Private Deployment</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Stack</p>
          <p className="project-detail-card-body">
            Next.js · Go · Python · PostgreSQL · Gemini · Docker
          </p>
        </div>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Features</h2>
        <ul className="project-detail-list">
          <li>Tasks and goals with progress tracking</li>
          <li>Nutrition logging with calories and macros</li>
          <li>Activity tracking synced from Strava</li>
          <li>AI running coach that builds adaptive training plans</li>
          <li>Chat assistant with persistent history and memory</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Highlights</h2>
        <ul className="project-detail-list">
          <li>The AI has 17 typed tools — it really creates tasks, logs meals and runs, and updates goals</li>
          <li>The running coach is its own agent, adapting plans from real runs and training load</li>
          <li>Four services in three languages — Next.js, Go, Python, Postgres — behind one proxy</li>
          <li>JWT auth with bcrypt and rotating refresh tokens</li>
          <li>Self-hosted on my own server with Docker</li>
        </ul>
      </div>

      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>
    </section>
  )
}

export default LifeOSProjectDetail
