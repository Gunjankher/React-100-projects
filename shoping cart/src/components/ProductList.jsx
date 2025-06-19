import React from 'react'
import { useCart } from '../context/cartContext';



const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Headphones", price: 99 },
    { id: 4, name: "Smartwatch", price: 199 },
    { id: 5, name: "Keyboard", price: 49 },
  ];

function ProductList() {

    const {addToCart} = useCart()
    
  return (
   <>
    <div style={{display:'flex'}}>
        {products.map((product)=>(
            <div key={product.id} style={{display:'flex'}}>
                <h2 >{product.name}</h2>
          <p>${product.price}</p>
          <button
          onClick={()=>addToCart(product)}
          >
            Add to cart
          </button>
            </div>
        ))}
    </div>
   </>
  )
}

export default ProductList