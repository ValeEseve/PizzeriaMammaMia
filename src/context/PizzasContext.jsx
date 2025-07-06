import { createContext, useEffect, useState } from "react";


export const PizzasContext = createContext()
const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])

    const fetchApi = async () => {
        const url = "http://localhost:5000/api/pizzas"
        const response = await fetch(url)
        const data = await response.json()
        setPizzas(data)
      }
    
      useEffect(() => {
        fetchApi()
        console.log(pizzas)
      })

    return(
        <PizzasContext.Provider value={{pizzas, setPizzas}}>
            {children}
        </PizzasContext.Provider>
    )

}

export default PizzasProvider