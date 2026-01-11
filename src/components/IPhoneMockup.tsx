import './IPhoneMockup.css'
import iphoneMockup from '../assets/iphoneMockup.png'

interface IPhoneMockupProps {
  children?: React.ReactNode
}

function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <div className="phone-mockup-container">
      <div className="phone-mockup-inner">
        {/* Content layer (behind the phone frame) */}
        <div className="phone-content">
          {children}
        </div>

        {/* Phone frame overlay with green screen removed */}
        <img
          src={iphoneMockup}
          alt="iPhone mockup frame"
          className="phone-frame-overlay"
        />
      </div>
    </div>
  )
}

export default IPhoneMockup
