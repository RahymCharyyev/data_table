import { AppLayout } from '../shared/components/AppLayout'
import { BooksPage } from '../features/books/components/BooksPage'
import { useBooks } from '../features/books/hooks/useBooks'

function App() {
  const booksQuery = useBooks()

  return (
    <AppLayout bookCount={booksQuery.loading ? undefined : booksQuery.books.length}>
      <BooksPage {...booksQuery} />
    </AppLayout>
  )
}

export default App
