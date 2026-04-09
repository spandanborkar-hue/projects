import React, { useContext, useState } from 'react'
import Navbar from '../components/navbar.jsx'
import Categories from "../category"
import Card from "../components/Card.jsx"
import {food_items} from "../food.js"
import { dataContext } from '../context/UserContext.jsx'
import { RxCross1 } from "react-icons/rx";
import Card2 from "../components/Card2.jsx"
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';



function Homepage() {
let {cate, setCate, input,showCart,setShowCart} = useContext(dataContext)

  function filter(category) {
    if (category==="All") {
      setCate(food_items)
    } else {
      let newList=food_items.filter((item)=>(item.food_category===category))
    setCate(newList)
    } 
  }
let items=useSelector( state=>state.cart)
let subtotal= items.reduce((total,item)=>total+item.qty*item.price,0 )
let deliveryfee=20
let taxes=Math.floor(subtotal*5/100)
let total= Math.floor(subtotal+taxes+deliveryfee)



  return (
    <div className='bg-slate-200 w-full min-h-screen'>
       <Navbar/> 
       {!input?<div className='flex flex-wrap justify-center items-center gap-6 w-full'>
       {Categories.map((item)=>{
        return <div key={item.id || item.name} className='w-24 h-25 bg-white justify-center items-center flex flex-col gap-1 text-15 font-semibold
         text-gray-700 rounded-lg shadow-xl hover:border-2 border-green-600 hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}> 
          
          {item.icon}

          {item.name}
        </div>
       }
       )
       }
        </div>:null}
       
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>  
        {cate.length>1?cate.map((item)=>(
              <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
        )):<div className='text-xl text-green-500 font-bold'>No Dish Found</div>}
        </div>
        <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
          <header className="w-full flex justify-between items-center">
          <span className='text-green-400 text-[25px] font-semibold'>
            Order Items 
            </span> 
          <RxCross1 className='w-8 h-8 text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600'onClick={()=> setShowCart(false)}/>
          </header>
          {items.length>0?<>
        <div className='w-full mt-9 flex flex-col gap-7 '>
          {items.map((item)=>(
            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/> 
          ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
            <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}/-</span>
          </div>
         <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
            <span className='text-green-400 font-semibold text-lg'>Rs {deliveryfee}/-</span>
          </div>
         <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
            <span className='text-green-400 font-semibold text-lg'>Rs {taxes}/-</span>
          </div>
        </div>
           <div className='w-full flex justify-between items-center p-2'>
            <span className='text-2xl text-gray-600 font-semibold'>Total</span>
            <span className='text-green-400 font-semibold text-2xl'>Rs {total}/-</span>
          </div>
        <button className='w-[85%] p-3 rounded-lg  bg-green-500 text-xl text-white hover:bg-green-400 transition-al cursor-pointer' onClick={()=>{
          toast.success("Order Placed")}}>
         Place Order
        </button>
        </>:<div className='text-green-600 text-4xl flex text:center font-semibold  mt-50 shadow-2xl'>Empty Cart</div>}
          
        </div>
        </div>
  )
}

export default Homepage;