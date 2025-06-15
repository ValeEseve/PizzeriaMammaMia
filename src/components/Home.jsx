import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../data/pizzas'

const Home = () => {
  console.log('🍕 pizzas:', pizzas)

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
