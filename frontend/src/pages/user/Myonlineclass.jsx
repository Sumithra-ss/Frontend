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
      const createtutor = (e)=>{
        e.preventDefault();
        console.log(name,email,password,experi,expetetise,Qualification)
       
        tutor.Createtutor({Name:name,email:email,password:password,Experience:experi,Expertise:expetetise,Qualifications:Qualification})
         .then((response) => {
                        toast.success(response.data.message);
        
                     
        
                        // navigate the user to the dashboard page
                        setTimeout(() => {
                              //navigate('/dashboard');
                        }, 500);
                    })
                    .catch((error) => {
                        toast.error(error.response.data.message);
                    });
            

    }
      console.log(records)
    return(
        <div >
          <h1 className="py-2 max-w-2xl mx-auto mt-5" > Play Record and Feeddback</h1>
             <div className= "grid grid-cols-4 gap-4 max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5"> 

             {
                records && records.map((item,index)=>(
                    <div key={index} className=" grid grid-cols-4 gap-4 ">
                      <div className=" grid grid-cols-4 gap-4 ">
                      <label>Subject:{item.subject}</label>
                     
                        {/* <input
                            className="shadow appearance-none border rounded w-full py-2 px-25 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="name"
                           type="text"
                            placeholder="Name"
                            value={item.Name}
                             //onChange={(e) => dispatch(setName(e.target.value))}
                            /> */}
                        

                      
                       
        
                        </div>
                        <div className="flex h-30 items-end">
                        <button  onClick={playRecording} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medum rounded-lg text-sm px-15 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play Recording</button>
                        <button onClick={()=>navToPage('/dashboard/Feedback')} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medum rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Feedback submit</button>
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