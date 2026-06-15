import { Alert, Box, Button, CircularProgress, Paper } from '@mui/material'
import { AppLayout } from './components/AppLayout'
import { BooksDataGrid } from './components/BooksDataGrid'
import { useThemeModeContext } from './hooks/useThemeModeContext'
import { useBooks } from './hooks/useBooks'

function App() {
  const { books, loading, error, retry } = useBooks()
  const { mode, toggleMode } = useThemeModeContext()

  return (
    <AppLayout
      bookCount={loading ? undefined : books.length}
      mode={mode}
      onToggleTheme={toggleMode}
    >
      {loading && (
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
      )}

      {error && (
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => void retry()}>
              Retry
            </Button>
          }
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      )}

      {!loading && !error && (
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
      )}
    </AppLayout>
  )
}

export default App
