import { createContext } from 'react'
import type { useThemeMode } from './useThemeMode'

type ThemeModeContextValue = ReturnType<typeof useThemeMode>

export const ThemeModeContext = createContext<ThemeModeContextValue | null>(null)
