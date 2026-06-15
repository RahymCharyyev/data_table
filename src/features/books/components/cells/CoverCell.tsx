import { Box } from '@mui/material'
import type { GridRenderCellParams } from '@mui/x-data-grid'
import { STRINGS } from '../../../../shared/constants/strings'
import type { BookRow } from '../../model/types'
import { cellContentSx } from './cellStyles'

interface CoverCellProps extends GridRenderCellParams<BookRow, string> {
  onImageClick: (book: BookRow) => void
}

export function CoverCell({ value, row, onImageClick }: CoverCellProps) {
  const coverUrl = value ?? row.coverUrl

  return (
    <Box
      sx={{
        ...cellContentSx,
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        src={coverUrl}
        alt={STRINGS.altCover}
        onClick={(event) => {
          event.stopPropagation()
          onImageClick(row)
        }}
        sx={{
          maxHeight: 80,
          maxWidth: 60,
          objectFit: 'cover',
          borderRadius: 1,
          cursor: 'pointer',
          boxShadow: 1,
          transition: 'transform 0.2s',
          '&:hover': { transform: 'scale(1.05)' },
        }}
      />
    </Box>
  )
}
