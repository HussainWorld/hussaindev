type HostingNoteProps = {
  children: React.ReactNode
}

/** Highlighted note for how a project is hosted — self-hosting is the point. */
function HostingNote({ children }: HostingNoteProps) {
  return (
    <div className="project-hosting">
      <span className="project-hosting-icon" aria-hidden="true">
        🏠
      </span>
      <p className="project-hosting-text">
        <span className="project-hosting-label">Self-Hosted</span>
        {children}
      </p>
    </div>
  )
}

export default HostingNote
