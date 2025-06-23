import React from 'react'
import { useMovie } from '../context/movieContext'

const movies = [
  { id: 1, name: "Inception", rating: 8.8 },
  { id: 2, name: "Interstellar", rating: 8.6 },
  { id: 3, name: "The Dark Knight", rating: 9.0 },
  { id: 4, name: "Avengers: Endgame", rating: 8.4 },
  { id: 5, name: "The Matrix", rating: 8.7 },
];


function AllMovies() {

    const {addToFavorites} = useMovie()


  return (
    <div>
        {movies.map((movie)=>(
            <div key={movie.id}>
                <h2>{movie.name}</h2>
                <p>{movie.rating}</p>

                <button
                onClick={()=>addToFavorites(movie)}
                >
                    add To Favorites
                </button>
            </div>
        ))}
    </div>
  )
}

export default AllMovies