import { createContext, useState, useContext, useEffect } from "react";
import { PizzasContext } from "./PizzasContext";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { pizzas } = useContext(PizzasContext)
  const { token } = useContext(UserContext)
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  const totalCart = () => {
    let totalCart = cart.reduce((acc, p) => acc + p.price * p.count, 0)
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
      setCart(updatedCart);
    } else {
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

  const sendCart = async () => {
    const url = "http://localhost:5000/api/checkouts";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ cart }),
      })

      const data = await response.json()

      if (response.ok) {
        alert("Compra realizada con éxito")
        setCart([])
      } else {
        alert(data.error || "Error al procesar la compra")
      }
    } catch (error) {
      console.error("Error enviando carrito:", error);
      alert("Error en la conexión con el servidor");
    }
  };

  useEffect(() => {
    totalCart()
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addPizza, removePizza, total, setTotal, sendCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
