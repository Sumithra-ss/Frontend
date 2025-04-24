import { useState,useEffect } from "react";
import { useLoaderData } from "react-router";
import { useDispatch, useSelector } from "react-redux";
 import { toast } from "react-toastify";
 

const ProfilePage = () => {


const [UserId,setUserId]=useState(null)
const [products,setProduct]=useState()
const [name,setName]=useState()
const [email ,setEmail]=useState()

    const { user } = useLoaderData();
    let Name=user.name
    
    const UserId1=user
    let Email=user.email
    
    useEffect(()=>{
        updateProfile()
       },[])
        
     useEffect(()=>{
          updateProfile()
         },[])
         async function updateProfile() {
            try {
             const response = await fetch(`http://localhost:3001/getuserbtid${UserId1._id}`); // Add a valid URL here
             //const response = await fetch("http://localhost:3001/getTutorsdetails?keyword=on"); // Add a valid URL here
              const {tutor}  = await response.json(); // Add await before response.json()
              console.log(tutor);
              setProduct(tutor)
              setRecords(tutor)
            } catch (err) {
              console.log("Error:", err);
            }
          }

function updateProfile()
{
 
   
    console.log(`Fetching URL: https://backendconnection-14tc.onrender.com/api/v1/auth/${UserId1._id}`);
   
    fetch(`https://backendconnection-14tc.onrender.com/api/v1/auth/${user._id}`,{
        method:'POST',
        headers:{
           'Accept':'application/json' ,
           'Content-Type':'application/json'
        },
        body:JSON.stringify({name:name,email:email})


    }).then((result) =>[
        result.json().then((resp)=>{
            console.log(resp)
        })
    ])
   
}


    return (
        <div className="bg-gray-100">
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-16 rounded-lg shadow-2xl w-96">
                    <h2 className="text-3xl font-bold mb-10 text-center">Profile</h2>
                    <div className="mb-4">
                        {
                            products && products.map((item,index)=>(
                                <div key={index}>

                                    
                                </div>
                            ))
                            
                        }
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md " 
                          defaultValue={user.name}   
                          onChange={(e)=>{dispatchEvent(setName(e.target.value))}}
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md  " 
                          defaultValue={user.email}  
                           onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                    disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50
                    " enabled onClick={updateProfile}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;