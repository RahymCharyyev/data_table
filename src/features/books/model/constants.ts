export const ROW_HEIGHT = {
  min: 100,
  max: 300,
  base: 100,
  charsPerLine: 80,
  lineStep: 24,
} as const

export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50] as const
export const DEFAULT_PAGE_SIZE = 10

export const OPEN_LIBRARY = {
  searchUrl: 'https://openlibrary.org/search.json',
  coversUrl: 'https://covers.openlibrary.org/b/id',
  query: 'fiction',
  limit: 50,
  fields:
    'key,title,author_name,cover_i,first_publish_year,ratings_average,number_of_pages_median,first_sentence',
} as const
