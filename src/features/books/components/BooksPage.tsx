import { lazy, Suspense } from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import { STRINGS } from '../../../shared/constants/strings'
import type { BookRow } from '../model/types'

const BooksDataGrid = lazy(() =>
  import('./BooksDataGrid').then((module) => ({ default: module.BooksDataGrid })),
)

interface BooksPageProps {
  books: BookRow[]
  loading: boolean
  error: string | null
  retry: () => void
}

export function BooksPage({ books, loading, error, retry }: BooksPageProps) {
  if (loading) {
    return (
      <Box
        role="status"
        aria-live="polite"
        aria-busy="true"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          flex: 1,
          minHeight: 400,
        }}
      >
        <CircularProgress aria-hidden="true" />
        <Box component="span" sx={{ clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)', height: 1, overflow: 'hidden', position: 'absolute', whiteSpace: 'nowrap', width: 1 }}>
          {STRINGS.loading}
        </Box>
      </Box>
    )
  }

  if (error) {
    return (
      <Alert
        severity="error"
        role="alert"
        action={
          <Button color="inherit" size="small" onClick={() => void retry()}>
            {STRINGS.errors.retry}
          </Button>
        }
        sx={{ mb: 2 }}
      >
        {error}
      </Alert>
    )
  }

  return (
    <Paper
      elevation={2}
      sx={{
        flex: 1,
        minHeight: 500,
        height: 'calc(100vh - 112px)',
        overflow: 'hidden',
      }}
    >
      <Suspense
        fallback={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <CircularProgress aria-label={STRINGS.loading} />
          </Box>
        }
      >
        <BooksDataGrid books={books} />
      </Suspense>
    </Paper>
  )
}
