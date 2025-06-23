import {createContext,useContext} from 'react'


export const movieContext = createContext({
favorites:[],
addToFavorites:(movie)=>{},
removeFromFavorites:(id)=>{}

})


 export const useMovie = ()=>{
    return useContext(movieContext)
}




export const MovieProvider = movieContext.Provider