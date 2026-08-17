import '../Reboot01/Reboot01ProjectDetail.css'
import ProjectShot from '../shared/ProjectShot'
import reboot01Logo from '../../../../assets/reboot01Logo.png'
import sisDashboard from '../../../../assets/sisDashboard.png'

type RebootSISProjectDetailProps = {
  onBack: () => void
  portalTarget?: HTMLElement | null
}

function RebootSISProjectDetail({ onBack, portalTarget }: RebootSISProjectDetailProps) {
  return (
    <section className="project-detail rebootsis-detail">
      <header className="project-detail-header">
        <div className="project-detail-heading">
          <img src={reboot01Logo} alt="Reboot01 logo" className="project-detail-logo" />
          <div>
            <h1 className="project-detail-title">Reboot SIS</h1>
          </div>
        </div>
        <p className="project-detail-summary">
          Internal Student Information System for Reboot Coding Institute — managing cohorts,
          progress, attendance, and document requests from a single dashboard.
        </p>
      </header>

      <a
        href="https://sis.reboot01.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-detail-link"
      >
        View SIS
      </a>

      <ProjectShot
        src={sisDashboard}
        alt="Reboot SIS admin dashboard"
        title="Admin Dashboard"
        caption="Admin dashboard — student data blurred for privacy."
        portalTarget={portalTarget}
      />

      <div className="project-detail-grid">
        <div className="project-detail-card">
          <p className="project-detail-card-label">Role</p>
          <p className="project-detail-card-body">Full Stack Developer</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Status</p>
          <p className="project-detail-card-body">Live — Internal Use</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Stack</p>
          <p className="project-detail-card-body">Next.js · TypeScript · Go · GraphQL · Prisma · SQLite</p>
        </div>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Overview</h2>
        <p className="project-detail-body">
          A full-stack web app used by Reboot Coding Institute staff and students to manage
          cohorts, track progress, handle document requests, and monitor attendance — all from
          one dashboard. It bridges three data sources: a Go backend service, the school's
          GraphQL API, and a BioTime biometric attendance system.
        </p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Core Features</h2>
        <ul className="project-detail-list">
          <li><strong>Aski (AI Assistant)</strong> — Built-in LLM assistant powered by DeepSeek. Staff find students, cohorts, and records by just asking, instead of navigating the dashboard.</li>
          <li><strong>Admin Dashboard</strong> — Cohort management, student profiles, timeline Gantt view, piscine tracking, alumni, and audit log.</li>
          <li><strong>Student Self-Service</strong> — Profile summary, attendance calendar, and document request submission.</li>
          <li><strong>Tamkeen Document Requests</strong> — Eligibility rules, cooldown periods, and multi-month backfill on submission.</li>
          <li><strong>Attendance</strong> — Integrated with the BioTime biometric check-in system.</li>
          <li><strong>External API</strong> — REST endpoint exposing attendance data for the companion mobile app.</li>
          <li><strong>Real-time</strong> — WebSocket listeners for live audit event streaming.</li>
          <li><strong>Notifications</strong> — System-wide notification centre.</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Tech Stack</h2>
        <ul className="project-detail-list">
          <li>Next.js 14 (App Router) + TypeScript</li>
          <li>Tailwind CSS + Radix UI + shadcn/ui</li>
          <li>Apollo Client — GraphQL (school API)</li>
          <li>Go — timeline-svc REST backend</li>
          <li>Prisma + SQLite — operational data</li>
          <li>NextAuth v5 — authentication</li>
          <li>AWS SES — email</li>
          <li>WebSockets — real-time event streaming</li>
          <li>DeepSeek LLM — the Aski assistant</li>
          <li>FullCalendar + custom Gantt components</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">What I Built</h2>
        <ul className="project-detail-list">
          <li>Designed and built the full Next.js application from scratch.</li>
          <li>Admin dashboard with cohorts, students, timelines, piscine, alumni, and audit views.</li>
          <li>Tamkeen document request workflow with eligibility logic and backfill.</li>
          <li>BioTime attendance integration and clean external REST API for the mobile app.</li>
          <li>Gantt timeline refactored into composable components.</li>
          <li>WebSocket listeners for real-time audit streaming.</li>
        </ul>
      </div>

      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>
    </section>
  )
}

export default RebootSISProjectDetail
