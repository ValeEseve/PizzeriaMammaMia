import React, { useEffect, useState } from 'react'

const Pizza = () => {
    const [pizza, setPizza] = useState([])
    const [ingr, setIngr] = useState([])

    const fetchPizza = async () => {
        const url = "http://localhost:5000/api/pizzas/p001"
        const response = await fetch(url)
        const data = await response.json()
        setPizza(data)
        setIngr(data.ingredients)
    }

    useEffect(() => {
        fetchPizza()
    },[])

    return (
        <section className='row p-5 m-5 vh-100'>
            <div className='pizza__bg-img col-4' style={{ 
                backgroundColor: "white", 
                backgroundPosition: "left", 
                backgroundImage: `url( ${pizza.img})`, 
                backgroundRepeat: 'no-repeat' }}></div>
            <div className='col-8 d-flex flex-column justify-content-center p-5'>
                <h1>Pizza {pizza.name}</h1>
                <p className='mt-4'>{pizza.desc}</p>
                <h3>Ingredientes</h3>
                <ul className="list-group list-group-flush">
                    {ingr.map(ing => (<li className="list-group-item" key={pizza.id}>🍕 {ing} </li>))}
                </ul>
                <div className='d-flex justify-content-between p-4'>
                    <h2>Precio: ${pizza.price.toLocaleString("es-CL")}</h2>
                    <button className='btn btn-dark'>Agregar al carrito 🛒</button>
                </div>
            </div>
        </section>
    )
}

export default Pizza
