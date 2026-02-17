import {
  IoHome,
  IoHomeOutline,
  IoBriefcase,
  IoBriefcaseOutline,
  IoPerson,
  IoPersonOutline,
  IoMail,
  IoMailOutline,
} from 'react-icons/io5'

export type NavTab = 'home' | 'projects' | 'about' | 'contact'

interface NavBarProps {
  activeTab: NavTab
  onTabChange: (tab: NavTab) => void
}

const tabs: { id: NavTab; label: string; icon: React.ReactNode; activeIcon: React.ReactNode }[] = [
  { id: 'home', label: 'Home', icon: <IoHomeOutline />, activeIcon: <IoHome /> },
  { id: 'projects', label: 'Projects', icon: <IoBriefcaseOutline />, activeIcon: <IoBriefcase /> },
  { id: 'about', label: 'About', icon: <IoPersonOutline />, activeIcon: <IoPerson /> },
  { id: 'contact', label: 'Contact', icon: <IoMailOutline />, activeIcon: <IoMail /> },
]

function NavBar({ activeTab, onTabChange }: NavBarProps) {
  const activeIndex = tabs.findIndex((t) => t.id === activeTab)

  return (
    <nav
      className="portfolio-tabbar"
      aria-label="Portfolio tabs"
      style={{ '--active-idx': activeIndex } as React.CSSProperties}
    >
      <div className="nav-pill-indicator" />
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            className={`tab-item${isActive ? ' active' : ''}`}
            type="button"
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="tab-icon" aria-hidden="true">
              {isActive ? tab.activeIcon : tab.icon}
            </span>
            <span className="tab-label">{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default NavBar
