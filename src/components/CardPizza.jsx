const CardPizza = (props) => {
  return (
    <div>
      <div class="card">
        <img src={props.img} class="card-img-top" alt={`Pizza ${props.name}`}/>
        <div class="card-body">
          <h5 class="card-title">Pizza {props.name}</h5>
          <div class="card-text text-center d-flex flex-column align-items-center"><hr /><h5>Ingredientes</h5>
            <hr />
            <p>🍕 {props.ingredients?.join(", ") || "Ingredientes no disponibles"}</p>
            <hr />
            <h4>Precio: ${props.price.toLocaleString("es-CL")}</h4>
            <div class="card-btns d-flex justify-content-evenly mt-3 w-100">
            <button class="btn btn-light btn-outline-secondary ">Ver Más 👀</button>
            <button class="btn btn-dark">Añadir 🛒</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
