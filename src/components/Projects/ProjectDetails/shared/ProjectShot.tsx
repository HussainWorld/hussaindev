import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './ProjectShot.css'

type ProjectShotProps = {
  src: string
  alt: string
  caption: string
  /** Shown in the full screen title bar. */
  title: string
  portalTarget?: HTMLElement | null
}

/**
 * A wide app screenshot that expands to fill the phone screen. Wide shots are
 * unreadable when fitted to a narrow screen, so the expanded view zooms and
 * pans rather than only scaling to fit.
 */
function ProjectShot({ src, alt, caption, title, portalTarget }: ProjectShotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setIsZoomed(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  // Zooming lands on the left edge, where the app's own navigation is.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage || !isZoomed) {
      return
    }

    stage.scrollLeft = 0
  }, [isZoomed])

  const close = () => {
    setIsOpen(false)
    setIsZoomed(false)
  }

  const lightbox = (
    <div
      className="project-shot-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title}, full screen`}
      onClick={close}
    >
      <div className="project-shot-bar" onClick={(event) => event.stopPropagation()}>
        <p className="project-shot-bar-title">{title}</p>
        <button
          type="button"
          className="project-shot-close"
          onClick={close}
          aria-label="Close full screen"
        >
          ✕
        </button>
      </div>

      <div
        ref={stageRef}
        className={`project-shot-stage${isZoomed ? ' is-zoomed' : ''}`}
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="project-shot-full"
          onClick={() => setIsZoomed((prev) => !prev)}
        />
      </div>

      <p className="project-shot-hint" onClick={(event) => event.stopPropagation()}>
        {isZoomed ? 'Drag to pan. Tap the image to zoom out.' : 'Tap the image to zoom in.'}
      </p>
    </div>
  )

  return (
    <figure className="project-shot">
      <button
        type="button"
        className="project-shot-button"
        onClick={() => setIsOpen(true)}
        aria-label={`View ${title} full screen`}
      >
        <img src={src} alt={alt} loading="lazy" className="project-shot-img" />
        <span className="project-shot-hint-pill" aria-hidden="true">
          Tap to expand
        </span>
      </button>
      <figcaption className="project-shot-caption">{caption}</figcaption>

      {isOpen ? (portalTarget ? createPortal(lightbox, portalTarget) : lightbox) : null}
    </figure>
  )
}

export default ProjectShot
