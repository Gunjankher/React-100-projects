import { useState } from 'react'
import './App.css'
import { CartProvider } from './context/cartContext'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [cart,setCart] = useState([])


  const addToCart = (product)=>{
setCart((prevCart)=>[...prevCart,{...product,quantity:1}])
  }

  const updateQuantity = (id,quantity)=>{
    setCart((prevCart)=>prevCart.map((item)=> item.id === id ? {...item,quantity}:item))
  }


  const deleteItem = (id)=>{
setCart((prevCart)=> prevCart.filter((item)=> item.id !== id))
  }

  return (
    <CartProvider value={{cart,addToCart,updateQuantity,deleteItem}}>
     <h1>Shopping cart</h1>
     <ProductList />
     <Cart/>
    </CartProvider>
  )
}

export default App
