
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeNamePage from './pages/PokeNamePage'
import PageNotFound from './pages/PageNotFound'
import ProtectorRoutes from './pages/ProtectorRoutes'
function App() {

  return (
    <div>   
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectorRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:name' element={<PokeNamePage />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
