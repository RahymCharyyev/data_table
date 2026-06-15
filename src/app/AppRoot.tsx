import { useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import App from './App'
import { ErrorBoundary } from '../shared/components/ErrorBoundary'
import { useThemeModeContext } from '../features/theme/useThemeModeContext'
import { createAppTheme } from '../features/theme/theme'

export function AppRoot() {
  const { mode } = useThemeModeContext()
  const theme = useMemo(() => createAppTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </LocalizationProvider>
    </ThemeProvider>
  )
}
