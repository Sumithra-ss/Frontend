import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { selectName, selectSlotDate, selectSubject,setName,setSlotDate,setSubject } from "../../redux/features/auth/CreateAppoinment";
import editappoinment from "./editappoinment";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router";
const Appoinmenteditbyid = () => {
    const [products,setProducts]=useState('')
    const [tutorname,setTutorName]=useState()
    const [subj,setSubj]=useState('')
    const [selectedDate,setDaate]=useState('')
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const {ID} =useParams()
    console.log(ID)
      useEffect(()=>{
           updateProfile()
          },[])
         
          async function updateProfile() {
             try {
               const response = await fetch(`https://backendconnection-14tc.onrender.com/getAppoinmentBYdet/${ID}`); // Add a valid URL here
               const data = await response.json(); // Add await before response.json()
               console.log(data);
               setProducts(data)
               setTutorName(data[0].tutorname)
               setSubj(data[0].Subject)
               setDaate(data[0].Date)
            //    console.log(data[0].tutorname)
            //     dispatch(setName(data[0].tutorname))
            //     dispatch(setSubject(data[0].Subject))
            //     dispatch(setSlotDate(data[0].Date))
             } catch (err) {
               console.log("Error:", err);
             }
           }
        console.log(products)
        console.log(tutorname)
        const EditAppointment = async () => {
            if (tutorname.trim() === '') {
                toast.warning("please enter Name")
                return; // Exit the function if the input is empty or contains only whitespace
              }
              if (subj.trim() === '') {
                toast.warning("please enter subject")
                return; // Exit the function if the input is empty or contains only whitespace
              }
              if (selectedDate.trim() === '') {
                toast.warning("please enter Date")
                return; // Exit the function if the input is empty or contains only whitespace
              }
                
                    console.log(tutorname,subj,selectedDate)
        
                    try {
           
                      //  console.log(ID)         
       
           
            fetch(`https://backendconnection-14tc.onrender.com/updateAppdetails/${ID}`,{
                method:'PUT',
                headers:{
                   'Accept':'application/json' ,
                   'Content-Type':'application/json'
                },
                body:JSON.stringify({tutorname:tutorname,Subject:subj,Date:selectedDate})
        
            }).then((result) =>[
                result.json().then((resp)=>{
                    console.log(resp)
                    toast.success(resp.data.message);
                })
            ])
            setTimeout(() => {
                navigate('/dashboard/editappoinment');
          }, 500);

            
                    } catch (error) {
                        console.log(error)
                        toast.error(error.message)
                    }
            
                }
                
            
    return(
        <div className="container mt-5 text-center">
            <h3 className="text-blue-400">Appoinment Details</h3>
            <div>
            {
<div className="mb-4">
    {
        products && products.map((item,index)=>(
            <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5" key={index}>
                <p>{item.tutorname}</p>
                 <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                            defaultValue={item.tutorname}
                                            onChange={(e) => (setTutorName(e.target.value))}
                                        />
                                         <input
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="name"
                                           type="text"
                                          placeholder="Name"
                                          defaultValue={item.Subject}
                                          onChange={(e) => (setSubj(e.target.value))}
                                           />
                                           <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                            defaultValue={item.Date}
                                            onChange={(e) => (setDaate(e.target.value))}
                                            />

            </div>
           

        ))
    }
                       
                    </div>

            }
            </div>
            <div className="gap-1">
            <button onClick={EditAppointment}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Edit  Appoinment
                        </button>
                        <button onClick={() => {navigate("/dashboard/Razorpay/")}}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Payment
                        </button>
            </div>
            <div>
            
            </div>
        </div>
    )

}
export default Appoinmenteditbyid