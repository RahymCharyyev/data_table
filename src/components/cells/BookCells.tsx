import { Box, Typography } from '@mui/material'
import type { GridRenderCellParams } from '@mui/x-data-grid'
import type { BookRow } from '../../types/book'

export function CoverCell({
  value,
  row,
  onImageClick,
}: GridRenderCellParams<BookRow, string> & {
  onImageClick: (book: BookRow) => void
}) {
  const coverUrl = value ?? row.coverUrl

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        py: 1,
      }}
    >
      <Box
        component="img"
        src={coverUrl}
        alt={row.title}
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
        fontFamily: 'Georgia, "Times New Roman", serif',
        color: 'primary.main',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {date.getFullYear()}
    </Typography>
  )
}

export function RatingCell({ value }: GridRenderCellParams<BookRow, number>) {
  const rating = value ?? 0

  return (
    <Typography
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'success.main',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {rating > 0 ? rating.toFixed(1) : '—'}
    </Typography>
  )
}
