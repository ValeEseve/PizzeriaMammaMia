import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PizzasProvider from './context/PizzasContext.jsx'
import CartProvider from './context/CartContext.jsx'
import UserProvider from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PizzasProvider>
      <CartProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </CartProvider>
    </PizzasProvider>
  </StrictMode>,
)
