
import { useEffect,useRef, useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import dateFormat, { masks } from "dateformat";

const uploaddetails = ()=>{
const [products,setProducts]=useState('')

useEffect(()=>{
        gettutorbuid()
       },[])
    async function gettutorbuid() {
        try {
          const response = await fetch("http://localhost:3001/getTutorsdetails"); // Add a valid URL here
          const {tutor}  = await response.json(); // Add await before response.json()
          console.log(tutor);
          setProducts(tutor)
          
        } catch (err) {
          console.log("Error:", err);
        }

      }

      return (


        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        <>
       
      {

      
products && products.map((record,index) => (
        
    <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
        < Link to ={`/tutor/upload/${record._id}`}><p className="text-xl">subject:{record.subject}</p></Link>
         <p>availability:{record?.availability }</p>
         
         <p>CreateDate:{dateFormat(record?.createAt, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</p>
         
      <div className="card-image">
    

      </div>
      </div>
  
         ))
         
   }
   </>

</div>
</div>
 
 



    )
}




export default uploaddetails