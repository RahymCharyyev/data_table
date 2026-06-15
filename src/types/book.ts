export interface BookRow {
  id: string
  title: string
  authors: string
  description: string
  firstSentence: string
  coverUrl: string
  coverUrlLarge: string
  publishDate: Date
  rating: number
  pages: number
}

export interface OpenLibraryDoc {
  key: string
  title?: string
  author_name?: string[]
  cover_i?: number
  first_publish_year?: number
  ratings_average?: number
  number_of_pages_median?: number
  first_sentence?: string[] | string
}

export interface OpenLibraryResponse {
  docs: OpenLibraryDoc[]
}
