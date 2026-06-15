import { startTransition, useCallback, useState } from 'react'
import { runViewTransition } from '../lib/viewTransition'

export function useDisclosure<T = unknown>(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const [data, setData] = useState<T | null>(null)

  const open = useCallback((payload?: T) => {
    const update = () => {
      startTransition(() => {
        if (payload !== undefined) setData(payload)
        setIsOpen(true)
      })
    }

    runViewTransition(update)
  }, [])

  const close = useCallback(() => {
    runViewTransition(() => {
      startTransition(() => setIsOpen(false))
    })
  }, [])

  return { isOpen, data, open, close }
}
