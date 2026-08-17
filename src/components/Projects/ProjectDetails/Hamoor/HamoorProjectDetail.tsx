import '../Reboot01/Reboot01ProjectDetail.css'
import './HamoorProjectDetail.css'
import HostingNote from '../shared/HostingNote'
import hamoorLogo from '../../../../assets/hamoorLogo.png'

type HamoorProjectDetailProps = {
  onBack: () => void
}

function HamoorProjectDetail({ onBack }: HamoorProjectDetailProps) {
  return (
    <section className="project-detail hamoor-detail">
      <header className="project-detail-header">
        <div className="project-detail-heading">
          <img src={hamoorLogo} alt="Hamoor logo" className="project-detail-logo project-detail-logo--wide" />
          <h1 className="project-detail-title">Hamoor Store</h1>
        </div>
        <p className="project-detail-summary">
          Self-hosted e-commerce store for a Bahraini board game. Built and deployed solo.
        </p>
      </header>

      <a
        href="https://hamoor.shop/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-detail-link"
      >
        Visit Store
      </a>

      <HostingNote>Runs on my own home server.</HostingNote>

      <div className="project-detail-grid">
        <div className="project-detail-card">
          <p className="project-detail-card-label">Role</p>
          <p className="project-detail-card-body">Solo — Build to Deploy</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Status</p>
          <p className="project-detail-card-body">Live — hamoor.shop</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Stack</p>
          <p className="project-detail-card-body">
            Next.js · TypeScript · PostgreSQL · Drizzle · Docker
          </p>
        </div>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Features</h2>
        <ul className="project-detail-list">
          <li>Product catalog with variants and categories</li>
          <li>Cart, checkout, and order history</li>
          <li>Accounts with email verification and saved addresses</li>
          <li>Admin dashboard — products, orders, customers, discounts</li>
          <li>Inventory tracking and discount codes</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Highlights</h2>
        <ul className="project-detail-list">
          <li>Prices calculated server-side only — never trusted from the client</li>
          <li>Atomic stock updates, so the last unit can't be oversold</li>
          <li>Admin access re-checked on every request, backed by database privileges</li>
          <li>Self-hosted on my own home server — app, database, storage, domain, and TLS</li>
        </ul>
      </div>

      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>
    </section>
  )
}

export default HamoorProjectDetail
