import { useEffect, useId, useState } from 'react'
import './Reboot01ProjectDetail.css'
import reboot01MobileApp from '../../../../assets/reboot01MobileApp.png'
import reboot01Logo from '../../../../assets/reboot01Logo.png'

type Reboot01ProjectDetailProps = {
  onBack: () => void
}

function Reboot01ProjectDetail({ onBack }: Reboot01ProjectDetailProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const lightboxId = useId()

  useEffect(() => {
    if (!isPreviewOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isPreviewOpen])

  return (
    <section className="project-detail reboot01-detail">
      <header className="project-detail-header">
        <div className="project-detail-heading">
          <img src={reboot01Logo} alt="Reboot01 logo" className="project-detail-logo" />
          <div>
            {/* <p className="project-detail-tag">Mobile - In Progress</p> */}
            <h1 className="project-detail-title">Reboot01 Mobile App</h1>
          </div>
        </div>
        <p className="project-detail-summary">
          Mobile companion for Reboot01 students to track projects, audits, attendance, and
          progress in real time.
        </p>
      </header>

      <div className="project-detail-hero">
        <button
          type="button"
          className="project-detail-image-button"
          onClick={() => setIsPreviewOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isPreviewOpen}
          aria-controls={lightboxId}
          aria-label="View the Reboot01 mobile app screenshot full screen"
        >
          <img
            src={reboot01MobileApp}
            alt="Reboot01 mobile app screenshot"
            className="project-detail-image"
          />
          <span className="project-detail-image-hint" aria-hidden="true">
            Tap to view full screen
          </span>
        </button>
      </div>
      {isPreviewOpen ? (
        <div
          id={lightboxId}
          className="project-detail-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Reboot01 mobile app screenshot full screen"
          onClick={() => setIsPreviewOpen(false)}
        >
          <img
            src={reboot01MobileApp}
            alt="Reboot01 mobile app screenshot"
            className="project-detail-lightbox-image"
          />
          <p className="project-detail-lightbox-hint" aria-hidden="true">
            Tap anywhere to close
          </p>
        </div>
      ) : null}

      <div className="project-detail-grid">
        <div className="project-detail-card">
          <p className="project-detail-card-label">Role</p>
          <p className="project-detail-card-body">Mobile App Developer</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Status</p>
          <p className="project-detail-card-body">Building core flows</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Stack</p>
          <p className="project-detail-card-body">React Native, Expo, GraphQL, Supabase, Go</p>
        </div>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Overview</h2>
        <p className="project-detail-body">
          The Reboot 01 Student App centralizes academic progress into a single mobile
          experience. It connects directly to the Reboot 01 API to deliver live updates,
          reminders, and synchronized data so students always know what is due, what is next,
          and how they are performing. The goal is to automate reminders, simplify tracking,
          and make progress transparent across the entire program.
        </p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Core Modules</h2>
        <ul className="project-detail-list">
          <li>Authentication with secure, token-based sessions.</li>
          <li>Dashboard with program details, status, and progress summaries.</li>
          <li>Audits tracking with overdue, pending, and completed filters.</li>
          <li>Projects list and detail pages with requirements and deadlines.</li>
          <li>Timeline views (calendar + vertical) with dynamic due dates.</li>
          <li>Notifications for audits, deadlines, and campus events.</li>
          <li>Attendance tracking integrated with the campus fingerprint check-in system.</li>
          <li>Skills and profile pages showing milestones, levels, and student info.</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Tech Stack</h2>
        <ul className="project-detail-list">
          <li>React Native + Expo + TypeScript for the mobile client.</li>
          <li>Go-based RESTful API for middleware logic and data processing.</li>
          <li>GraphQL integration with the Reboot 01 API.</li>
          <li>Supabase for caching and user-specific data.</li>
          <li>Expo Push Notifications for real-time alerts.</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Quality Goals</h2>
        <ul className="project-detail-list">
          <li>Security via encrypted API communication and token-based auth.</li>
          <li>Performance with optimized queries and real-time synchronization.</li>
          <li>Reliability through accurate, automated data syncing.</li>
          <li>UX that is clear, responsive, and built for fast scanning.</li>
          <li>Planned enhancement: dark mode.</li>
        </ul>
      </div>

      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>
    </section>
  )
}

export default Reboot01ProjectDetail
