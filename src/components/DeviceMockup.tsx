import { useState, useRef, useCallback, useEffect } from 'react'
import './DeviceMockup.css'
import iphoneMockup from '../assets/iphoneMockup.png'

type DeviceType = 'iphone' | 'android'

interface DeviceMockupProps {
  children?: React.ReactNode
}

function DeviceMockup({ children }: DeviceMockupProps) {
  const [device, setDevice] = useState<DeviceType>('iphone')
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const timer = setTimeout(() => setHasEntered(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (!wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setTilt({ x, y })
    })
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    setTilt({ x: 0, y: 0 })
  }, [])

  const tiltX = tilt.y * -8
  const tiltY = tilt.x * 8
  const shadowX = tilt.x * 15
  const shadowY = tilt.y * 15

  const deviceStyle: React.CSSProperties = {
    transform: isHovering
      ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
  }

  const shadowStyle: React.CSSProperties = {
    filter: isHovering
      ? `drop-shadow(${shadowX}px ${shadowY + 20}px 40px rgba(0, 0, 0, 0.35))`
      : undefined,
  }

  return (
    <div className={`device-mockup-container ${hasEntered ? 'entered' : ''}`}>
      {/* Device Switcher Pill */}
      <div className="device-switcher" role="tablist" aria-label="Device type">
        <button
          className={`switcher-option ${device === 'iphone' ? 'active' : ''}`}
          role="tab"
          aria-selected={device === 'iphone'}
          onClick={() => setDevice('iphone')}
          type="button"
        >
          iPhone
        </button>
        <button
          className={`switcher-option ${device === 'android' ? 'active' : ''}`}
          role="tab"
          aria-selected={device === 'android'}
          onClick={() => setDevice('android')}
          type="button"
        >
          Android
        </button>
        <div
          className="switcher-indicator"
          style={{ transform: device === 'android' ? 'translateX(100%)' : 'translateX(0)' }}
        />
      </div>

      {/* Device Wrapper — handles tilt + shadow */}
      <div
        className="device-tilt-wrapper"
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={shadowStyle}
      >
        <div
          className={`device-body device-float ${device === 'iphone' ? 'show-iphone' : 'show-android'}`}
          style={deviceStyle}
        >
          {/* Content layer (behind the frame) */}
          <div className={`phone-content ${device === 'android' ? 'android-content' : 'iphone-content'}`}>
            {children}
          </div>

          {/* iPhone frame: existing PNG overlay */}
          <img
            src={iphoneMockup}
            alt="iPhone mockup frame"
            className={`phone-frame-overlay ${device === 'iphone' ? 'frame-visible' : 'frame-hidden'}`}
          />

          {/* Android frame: realistic CSS phone */}
          <div className={`android-frame ${device === 'android' ? 'frame-visible' : 'frame-hidden'}`}>
            {/* Side buttons */}
            <div className="android-btn-power" />
            <div className="android-btn-vol-up" />
            <div className="android-btn-vol-down" />

            {/* Earpiece speaker */}
            <div className="android-earpiece" />

            {/* Camera punch-hole */}
            <div className="android-camera-cutout">
              <div className="android-camera-lens" />
            </div>

            {/* Status bar */}
            <div className="android-status-bar">
              <span className="android-status-time">9:41</span>
              <div className="android-status-icons">
                <span className="android-status-nw">5G</span>
                <svg className="android-status-icon" viewBox="0 0 24 24">
                  <path d="M2 22h20V2zm18-2H6.83L20 6.83z" fill="white"/>
                </svg>
                <svg className="android-status-icon" viewBox="0 0 24 24">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" fill="white"/>
                </svg>
                <span className="android-status-batt">85</span>
                <svg className="android-status-icon android-battery-icon" viewBox="0 0 24 24">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* Navigation gesture bar */}
            <div className="android-nav-bar">
              <div className="android-gesture-pill" />
            </div>

            {/* Screen glass reflection */}
            <div className="android-screen-glare" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceMockup
