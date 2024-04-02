import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/pokedexPage/PokeCard"
import SelectType from "../components/pokedexPage/SelectType"
import './styles/PokedexPage.css'
import Pagination from "../components/Pagination"
import Loader from "../shared/Loader"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')
  
  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281'
  
  const [ pokemons, getAllPokemons, getPokemonsByType] = useFetch(url)
  
  const inputSearch = useRef()
  
  const cbFilter = poke => (inputValue ? poke.name.includes(inputValue) : true)
  
  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getAllPokemons()  
    } else {
      getPokemonsByType(selectValue)
    }
  }, [selectValue])
  
  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase()) 
    setSelectValue('allPokemons')
  }

  const [currentPage, setCurrentPage] = useState(1)

  // Obtener la longitud de los pokemons después de aplicar el filtro
  const filteredPokemons = pokemons?.results.filter(cbFilter) || []
  const totalResidents = filteredPokemons.length

  // Calcular el número total de páginas después de aplicar el filtro
  const residentsPerPage = 6
  const totalPages = Math.ceil(totalResidents / residentsPerPage)

  // Calcular el índice de inicio y fin de los pokemons en la página actual después de aplicar el filtro
  const startIndex = (currentPage - 1) * residentsPerPage
  const endIndex = Math.min(startIndex + residentsPerPage, totalResidents)

  // Obtener los pokemons que se mostrarán en la página actual después de aplicar el filtro y paginación
  const pokemonsToShow = filteredPokemons.slice(startIndex, endIndex)

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const isLoading = useSelector(reducer => reducer.isLoading)

  return (
    <div className="pokedex">
      {
        isLoading && <Loader />        
      }
      <p className="pokedex__string"><span className="pokedex__salute">Welcome {trainer}</span>, here you can find your favorite pokemon.</p>
      <div className="pokedex__header">
        <form className="pokedex__form" onSubmit={handleSubmit}>
          <input className="pokedex__input" ref={inputSearch} type="text" placeholder='Search your pokemon' />
          <button className="pokedex__btn">Search</button>
        </form>
        <div className="pokedex__select">
          <SelectType
            setSelectValue={setSelectValue}
            setInputValue={setInputValue}
            inputSearch={inputSearch}
            selectValue={selectValue}
          />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pagesToShow={10}
      />
      <div className="pokedex__cards">
        {
          pokemonsToShow.map(pokemon => (
            <PokeCard
            key={pokemon.url}
            url={pokemon.url}
            />
          ))
        }
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pagesToShow={10}
      />
    </div>
  )
}

export default PokedexPage