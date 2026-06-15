import {
  AppBar,
  Box,
  Chip,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import type { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
  bookCount?: number
  mode: 'light' | 'dark'
  onToggleTheme: () => void
}

export function AppLayout({
  children,
  bookCount,
  mode,
  onToggleTheme,
}: AppLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Book Catalog
          </Typography>
          {bookCount !== undefined && (
            <Chip
              label={`${bookCount} books`}
              size="small"
              sx={{ mr: 2, bgcolor: 'rgba(255,255,255,0.15)', color: 'inherit' }}
            />
          )}
          <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
            <IconButton color="inherit" onClick={onToggleTheme} aria-label="toggle theme">
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ flex: 1, py: 2, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Container>
    </Box>
  )
}
