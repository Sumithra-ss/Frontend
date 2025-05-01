
import React, {  useEffect,useState } from 'react'
import {FaStar} from "react-icons/fa"
import { useParams } from 'react-router-dom';
const ReviewFeedback = () =>
{
    const [products,setProduct]=useState([])
    const {ID}=useParams();
    console.log(ID)
      useEffect(()=>{
            gettutorbuid()
           },[])
           const colors = {
            orange: "#FFBA5A",
            grey: "#a9a9a9"
            
          };
          const stars=Array(5).fill(0)
          



      async function getTutorID() {
        try {
         const response = await fetch("https://backendconnection-14tc.onrender.com/gettutoridbyname/React"); // Add a valid URL here
         //const response = await fetch("http://localhost:3001/getTutorsdetails?keyword=on"); // Add a valid URL here
          const {tutor}  = await response.json(); // Add await before response.json()
          console.log(tutor);
          setProduct(tutor)
          setRecords(tutor)
        } catch (err) {
          console.log("Error:", err);
        }
      }
      return(
        <div  className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 bg-blue'>
            <div className='w-50 font-bold'>
            <h6 className='text-violet-900'>Feedback and Review</h6>
            </div>
         
      <div className='bg-blue'>
      {

      products && products.map((record,index) => (
        
        <div key={index}>
           
          <div className="bg-blue p-4 my-4 shadow-lg rounded-lg w-50">
            
            <h2 className='text-xl font-bold'>Feedback:{record.Feedback}</h2>
        
         <div style={styles.stars}>
        
                  {
                    stars.map((_,index)=>{
                      return(
        <FaStar key={index}
        size={24}
        color={(record.Rating || 5) > index ? colors.orange : colors.grey}
        
        style={{
          marginRight: 10,
          cursor: "pointer"
        }}/>
        
                      )
                      
                    })
                  }
        
        
                
        
                 </div>
         <p>student name:{record.studentName}</p>
          </div>
          
        
         
       

         
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
export default ReviewFeedback
