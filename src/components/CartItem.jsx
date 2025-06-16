const CartItem = ({pizza, inc, dec}) => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                    <img src={pizza.img} alt={`Pizza ${pizza.name}`} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                    <h5>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h5>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <h5 className="mb-0">${pizza.price.toLocaleString("es-CL")}</h5>
                    <button className="btn btn-outline-danger" onClick={() => dec(pizza.id)}>-</button>
                    <h5 className="mb-0">{pizza.count}</h5>
                    <button className="btn btn-outline-primary"onClick={() => inc(pizza.id)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
