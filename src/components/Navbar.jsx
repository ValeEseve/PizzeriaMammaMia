const Navbar = () => {
    const total = 25000
    const token = false
  return (
    <nav class="text-bg-dark p-3 d-flex justify-content-between">
      <section class="nav-left d-flex gap-3">
        <h3>Pizzeria Mamma Mia!</h3>
        <article class="nav-btns d-flex gap-2">
          <button class="btn btn-dark btn-outline-light">🍕 Home</button>
          <button class="btn btn-dark btn-outline-light"> { token ? "🔒 Profile" : "🔐 Login"}</button>
          <button class="btn btn-dark btn-outline-light">{token ? "🔒 Logout" : "🔐 Register"}</button>
        </article>
      </section>
      <button class="btn btn-dark btn-outline-info">🛒 Total: ${total.toLocaleString("es-CL")}</button>
    </nav>
  )
}

export default Navbar
