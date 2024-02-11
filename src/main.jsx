import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
// import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>

    {/* <ThemeProvider>
      <App />
    </ThemeProvider> */}
  </React.StrictMode>
)
