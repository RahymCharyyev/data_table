import type {
  GridColumnVisibilityModel,
  GridFilterModel,
  GridPaginationModel,
  GridSortModel,
} from '@mui/x-data-grid'
import { DEFAULT_PAGE_SIZE } from '../model/constants'
import { STORAGE_KEYS } from '../../../shared/constants/storageKeys'
import { readLegacyGridState } from '../../../shared/lib/migrateStorage'
import { useLocalStorage } from '../../../shared/hooks/useLocalStorage'

export interface PersistedGridState {
  sortModel: GridSortModel
  filterModel: GridFilterModel
  paginationModel: GridPaginationModel
  columnVisibilityModel: GridColumnVisibilityModel
}

const DEFAULT_SORT: GridSortModel = []
const DEFAULT_FILTER: GridFilterModel = { items: [] }
const DEFAULT_PAGINATION: GridPaginationModel = {
  page: 0,
  pageSize: DEFAULT_PAGE_SIZE,
}
const DEFAULT_VISIBILITY: GridColumnVisibilityModel = {}

const DEBOUNCE_MS = 300
const legacyState = readLegacyGridState()

export function useBooksGridState() {
  const [sortModel, setSortModel] = useLocalStorage<GridSortModel>(
    STORAGE_KEYS.gridSort,
    legacyState.sortModel ?? DEFAULT_SORT,
    DEBOUNCE_MS,
  )
  const [filterModel, setFilterModel] = useLocalStorage<GridFilterModel>(
    STORAGE_KEYS.gridFilter,
    legacyState.filterModel ?? DEFAULT_FILTER,
    DEBOUNCE_MS,
  )
  const [paginationModel, setPaginationModel] =
    useLocalStorage<GridPaginationModel>(
      STORAGE_KEYS.gridPagination,
      legacyState.paginationModel ?? DEFAULT_PAGINATION,
      DEBOUNCE_MS,
    )
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useLocalStorage<GridColumnVisibilityModel>(
      STORAGE_KEYS.gridVisibility,
      legacyState.columnVisibilityModel ?? DEFAULT_VISIBILITY,
      DEBOUNCE_MS,
    )

  return {
    sortModel,
    setSortModel,
    filterModel,
    setFilterModel,
    paginationModel,
    setPaginationModel,
    columnVisibilityModel,
    setColumnVisibilityModel,
  }
}
