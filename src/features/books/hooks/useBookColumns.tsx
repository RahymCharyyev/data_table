import { useMemo } from 'react'
import type { GridColDef } from '@mui/x-data-grid'
import { CoverCell } from '../components/cells/CoverCell'
import { DateCell } from '../components/cells/DateCell'
import { DescriptionCell } from '../components/cells/DescriptionCell'
import { RatingCell } from '../components/cells/RatingCell'
import { ROW_HEIGHT } from '../model/constants'
import { STRINGS } from '../../../shared/constants/strings'
import type { BookRow } from '../model/types'

export function estimateRowHeight(description: string): number {
  const descLength = description.length
  const estimated =
    ROW_HEIGHT.base +
    Math.ceil(descLength / ROW_HEIGHT.charsPerLine) * ROW_HEIGHT.lineStep
  return Math.min(ROW_HEIGHT.max, Math.max(ROW_HEIGHT.min, estimated))
}

export function useBookColumns(onImageClick: (book: BookRow) => void) {
  const columns = useMemo<GridColDef<BookRow>[]>(
    () => [
      {
        field: 'coverUrl',
        headerName: STRINGS.columns.cover,
        width: 100,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <CoverCell {...params} onImageClick={onImageClick} />
        ),
      },
      {
        field: 'description',
        headerName: STRINGS.columns.description,
        flex: 1,
        minWidth: 280,
        renderCell: (params) => <DescriptionCell {...params} />,
      },
      {
        field: 'publishDate',
        headerName: STRINGS.columns.published,
        type: 'date',
        width: 140,
        renderCell: (params) => <DateCell {...params} />,
        valueGetter: (_value, row) => row.publishDate,
      },
      {
        field: 'rating',
        headerName: STRINGS.columns.rating,
        type: 'number',
        width: 120,
        renderCell: (params) => <RatingCell {...params} />,
      },
    ],
    [onImageClick],
  )

  const getRowHeight = (description: string) => estimateRowHeight(description)

  return { columns, getRowHeight }
}
