import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { LiaOpencart } from "react-icons/lia";

function Navbar() {
  return (
    <div className='w-full h-15 bg-amber-400 '>
      <div
      className='flex items-center'>
        {/* icons */}
        <img className='w-15 p-0.5 mx-2 rounded-2xl cursor-pointer'src=".././public/images.jpeg" alt="" />

        {/* Search */}
        <div className='flex items-center justify-center grow cursor-pointer'>
          <input
           className='bg-white flex items-center justify-center border border-black rounded-2xl w-full pl-6'
           placeholder='Search Your products here'
          type="text" />
          <IoIosSearch className='size-6 cursor-pointer'/>
        </div>

        {/* Navbar Products  */}

        <div className='flex items-cetner justify-center p-5 gap-3 cursor-pointer'>
          <div>Products</div>
          <div>Admin</div>
          <div><LiaOpencart className='size-6'/></div>
        </div>

      </div>        
    </div>
  )
}

export default Navbar