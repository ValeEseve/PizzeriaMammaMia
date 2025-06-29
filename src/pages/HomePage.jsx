import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { useEffect, useState } from 'react'

const Home = () => {
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

  return (
    <>
      <Header />
      <section className="container mt-3">
        <article className="row g-4">
          {pizzas.map(pizza => (<CardPizza key={pizza.id} pizza={pizza} />))}

          <div className="col-md-6 col-lg-4 mb-4">
          </div>
        </article>
      </section>
    </>
  )
}

export default Home
