import React from 'react'
import { useCart } from '../context/cartContext'


function Cart() {

    const {updateQuantity,deleteItem,cart} = useCart()

  return (
    <div>
        <h2>Shopping Cart</h2>
        {cart.length === 0?(
            <p>Your Cart is empty</p>
        ):(
            <>
            {cart.map((item)=>(
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <input
                     type="number"
                      value={item.quantity}
                      onChange={(e)=>updateQuantity(item.id,parseInt(e.target.value))}
                      />
                      <button
                      onClick={()=>deleteItem(item.id)}
                      >
                        ❌
                      </button>
                      
                </div>
                
            ))}
            </>
        )}
    </div>
  )
}

export default Cart