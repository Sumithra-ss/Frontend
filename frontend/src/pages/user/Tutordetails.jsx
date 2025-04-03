import React from "react"
import { useEffect } from "react"

const Tutordetails = () => {
     const [products,setProduct]=useState([''])
      const [products,setProduct]=useState([''])
     useEffect(()=>{
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
      
    return (
        <div>
            <>
                
                  {
                 
                  
                  <div style={styles.container}>
                  {
            
                  products && products.map((record,index) => (
                    
                    <div key={index}>
                      <div className="card-image">
             <img className='' src={assets.l1}/>
                      </div>
                      
                     <p>{record.subject}</p> 
                     <p>{record.Experience}</p>
                     <p>{record.Expertise}</p>
                     <p>{record.Qualification}</p>
                     <p>{record.Feedback}</p>
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
                     
                    </div>
                  ))}
                </div>
            
            
               }
               </>
        </div>
    )

}

export default Tutordetails