import { Box, Typography } from '@mui/material'
import type { GridRenderCellParams } from '@mui/x-data-grid'
import type { BookRow } from '../../model/types'

export function DescriptionCell({ row }: GridRenderCellParams<BookRow>) {
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
      {row.firstSentence && (
        <Typography variant="caption" color="text.secondary">
          {row.firstSentence}
        </Typography>
      )}
    </Box>
  )
}
