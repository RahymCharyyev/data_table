import { useDisclosure } from '../../../shared/hooks/useDisclosure'
import type { BookRow } from '../model/types'

export function useBookDialogs() {
  const rowDialog = useDisclosure<BookRow>()
  const imageDialog = useDisclosure<BookRow>()

  return { rowDialog, imageDialog }
}
