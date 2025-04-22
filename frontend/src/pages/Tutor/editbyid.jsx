
import React, {  useEffect,useState } from 'react'


import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tutor from "../../services/tutor";
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import { setSubject , setAvailablity, selectAvailablity, selectSubject, } from '../../redux/features/auth/tutordetailSlice';
const editbyid = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const {ID}=useParams()
    const [products,setProducts]=useState()
    const [EEname,setEEname]=useState()
    const[SSubject,setSubject]=useState()
    const[avail,setAvil]=useState()
    console.log(ID)
    useEffect(()=>{
        gettutorbuid()
       },[ID])
       
    async function gettutorbuid() {
        try {
          const response = await fetch(`http://localhost:3001/getTutordetbyid/${ID}`); // Add a valid URL here
          const data  = await response.json(); // Add await before response.json()
          console.log(data);
         setProducts(data)
        
  
        } catch (err) {
          console.log("Error:", err);
        }

      }
      const editApp = async () => {
        
        try {

            console.log(ID)         


fetch(`http://localhost:3001/updateTutordetailsbyid/${ID}`,{
    method:'PUT',
    headers:{
       'Accept':'application/json' ,
       'Content-Type':'application/json'
    },
    body:JSON.stringify({Name:EEname,subject:SSubject,availability:avail})

}).then((result) =>[
    result.json().then((resp)=>{
        console.log(resp)
        toast.success(resp);
    })
])
setTimeout(() => {
  navigate("/editlesson");
}, 500);

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }
    
    const deleteApp = async () => {
        
      try {

          console.log(ID)         


fetch(`http://localhost:3001/deletetoturdet/${ID}`,{
  method:'PUT',
  headers:{
     'Accept':'application/json' ,
     'Content-Type':'application/json'
  },
  body:JSON.stringify()

}).then((result) =>[
  result.json().then((resp)=>{
      console.log(resp)
  })
])

      } catch (error) {
          console.log(error)
          toast.error(error.message)
      }

  }
    return (
       <div className="container mt-5 text-center">
        <h2 className='font-bold'>Edit/Delete Lesson</h2>
        <div className='p-4'>
          {
            products && products.map((item,index)=>(
              <div key={index}>
                <div className='container mt-5 text-center py-2 px-9 '>
                  <label className='block text-gray-700 text-sm font-bold mb-2' >Name:</label>
                <input
                                                           className="shadow appearance-none border rounded w-70 py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                           id="name"
                                                           type="text"
                                                           placeholder="Name"
                                                          
                                                        defaultValue={item.Name}
                                                           
                                                        
                                                       
                                                         
                                                         onChange={(e) =>dispatch((setEEname(e.target.value)))}
                                                       />

                </div>
                <div>
                <label className='block text-gray-700 text-sm font-bold mb-2' >subject:</label>
                <input
                                                           className="shadow appearance-none border rounded w-70 py-2 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                           id="name"
                                                           type="text"
                                                           placeholder="Name"
                                                          
                                                        defaultValue={item.subject}
                                                           
                                                        
                                                       
                                                         
                                                         onChange={(e) =>dispatch((setSubject(e.target.value)))}
                                                       />
                </div>
               
                <label className='block text-gray-700 text-sm font-bold mb-2' >Availability:</label>
                <input
                                                           className="shadow appearance-none border rounded w-70 py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                           id="name"
                                                           type="text"
                                                           placeholder="Name"
                                                          
                                                        defaultValue={item.availability}
                                                           
                                                        
                                                       
                                                         
                                                         onChange={(e) =>dispatch((setAvil(e.target.value)))}
                                                       />                                         

              </div>

            ))
          }
            
        
        </div>
        <div className="grid grid-cols-6 gap-2 w-4xs">
                        <button
                        onClick={editApp}
                            className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Edit 
                        </button>
                    
                        <button
                        onClick={deleteApp}
                            className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Delete 
                        </button>
                    </div>
       </div>

        
    )

}

export default editbyid