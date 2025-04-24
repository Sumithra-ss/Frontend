import React from "react"
import { useEffect,useState } from "react"
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router";
const editappoinment = () =>{
    const navigate = useNavigate();
          const [products,setProduct]=useState()
          
          useEffect(()=>{
       updateProfile()
      },[])
     
      async function updateProfile() {
         try {
           const response = await fetch("https://backendconnection-14tc.onrender.com/getAppoinmentdet?keyword=Active"); // Add a valid URL here
           const Appoinment = await response.json(); // Add await before response.json()
           console.log(Appoinment.Appoinment);
           setProduct(Appoinment.Appoinment)
           
         } catch (err) {
           console.log("Error:", err);
         }
       }
    console.log(products)
   
    
    return (
        <div className="w-300 grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 justify-center">
            <h1 className="text-yellow-500 text-2xl">Edit Appoinment</h1>
            
            {
                
                products && products.map((item,index) => (
                    <div className='w-3xs items-center border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}    >
                      
                    <div>
                        <p className="font-bold"   onClick={() => navigate(`Appoinmenteditbyid/${item._id}`)}>Tutorname:{item.tutorname}</p>
                       
                          
                        <p >Subject:{item.Subject}</p>
                        <p>Date:{item.Date}</p>
                        <p>Time:{item.Time}</p>
                    </div>
                

                    </div>
                ))
            }

            
        </div>
    )

    }

export default editappoinment
