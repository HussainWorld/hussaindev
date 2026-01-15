import './Reboot01ProjectDetail.css'
import reboot01MobileApp from '../../../../assets/reboot01MobileApp.png'
import reboot01Logo from '../../../../assets/reboot01Logo.png'

type Reboot01ProjectDetailProps = {
  onBack: () => void
}

function Reboot01ProjectDetail({ onBack }: Reboot01ProjectDetailProps) {
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
          React Native app with a GraphQL data layer, Supabase backend, and Go middleware services.
        </p>
      </header>

      <div className="project-detail-hero">
        <img
          src={reboot01MobileApp}
          alt="Reboot01 mobile app screenshot"
          className="project-detail-image"
        />
      </div>

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
          <p className="project-detail-card-body">React Native, GraphQL, Supabase, Go</p>
        </div>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Overview</h2>
        <p className="project-detail-body">
          This project focuses on reliable data flows, scalable APIs, and a smooth UX for
          mobile-first users. I am leading the UI implementation and integrating the GraphQL
          layer with Supabase and custom Go services.
        </p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Key Features</h2>
        <ul className="project-detail-list">
          <li>Authentication and onboarding flows built for speed and clarity.</li>
          <li>GraphQL-driven data layer with optimistic UI updates.</li>
          <li>Reusable UI components for consistent mobile design.</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Outcomes</h2>
        <ul className="project-detail-list">
          <li>Core flows are production-ready and aligned with backend contracts.</li>
          <li>Improved performance with focused data fetching and caching patterns.</li>
        </ul>
      </div>

      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>
    </section>
  )
}

export default Reboot01ProjectDetail
