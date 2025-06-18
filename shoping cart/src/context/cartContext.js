import {useContext,createContext} from 'react'



export const CartContext = createContext({

    item:[
        {
            id:'1',
            name:"item",
            quantity:"1"
        }
    ],

    addToCart:()=>{},
    updateQuantity:(id)=>{},
    deleteItem:(id)=>{}
})



export const useCart = ()=>{
return useContext(CartContext)
}


export const CartProvider = CartContext.Provider
