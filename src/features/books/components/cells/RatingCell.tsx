import { Typography } from '@mui/material'
import type { GridRenderCellParams } from '@mui/x-data-grid'
import type { BookRow } from '../../model/types'
import { cellContainerSx } from './cellStyles'

export function RatingCell({ value }: GridRenderCellParams<BookRow, number>) {
  const rating = value ?? 0

  return (
    <Typography
      sx={{
        ...cellContainerSx,
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'success.main',
        fontSize: '1.1rem',
      }}
    >
      {rating > 0 ? rating.toFixed(1) : '—'}
    </Typography>
  )
}
