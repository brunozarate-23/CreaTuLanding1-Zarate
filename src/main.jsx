import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, AppShell, Burger, AppShellHeader, AppShellMain, AppShellNavbar } from '@mantine/core'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>,
)
