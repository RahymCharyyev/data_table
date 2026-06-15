import { memo } from 'react'
import Typography from '@mui/material/Typography'
import type { GridRenderCellParams } from '@mui/x-data-grid'
import { formatPublishYear } from '../../../../shared/lib/format'
import type { BookRow } from '../../model/types'
import { cellContainerSx } from './cellStyles'

function DateCellComponent({ value }: GridRenderCellParams<BookRow, Date>) {
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
      {formatPublishYear(date)}
    </Typography>
  )
}

export const DateCell = memo(DateCellComponent)
