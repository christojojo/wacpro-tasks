import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import InputPage from './pages/InputPage.jsx'
import BadgePage from './pages/BadgePage.jsx'
import ButtonPage from './pages/ButtonPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
