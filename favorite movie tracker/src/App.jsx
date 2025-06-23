import { useState } from 'react'
import './App.css'
import { MovieProvider } from './context/movieContext'
import AllMovies from './components/AllMovies'
import Favorites from './components/Favorites'

function App() {
  const [favorites, setFavorites] = useState([])


  const addToFavorites = (movie)=>{
    setFavorites((prevFavorites)=> [...favorites,movie])
  }

  const removeFromFavorites = (id)=>{
    console.log(`clicked`);
    
setFavorites((prevFavorites)=>prevFavorites.filter((item)=> item.id !== id))
  }



  return (
    <MovieProvider value={{addToFavorites,removeFromFavorites,favorites}}>
     <h1>Favorite Movie Tracker</h1>
     <AllMovies />
     <Favorites />
    </MovieProvider>
  )
}

export default App
