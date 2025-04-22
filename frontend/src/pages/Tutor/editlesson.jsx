
import React, {  useEffect,useState } from 'react'
import {FaStar} from "react-icons/fa"
import { useLoaderData } from 'react-router-dom'
import { Link,useNavigate } from "react-router-dom"
 import { toast } from "react-toastify";
const editlesson = () =>
{
    const [products,setProduct]=useState()
   useEffect(()=>{
               gettutorbuid()
              },[])
              const colors = {
               orange: "#FFBA5A",
               grey: "#a9a9a9"
               
             };
             const stars=Array(5).fill(0)
   const navigate=useNavigate()
   async function gettutorbuid() {
           try {
             const response = await fetch("http://localhost:3001/getTutorsdetails"); // Add a valid URL here
             const {tutor}  = await response.json(); // Add await before response.json()
             console.log(tutor);
             setProduct(tutor)
             
           } catch (err) {
             console.log("Error:", err);
           }
   
         }
         return (
          <div  className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 bg-blue'>
                     <div className='w-50 font-bold'>
                     <h6 className='text-violet-900'>Edit Lesson</h6>
                     </div>
                  
               <div className='bg-blue'>
               {
         
               products && products.map((record,index) => (
                 
                 <div key={index}>
                     
                  
                   <div className="bg-blue p-4 my-4 shadow-lg rounded-lg w-100">
                   <h2 className='text-xl font-bold' onClick={() => navigate(`editappoinmentbyid/${record._id}`)}>Tutor Name:{record.Name}</h2>
                     
                     <h2 className='text-xl font-bold'>Subject:{record.subject}</h2>
                 
                 
                  <p>Availability:{record.availability}</p>
                   </div>
                   
                 
                  
                
         
                  
                 </div>
               ))}
             </div> 
         
         
            
           
         </div>
         
               
                 
             )
}

export default editlesson

