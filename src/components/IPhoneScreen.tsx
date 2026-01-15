import { useState } from 'react'
import './IPhoneScreen.css'
import AboutPage from './About/AboutPage'
import ContactPage from './Contact/ContactPage'
import Home from './Home/Home'
import NavBar, { type NavTab } from './Nav/NavBar'
import ProjectsPage from './Projects/ProjectsPage'
import ProjectsDetailPage from './Projects/ProjectsDetailPage'
import { getProjectById } from './Projects/projectsData'

function IPhoneScreen() {
  const [activeTab, setActiveTab] = useState<NavTab>('home')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab)
    setSelectedProjectId(null)
  }

  const handleProjectOpen = (projectId: string) => {
    setSelectedProjectId(projectId)
  }

  const handleProjectBack = () => {
    setSelectedProjectId(null)
  }

  const selectedProject = selectedProjectId ? getProjectById(selectedProjectId) : null

  return (
    <div className="portfolio-screen">
      <div className="portfolio-content">
        {selectedProject ? (
          <ProjectsDetailPage project={selectedProject} onBack={handleProjectBack} />
        ) : activeTab === 'about' ? (
          <AboutPage />
        ) : activeTab === 'projects' ? (
          <ProjectsPage onSelectProject={handleProjectOpen} />
        ) : activeTab === 'contact' ? (
          <ContactPage />
        ) : (
          <Home />
        )}
      </div>

      <NavBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}

export default IPhoneScreen
