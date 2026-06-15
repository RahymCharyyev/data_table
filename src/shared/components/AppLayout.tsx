import {
  AppBar,
  Box,
  Chip,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'
import type { ReactNode } from 'react'
import { ThemeToggle } from '../../features/theme/ThemeToggle'
import { STRINGS } from '../constants/strings'

interface AppLayoutProps {
  children: ReactNode
  bookCount?: number
}

export function AppLayout({ children, bookCount }: AppLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            {STRINGS.appTitle}
          </Typography>
          {bookCount !== undefined && (
            <Chip
              label={STRINGS.booksCount(bookCount)}
              size="small"
              sx={{ mr: 2, bgcolor: 'rgba(255,255,255,0.15)', color: 'inherit' }}
            />
          )}
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ flex: 1, py: 2, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Container>
    </Box>
  )
}
