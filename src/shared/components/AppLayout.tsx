import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
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
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          left: -9999,
          zIndex: 9999,
          px: 2,
          py: 1,
          bgcolor: 'background.paper',
          color: 'text.primary',
          textDecoration: 'none',
          '&:focus': {
            left: 8,
            top: 8,
          },
        }}
      >
        {STRINGS.skipToContent}
      </Box>

      <AppBar
        position="static"
        elevation={1}
        sx={{ viewTransitionName: 'app-header' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="h1"
            sx={{ flexGrow: 1, textWrap: 'balance' }}
          >
            {STRINGS.appTitle}
          </Typography>
          {bookCount !== undefined ? (
            <Chip
              label={STRINGS.booksCount(bookCount)}
              size="small"
              sx={{ mr: 2, bgcolor: 'rgba(255,255,255,0.15)', color: 'inherit' }}
            />
          ) : null}
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container
        id="main-content"
        component="main"
        maxWidth="xl"
        sx={{ flex: 1, py: 2, display: 'flex', flexDirection: 'column' }}
      >
        {children}
      </Container>
    </Box>
  )
}
