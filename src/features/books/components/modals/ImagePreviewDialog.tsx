import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { STRINGS } from '../../../../shared/constants/strings'
import { getCoverTransitionName } from '../../../../shared/lib/viewTransition'
import type { BookRow } from '../../model/types'

interface ImagePreviewDialogProps {
  book: BookRow | null
  open: boolean
  onClose: () => void
}

export function ImagePreviewDialog({ book, open, onClose }: ImagePreviewDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: { overscrollBehavior: 'contain' },
        },
      }}
    >
      <IconButton
        aria-label={STRINGS.dialog.close}
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          zIndex: 1,
          bgcolor: 'background.paper',
          '&:hover': { bgcolor: 'action.hover' },
        }}
      >
        <CloseIcon aria-hidden="true" />
      </IconButton>
      <DialogContent sx={{ p: 2, pt: 6, overscrollBehavior: 'contain' }}>
        {book ? (
          <Box
            component="img"
            src={book.coverUrlLarge}
            alt={STRINGS.dialog.openCover(book.title)}
            sx={{
              display: 'block',
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              mx: 'auto',
              viewTransitionName: getCoverTransitionName(book.id),
            }}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
