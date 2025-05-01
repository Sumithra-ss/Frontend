import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import GetAlltutors from "../../services/GetAlltutors";
import { data } from "react-router";
import { assets } from "../../assets/assets";
import Rating from "react"
import Typography from 'react'
import {FaStar} from "react-icons/fa"
import { useNavigate } from "react-router"; 
import { Link } from "react-router-dom"
import MyAppoinment from '../user/Myappinment'

const Dashboard = (setResult1) => {
  const navigate=useNavigate()
 const [products,setProduct]=useState([])
 const [tutordet,setTutordet]=useState([])
 const [filter,setFilter]=useState([''])
 const [currentValue, setCurrentValue] = useState(0);
 const [hoverValue, setHoverValue] = useState(undefined);
 const [records,setRecords]=useState([])
 const [data,setData]=useState([])
 const [input,setInput]=useState([])
 const [result,setResult]=useState([])
 const Navigate=useNavigate()
 const handleClick = value => {
  setCurrentValue(value)
}

const handleMouseOver = newHoverValue => {
  setHoverValue(newHoverValue)
};

const handleMouseLeave = () => {
  setHoverValue(undefined)
}
 useEffect(()=>{
  updateProfile()
 },[])
  

     


 const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};

      
 async function updateProfile() {
  try {
   const response = await fetch("https://backendconnection-14tc.onrender.com/getTutorsdetailsbyfeedback"); // Add a valid URL here
   //const response = await fetch("http://localhost:3001/getTutorsdetails?keyword=on"); // Add a valid URL here
    const {tutor}  = await response.json(); // Add await before response.json()
    console.log(tutor);
    setProduct(tutor)
    setRecords(tutor)
  } catch (err) {
    console.log("Error:", err);
  }
}
     

     const stars=Array(5).fill(0)

  const fetchData = async (value)=>{

    console.log(value)
   const response=await fetch(`https://backendconnection-14tc.onrender.com/getTutorsdetailsbyDashboard/${value}`)
   const tutor  = await response.json(); 
// const results =json.tutor.filter((user)=>{
//   return (
//     value && user && user.subject.toLowerCase().includes(value)
//   )
// })
setProduct(tutor)


    
  }
  const handleChange=(value)=>{
    setInput(value);
    fetchData(value)
   
      
  }
  
  // if(tutordet.length===0){
  //   toast.warning("no data available")
    
  // }
  if (!products || !Array.isArray(products)) {
    return <p>No products available.</p>;
    
}
    return (


        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className="text-center text-3xl font-semobold text-gray-800">
            Dashboard</h1>
            <div class="w-full max-w-sm min-w-[200px]">
  <div class="relative">
    <input type="text" value={input}
    onChange={(e)=>handleChange(e.target.value)}
      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="Subject, Price, avilability..." 
    />
    <button
      class="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2">
        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
      </svg>
 
      Search
    </button> 
  </div>
  <div>
    
    {setResult}
  </div>
  <div>
  

<>
<p class="font-normal md:font-bold ...">
  Book Appoinment
</p>



      {
      // products && products.map((item,i)=>{
      //   return(
      //     <div key={i._id}>
      //       {item.price}
      //     </div>
      //   )
      // })
      
      
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
       
      {
        
        
        products && products.map((record,index) => (
        
        <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
            <p>Experience:{record?.tutorid?.Experience }</p> 
             < Link to ={`dashboard/Appoinment/${record._id}`}>subject:{record.subject}</Link>
             <p>Experience:{record?.tutorid?.Experience }</p>
          <div className="card-image">
        
 <img className='' src={assets.l1}/>
          </div>
      
      
         
         <p>Qualifications:{record?.tutorid?.Qualifications}</p>
         <p>Feedback:{record.Feedback}</p>
         <div style={styles.stars}>

          {
            stars.map((_,index)=>{
              return(
<FaStar key={index}
size={24}
color={(record?.Rating || 5) > index ? colors.orange : colors.grey}

style={{
  marginRight: 10,
  cursor: "pointer"
}}/>

              )
              
            })
            
          }


        

         </div>
         
        </div>
      ))}
    </div>


   }
   </>

</div>
 <div>
 
</div>
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
export default Dashboard;