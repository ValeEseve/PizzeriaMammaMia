import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

const ProfilePage = () => {
  const { logout, getProfile, email } = useContext(UserContext)

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className="container mt-5 min-vh-100 d-flex justify-content-center align-items-center flex-column">
      <div className="row">
        {/* Sidebar de usuario */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-body text-center">
              <img
                src="https://www.shutterstock.com/image-vector/pizza-pixel-art-piece-pixelated-260nw-601668260.jpg"
                className="rounded-circle mb-3 img-fluid"
                alt="Foto Avatar"
              />
              <h6 className="card-title">Tu correo: {email}</h6>
            </div>
          </div>
          <button onClick={logout} className='btn btn-dark mt-5'>Cerrar sesión</button>
        </div>

        {/* Contenido principal */}
        <div className="col-md-9">
          <ul className="nav nav-tabs" id="profileTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pedidos-tab"
                data-bs-toggle="tab"
                data-bs-target="#pedidos"
                type="button"
                role="tab"
              >
                Pedidos
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="ajustes-tab"
                data-bs-toggle="tab"
                data-bs-target="#ajustes"
                type="button"
                role="tab"
              >
                Ajustes
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="direcciones-tab"
                data-bs-toggle="tab"
                data-bs-target="#direcciones"
                type="button"
                role="tab"
              >
                Direcciones
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pagos-tab"
                data-bs-toggle="tab"
                data-bs-target="#pagos"
                type="button"
                role="tab"
              >
                Métodos de Pago
              </button>
            </li>
          </ul>

          <div className="tab-content mt-3">
            {/* Pedidos */}
            <div
              className="tab-pane fade show active"
              id="pedidos"
              role="tabpanel"
            >
              <h5>Historial de pedidos</h5>
              <p>Aquí aparecerán tus pedidos anteriores...</p>
            </div>

            {/* Ajustes */}
            <div
              className="tab-pane fade"
              id="ajustes"
              role="tabpanel"
            >
              <h5>Configuración de la cuenta</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Correo</label>
                  <input type="email" className="form-control" />
                </div>
                <button className="btn btn-primary">Guardar cambios</button>
              </form>
            </div>

            {/* Direcciones */}
            <div
              className="tab-pane fade"
              id="direcciones"
              role="tabpanel"
            >
              <h5>Direcciones guardadas</h5>
              <p>No tienes direcciones guardadas.</p>
            </div>

            {/* Métodos de Pago */}
            <div
              className="tab-pane fade"
              id="pagos"
              role="tabpanel"
            >
              <h5>Métodos de pago</h5>
              <p>No tienes métodos de pago guardados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProfilePage
{/* <main>
      <div className="container d-flex justify-content-center align-items-center min-vh-100 flex-column text-center">
        <h1>Tu perfil</h1>
        <p>{email}</p>
        
      </div>
    </main> */}
