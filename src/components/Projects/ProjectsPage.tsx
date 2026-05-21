import './ProjectsPage.css'
import { projects, type ProjectId } from './projectsData'

type ProjectsPageProps = {
  onSelectProject: (projectId: ProjectId) => void
}

function ProjectsPage({ onSelectProject }: ProjectsPageProps) {
  return (
    <section className="projects-page">
      <header className="projects-header">
        <p className="projects-kicker">Projects</p>
        <h1 className="projects-title">Selected Work</h1>
        <p className="projects-subtitle">
          A few highlights that show how I build products from idea to delivery.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-card"
            onClick={() => onSelectProject(project.id)}
          >
            {project.image ? (
              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} screenshot`}
                  loading="lazy"
                  className="project-image"
                />
              </div>
            ) : null}
            <div className="project-content">
              <p className="project-tag">{project.tag}</p>
              <h2 className="project-title">
                {project.cardTitle
                  ? project.cardTitle.map((line, i) => (
                      <span key={i} style={{ display: 'block' }}>{line}</span>
                    ))
                  : project.title}
              </h2>
              <p className="project-body">{project.summary}</p>
              <div className="project-meta">
                <span className="project-stack-label">Stack</span>
                <p className="project-stack">{project.stack}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* <div className="projects-note">
        Want more case studies? See the Contact page to reach me.
      </div> */}
    </section>
  )
}

export default ProjectsPage
