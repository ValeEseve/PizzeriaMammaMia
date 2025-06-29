import { useState } from "react"
import { pizzaCart as initialCart } from "../data/pizzas"
import CartItem from "./CartItem"

const Cart = () => {
    const [cart, setCart] = useState(initialCart)

    const increase = (id) => {
        const tempCart = cart.map(pizza => pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza)
        setCart(tempCart)
    }

    const decrease = (id) => {
        const tempCart = cart
            .map(pizza => pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza)
            .filter(pizza => pizza.count > 0)
        setCart(tempCart)
    }
    console.log("CARRITO ACTUAL:", cart);

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <section className="w-100" style={{ maxWidth: "700px" }}>
            <h2 className="mb-4">Detalles del pedido:</h2>
            <article className="d-flex flex-column gap-4">
                {cart.map(pizza => (pizza.count > 0 &&
                    <CartItem key={pizza.id} pizza={pizza} inc={increase} dec={decrease}/>
                ))}
            </article>

            <div className="mt-5">
                <h4>Total: <strong>${cart.reduce((acc, p) => acc + p.price * p.count, 0).toLocaleString("es-CL")}</strong></h4>
                <button className="btn btn-dark mt-3">Pagar</button>
            </div>
        </section>
        </div>
    )
}

export default Cart
