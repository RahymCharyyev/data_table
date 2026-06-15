import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import type { BookRow } from '../../model/types'
import { STRINGS } from '../../../../shared/constants/strings'

interface RowDetailDialogProps {
  book: BookRow | null
  open: boolean
  onClose: () => void
}

export function RowDetailDialog({ book, open, onClose }: RowDetailDialogProps) {
  if (!book) return null

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ pr: 6 }}>
        {book.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box
            component="img"
            src={book.coverUrl}
            alt={STRINGS.altCover}
            sx={{
              width: 100,
              height: 150,
              objectFit: 'cover',
              borderRadius: 1,
              flexShrink: 0,
            }}
          />
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {STRINGS.details.authors}
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
              {book.authors}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {STRINGS.details.published}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {book.publishDate.getFullYear()}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {STRINGS.details.ratingPages}
            </Typography>
            <Typography variant="body1">
              {book.rating > 0 ? book.rating.toFixed(1) : STRINGS.details.na} /{' '}
              {book.pages > 0 ? book.pages : STRINGS.details.na}
            </Typography>
          </Box>
        </Box>
        {book.firstSentence && (
          <>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {STRINGS.details.firstSentence}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              {book.firstSentence}
            </Typography>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
