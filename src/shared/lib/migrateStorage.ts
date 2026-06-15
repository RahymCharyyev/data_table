import type {
  GridColumnVisibilityModel,
  GridFilterModel,
  GridPaginationModel,
  GridSortModel,
} from '@mui/x-data-grid'
import { STORAGE_KEYS } from '../constants/storageKeys'

type ThemeMode = 'light' | 'dark'

export interface LegacyGridState {
  sortModel?: GridSortModel
  filterModel?: GridFilterModel
  paginationModel?: GridPaginationModel
  columnVisibilityModel?: GridColumnVisibilityModel
}

function readJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null) return null
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export function readLegacyThemeMode(): ThemeMode | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.legacy.themeMode)
    if (raw === 'light' || raw === 'dark') return raw

    const parsed = readJson<ThemeMode>(STORAGE_KEYS.legacy.themeMode)
    if (parsed === 'light' || parsed === 'dark') return parsed
  } catch {
    // ignore
  }

  return null
}

export function readLegacyGridState(): LegacyGridState {
  const combined = readJson<LegacyGridState>(STORAGE_KEYS.legacy.gridState)
  if (combined?.sortModel || combined?.filterModel) {
    return combined
  }

  return {
    sortModel: readJson<GridSortModel>(STORAGE_KEYS.legacy.gridSort) ?? undefined,
    filterModel: readJson<GridFilterModel>(STORAGE_KEYS.legacy.gridFilter) ?? undefined,
    paginationModel:
      readJson<GridPaginationModel>(STORAGE_KEYS.legacy.gridPagination) ?? undefined,
    columnVisibilityModel:
      readJson<GridColumnVisibilityModel>(STORAGE_KEYS.legacy.gridVisibility) ?? undefined,
  }
}
