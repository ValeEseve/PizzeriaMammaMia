import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const Navbar = () => {
    let {total, setTotal} = useContext(CartContext)

    const token = false
  return (
    <nav className="text-bg-dark p-3 d-flex justify-content-between fixed-top">
      <section className="nav-left d-flex gap-3">
        <h3>Pizzeria Mamma Mia!</h3>
        <article className="nav-btns d-flex gap-2">
          <Link to={"/"}> <button className="btn btn-dark btn-outline-light">🍕 Home</button></Link>
          <Link to={"/login"}> <button className="btn btn-dark btn-outline-light"> { token ? "🔒 Profile" : "🔐 Login"}</button></Link>
          <Link to={"/register"}><button className="btn btn-dark btn-outline-light">{token ? "🔒 Logout" : "🔐 Register"}</button></Link> 
        </article>
      </section>
      <Link to={"/cart"}> <button className="btn btn-dark btn-outline-info">🛒 Total: ${total.toLocaleString("es-CL")}</button></Link>
    </nav>
  )
}

export default Navbar
