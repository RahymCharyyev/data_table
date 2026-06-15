const yearFormatter = new Intl.DateTimeFormat('ru-RU', { year: 'numeric' })
const ratingFormatter = new Intl.NumberFormat('ru-RU', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

export function formatPublishYear(date: Date): string {
  return yearFormatter.format(date)
}

export function formatRating(value: number): string {
  return ratingFormatter.format(value)
}
