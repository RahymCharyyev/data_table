import { useContext } from 'react'
import { ThemeModeContext } from './themeModeContext'

export function useThemeModeContext() {
  const context = useContext(ThemeModeContext)
  if (!context) {
    throw new Error('useThemeModeContext must be used within ThemeModeProvider')
  }
  return context
}
