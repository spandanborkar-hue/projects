import React, { useContext, useEffect } from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { VscSearchSparkle } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import {useSelector} from "react-redux";

function Navbar() {
  let {input,setInput,setCate,showCart,setShowCart} = useContext(dataContext)
  useEffect(()=>{
    let newlist = food_items.filter((item)=> {
      return item.food_name.includes(input) || item.food_name.toLowerCase().includes(input);
    })
    setCate(newlist)
  }, [input])
   
  let items = useSelector(state=>state.cart)
  
  return (
  <div className='w-full h-25 flex justify-between items-center px-5 md:px-8'> 
    <div className='w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer hover:border-2 border-green-500' > <IoFastFoodOutline className='w-7.5 h-7.5 text-green-500'/> </div>
    
   <form className='w-[45%] h-[60%] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>
      <VscSearchSparkle className='w-5 h-5 text-green-500'/>
      <input type="text" placeholder='Search Items....' className= 'w-full outline-none text-16px md:text-20px' onChange={(e)=>setInput(e.target.value)} value ={input}/>
    </form> 
    <div className='w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer hover:border-2 border-green-500 ' onClick={()=>{
      setShowCart(true)
      }}> 
      <span className='absolute top-0 right-1 text-green-500 font-bold '> {items.length} </span>
      <FaCartShopping className='w-7.5 h-7.5 text-green-500'/> </div>
  </div>
  )
}

export default Navbar