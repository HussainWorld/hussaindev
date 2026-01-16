import './ContactPage.css'
import {
  IoChatboxEllipsesOutline,
  IoDocumentTextOutline,
  IoDownloadOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from 'react-icons/io5'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import cvPdf from '../../assets/Hussain Nader - Software Engineer - CV.pdf';

function ContactPage() {
  const [state, handleSubmit, reset] = useForm("xpqqzgzv");
  const [showToast, setShowToast] = React.useState(false);
  const [toastOffset, setToastOffset] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStartY = React.useRef<number | null>(null);
  const toastTimeout = React.useRef<number | null>(null);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  React.useEffect(() => {
    if (!state.succeeded) {
      return;
    }

    setShowToast(true);
    setToastOffset(0);
    formRef.current?.reset();
    reset();

    if (toastTimeout.current) {
      window.clearTimeout(toastTimeout.current);
    }

    toastTimeout.current = window.setTimeout(() => {
      setShowToast(false);
    }, 3500);

    return () => {
      if (toastTimeout.current) {
        window.clearTimeout(toastTimeout.current);
      }
    };
  }, [state.succeeded, reset]);

  const dismissToast = () => {
    setShowToast(false);
    setToastOffset(0);

    if (toastTimeout.current) {
      window.clearTimeout(toastTimeout.current);
      toastTimeout.current = null;
    }
  };

  const handleToastPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!showToast) {
      return;
    }

    dragStartY.current = event.clientY;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleToastPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartY.current === null) {
      return;
    }

    const delta = event.clientY - dragStartY.current;
    setToastOffset(delta < 0 ? delta : 0);
  };

  const handleToastPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartY.current === null) {
      return;
    }

    const delta = event.clientY - dragStartY.current;
    dragStartY.current = null;
    setIsDragging(false);

    if (delta < -40) {
      dismissToast();
    } else {
      setToastOffset(0);
    }
  };

  const handleToastPointerCancel = () => {
    dragStartY.current = null;
    setIsDragging(false);
    setToastOffset(0);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setShowToast(false);
    void handleSubmit(event);
  };
  return (
    <section className="contact-page">
      <div
        className="contact-toast"
        data-visible={showToast}
        data-dragging={isDragging}
        role="status"
        aria-live="polite"
        aria-hidden={!showToast}
        onPointerDown={handleToastPointerDown}
        onPointerMove={handleToastPointerMove}
        onPointerUp={handleToastPointerUp}
        onPointerCancel={handleToastPointerCancel}
        style={isDragging ? { transform: `translateY(${toastOffset}px)` } : undefined}
      >
        <p className="contact-toast-title">Thanks! Your message was sent.</p>
        <p className="contact-toast-body">I will get back to you soon.</p>
      </div>

      <header className="contact-header">
        <p className="contact-kicker">Contact</p>
        <h1 className="contact-title">Let's talk about your next build.</h1>
        <p className="contact-subtitle">
          Share a brief about your project, timeline, and goals. Use the form or email me
          directly.
        </p>
      </header>

      <div className="contact-methods">


        <div className="contact-card contact-card--download">
          <div className="contact-card-icon">
            <IoDocumentTextOutline aria-hidden="true" />
          </div>
          <div className="contact-card-body">
            <p className="contact-card-label">CV</p>
            <p className="contact-card-meta">PDF resume</p>
          </div>
          <a
            className="contact-card-action"
            href={cvPdf}
            download="Hussain-Nader-CV.pdf"
          >
            <IoDownloadOutline aria-hidden="true" />
            Download
          </a>
        </div>


        <div className="contact-card">
          <div className="contact-card-icon">
            <IoChatboxEllipsesOutline aria-hidden="true" />
          </div>
          <div className="contact-card-body">
            <p className="contact-card-label">Phone</p>
            <a href="tel:+97336065303" className="contact-card-link">
              +973 36065303
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">
            <IoMailOutline aria-hidden="true" />
          </div>
          <div className="contact-card-body">
            <p className="contact-card-label">Email</p>
            <a href="mailto:hussain.nader.it@gmail.com" className="contact-card-link">
              hussain.nader.it@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">
            <IoLogoGithub aria-hidden="true" />
          </div>
          <div className="contact-card-body">
            <p className="contact-card-label">GitHub</p>
            <a href="https://github.com/HussainWorld" className="contact-card-link">
              github.com/HussainWorld
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">
            <IoLogoLinkedin aria-hidden="true" />
          </div>
          <div className="contact-card-body">
            <p className="contact-card-label">LinkedIn</p>
            <a href="https://linkedin.com/in/hussaindev-bh" className="contact-card-link">
              linkedin.com/in/hussaindev-bh
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form-wrap">
        <div className="contact-form-header">
          <div className="contact-form-icon">
            <IoChatboxEllipsesOutline aria-hidden="true" />
          </div>
          <div>
            <p className="contact-form-title">Send a message</p>
            <p className="contact-form-subtitle">
              Include a quick summary and the best way to reach you.
            </p>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleFormSubmit}>
          <div className="contact-row">
            <label className="contact-field">
              <span className="contact-field-label">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
              <ValidationError
                prefix='name'
                field='name'
                errors={state.errors}
              />
            </label>
            <label className="contact-field">
              <span className="contact-field-label">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                required
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </label>
          </div>

          <label className="contact-field">
            <span className="contact-field-label">Project type</span>
            <select name="projectType" defaultValue="" required>
              <option value="" disabled>
                Pick one
              </option>
              <option value="web">Web app</option>
              <option value="mobile">Mobile app</option>
              <option value="fullstack">Full stack build</option>
              <option value="consulting">Consulting</option>
            </select>
            <ValidationError
              prefix="Project type" 
              field="projectType" 
              errors={state.errors}
            />
          </label>

          <label className="contact-field">
            <span className="contact-field-label">Message</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your goals, timeline, and any must-haves."
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </label>

          <button className="contact-submit" type="submit" disabled={state.submitting}>
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactPage
