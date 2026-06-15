import { useCallback } from 'react'
import { STORAGE_KEYS } from '../../shared/constants/storageKeys'
import { readLegacyThemeMode } from '../../shared/lib/migrateStorage'
import { useLocalStorage } from '../../shared/hooks/useLocalStorage'

type ThemeMode = 'light' | 'dark'

function getSystemMode(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialMode(): ThemeMode {
  return readLegacyThemeMode() ?? getSystemMode()
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
