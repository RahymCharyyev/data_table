import { OPEN_LIBRARY } from '../model/constants'
import type { OpenLibraryDoc } from '../model/dto'
import type { BookRow } from '../model/types'

export const PLACEHOLDER_COVER = '/placeholder-book.svg'

export function getCoverUrls(coverId?: number) {
  if (!coverId) {
    return { medium: PLACEHOLDER_COVER, large: PLACEHOLDER_COVER }
  }
  return {
    medium: `${OPEN_LIBRARY.coversUrl}/${coverId}-M.jpg`,
    large: `${OPEN_LIBRARY.coversUrl}/${coverId}-L.jpg`,
  }
}

export function normalizeFirstSentence(value?: string[] | string): string {
  if (!value) return ''
  if (Array.isArray(value)) return value[0] ?? ''
  return value
}

export function mapDocToBook(doc: OpenLibraryDoc, index: number): BookRow | null {
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
