import { memo } from 'react'
import Box from '@mui/material/Box'
import type { GridRenderCellParams } from '@mui/x-data-grid'
import { STRINGS } from '../../../../shared/constants/strings'
import { getCoverTransitionName } from '../../../../shared/lib/viewTransition'
import type { BookRow } from '../../model/types'
import { cellContentSx } from './cellStyles'

interface CoverCellProps extends GridRenderCellParams<BookRow, string> {
  onImageClick: (book: BookRow) => void
}

function CoverCellComponent({ value, row, onImageClick }: CoverCellProps) {
  const coverUrl = value ?? row.coverUrl

  const handleActivate = () => {
    onImageClick(row)
  }

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
        alt={STRINGS.dialog.openCover(row.title)}
        width={60}
        height={80}
        loading="lazy"
        tabIndex={0}
        role="button"
        onClick={(event) => {
          event.stopPropagation()
          handleActivate()
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            event.stopPropagation()
            handleActivate()
          }
        }}
        sx={{
          maxHeight: 80,
          maxWidth: 60,
          objectFit: 'cover',
          borderRadius: 1,
          cursor: 'pointer',
          boxShadow: 1,
          transition: 'transform 0.2s ease',
          viewTransitionName: getCoverTransitionName(row.id),
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
          '&:hover': { transform: 'scale(1.05)' },
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2,
          },
        }}
      />
    </Box>
  )
}

export const CoverCell = memo(CoverCellComponent)
