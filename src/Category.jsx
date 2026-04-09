import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";

 const Categories= [
    {
        id:1,
        name:'All',
        icon:<TiThSmallOutline className=" w-15 h-15 flex text-green-500"/>  
    },

    {
        id:2,
        name:'Breakfast',
        icon:<MdFreeBreakfast className=" w-15 h-15 flex text-green-600"/>
 
    },
    {
        id:3,
        name:'Soup',
        icon:<TbSoup className=" w-15 h-15 flex text-green-600"/>
   
    },
    {
        id:4,
        name:'Pasta',
        icon:<GiNoodles  className=" w-15 h-15 flex text-green-600"/>  
    },

    {
        id:5,
        name:'Main Course',
        icon:<ImSpoonKnife  className=" w-15 h-15 flex text-green-600"/>  
    },
    {
        id:6,
        name:'Pizza',
        icon:<FaPizzaSlice className=" w-15 h-15 flex text-green-600"  />  
    },
    
    {
        id:7,
        name:'Burger',
        icon:<GiHamburger className="w-15 h-15 flex  text-green-600" />  
    }
]
export default Categories;