import type { BookRow, OpenLibraryResponse } from '../types/book'

const API_URL =
  'https://openlibrary.org/search.json?q=fiction&limit=50&fields=key,title,author_name,cover_i,first_publish_year,ratings_average,number_of_pages_median,first_sentence'

export const PLACEHOLDER_COVER = '/placeholder-book.svg'

function getCoverUrls(coverId?: number) {
  if (!coverId) {
    return { medium: PLACEHOLDER_COVER, large: PLACEHOLDER_COVER }
  }
  return {
    medium: `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`,
    large: `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`,
  }
}

function normalizeFirstSentence(value?: string[] | string): string {
  if (!value) return ''
  if (Array.isArray(value)) return value[0] ?? ''
  return value
}

function mapDocToBook(doc: OpenLibraryResponse['docs'][number], index: number): BookRow | null {
  if (!doc.title?.trim()) return null

  const authors = doc.author_name?.join(', ') ?? 'Unknown author'
  const firstSentence = normalizeFirstSentence(doc.first_sentence)
  const description = [doc.title, authors, firstSentence].filter(Boolean).join(' — ')
  const { medium, large } = getCoverUrls(doc.cover_i)
  const year = doc.first_publish_year ?? 2000

  return {
    id: doc.key ?? `book-${index}`,
    title: doc.title,
    authors,
    description,
    firstSentence,
    coverUrl: medium,
    coverUrlLarge: large,
    publishDate: new Date(year, 0, 1),
    rating: doc.ratings_average ?? 0,
    pages: doc.number_of_pages_median ?? 0,
  }
}

export async function fetchBooks(): Promise<BookRow[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error(`Open Library API error: ${response.status}`)
  }

  const data = (await response.json()) as OpenLibraryResponse

  return data.docs
    .map((doc, index) => mapDocToBook(doc, index))
    .filter((book): book is BookRow => book !== null)
}
