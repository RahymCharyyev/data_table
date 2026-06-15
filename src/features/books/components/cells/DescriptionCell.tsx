import { memo } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { GridRenderCellParams } from '@mui/x-data-grid'
import type { BookRow } from '../../model/types'

function DescriptionCellComponent({ row }: GridRenderCellParams<BookRow>) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        py: 1,
        whiteSpace: 'normal',
        lineHeight: 1.5,
        minWidth: 0,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
        {row.title}
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 0.5 }}
      >
        {row.authors}
      </Typography>
      {row.firstSentence ? (
        <Typography variant="caption" color="text.secondary">
          {row.firstSentence}
        </Typography>
      ) : null}
    </Box>
  )
}

export const DescriptionCell = memo(DescriptionCellComponent)
