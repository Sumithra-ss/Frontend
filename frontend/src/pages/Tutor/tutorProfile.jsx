//import {react} from "react-router"
import { useState } from "react";
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tutor from "../../services/tutor";
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import { selectEmail, selectexperience, selectexpertise, selectName, selectPassword, selectqualificat, setEmail, setExper, setExpert, setName, setPassword, setQualificat } from "../../redux/features/auth/tutorSlice";

import GetAlltutor from '././GetAlltutor';

const tutorProfile = () =>{
    const {ID}=useParams();
    let id={ID}
    console.log(id)
    const name = useSelector(selectName)
    const email = useSelector(selectEmail);
        const password = useSelector(selectPassword);
        const experi = useSelector(selectexperience);
        const expetetise = useSelector(selectexpertise);
        const Qualification = useSelector(selectqualificat);
        const [products,setProduct]=useState([])
        const [tutorname,setTutorname]=useState()
        const [eename,setEEmail]=useState()
       
    const dispatch = useDispatch();
    const navigate=useNavigate()
    console.log(ID)
    useEffect(()=>{
        gettutorbuid()
       },[ID])
       
    async function gettutorbuid() {
        try {
          const response = await fetch(`http://localhost:3001/getTutorbyid/${ID}`); // Add a valid URL here
          const data  = await response.json(); // Add await before response.json()
          console.log(data);
          setProduct(data)
          console.log(data[0].Name)
       dispatch(setName(data[0].Name))
       dispatch(setEmail(data[0].email))
       dispatch(setPassword(data[0].password))
       dispatch(setExper(data[0].Experience))
       dispatch(setExpert(data[0].Expertise))
       dispatch(setQualificat(data[0].Qualifications))
        } catch (err) {
          console.log("Error:", err);
        }

      }
     
     console.log(products)
     //console.log(  dispatch(setName(products.Name)))
     
      console.log(name,email,password,experi,expetetise,Qualification)
      console.log(tutorname)
      
      const editTutordetails = (e)=>{
        e.preventDefault();
        if(!e){


          
            dispatch(setName(name))
           // dispatch(setname(name))
        
           
       

        }
      
       
        fetch(`https://backendconnection-14tc.onrender.com/updateTutorbyid/${ID}`,{
            method:'PUT',
            headers:{
               'Accept':'application/json' ,
               'Content-Type':'application/json'
            },
            body:JSON.stringify({Name:name,email:email,password:password,Experience:experi,Expertise:expetetise,Qualifications:Qualification})
    
    
        }).then((result) =>[
            result.json().then((resp)=>{
               
            
                 //navigate('/dashboard');
                 setTimeout(() => {
                    navigate("/tutor/tutorProfile");
                }, 500);
            })
        ])
            

    }
   
    return(
        <div className="container mt-5 text-center">
                   <h1 className="text-4xl text-gray-800">Tutor Profile</h1>
                   {
products && products.map((post,index) => (
    <div key={index}>
   
                   <div className="max-w-6xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
                       <form >
                           <div className="grid grid-cols-4 w-4xs " >
                               <label  htmlFor="name"  className="w-15 py-2">
                                   Name
                               </label>
                               <input
                                   className="shadow appearance-none border rounded w-70 py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                   id="name"
                                   type="text"
                                   placeholder="Name"
                                  
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
                                   type="text"
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
                                    
                           </div>
                          
                           <div className="grid grid-cols-4">
                               {/* <button onClick={createtutor}
                                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                   type="submit"
                               >
                                   Create tutor
                               </button> */}
                               <div>
                               <button onClick={editTutordetails}
                                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-60 rounded focus:outline-none focus:shadow-outline"
                                   type="submit"
                               >
                                   Edit tutor
                               </button>
                               </div>
                               <div>
                               <button 
                               onClick={() => navigate("createinglesson/${post._id}")}
                                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-60 rounded focus:outline-none focus:shadow-outline"
                                   type="submit"
                               >
                                   Create Lesson
                               </button>
                               </div>
                               <div>
                               <button 
                               onClick={() => navigate("FeedbackReview/${post._id}")}
                                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-60 rounded focus:outline-none focus:shadow-outline"
                                   type="submit"
                               >
                                  Feedback and Review
                               </button>
                               </div>
                           </div>
                       </form>
                       
                   </div>
                   </div>
))
                   }
               </div>
               
    )
   
    
}
export default tutorProfile;