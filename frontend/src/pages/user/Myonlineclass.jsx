import { Link, useNavigate } from "react-router";
import { useEffect,useState } from "react"
const Myonlineclass =()=>{
    const [records,setRecords]=useState([])
     const [products,setProduct]=useState([''])
     
    const playRecording = () =>{
        window.open("https://res.cloudinary.com/dwtgtvxgz/video/upload/v1744347750/tdhag25gcjbsvztystur.mp4");

    }
     useEffect(()=>{
      updateProfile()
     },[])
    
     const navigate = useNavigate();

    const navToPage=(url)=>{
        navigate(url)
    }
      
    async function updateProfile() {
        try {
         // const response = await fetch("http://localhost:3001/gettutor"); // Add a valid URL here
         const response = await fetch("http://localhost:3001/getuploaddetails"); // Add a valid URL here
          const {tutor}  = await response.json(); // Add await before response.json()
          console.log(tutor);
          setProduct(tutor)
          setRecords(tutor)
        } catch (err) {
          console.log("Error:", err);
        }
      }
      

      

    return(
        <div >
          <h5 className="py-2 max-w-xl mx-auto mt-5 font-semibold" > Play Record and Feeddback</h5>
             <div className= " max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5"> 

             {
  records &&
    records.map((item, index) => (
      <div key={index} className="grid grid-cols-4 gap-4">
        <div className="col-span-4 bg-cyan-900 py-5">
          <label className="text-white py-7" >Subject: {item.subject}</label>
        </div>
<div className="col-span-4 flex h-30 items-end gap-4">
          <button
            onClick={playRecording}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Play Recording
          </button>
<button
           
           onClick={() =>navigate(`/dashboard/Feedback/${item._id}/${item.tutordetid}`)}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Feedback Submit
          </button>
</div>
      </div>
    ))
}
           
           
                
         </div>
         <div>
       
         </div>
        </div>

        
    )
}

export default Myonlineclass