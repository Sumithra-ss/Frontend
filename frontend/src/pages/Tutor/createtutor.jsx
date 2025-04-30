
import { useState } from "react";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tutor from "../../services/tutor";
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom';
import { selectEmail, selectexperience, selectexpertise, selectName, selectPassword, selectPrice, selectqualificat,  setEmail, setExper, setExpert, setName, setPassword, setQualificat,setPrice } from "../../redux/features/auth/tutorSlice";
const edittutor = ()=>{
const {ID}=useParams();
    const name = useSelector(selectName)
    const email = useSelector(selectEmail);
        const password = useSelector(selectPassword);
        const experi = useSelector(selectexperience);
        const expetetise = useSelector(selectexpertise);
        const Qualification = useSelector(selectqualificat);
        const price=useSelector(selectPrice)
        const [products,setProduct]=useState([])
    const dispatch = useDispatch();
    const navigate=useNavigate()
    console.log(ID)
     useEffect(()=>{
            gettutorbuid()
           },[])
           
        async function gettutorbuid() {
            try {
              const response = await fetch("http://localhost:3001/getTutorbyid/67f77fe3ee97a79c4308008c"); // Add a valid URL here
              const {post}  = await response.json(); // Add await before response.json()
              console.log(post);
             
                           setProduct(post)
              console.log(post)
             
            } catch (err) {
              console.log("Error:", err);
            }
    
    
          }
          const createtutor = (e)=>{
            e.preventDefault();
            console.log(name,email,password,experi,expetetise,Qualification,price)

            if (name.trim() === '') {
                toast.warning("Please Enter Name")
      return; // Exit the function if the input is empty or contains only whitespace
    }
    if (email.trim() === '') {
        toast.warning("Please Enter email")
return; // Exit the function if the input is empty or contains only whitespace
}
if (password.trim() === '') {
    toast.warning("Please Enter password")
return; // Exit the function if the input is empty or contains only whitespace
}
if (experi.trim() === '') {
    toast.warning("Please Enter Experience")
return; // Exit the function if the input is empty or contains only whitespace
}
if (expetetise.trim() === '') {
    toast.warning("Please Enter Expertise")
return; // Exit the function if the input is empty or contains only whitespace
}
if (Qualification.trim() === '') {
    toast.warning("Please Enter Qualification")
return; // Exit the function if the input is empty or contains only whitespace
}
if (price.trim() === '') {
    toast.warning("Please Enter price")
return; // Exit the function if the input is empty or contains only whitespace
}


            tutor.Createtutor({Name:name,email:email,password:password,Experience:experi,Expertise:expetetise,Qualifications:Qualification,price:price})
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
        const fileselector =event => {
            console.log(event.target.files[0])

        }
    return(
        <div className="container mt-5 text-center">
            <h1 className="text-4xl text-gray-800">Tutor Profile</h1>
           
                 
             <div className="max-w-6xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
                  <form>
                  <div className="grid grid-cols-4 w-4xs " >
                               <label  htmlFor="name"  className="w-15 py-2">
                                   Name
                               </label>
                               <input
                                   className="shadow appearance-none border rounded w-70 py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                   id="username"
                                   type="text"
                                   placeholder="name"
                                   value={name}
                                 onChange={(e) =>dispatch((setName(e.target.value)))}
                               />
                               <label className="block text-gray-700 text-sm font-bold mb-2 px-13 w--5" htmlFor="username">
                                                                  Email
                                                              </label>
                                                              <input
                                                                  className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                  id="username"
                                                                  type="text"
                                                                  placeholder="Email"
                                                                  value={email}
                                                                  onChange={(e) => dispatch(setEmail(e.target.value))}
                                                              />
                                                          
                                                              <label className="block text-gray-700 text-sm font-bold mb-2 w-15" htmlFor="password">
                                                                  Password
                                                              </label>
                                                              <input
                                                                  className="shadow appearance-none border border-red rounded w-70 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                                  id="password"
                                                                  type="password"
                                                                  placeholder="*********"
                                                                 value={password}
                                                                  onChange={(e) => dispatch(setPassword(e.target.value))}
                                                              />
                                                          
                                                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Experience">
                                                                  Experience
                                                              </label>
                                                              <input
                                                                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                                  id="Experience"
                                                                  type="text"
                                                                  placeholder="Experience"
                                                                 value={experi}
                                                                  onChange={(e) => dispatch(setExper(e.target.value))}
                                                                  
                                                              />
                                                               <label className="block text-gray-700 text-sm font-bold mb-2 w-15" htmlFor="password">
                                                                   
                                                          Expertise
                                                                   </label>
                                                                   <input
                                                                       className="shadow appearance-none border border-red rounded w-70 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                                       id="Expertise"
                                                                       type="text"
                                                                       placeholder="Expertise"
                                                                      value={expetetise}
                                                                       onChange={(e) => dispatch(setExpert(e.target.value))}
                                                                   />
                                                                   <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="password">
                                                                   
                                                                   Qualification
                                                                            </label>
                                                                            <input
                                                                                className="shadow appearance-none border border-red rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                                                id="Qualification"
                                                                                type="text"
                                                                                placeholder="Qualification"
                                                                               value={Qualification}
                                                                                onChange={(e) => dispatch(setQualificat(e.target.value))}
                                                                            />
                                                                            <label className="w-15 block text-gray-700 text-sm font-bold mb-2 " htmlFor="password">
                                                                   
                                                                   Price
                                                                            </label>
                                                                            <input
                                                                                className="shadow appearance-none border border-red rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                                                id="Qualification"
                                                                                type="text"
                                                                                placeholder="Price"
                                                                               value={price}
                                                                                onChange={(e) => dispatch(setPrice(e.target.value))}
                                                                            />
                               </div>
                             
                               <div className="grid grid-cols-4">
                               <button onClick={createtutor}
                                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                   type="submit"
                               >
                                   Create tutor
                               </button>
                               </div>
                  </form>             
             
            </div>
                   
            </div>
                
    )
}
export default edittutor