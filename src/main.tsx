import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme.ts'
// import {ThemeProvider} from "@emotion/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline></CssBaseline>
  <App />
  </ThemeProvider>
  </StrictMode>,
)
