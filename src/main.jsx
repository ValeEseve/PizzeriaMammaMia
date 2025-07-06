import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PizzasProvider from './context/PizzasContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PizzasProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PizzasProvider>
  </StrictMode>,
)
