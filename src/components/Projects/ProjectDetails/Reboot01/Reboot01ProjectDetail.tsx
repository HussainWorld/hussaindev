import { type PointerEvent, useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './Reboot01ProjectDetail.css'
import reboot01MobileApp from '../../../../assets/reboot01MobileApp.png'
import reboot01Logo from '../../../../assets/reboot01Logo.png'
import googlePlayIcon from '../../../../assets/googlePlayIcon.png'

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
  const heroImage = screenshotSources.length > 0 ? screenshotSources[0] : reboot01MobileApp
  const previewImages = screenshotSources.length > 1 ? screenshotSources.slice(1) : [reboot01MobileApp]
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const lightboxId = useId()
  const dragStartRef = useRef<{ x: number; y: number } | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  // The drag is driven straight onto the DOM node instead of through state:
  // a mouse can emit several moves per frame, and re-rendering ten slides on
  // each one is what made dragging feel heavy.
  const dragOffsetRef = useRef(0)
  const frameRef = useRef<number | null>(null)
  const axisRef = useRef<'undecided' | 'x' | 'y'>('undecided')
  const activeIndexRef = useRef(0)
  const slideCount = previewImages.length

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  useEffect(() => {
    if (!isPreviewOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false)
        setIsDragging(false)
        dragStartRef.current = null
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goToNext()
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goToPrevious()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isPreviewOpen, goToNext, goToPrevious])

  // Trackpad and horizontal-wheel swiping — the gesture a laptop actually
  // makes. It arrives as wheel events, which a pointer-drag handler never sees.
  useEffect(() => {
    const carousel = carouselRef.current
    if (!isPreviewOpen || !carousel) {
      return
    }

    let settling = false

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
        return
      }

      event.preventDefault()

      if (settling || Math.abs(event.deltaX) < 12) {
        return
      }

      settling = true
      window.setTimeout(() => {
        settling = false
      }, 320)

      if (event.deltaX > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }

    carousel.addEventListener('wheel', handleWheel, { passive: false })
    return () => carousel.removeEventListener('wheel', handleWheel)
  }, [isPreviewOpen, goToNext, goToPrevious])

  // Owns the track's transform whenever a drag is not in progress, so the
  // snap-back and the slide change both animate through the CSS transition.
  useEffect(() => {
    const track = trackRef.current
    if (!track || isDragging) {
      return
    }

    track.style.transform = `translateX(${-activeIndex * 100}%)`
  }, [activeIndex, isDragging, isPreviewOpen])

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const handlePreviewOpen = () => {
    setActiveIndex(0)
    setIsPreviewOpen(true)
  }

  const endDrag = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }
    dragStartRef.current = null
    dragOffsetRef.current = 0
    axisRef.current = 'undecided'
  }

  const closePreview = () => {
    setIsPreviewOpen(false)
    setIsDragging(false)
    endDrag()
  }

  const handleCarouselPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return
    }

    event.currentTarget.setPointerCapture(event.pointerId)
    dragStartRef.current = { x: event.clientX, y: event.clientY }
    dragOffsetRef.current = 0
    axisRef.current = 'undecided'
    setIsDragging(true)
  }

  const handleCarouselPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const start = dragStartRef.current
    if (!start) {
      return
    }

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y

    // Decide the axis once, at the start. Comparing the two on every move let a
    // little vertical wobble mid-drag freeze the slide until the pointer came
    // back — which read as the drag stuttering.
    if (axisRef.current === 'undecided') {
      if (Math.abs(deltaX) < 6 && Math.abs(deltaY) < 6) {
        return
      }
      axisRef.current = Math.abs(deltaX) >= Math.abs(deltaY) ? 'x' : 'y'
    }

    if (axisRef.current !== 'x') {
      return
    }

    dragOffsetRef.current = deltaX

    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null
        const track = trackRef.current
        if (track) {
          track.style.transform = `translateX(calc(${-activeIndexRef.current * 100}% + ${
            dragOffsetRef.current
          }px))`
        }
      })
    }
  }

  const handleCarouselPointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    const start = dragStartRef.current
    if (!start) {
      return
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y
    const axis = axisRef.current

    endDrag()
    setIsDragging(false)

    // Proportional to the carousel, so the same flick works at any width.
    const width = carouselRef.current?.clientWidth ?? 320
    const swipeThreshold = Math.max(36, width * 0.16)
    const tapThreshold = 8

    if (axis === 'x' && Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    } else if (Math.abs(deltaX) < tapThreshold && Math.abs(deltaY) < tapThreshold) {
      closePreview()
    }
  }

  const handleCarouselPointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    endDrag()
    setIsDragging(false)
  }

  return (
    <section className="project-detail reboot01-detail">
      <header className="project-detail-header">
        <div className="project-detail-heading">
          <img src={reboot01Logo} alt="Reboot01 logo" className="project-detail-logo project-detail-logo--sm" />
          <h1 className="project-detail-title project-detail-title--long">Reboot Coding Institute Mobile App</h1>
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
            src={heroImage}
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
                  ref={carouselRef}
                  className="project-detail-lightbox-carousel"
                  onPointerDown={handleCarouselPointerDown}
                  onPointerMove={handleCarouselPointerMove}
                  onPointerUp={handleCarouselPointerEnd}
                  onPointerCancel={handleCarouselPointerCancel}
                  onClick={(event) => event.stopPropagation()}
                  aria-label="Reboot01 mobile app screenshots"
                >
                  <button
                    type="button"
                    className="project-detail-lightbox-arrow is-prev"
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation()
                      goToPrevious()
                    }}
                    aria-label="Previous screenshot"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="project-detail-lightbox-arrow is-next"
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation()
                      goToNext()
                    }}
                    aria-label="Next screenshot"
                  >
                    ›
                  </button>
                  <div
                    ref={trackRef}
                    className={`project-detail-lightbox-track${isDragging ? ' is-dragging' : ''}`}
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
                  Swipe, use ← →, or tap the arrows. Tap the image to close.
                </p>
              </div>
            )
            return portalTarget ? createPortal(lightbox, portalTarget) : lightbox
          })()
        : null}

      <div className="project-detail-links">
        <a
          href="https://apps.apple.com/bh/app/reboot-coding-institute/id6781645014"
          target="_blank"
          rel="noopener noreferrer"
          className="project-detail-link"
        >
          View on App Store
          <svg
            className="project-detail-link-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.05 12.04c-.03-2.9 2.37-4.29 2.48-4.36-1.35-1.98-3.46-2.25-4.21-2.28-1.79-.18-3.5 1.05-4.41 1.05-.91 0-2.31-1.03-3.8-1-1.96.03-3.77 1.14-4.78 2.9-2.04 3.54-.52 8.78 1.46 11.65.97 1.4 2.12 2.98 3.63 2.92 1.46-.06 2.01-.94 3.77-.94 1.76 0 2.26.94 3.8.91 1.57-.03 2.56-1.43 3.52-2.84 1.11-1.63 1.57-3.21 1.6-3.29-.03-.02-3.06-1.18-3.09-4.67zM14.5 3.68c.8-.97 1.34-2.32 1.19-3.68-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.24-1.22 3.56 1.29.1 2.6-.65 3.41-1.62z" />
          </svg>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.reboot01.students&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="project-detail-link"
        >
          View on Google Play
          <img src={googlePlayIcon} alt="" className="project-detail-link-icon" aria-hidden="true" />
        </a>
      </div>

      <div className="project-detail-grid">
        <div className="project-detail-card">
          <p className="project-detail-card-label">Role</p>
          <p className="project-detail-card-body">Mobile App Developer</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Status</p>
          <p className="project-detail-card-body">Live on App Store &amp; Google Play</p>
        </div>
        <div className="project-detail-card">
          <p className="project-detail-card-label">Stack</p>
          <p className="project-detail-card-body">React Native · Expo · TypeScript · GraphQL · Go · Supabase</p>
        </div>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Overview</h2>
        <p className="project-detail-body">
          A mobile app for Reboot Coding Institute students to track audits, projects,
          attendance, XP, and events — all in one place. Live data, push notifications,
          and biometric lock.
        </p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Problem</h2>
        <p className="project-detail-body">
          No dedicated mobile interface, and the web platform isn't designed for mobile.
          Students had to jump between platforms to track audits, deadlines, and attendance.
        </p>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Core Features</h2>
        <ul className="project-detail-list">
          <li><strong>Dashboard</strong> — XP level, program status, current module, and upcoming deadlines.</li>
          <li><strong>Audits</strong> — Track overdue, pending, and completed audits. Book audits in-app.</li>
          <li><strong>Projects</strong> — Project list with requirements, deadlines, and status.</li>
          <li><strong>Calendar & Timeline</strong> — Two schedule views with live due dates from the API.</li>
          <li><strong>XP Activity</strong> — XP earned, skill progress, and milestones over time.</li>
          <li><strong>Events</strong> — Campus events with notification opt-in per event.</li>
          <li><strong>Attendance</strong> — Integrated with the campus fingerprint check-in system.</li>
          <li><strong>Stipend Requests</strong> — Submit and track stipend requests.</li>
          <li><strong>Push Notifications</strong> — Real-time alerts with per-category preferences.</li>
          <li><strong>Notification Inbox</strong> — Persistent inbox for all past notifications.</li>
          <li><strong>Biometric Lock</strong> — Face ID, Touch ID, or fingerprint app lock.</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Tech Stack</h2>
        <ul className="project-detail-list">
          <li>React Native + Expo + TypeScript</li>
          <li>Expo Router</li>
          <li>GraphQL</li>
          <li>Go</li>
          <li>Supabase</li>
          <li>Expo Push Notifications</li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h2 className="project-detail-section-title">Design System</h2>
        <p className="project-detail-body">
          4 themes — Dark, Dim, Light, and Fun. Custom typography, configurable accent colors,
          and adjustable font scale.
        </p>
      </div>

      <button type="button" className="project-detail-back" onClick={onBack}>
        Back to Projects
      </button>
    </section>
  )
}

export default Reboot01ProjectDetail
