import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { useContext } from 'react'
import { PizzasContext } from '../context/PizzasContext'

const Home = () => {
  const { pizzas } = useContext(PizzasContext)
  
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
