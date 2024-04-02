import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'


const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault() //React (Optimiza la captura del input)
    //e.target.inputTrainer.value //JS
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="home">
      <img className="home__logo" src="/img/pokedex.png" alt="Logo de la pagina" />
      <div className="home__string">
      <h2 className="home__salute">¡Hi Trainer!</h2>
      <p className="home__instruction">To start with the app, give me your name trainer</p>
      </div>
      <form className="home__form" onSubmit={handleSubmit}>
        <input placeholder='Your name...' className="home__input" id="inputTrainer" ref={inputTrainer} type="text" />
        <button className="home__btn">Gotta catch'em all!</button>
      </form>
      <footer className="home__footer">
        <div className="bottom__line">
          <div className="bottom__circle">
            <div className="bottom__circle__center">
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage