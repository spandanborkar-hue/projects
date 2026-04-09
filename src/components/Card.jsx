import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';


function Card({name,id,image,price,type}) {
    let dispatch = useDispatch()
  return (
    <div className='w-75 h-100 p-3 bg-white rounded-lg shadow-xl gap-3 hover:border-2 border-green-500 cursor-pointer '>

            <div className='w-full h-[70%] overflow-hidden rounded-lg flex flex-col gap-3'>
            <img src={image} alt="" className='object-cover' />
            </div>
 <div className='text-xl font-semibold'>
            {name}
      </div>
      <div className='w-full flex justify-between items-center'>
          <div className='text-lg font-bold text-green-500'> Rs  {price}/-</div>
         <div  className= 'flex justify-center items-center text-lg text-green-500 font-semibold gap-2'>   
               {type==="veg"?<LuLeafyGreen/>:<GiChickenOven />} <span>{type}</span>
              </div>
            </div>
                                    
           <div className='mt-2'>
            <button className='w-full p-3  rounded-lg justify-center items-center bg-green-500 text-white
             hover:bg-green-400 transition-all' onClick={()=> {dispatch(AddItem({id:id, name:name, price:price, image:image,qty:1 }));toast.success("Item Added")}}>
                 Add to Cart
            </button>
        </div>              
         </div>
  )
}

export default Card