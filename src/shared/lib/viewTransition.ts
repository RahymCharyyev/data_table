export function sanitizeTransitionName(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, '-')
}

export function getCoverTransitionName(bookId: string): string {
  return `cover-${sanitizeTransitionName(bookId)}`
}

export function runViewTransition(update: () => void): void {
  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
    document.startViewTransition(update)
    return
  }

  update()
}
