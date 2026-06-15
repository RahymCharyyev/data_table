import { Alert, Box, Button, CircularProgress, Paper } from '@mui/material'
import { BooksDataGrid } from './BooksDataGrid'
import { STRINGS } from '../../../shared/constants/strings'
import type { BookRow } from '../model/types'

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
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          minHeight: 400,
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Alert
        severity="error"
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
      <BooksDataGrid books={books} />
    </Paper>
  )
}
