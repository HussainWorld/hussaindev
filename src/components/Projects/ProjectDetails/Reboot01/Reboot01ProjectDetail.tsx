import { type PointerEvent, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './Reboot01ProjectDetail.css'
import reboot01MobileApp from '../../../../assets/reboot01MobileApp.png'
import reboot01Logo from '../../../../assets/reboot01Logo.png'

type ScreenshotModule = {
  default: string
}

const screenshotModules = import.meta.glob(
  '../../../../assets/MobileAppScreenShots/*.{png,jpg,jpeg,webp,avif}',
  { eager: true }
) as Record<string, ScreenshotModule>

const getScreenshotOrder = (path: string) => {
  const match = path.match(/(\d+(?:\.\d+)?)/)
  return match ? Number.parseFloat(match[1]) : Number.POSITIVE_INFINITY
}

const screenshotSources = Object.entries(screenshotModules)
  .sort(([pathA], [pathB]) => {
    const orderA = getScreenshotOrder(pathA)
    const orderB = getScreenshotOrder(pathB)

    if (orderA !== orderB) {
      return orderA - orderB
    }

    return pathA.localeCompare(pathB)
  })
  .map(([, module]) => module.default)

type Reboot01ProjectDetailProps = {
  onBack: () => void
  portalTarget?: HTMLElement | null
}

function Reboot01ProjectDetail({ onBack, portalTarget }: Reboot01ProjectDetailProps) {
  const previewImages = screenshotSources.length > 0 ? screenshotSources : [reboot01MobileApp]
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const lightboxId = useId()
  const dragStartRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    if (!isPreviewOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false)
        setDragOffset(0)
        setIsDragging(false)
        dragStartRef.current = null
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isPreviewOpen])

  const handlePreviewOpen = () => {
    setActiveIndex(0)
    setIsPreviewOpen(true)
  }

  const closePreview = () => {
    setIsPreviewOpen(false)
    setDragOffset(0)
    setIsDragging(false)
    dragStartRef.current = null
  }

  const handleCarouselPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return
    }

    event.currentTarget.setPointerCapture(event.pointerId)
    dragStartRef.current = { x: event.clientX, y: event.clientY }
    setIsDragging(true)
    setDragOffset(0)
  }

  const handleCarouselPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) {
      return
    }

    const deltaX = event.clientX - dragStartRef.current.x
    const deltaY = event.clientY - dragStartRef.current.y

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setDragOffset(deltaX)
    }
  }

  const handleCarouselPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) {
      return
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    const deltaX = event.clientX - dragStartRef.current.x
    const deltaY = event.clientY - dragStartRef.current.y

    dragStartRef.current = null
    setIsDragging(false)

    const swipeThreshold = 50
    const tapThreshold = 10

    if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        setActiveIndex((prev) => (prev + 1) % previewImages.length)
      } else {
        setActiveIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length)
      }
    } else if (Math.abs(deltaX) < tapThreshold && Math.abs(deltaY) < tapThreshold) {
      closePreview()
    }

    setDragOffset(0)
  }

  const handleCarouselPointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    dragStartRef.current = null
    setIsDragging(false)
    setDragOffset(0)
  }

  return (
    <section className="project-detail reboot01-detail">
      <header className="project-detail-header">
        <div className="project-detail-heading">
          <img src={reboot01Logo} alt="Reboot01 logo" className="project-detail-logo" />
          <div>
            {/* <p className="project-detail-tag">Mobile - In Progress</p> */}
            <h1 className="project-detail-title">Reboot01 Mobile App</h1>
          </div>
        </div>
        <p className="project-detail-summary">
          Mobile companion for Reboot01 students to track projects, audits, attendance, and
          progress in real time.
        </p>
      </header>

      <div className="project-detail-hero">
        <button
          type="button"
          className="project-detail-image-button"
          onClick={handlePreviewOpen}
          aria-haspopup="dialog"
          aria-expanded={isPreviewOpen}
          aria-controls={lightboxId}
          aria-label="View the Reboot01 mobile app screenshots full screen"
        >
          <img
            src={previewImages[0]}
            alt="Reboot01 mobile app screenshot"
            className="project-detail-image"
          />
          <span className="project-detail-image-hint" aria-hidden="true">
            Tap to view full screen
          </span>
        </button>
      </div>
      {isPreviewOpen
        ? (() => {
            const lightbox = (
              <div
                id={lightboxId}
                className="project-detail-lightbox"
                role="dialog"
                aria-modal="true"
                aria-label="Reboot01 mobile app screenshots full screen"
                onClick={closePreview}
              >
                <div
                  className="project-detail-lightbox-carousel"
                  onPointerDown={handleCarouselPointerDown}
                  onPointerMove={handleCarouselPointerMove}
                  onPointerUp={handleCarouselPointerEnd}
                  onPointerCancel={handleCarouselPointerCancel}
                  onClick={(event) => event.stopPropagation()}
                  aria-label="Reboot01 mobile app screenshots"
                >
                  <div
                    className={`project-detail-lightbox-track${isDragging ? ' is-dragging' : ''}`}
                    style={{
                      transform: `translateX(calc(${-activeIndex * 100}% + ${dragOffset}px))`,
                    }}
                  >
                    {previewImages.map((image, index) => (
                      <div className="project-detail-lightbox-slide" key={image}>
                        <img
                          src={image}
                          alt={`Reboot01 mobile app screenshot ${index + 1} of ${
                            previewImages.length
                          }`}
                          className="project-detail-lightbox-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="project-detail-lightbox-pagination"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="project-detail-lightbox-dots" aria-hidden="true">
                    {previewImages.map((image, index) => (
                      <span
                        className={`project-detail-lightbox-dot${
                          index === activeIndex ? ' is-active' : ''
                        }`}
                        key={image}
                      />
                    ))}
                  </div>
                  <span className="project-detail-lightbox-count">
                    {activeIndex + 1} / {previewImages.length}
                  </span>
                </div>
                <p className="project-detail-lightbox-hint" aria-hidden="true">
                  Swipe to view more. Tap to close.
                </p>
              </div>
            )
            return portalTarget ? createPortal(lightbox, portalTarget) : lightbox
          })()
        : null}

      <div className="project-detail-grid">
        <div className="project-detail-card">
          <p className="project-detail-card-label">Role</p>
          <p className="project-detail-card-body">Mobile App Developer</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Status</p>
          <p className="project-detail-card-body">Building core flows</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Stack</p>
          <p className="project-detail-card-body">React Native, Expo, GraphQL, Supabase, Go</p>
        </div>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Overview</h2>
        <p className="project-detail-body">
          The Reboot 01 Student App centralizes academic progress into a single mobile
          experience. It connects directly to the Reboot 01 API to deliver live updates,
          reminders, and synchronized data so students always know what is due, what is next,
          and how they are performing. The goal is to automate reminders, simplify tracking,
          and make progress transparent across the entire program.
        </p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Core Modules</h2>
        <ul className="project-detail-list">
          <li>Authentication with secure, token-based sessions.</li>
          <li>Dashboard with program details, status, and progress summaries.</li>
          <li>Audits tracking with overdue, pending, and completed filters.</li>
          <li>Projects list and detail pages with requirements and deadlines.</li>
          <li>Timeline views (calendar + vertical) with dynamic due dates.</li>
          <li>Push notifications for audits, deadlines, and campus events.</li>
          <li>Attendance tracking integrated with the campus fingerprint check-in system.</li>
          <li>Skills and profile pages showing milestones, levels, and student info.</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Tech Stack</h2>
        <ul className="project-detail-list">
          <li>React Native + Expo + TypeScript for the mobile client.</li>
          <li>Go-based RESTful API for middleware logic and data processing.</li>
          <li>GraphQL integration with the Reboot 01 API.</li>
          <li>Supabase for caching and user-specific data.</li>
          <li>Expo Push Notifications for real-time alerts.</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Quality Goals</h2>
        <ul className="project-detail-list">
          <li>Security via encrypted API communication and token-based auth.</li>
          <li>Performance with optimized queries and real-time synchronization.</li>
          <li>Reliability through accurate, automated data syncing.</li>
          <li>UX that is clear, responsive, and built for fast scanning.</li>
          <li>Planned enhancement: dark mode.</li>
        </ul>
      </div>

      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>
    </section>
  )
}

export default Reboot01ProjectDetail
