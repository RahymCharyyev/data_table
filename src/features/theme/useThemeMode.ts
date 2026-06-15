import { useCallback } from 'react'
import { STORAGE_KEYS } from '../../shared/constants/storageKeys'
import { useLocalStorage } from '../../shared/hooks/useLocalStorage'

type ThemeMode = 'light' | 'dark'

function getSystemMode(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialMode(): ThemeMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.themeMode)
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
  } catch {
    // ignore
  }
  return getSystemMode()
}

export function useThemeMode() {
  const [mode, setMode] = useLocalStorage<ThemeMode>(
    STORAGE_KEYS.themeMode,
    getInitialMode,
  )

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [setMode])

  return { mode, toggleMode }
}
