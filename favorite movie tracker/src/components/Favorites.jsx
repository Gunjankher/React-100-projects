import React from 'react'
import { useMovie } from '../context/movieContext'


function Favorites() {

  const {removeFromFavorites,favorites} = useMovie()


  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((movie)=>(
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <p>{movie.rating}</p>

          <button
          onClick={()=>removeFromFavorites(movie.id)}
          >
            Remove
          </button>

        </div>
      ))}

    </div>
  )
}

export default Favorites