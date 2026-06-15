import { useEffect, useRef, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  debounceMs = 0,
) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw !== null) return JSON.parse(raw) as T
    } catch {
      // ignore
    }
    return initialValue instanceof Function
      ? (initialValue as () => T)()
      : initialValue
  })

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const save = () => {
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch {
        // ignore
      }
    }

    if (debounceMs > 0) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(save, debounceMs)
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }

    save()
  }, [key, value, debounceMs])

  return [value, setValue] as const
}
