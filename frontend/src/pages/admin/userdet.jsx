import { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router";

const userdet = () => {
     const [products,setProducts]=useState()
         useEffect(()=>{
            paymenthistory()
         },[])
          
         const navigate=useNavigate()
         
        
              
         async function paymenthistory() {
          try {
           const response = await fetch("http://localhost:3001/getusers"); // Add a valid URL here
           //const response = await fetch("http://localhost:3001/getTutorsdetails?keyword=on"); // Add a valid URL here
            const {payment}  = await response.json(); // Add await before response.json()
            console.log(payment);
           
            setProducts(payment)
          } catch (err) {
            console.log("Error:", err);
          }
        }
        return (
            <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h3 className="font-bold text-green-500">
            Admin Dashboard</h3>
          
    
           
            <div class='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            {
                 products && products.map((item,index)=>(
                    <div className ='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' key={index} >
                        <p className="font-bold" onClick={() => navigate(`/editRole/:${item._id}`)}>Email:{item.email}</p>
                        <p>Role:{item.role}</p>
                       
                    </div>
                )
                )
            }
                </div>
           
    
    </div>
        )

}

export default userdet