export const STORAGE_VERSION = 'v1'

export const STORAGE_KEYS = {
  themeMode: `books-catalog:theme:${STORAGE_VERSION}`,
  gridSort: `books-catalog:grid-sort:${STORAGE_VERSION}`,
  gridFilter: `books-catalog:grid-filter:${STORAGE_VERSION}`,
  gridPagination: `books-catalog:grid-pagination:${STORAGE_VERSION}`,
  gridVisibility: `books-catalog:grid-visibility:${STORAGE_VERSION}`,
  legacy: {
    themeMode: 'theme-mode',
    gridState: 'books-grid-state',
    gridSort: 'books-grid-state-sort',
    gridFilter: 'books-grid-state-filter',
    gridPagination: 'books-grid-state-pagination',
    gridVisibility: 'books-grid-state-visibility',
  },
} as const
