import { useLayoutEffect, useRef, useState } from 'react'
import './IPhoneScreen.css'
import AboutPage from './About/AboutPage'
import ContactPage from './Contact/ContactPage'
import Home from './Home/Home'
import NavBar, { type NavTab } from './Nav/NavBar'
import ProjectsPage from './Projects/ProjectsPage'
import Reboot01ProjectDetail from './Projects/ProjectDetails/Reboot01/Reboot01ProjectDetail'
import HamoorProjectDetail from './Projects/ProjectDetails/Hamoor/HamoorProjectDetail'
import LifeOSProjectDetail from './Projects/ProjectDetails/LifeOS/LifeOSProjectDetail'
import RebootSISProjectDetail from './Projects/ProjectDetails/RebootSIS/RebootSISProjectDetail'
import TimelineServiceProjectDetail from './Projects/ProjectDetails/TimelineService/TimelineServiceProjectDetail'
import PortfolioProjectDetail from './Projects/ProjectDetails/PortfolioExperience/PortfolioProjectDetail'
import type { ProjectId } from './Projects/projectsData'

function IPhoneScreen() {
  const [activeTab, setActiveTab] = useState<NavTab>('home')
  const [selectedProjectId, setSelectedProjectId] = useState<ProjectId | null>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Every screen starts at the top. Without this you land wherever the previous
  // screen was scrolled to — usually at the bottom, next to the back button.
  useLayoutEffect(() => {
    contentRef.current?.scrollTo({ top: 0 })
  }, [activeTab, selectedProjectId])

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab)
    setSelectedProjectId(null)
  }

  const handleProjectOpen = (projectId: ProjectId) => {
    setSelectedProjectId(projectId)
    setActiveTab('projects')
  }

  const handleProjectBack = () => {
    setSelectedProjectId(null)
  }

  return (
    <div className="portfolio-screen">
      <div className="portfolio-content" ref={contentRef}>
        {selectedProjectId === 'reboot01-mobile-app' ? (
          <Reboot01ProjectDetail onBack={handleProjectBack} portalTarget={portalRef.current} />
        ) : selectedProjectId === 'hamoor-store' ? (
          <HamoorProjectDetail onBack={handleProjectBack} />
        ) : selectedProjectId === 'life-os' ? (
          <LifeOSProjectDetail onBack={handleProjectBack} portalTarget={portalRef.current} />
        ) : selectedProjectId === 'reboot-sis' ? (
          <RebootSISProjectDetail onBack={handleProjectBack} portalTarget={portalRef.current} />
        ) : selectedProjectId === 'reboot-backend-service' ? (
          <TimelineServiceProjectDetail onBack={handleProjectBack} />
        ) : selectedProjectId === 'portfolio-experience' ? (
          <PortfolioProjectDetail onBack={handleProjectBack} />
        ) : activeTab === 'about' ? (
          <AboutPage />
        ) : activeTab === 'projects' ? (
          <ProjectsPage onSelectProject={handleProjectOpen} />
        ) : activeTab === 'contact' ? (
          <ContactPage />
        ) : (
          <Home onTabChange={handleTabChange} />
        )}
      </div>

      <NavBar activeTab={activeTab} onTabChange={handleTabChange} />
      <div ref={portalRef} />
    </div>
  )
}

export default IPhoneScreen
