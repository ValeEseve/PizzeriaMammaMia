import Header from './Header'
import CardPizza from './CardPizza'
import dataPizza from '../data/pizzas'

const Home = () => {
  return (
    <>
      <Header />
      <section class="container mt-3">
        <article class="row g-4">
        {dataPizza.map(pizza => (<CardPizza key={pizza.id} pizza={pizza}/>))}
        
          <div class="col-md-6 col-lg-4 mb-4">
            </div>
        </article>
      </section>
    </>
  )
}

export default Home
