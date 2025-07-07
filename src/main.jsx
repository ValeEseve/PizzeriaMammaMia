import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PizzasProvider from './context/PizzasContext.jsx'
import CartProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PizzasProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </PizzasProvider>
  </StrictMode>,
)
