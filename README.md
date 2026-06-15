# Book Catalog — MUI DataGrid

Interactive book catalog built with React and Material UI DataGrid. Data is fetched from the [Open Library API](https://openlibrary.org/developers/api).

## Live Demo

> Deploy to Netlify and add your URL here.
>
> Example: `https://6a2fd580c75c268729b2b7dc--mellifluous-fairy-a71237.netlify.app/`

## Time Tracking

| | |
|---|---|
| **Started** | 2026-06-15 |
| **Completed** | 2026-06-15 |
| **Duration** | ~3.5 hours |

## Tech Stack

- React 19 + TypeScript
- Vite
- [MUI Material](https://mui.com/material-ui/)
- [MUI X DataGrid](https://mui.com/x/react-data-grid/)
- TanStack Query for server state
- Open Library Search API

## Applied Agent Skills

Improvements from `.agents/skills/`:

- **vercel-react-best-practices** — lazy-loaded `BooksDataGrid`, versioned `localStorage`, `startTransition` in dialogs
- **vercel-composition-patterns** — React 19 `use()` instead of `useContext`, memoized grid cells
- **web-design-guidelines** — skip link, `aria-*`, keyboard cover activation, `Intl` formatters, `color-scheme`, reduced motion
- **vercel-react-view-transitions** — native shared-element morph for cover preview via `viewTransitionName` + CSS recipes
- **writing-guidelines** — clearer README structure

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build
npm run preview
```

## Features

### Core Requirements

- [x] React + Material UI
- [x] MUI DataGrid component
- [x] 4+ columns: cover image, description, publish date, rating
- [x] Column sorting and filtering (client-side)
- [x] Different text styles per column (bold title, italic author, serif date, monospace rating)
- [x] Dynamic row height (100–300px based on content length)
- [x] Row click → modal with full row details
- [x] Cover image click → modal with large image (`stopPropagation` on row click)
- [x] Functional + class components (`ErrorBoundary`)

### Bonuses

- [x] Table state persistence (sort, filter, pagination) via `localStorage`
- [x] Light / dark theme toggle with persistence
- [x] Open Library API for live data
- [x] Loading spinner, error alert with retry

## Deployment (Netlify)

1. Push this repo to GitHub
2. Go to [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Connect your GitHub repo
4. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy and copy the site URL into this README

SPA routing is configured via `public/_redirects` and `netlify.toml`.

## Project Structure

```
src/
  app/                          # App shell and providers
    App.tsx
    AppRoot.tsx
    providers/
      AppProviders.tsx          # Query + Theme composition
      QueryProvider.tsx
  shared/
    constants/                  # storageKeys, UI strings (RU)
    hooks/                        # useLocalStorage, useDisclosure
    lib/                          # queryClient
    components/                   # AppLayout, ErrorBoundary
  features/
    theme/                        # Theme toggle, context, MUI theme
    books/
      api/                        # openLibraryApi, booksMapper, queryKeys
      model/                      # types, dto, constants
      hooks/                      # useBooks, useBooksGridState, useBookColumns, useBookDialogs
      components/                 # BooksPage, BooksDataGrid, cells, modals
  main.tsx
```

## API

Books are loaded from:

```
https://openlibrary.org/search.json?q=fiction&limit=50
```

Cover images: `https://covers.openlibrary.org/b/id/{cover_id}-{S|M|L}.jpg`

## License

MIT
