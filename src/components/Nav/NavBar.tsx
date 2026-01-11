export type NavTab = 'home' | 'projects' | 'about' | 'contact'

interface NavBarProps {
  activeTab: NavTab
  onTabChange: (tab: NavTab) => void
}

function NavBar({ activeTab, onTabChange }: NavBarProps) {
  return (
    <nav className="portfolio-tabbar" aria-label="Portfolio tabs">
      <button
        className={`tab-item${activeTab === 'home' ? ' active' : ''}`}
        type="button"
        aria-current={activeTab === 'home' ? 'page' : undefined}
        onClick={() => onTabChange('home')}
      >
        <span className="tab-icon">🏠</span>
        <span className="tab-label">Home</span>
      </button>
      <button
        className={`tab-item${activeTab === 'projects' ? ' active' : ''}`}
        type="button"
        aria-current={activeTab === 'projects' ? 'page' : undefined}
        onClick={() => onTabChange('projects')}
      >
        <span className="tab-icon">🗂️</span>
        <span className="tab-label">Projects</span>
      </button>
      <button
        className={`tab-item${activeTab === 'about' ? ' active' : ''}`}
        type="button"
        aria-current={activeTab === 'about' ? 'page' : undefined}
        onClick={() => onTabChange('about')}
      >
        <span className="tab-icon">👤</span>
        <span className="tab-label">About</span>
      </button>
      <button
        className={`tab-item${activeTab === 'contact' ? ' active' : ''}`}
        type="button"
        aria-current={activeTab === 'contact' ? 'page' : undefined}
        onClick={() => onTabChange('contact')}
      >
        <span className="tab-icon">✉️</span>
        <span className="tab-label">Contact</span>
      </button>
    </nav>
  )
}

export default NavBar
