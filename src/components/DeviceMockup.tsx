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

          {/* Android frame: pure CSS */}
          <div className={`android-frame ${device === 'android' ? 'frame-visible' : 'frame-hidden'}`}>
            <div className="android-camera-cutout" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceMockup
