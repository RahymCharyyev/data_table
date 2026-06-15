import type { ReactNode } from 'react'
import { ThemeModeProvider } from '../../features/theme/ThemeModeProvider'
import { QueryProvider } from './QueryProvider'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeModeProvider>{children}</ThemeModeProvider>
    </QueryProvider>
  )
}
