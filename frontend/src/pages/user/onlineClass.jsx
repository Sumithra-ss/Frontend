import React from "react"
import { useState } from "react";
import { useLoaderData } from "react-router";
//import {fileinput} from "flowbite-react"

 import { toast } from "react-toastify";

const onlineClass = () => {
        const [selectedFile,setSelectedFile]=useState(null)
        const [progress,setProgress]=useState(0)
        const [uploading,downloading]=useState(false)
        const [message,setMessage]=useState("")
        const [product,setProducts]=useState()

        async function gettutorbuid() {
            try {
              const response = await fetch("https://backendconnection-14tc.onrender.com/getuploaddetails"); // Add a valid URL here
              const tutor = await response.json(); // Add await before response.json()
                           setProducts(tutor);
              
            } catch (err) {
              console.log("Error:", err);
            }
        
         function  handlefilechange(event){
            console.log(event.target.files[0])
            selectedFile(event.target.files)
         }
         function handleform(){
            console.log("success")
         }
             return (
                 <div className="bg-gray-100">
                     <div className="min-h-screen flex items-center justify-center">
                         <div className="bg-white p-16 rounded-lg shadow-2xl w-96">
                             <h2 className="text-3xl font-bold mb-10 text-center">Online Class</h2>
                             <div className="mb-4">
                                 <label htmlFor="name" className="text-sm font-medium">Name</label>
                                 <input onChange={handlefilechange}
  type="file"
  class="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
/>

<button onClick={handleform} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload</button>
         
                             </div>
                            
                             <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                             disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50
                             " enabled >Play Recording</button>
                         </div>
                     </div>
                 </div>
             )
}


export default onlineClass