import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const CardPizza = (props) => {
  const {cart, setCart, addPizza, removePizza} = useContext(CartContext)

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img src={props.pizza.img} className="card-img-top" alt={`Pizza ${props.pizza.name}`} />
        <div className="card-body">
          <h4 className="card-title text-center">Pizza {props.pizza.name}</h4>
          <div className="card-text d-flex flex-column"><hr /><h6 className="text-center">Ingredientes</h6>
            <hr />
            <ul className="list-group list-group-flush">
              {props.pizza.ingredients.map(ing => (<li className="list-group-item">🍕 {ing} </li> ))}
            </ul>
            <hr />
            <h5 className="text-center">Precio: ${props.pizza.price.toLocaleString("es-CL")}</h5>
            <div className="card-btns d-flex justify-content-evenly mt-3 w-100">
              <Link to={`/pizza/${props.pizza.id}`}> <button className="btn btn-light btn-outline-secondary ">Ver Más 👀</button> </Link>
              <button onClick={() => addPizza(props.pizza.id)} className="btn btn-dark">Añadir 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
