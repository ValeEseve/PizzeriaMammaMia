const Navbar = () => {
    const total = 25000
    const token = false
  return (
    <nav className="text-bg-dark p-3 d-flex justify-content-between">
      <section className="nav-left d-flex gap-3">
        <h3>Pizzeria Mamma Mia!</h3>
        <article className="nav-btns d-flex gap-2">
          <button className="btn btn-dark btn-outline-light">🍕 Home</button>
          <button className="btn btn-dark btn-outline-light"> { token ? "🔒 Profile" : "🔐 Login"}</button>
          <button className="btn btn-dark btn-outline-light">{token ? "🔒 Logout" : "🔐 Register"}</button>
        </article>
      </section>
      <button className="btn btn-dark btn-outline-info">🛒 Total: ${total.toLocaleString("es-CL")}</button>
    </nav>
  )
}

export default Navbar
