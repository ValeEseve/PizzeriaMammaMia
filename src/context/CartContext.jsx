import { createContext, useState, useContext } from "react";
import { PizzasContext } from "./PizzasContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { pizzas } = useContext(PizzasContext);
  const [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0)

  const totalCart = () => {
    let totalCart = cart.reduce((acc, p) => acc + p.price * p.count, 0).toLocaleString("es-CL")
    setTotal(totalCart)
    console.log(cart)
  }

  const addPizza = (id) => {
    const selectedPizza = pizzas.find((pizza) => pizza.id === id);
    if (!selectedPizza) return;

    const pizzaInCart = cart.find((pizza) => pizza.id === id);

    if (pizzaInCart) {
      const updatedCart = cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza);
      totalCart()
      setCart(updatedCart);
    } else {
      totalCart()
      setCart([...cart, { ...selectedPizza, count: 1 }]);
    }
  };

  const removePizza = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCart(updatedCart);
  };



  return (
    <CartContext.Provider value={{ cart, addPizza, removePizza, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
