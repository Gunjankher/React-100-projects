import {useContext,createContext} from 'react'



export const CartContext = createContext({

   cart:[],
    addToCart:(product)=>{},
    updateQuantity:(id,quantity)=>{},
    deleteItem:(id)=>{}
})



export const useCart = ()=>{
return useContext(CartContext)
}


export const CartProvider = CartContext.Provider
