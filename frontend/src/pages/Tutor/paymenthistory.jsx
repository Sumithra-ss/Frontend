import { useState ,useEffect} from "react";

const paymenthistory = ()=>{
    const [products,setProducts]=useState()
     useEffect(()=>{
        paymenthistory()
     },[])
      
    
     
    
          
     async function paymenthistory() {
      try {
       const response = await fetch("https://backendconnection-14tc.onrender.com/getPaymentdet"); // Add a valid URL here
       //const response = await fetch("http://localhost:3001/getTutorsdetails?keyword=on"); // Add a valid URL here
        const {paymentdetail}  = await response.json(); // Add await before response.json()
        console.log(paymentdetail);
       
        setProducts(paymentdetail)
      } catch (err) {
        console.log("Error:", err);
      }
    }
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h3 className="font-bold text-green-500">
        Payment History</h3>
      

       
        <div class='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        {
             products && products.map((item,index)=>(
                <div className ='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' key={index} >
                    <p className="font-bold">Studen name:{item.studentName}</p>
                    <p>Amount:{item.Amount}</p>
                    <p>Mode:{item.Mode}</p>
                </div>
            )
            )
        }
            </div>
       

</div>
    )

}

export default paymenthistory;