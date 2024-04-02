import { Link } from 'react-router-dom'
import './styles/PageNotFound.css'
const PageNotFound = () => {
  return (
    <section className='container'>
      <h1 className='container__title'>This page not fount ❌, pls return <Link className='container__home' to='/pokedex'>Home</Link> </h1>
      <footer className="home__footer">
        <div className="bottom__line">
          <div className="bottom__circle">
            <div className="bottom__circle__center">
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default PageNotFound