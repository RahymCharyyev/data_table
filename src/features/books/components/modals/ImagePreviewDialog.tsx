import { Box, Dialog, DialogContent, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface ImagePreviewDialogProps {
  imageUrl: string | null
  alt: string
  open: boolean
  onClose: () => void
}

export function ImagePreviewDialog({
  imageUrl,
  alt,
  open,
  onClose,
}: ImagePreviewDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={false}>
      <IconButton
        aria-label="close"
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
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 2, pt: 6 }}>
        {imageUrl && (
          <Box
            component="img"
            src={imageUrl}
            alt={alt}
            sx={{
              display: 'block',
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              mx: 'auto',
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
