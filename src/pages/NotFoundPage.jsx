import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/img/chef-confundido.png"

const NotFoundPage = () => {
  return (
    <main>
        <div className="container d-flex justify-content-center align-items-center min-vh-100 flex-column text-center">
        <img src={img} alt="Chef 404" />
      <h1>Error 404: Pizza no encontrada</h1>
      <br />
      <h3>Buscaste una página secreta que ni nuestro pizzaiolo conoce. Mejor volvamos al menú.</h3>
      <br />
      <Link to={"/"}> <button className='btn btn-dark'>🍕 Volver al menú</button> </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
