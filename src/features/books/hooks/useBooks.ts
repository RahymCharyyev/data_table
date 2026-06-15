import { useQuery } from '@tanstack/react-query'
import { fetchBooks } from '../api/openLibraryApi'
import { bookKeys } from '../api/queryKeys'
import { STRINGS } from '../../../shared/constants/strings'

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  return STRINGS.errors.loadBooks
}

export function useBooks() {
  const query = useQuery({
    queryKey: bookKeys.list(),
    queryFn: fetchBooks,
  })

  return {
    books: query.data ?? [],
    loading: query.isFetching && query.data === undefined,
    error: query.isError ? getErrorMessage(query.error) : null,
    retry: query.refetch,
  }
}
