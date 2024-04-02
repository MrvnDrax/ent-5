import axios from "axios"
import { useState } from "react"
import { setIsLoadingG } from "../store/slices/isLoading.slice"
import { useDispatch } from "react-redux"

const useFetch = (url) => {

  const [infoApi, setInfoApi] = useState()
  const dispatch = useDispatch()
  
  const getApi = () => {
    dispatch(setIsLoadingG(true))
    axios.get(url)
      .then(res => setInfoApi(res.data))
      .catch(err => console.error(err))
      .finally(() => dispatch(setIsLoadingG(false)))
  }

  const getTypeApi = (urlType) => {
    dispatch(setIsLoadingG(true))
    axios.get(urlType)
      .then(res => {
        const obj = {
          results: res.data.pokemon.map(e => e.pokemon)
        }
        setInfoApi(obj)
      })
      .catch(err => console.error(err))
      .finally(() => dispatch(setIsLoadingG(false)))
  }

  return [ infoApi, getApi, getTypeApi ]
}

export default useFetch