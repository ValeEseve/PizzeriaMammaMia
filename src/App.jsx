import './App.css'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
// import LoginPage from './components/LoginPage'
// import RegisterPage from './components/RegisterPage'

function App() {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <Cart />
      </div>
      {/* <Home/> */}
      {/* <RegisterPage/> */}
      {/* <LoginPage/> */}
      <Footer />
    </>
  )
}

export default App
