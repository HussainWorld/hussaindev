import '../Reboot01/Reboot01ProjectDetail.css'
import reboot01Logo from '../../../../assets/reboot01Logo.png'

type TimelineServiceProjectDetailProps = {
  onBack: () => void
}

function TimelineServiceProjectDetail({ onBack }: TimelineServiceProjectDetailProps) {
  return (
    <section className="project-detail timeline-service-detail">
      <header className="project-detail-header">
        <div className="project-detail-heading">
          <img src={reboot01Logo} alt="Reboot01 logo" className="project-detail-logo" />
          <h1 className="project-detail-title">Reboot Backend Service</h1>
        </div>
        <p className="project-detail-summary">
          Production Go backend powering the Reboot Coding Institute mobile app, SIS, and
          student progress tracking across all cohorts.
        </p>
      </header>

      <div className="project-detail-grid">
        <div className="project-detail-card">
          <p className="project-detail-card-label">Role</p>
          <p className="project-detail-card-body">Backend Developer</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Status</p>
          <p className="project-detail-card-body">Live — Production</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Stack</p>
          <p className="project-detail-card-body">Go · Gin · PostgreSQL · Supabase · Docker</p>
        </div>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Overview</h2>
        <p className="project-detail-body">
          A REST API built in Go that tracks student progress across Reboot01 cohorts, fires
          push notifications, and serves the mobile app's home screen dashboard. It syncs
          with the school's GraphQL API, manages cohort timelines, and handles push delivery
          via Expo Push, FCM, and APNS.
        </p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Core Features</h2>
        <ul className="project-detail-list">
          <li><strong>Student Progress Tracking</strong> — Syncs XP, audit ratios, and project completions daily. Computes each student's position, phase, and days ahead or behind schedule.</li>
          <li><strong>Cohort Timeline Management</strong> — Generates deadline schedules from curriculum templates, supports admin overrides with a full audit trail.</li>
          <li><strong>Push Notification Engine</strong> — Rules-based system running hourly. Deduplication at the DB level, 2-week cooldown between repeat alerts, and per-student quiet hours.</li>
          <li><strong>Dashboard Endpoint</strong> — Single GET /dashboard fires 13 parallel queries returning rank, XP, audit trend, attendance, deadlines, streak, and next milestone.</li>
          <li><strong>BioTime Attendance</strong> — Integrated attendance records from the campus biometric system.</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Tech Stack</h2>
        <ul className="project-detail-list">
          <li>Go 1.25 + Gin</li>
          <li>PostgreSQL on Supabase — 20+ tables</li>
          <li>GraphQL client with JWT auto-refresh</li>
          <li>Expo Push / FCM / APNS</li>
          <li>Prometheus metrics</li>
          <li>Docker</li>
          <li>AWS SES</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Scale</h2>
        <ul className="project-detail-list">
          <li>Serves multiple active cohorts of 30–60 students each.</li>
          <li>Dashboard aggregates 13 data sources per request.</li>
          <li>Full sync across all cohorts completes in ~5 minutes using 16 parallel workers.</li>
          <li>Notification system evaluates every enrolled student hourly with no duplicate delivery.</li>
        </ul>
      </div>

      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>
    </section>
  )
}

export default TimelineServiceProjectDetail
