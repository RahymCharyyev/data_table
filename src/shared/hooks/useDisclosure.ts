import { useCallback, useState } from 'react'

export function useDisclosure<T = unknown>(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const [data, setData] = useState<T | null>(null)

  const open = useCallback((payload?: T) => {
    if (payload !== undefined) setData(payload)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, data, open, close }
}
