import { Typography } from '@mui/material'
import type { GridRenderCellParams } from '@mui/x-data-grid'
import type { BookRow } from '../../model/types'
import { cellContainerSx } from './cellStyles'

export function DateCell({ value }: GridRenderCellParams<BookRow, Date>) {
  const date =
    value instanceof Date
      ? value
      : value
        ? new Date(value)
        : new Date(2000, 0, 1)

  return (
    <Typography
      sx={{
        ...cellContainerSx,
        fontFamily: 'Georgia, "Times New Roman", serif',
        color: 'primary.main',
        fontSize: '1rem',
      }}
    >
      {date.getFullYear()}
    </Typography>
  )
}
