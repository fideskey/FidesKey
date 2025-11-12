import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../App.js'  // ← ÚNICO CAMBIO
import '../i18n.js'

// Renderizar la aplicación React
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
