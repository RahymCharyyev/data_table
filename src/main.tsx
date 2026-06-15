import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoot } from './app/AppRoot'
import { AppProviders } from './app/providers/AppProviders'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <AppRoot />
    </AppProviders>
  </StrictMode>,
)
