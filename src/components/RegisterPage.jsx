import React from 'react'

const RegisterPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const validateForm = (e) => {
      e.preventDefault()
      if (!email.trim() || !password.trim()) {
        alert("Please fill in all fields.")
        return false
      }
      return true
    }
  
    const validatePassword = (password) => {
      if (password.length < 6) {
        alert("Password must be at least 6 characters long.")
        return false
      }
      return true
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      const formIsValid = validateForm(e)
      if (!formIsValid) {return}
      const passwordIsValid = validatePassword(password)
      if (!passwordIsValid) {return}
        alert("Login successful! Welcome back!")
  
    }
    return (
      <section class="d-flex flex-column align-items-center justify-content-center vh-100 gap-4">
        <form action="submit" class="d-flex flex-column gap-3 w-25" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div class="d-flex flex-column gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </section>
  )
}

export default RegisterPage
