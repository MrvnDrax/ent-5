import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/SelectType.css'

const SelectType = ({ setSelectValue, setInputValue, inputSearch, selectValue }) => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [ types, getallTypes ] = useFetch(url)

  useEffect(() => {
    getallTypes()
  }, [])

  const handleChange = e => {
    setSelectValue(e.target.value)
    setInputValue('')
    inputSearch.current.value = ''
    
  }

  return (
    <select value={selectValue} className="select" onChange={handleChange}>
      <option className="select__value" value="allPokemons">All Pokemons</option>
      {
        types?.results.map(type => (
          <option key={type.url} value={type.url}>{type.name}</option>
        ))
      }
    </select>
  )
}

export default SelectType