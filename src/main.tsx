import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoot } from './AppRoot'
import { ThemeModeProvider } from './context/ThemeModeProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeModeProvider>
      <AppRoot />
    </ThemeModeProvider>
  </StrictMode>,
)
