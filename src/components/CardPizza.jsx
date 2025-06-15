const CardPizza = (props) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img src={props.pizza.img} className="card-img-top" alt={`Pizza ${props.pizza.name}`} />
        <div className="card-body">
          <h5 className="card-title text-center">Pizza {props.pizza.name}</h5>
          <div className="card-text d-flex flex-column"><hr /><h6 className="text-center">Ingredientes</h6>
            <hr />
            <ul>
              {props.pizza.ingredients.map(ing => (<li>🍕 {ing} </li> ))}
            </ul>
            <hr />
            <h4 className="text-center">Precio: ${props.pizza.price.toLocaleString("es-CL")}</h4>
            <div className="card-btns d-flex justify-content-evenly mt-3 w-100">
              <button className="btn btn-light btn-outline-secondary ">Ver Más 👀</button>
              <button className="btn btn-dark">Añadir 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
