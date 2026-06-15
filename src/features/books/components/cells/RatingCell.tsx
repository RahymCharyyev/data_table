import { memo } from 'react'
import Typography from '@mui/material/Typography'
import type { GridRenderCellParams } from '@mui/x-data-grid'
import { formatRating } from '../../../../shared/lib/format'
import type { BookRow } from '../../model/types'
import { cellContainerSx } from './cellStyles'

function RatingCellComponent({ value }: GridRenderCellParams<BookRow, number>) {
  const rating = value ?? 0

  return (
    <Typography
      sx={{
        ...cellContainerSx,
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'success.main',
        fontSize: '1.1rem',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {rating > 0 ? formatRating(rating) : '—'}
    </Typography>
  )
}

export const RatingCell = memo(RatingCellComponent)
