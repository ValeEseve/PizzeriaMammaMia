import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem"
import { UserContext } from "../context/UserContext";

const Cart = () => {
    const { cart, addPizza, removePizza } = useContext(CartContext)
    const {token} = useContext(UserContext)

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <section className="w-100" style={{ maxWidth: "700px" }}>
                <h2 className="mb-4">Detalles del pedido:</h2>
                <article className="d-flex flex-column gap-4">
                    {cart.map(pizza => (pizza.count > 0 &&
                        <CartItem key={pizza.id} pizza={pizza} inc={addPizza} dec={removePizza} />
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
