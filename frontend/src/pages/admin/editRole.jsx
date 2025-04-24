import { Link, useNavigate } from "react-router";
import { useState ,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
const editRole = () => {
 const [products,setProducts]=useState()
 const [EEmail,setEmail]=useState()
 const [Role,setRole]=useState()
 const [SStatus,setStatus]=useState()
 
         useEffect(()=>{
            paymenthistory()
         },[])
          
        const {ID}=useParams()
    
        console.log(ID)
              
         async function paymenthistory() {
          try {
           const response = await fetch(`https://backendconnection-14tc.onrender.com/getuserdetbyid/${ID}`); // Add a valid URL here
           //const response = await fetch("http://localhost:3001/getTutorsdetails?keyword=on"); // Add a valid URL here
            const resp  = await response.json(); // Add await before response.json()
            console.log(resp);
           
            setProducts(resp)
          } catch (err) {
            console.log("Error:", err);
          }
        }
       const editUser = async () => {
                   
       
                   try {
          
                      
           fetch(`https://backendconnection-14tc.onrender.com/updatePost/${ID}`,{
               method:'PUT',
               headers:{
                  'Accept':'application/json' ,
                  'Content-Type':'application/json'
               },
               body:JSON.stringify({email:EEmail,role:Role,status:SStatus})
       
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
            <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h3 className="font-bold text-green-500">
            Admin Dashboard</h3>
          
    
           
            <div class='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            {
                 products && products.map((item,index)=>(
                    <div className ='w-100 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' key={index} >
                       <label className="block text-gray-700 text-sm font-bold mb-2 py-2 px-25" htmlFor="name">
                            Email
                        </label>

                         <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="name"
                                                    type="text"
                                                    placeholder="Name"
                                                    defaultValue={item.email}
                                                    onChange={(e) => (setEmail(e.target.value))}
                                                />
                                                 <label className="block text-gray-700 text-sm font-bold mb-2 py-2 px-25" htmlFor="name">
                            Role
                        </label>

                         <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="name"
                                                    type="text"
                                                    placeholder="Name"
                                                    defaultValue={item.role}
                                                    onChange={(e) => (setRole(e.target.value))}
                                                />
                                                 <label className="block text-gray-700 text-sm font-bold mb-2 py-2 px-25" htmlFor="name">
                                                 status
                        </label>
                        <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-2 px-25"
                                                    id="name"
                                                    type="text"
                                                    placeholder="Name"
                                                    defaultValue={item.status}
                                                    onChange={(e) => (setStatus(e.target.value))}
                                                />
                        
                       
                       
                    </div>
                )
                )
            }
                </div>
                <div className="flex items-center justify-between">
                        <button onClick={editUser}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Edit User
                        </button>
                    </div>
           
                   
                   

    </div>
        )
    }
export default editRole 