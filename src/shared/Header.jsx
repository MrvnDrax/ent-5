import { Link } from 'react-router-dom'
import './styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <Link to={'/pokedex'}>
      <img className="header__img" src="/img/pokedex.png" alt="Logo de la pagina" />
      </Link>
      <footer className="header__footer">
        <div className="header__footer__circle">
          <div className="header__footer__circle__center"></div>
        </div>
      </footer>
    </header>
  )
}

export default Header