import { Route, Routes } from 'react-router-dom'
import './App.css'
import CartPage from './pages/CartPage'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import PizzaPage from './pages/PizzaPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/pizza/:id' element={<PizzaPage />} />
        <Route path='/404' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
