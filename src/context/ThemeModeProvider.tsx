import type { ReactNode } from 'react'
import { useThemeMode } from '../hooks/useThemeMode'
import { ThemeModeContext } from './themeModeContext'

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const value = useThemeMode()
  return (
    <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>
  )
}
