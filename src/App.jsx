import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <RegisterPage/>
      {/* <LoginPage/> */}
      <Footer/>
    </>
  )
}

export default App
