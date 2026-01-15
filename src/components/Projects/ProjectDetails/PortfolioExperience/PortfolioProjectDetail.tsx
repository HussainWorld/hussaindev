import './PortfolioProjectDetail.css'

type PortfolioProjectDetailProps = {
  onBack: () => void
}

function PortfolioProjectDetail({ onBack }: PortfolioProjectDetailProps) {
  return (
    <section className="project-detail portfolio-detail">
      <header className="project-detail-header">
        <p className="project-detail-tag">Web - Live</p>
        <h1 className="project-detail-title">Portfolio Experience</h1>
        <p className="project-detail-summary">
          A mobile-first portfolio designed for clear storytelling and fast navigation.
        </p>
      </header>

      <div className="portfolio-detail-callout">
        <h2 className="portfolio-detail-callout-title">Project Goal</h2>
        <p className="portfolio-detail-callout-body">
          Create a clean, focused experience that highlights skills, projects, and contact
          paths in under 60 seconds.
        </p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Highlights</h2>
        <ul className="project-detail-list">
          <li>Mobile-first layout optimized for the iPhone mockup view.</li>
          <li>Clear navigation between Home, Projects, About, and Contact.</li>
          <li>Consistent typography and spacing for easy scanning.</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Tech Stack</h2>
        <p className="project-detail-body">React, TypeScript, Vite</p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Outcome</h2>
        <p className="project-detail-body">
          A modern portfolio that communicates quickly, supports future project pages, and
          keeps the layout consistent across tabs.
        </p>
      </div>

      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>
    </section>
  )
}

export default PortfolioProjectDetail
