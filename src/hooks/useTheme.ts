import { useState, useEffect, useCallback } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme-preference'

/** Must match --md-surface in IPhoneScreen.css. */
const SURFACE_LIGHT = '#ffffff'
const SURFACE_DARK = '#131316'

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  // Dark is the default for a first visit; the toggle still overrides it and
  // the choice persists. Must match the pre-paint default in index.html.
  return 'dark'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  const applyTheme = useCallback((t: Theme) => {
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem(STORAGE_KEY, t)

    // Full-screen on a phone the browser chrome sits right against the app, so
    // it has to take the app's surface colour rather than the page's. iOS Safari
    // does not always repaint when the attribute is mutated in place, so swap
    // the whole node to force it to re-read.
    const old = document.querySelector('meta[name="theme-color"]')
    const meta = document.createElement('meta')
    meta.name = 'theme-color'
    meta.content = t === 'dark' ? SURFACE_DARK : SURFACE_LIGHT
    old?.remove()
    document.head.appendChild(meta)
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const next = e.matches ? 'dark' : 'light'
        setThemeState(next)
        applyTheme(next)
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [applyTheme])

  const toggleTheme = useCallback(() => {
    setThemeState(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      applyTheme(next)
      return next
    })
  }, [applyTheme])

  return { theme, toggleTheme } as const
}
