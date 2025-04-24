import { Link, useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
 import { toast } from "react-toastify";

import authServices from "../../services/Tutordetails";
import { useParams } from 'react-router-dom';

import { useState } from "react";
const createlesson = () => {
    
   const navigate=useNavigate()
    const dispatch = useDispatch();
    const[subject,setSubjects]=useState()
    const [avil,setAvail]=useState()
const {ID} =useParams()
console.log(ID)


    const tutorLesson = (e)=>{
        e.preventDefault();
        
       console.log(subject,avil)
     
        authServices.createtutorsetails({subject:subject,availability:avil,tutorid:ID})
         .then((response) => {
                        toast.success(response.data.message);
        
                     
        
                        // navigate the user to the dashboard page
                        setTimeout(() => {
                          
                                navigate("/tutor/tutorProfile");
                           
                        }, 500);
                    })
                    .catch((error) => {
                        toast.error(error.response.data.message);
                    });
            

    }
    return (
    <div className="container mt-5 text-center">
                <h1 className="text-4xl text-gray-800">Create tutor Lesson</h1>
              
    
                <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
                    <form 
                  onSubmit={tutorLesson}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                subject
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="subject"
                                type="text"
                                placeholder="subject"
                               value={subject}
                               onChange={(e) => dispatch(setSubjects(e.target.value))}
                             
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Availablity
                            </label>
                            <select 
                            value={avil} 
                           onChange={e=>(setAvail(e.target.value))}
                            >
                                                <option>option</option>
                                            <option>on</option>
                                            <option>off</option>
                                            
                                            </select>
                        </div> 
                        
                   
                   
                    
                   
                   
                        <div className="flex items-center justify-between">
                            <button 
                             type="submit"
                            //onClick={tutorLesson}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                               
                            >
                                Create Lesson
                            </button>
                        </div>
                      
    
                    </form>
                    
                </div>
            </div>
        
    )

}
export default createlesson