import './ProjectsDetailPage.css'
import type { Project } from './projectsData'

type ProjectsDetailPageProps = {
  project: Project
  onBack: () => void
}

function ProjectsDetailPage({ project, onBack }: ProjectsDetailPageProps) {
  return (
    <section className="project-detail">
      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>

      <header className="project-detail-header">
        <p className="project-detail-tag">{project.tag}</p>
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-summary">{project.summary}</p>
      </header>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Overview</h2>
        <p className="project-detail-body">{project.description}</p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Tech Stack</h2>
        <p className="project-detail-body">{project.stack}</p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Outcomes</h2>
        <ul className="project-detail-list">
          {project.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProjectsDetailPage
