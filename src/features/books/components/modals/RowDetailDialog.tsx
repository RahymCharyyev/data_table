import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { formatPublishYear, formatRating } from '../../../../shared/lib/format'
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
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: { overscrollBehavior: 'contain' },
        },
      }}
    >
      <DialogTitle sx={{ pr: 6, textWrap: 'balance' }}>
        {book.title}
        <IconButton
          aria-label={STRINGS.dialog.close}
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon aria-hidden="true" />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box
            component="img"
            src={book.coverUrl}
            alt={STRINGS.altCover}
            width={100}
            height={150}
            sx={{
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
              {formatPublishYear(book.publishDate)}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {STRINGS.details.ratingPages}
            </Typography>
            <Typography variant="body1" sx={{ fontVariantNumeric: 'tabular-nums' }}>
              {book.rating > 0 ? formatRating(book.rating) : STRINGS.details.na} /{' '}
              {book.pages > 0 ? book.pages : STRINGS.details.na}
            </Typography>
          </Box>
        </Box>
        {book.firstSentence ? (
          <>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {STRINGS.details.firstSentence}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              {book.firstSentence}
            </Typography>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
