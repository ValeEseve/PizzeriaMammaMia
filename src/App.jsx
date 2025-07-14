import { Navigate, Route, Routes } from 'react-router-dom'
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
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

function App() {
  const {token, setToken} = useContext(UserContext)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={token ? <Navigate to={"/"}/> : <LoginPage />} />
        <Route path='/register' element={token ? <Navigate to={"/"}/> : <RegisterPage />} />
        <Route path='/profile' element={token ? <ProfilePage /> : <Navigate to={"/login"}/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/pizza/:id' element={<PizzaPage />} />
        <Route path='/404' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
