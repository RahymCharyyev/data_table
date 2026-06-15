export const STRINGS = {
  appTitle: 'Каталог книг',
  booksCount: (n: number) => `${n} книг`,
  skipToContent: 'Перейти к содержимому',
  loading: 'Загрузка…',
  columns: {
    cover: 'Обложка',
    description: 'Описание',
    published: 'Год издания',
    rating: 'Рейтинг',
  },
  details: {
    authors: 'Авторы',
    published: 'Год издания',
    ratingPages: 'Рейтинг / Страницы',
    firstSentence: 'Первое предложение',
    na: 'Н/Д',
  },
  errors: {
    loadBooks: 'Не удалось загрузить книги',
    generic: 'Что-то пошло не так',
    retry: 'Повторить',
    tryAgain: 'Попробовать снова',
  },
  theme: {
    switchToDark: 'Тёмная тема',
    switchToLight: 'Светлая тема',
    toggleAria: 'Переключить тему',
  },
  dialog: {
    close: 'Закрыть',
    openCover: (title: string) => `Открыть обложку: ${title}`,
  },
  altCover: 'Обложка книги',
} as const
