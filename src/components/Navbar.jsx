const Navbar = () => {
    const total = 25000
    const token = false
  return (
    <nav class="text-bg-dark p-3">
      <section class="nav-left">
        <h1>Pizzeria Mamma Mia!</h1>
        <article class="nav-btns">
          <button>🍕 Home</button>
          <button>🔐 Login</button>
          <button>🔐 Register</button>
        </article>
      </section>
      <button>🛒 Total: ${total}</button>
    </nav>
  )
}

export default Navbar
