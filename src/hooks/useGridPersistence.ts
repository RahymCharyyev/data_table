import { useCallback, useEffect, useRef, useState } from 'react'
import type {
  GridColumnVisibilityModel,
  GridFilterModel,
  GridPaginationModel,
  GridSortModel,
} from '@mui/x-data-grid'

const STORAGE_KEY = 'books-grid-state'

export interface PersistedGridState {
  sortModel: GridSortModel
  filterModel: GridFilterModel
  paginationModel: GridPaginationModel
  columnVisibilityModel: GridColumnVisibilityModel
}

const DEFAULT_STATE: PersistedGridState = {
  sortModel: [],
  filterModel: { items: [] },
  paginationModel: { page: 0, pageSize: 10 },
  columnVisibilityModel: {},
}

function loadState(): PersistedGridState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_STATE

    const parsed = JSON.parse(raw) as Partial<PersistedGridState>
    return {
      sortModel: parsed.sortModel ?? DEFAULT_STATE.sortModel,
      filterModel: parsed.filterModel ?? DEFAULT_STATE.filterModel,
      paginationModel: parsed.paginationModel ?? DEFAULT_STATE.paginationModel,
      columnVisibilityModel:
        parsed.columnVisibilityModel ?? DEFAULT_STATE.columnVisibilityModel,
    }
  } catch {
    return DEFAULT_STATE
  }
}

export function useGridPersistence() {
  const [sortModel, setSortModel] = useState<GridSortModel>(
    () => loadState().sortModel,
  )
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    () => loadState().filterModel,
  )
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>(
    () => loadState().paginationModel,
  )
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>(() => loadState().columnVisibilityModel)

  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const persist = useCallback(
    (state: PersistedGridState) => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }

      saveTimeoutRef.current = setTimeout(() => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
        } catch {
          // ignore
        }
      }, 300)
    },
    [],
  )

  useEffect(() => {
    persist({ sortModel, filterModel, paginationModel, columnVisibilityModel })
  }, [sortModel, filterModel, paginationModel, columnVisibilityModel, persist])

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }
    }
  }, [])

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
