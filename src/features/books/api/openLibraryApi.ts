import { OPEN_LIBRARY } from '../model/constants'
import type { OpenLibraryResponse } from '../model/dto'
import type { BookRow } from '../model/types'
import { mapDocToBook } from './booksMapper'

function buildSearchUrl(): string {
  const params = new URLSearchParams({
    q: OPEN_LIBRARY.query,
    limit: String(OPEN_LIBRARY.limit),
    fields: OPEN_LIBRARY.fields,
  })
  return `${OPEN_LIBRARY.searchUrl}?${params.toString()}`
}

export async function fetchBooks(): Promise<BookRow[]> {
  const response = await fetch(buildSearchUrl())

  if (!response.ok) {
    throw new Error(`Open Library API error: ${response.status}`)
  }

  const data = (await response.json()) as OpenLibraryResponse

  return data.docs
    .map((doc, index) => mapDocToBook(doc, index))
    .filter((book): book is BookRow => book !== null)
}
