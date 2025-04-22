import { FaStar } from "react-icons/fa"
import { useState,useEffect  } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectFeedback,setFeedback } from "../../redux/features/auth/tutordetailSlice";

import { useNavigate } from "react-router-dom";
import { selectEmail } from "../../redux/features/auth/loginSlice";
import { useLoaderData } from "react-router";
const Feedback = ()=>
{
    const feedback=useSelector(selectFeedback)
    const [feedack,setfeedback]=useState(null)
    const [rating,setRating]=useState(null)
    const [ratecolor,setcolor]=useState((null))
 const { user } = useLoaderData();
console.log(user)

 const UserId1=user
 console.log(UserId1.name)
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const EEmail=useSelector(selectEmail)
    console.log(EEmail)
    async function updateFeedback() {
      console.log(feedack)
      
              fetch(`http://localhost:3001/updateTutordetbyid/67fff15dd174f3726012b831`,{
                  method:'PUT',
                  headers:{
                     'Accept':'application/json' ,
                     'Content-Type':'application/json'
                  },
                  body:JSON.stringify({studentName:UserId1.name,Feedback:feedack,Rating:rating})
          
          
              }).then((result) =>[
                  result.json().then((resp)=>{
                      console.log(resp)
                      
                       //navigate('/dashboard');
                  })
              ])
                  
}
return(
    <div >
        <label>How do you Rate Mentor skill</label>
<>
<div style={styles.stars}>

{[...Array(5)].map((star,index)=>{
const currentRate=index+1
    return(
       
            <>
             <label>
                
             </label>
        <FaStar size={50} onClick={()=>setRating(currentRate)}
        color={currentRate <= (ratecolor || rating)? "Blue" : "grey"} />
            </>
        
    )
})

}



</div>
</>
<div>
    
<label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How do you provide mentor-Feedback</label>
<textarea 
value={feedack} 
 onChange={(e) => (setfeedback(e.target.value))
 
 }
 
id="message"
  rows="4" class="block p-2.5 w-150 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Feedback..."></textarea>
<button onClick={updateFeedback} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
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
export default Feedback