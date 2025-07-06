const { createContext, useState } = require("react");


export const CartContext = createContext()

const CartProvider = ({children}) => {
    const {cart, setCart} = useState(0)

    const addPizza = () => {

    }

    const removePizza = () => {

    }

    return(
        <CartContext value={{cart, setCart}}>
            {children}
        </CartContext>
    )
}

export default CartProvider