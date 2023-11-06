import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './styles/GlobalStyles.tsx'
import ToastProvider from './providers/ToastProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastProvider />
    <App />
  </React.StrictMode>,
)
