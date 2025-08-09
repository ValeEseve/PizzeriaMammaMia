import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useContext(UserContext)

  const validateForm = (e) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      alert("Por favor, rellena todos los campos requeridos.")
      return false
    }
    return true
  }

  const validatePassword = (password) => {
    if (password.length < 6) {
      alert("La clave debe ser de al menos 6 caracteres.")
      return false
    }
    return true
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formIsValid = validateForm(e)
    if (!formIsValid) { return }
    const passwordIsValid = validatePassword(password)
    if (!passwordIsValid) { return }
    login(email, password)

  }
  return (
    <section className="d-flex flex-column align-items-center justify-content-center vh-100 gap-4">
      <form action="submit" className="d-flex flex-column gap-3 w-25" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </section>
  )
}

export default LoginPage
