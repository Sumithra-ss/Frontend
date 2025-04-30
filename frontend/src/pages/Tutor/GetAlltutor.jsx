import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import GetAlltutors from "../../services/GetAlltutors";
import { data } from "react-router";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
const GetAlltutor = () => {
     const [records,setRecords]=useState([])
     const [result,setResult]=useState([])
      const [products,setProduct]=useState([''])
      const {ID}=useParams();
      console.log(ID)
           useEffect(()=>{ID
  updateProfile()
 },[])
 
 async function updateProfile() {
    try {
      const response = await fetch("http://localhost:3001/gettutor"); // Add a valid URL here
      const {tutor}  = await response.json(); // Add await before response.json()
      console.log(tutor);
      setProduct(tutor)
      setRecords(tutor)
    } catch (err) {
      console.log("Error:", err);
    }
  }
    return(
        <div  className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            
          
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
      {

      products && products.map((record,index) => (
        
        <div className='w-250 border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
            < Link to ={`tutor/tutorProfile/${record._id}`}><p className="text-xstext-lg font-bold text-blue-600">Book Online Class</p></Link>
          <div className="card-image">
          <img className='' src={assets.l1}/>
          </div>
          
         <p>subject:{record.subject}</p> 
         <p>Experience:{record.Experience}</p>
         <p>Expertise:{record.Expertise}</p>
         <p>Qualifications:{record.Qualifications}</p>
         <p>Email:{record.email}</p>
       
         
        </div>
      ))}
    </div>


   
  
</div>

      
        
    )
}
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };
export default GetAlltutor