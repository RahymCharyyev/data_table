import { useCallback, useEffect, useState } from 'react'
import { fetchBooks } from '../api/openLibrary'
import type { BookRow } from '../types/book'

export function useBooks() {
  const [books, setBooks] = useState<BookRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchBooks()
      setBooks(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load books')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    fetchBooks()
      .then((data) => {
        if (!cancelled) {
          setBooks(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load books')
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { books, loading, error, retry: load }
}
