
import {useEffect,useState} from 'react';
import Appoinment from '../../services/Appoinment'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { assets } from "../../assets/assets";
import { selectName, selectSlotTime, selectSubject, setSlotDate,setName ,setSubject,setsSlotTime,} from "../../redux/features/auth/CreateAppoinment";
import { toast } from "react-toastify";
import GetAlltutors from "../../services/GetAlltutors";
import { data } from "react-router";

import Rating from "react"
import Typography from 'react'
import {FaStar} from "react-icons/fa"
import { useNavigate } from "react-router"; 
import { Link } from "react-router-dom"
import Dashboard from './DashboardPage';
import { useSelector,useDispatch } from 'react-redux';
const Details = () => {
    const navigate=useNavigate()
     //const {ID}=useParams();
     const ID=""
     const tutorname=useSelector(selectName)
     const subject=useSelector(selectSubject)
     const sDate=useSelector(setSlotDate)
     const sTime=useSelector(selectSlotTime)
     const dispatch = useDispatch();
    console.log(tutorname,subject,sDate,sTime)
    const [products,setProduct]=useState([''])
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [records,setRecords]=useState([])
    const [data,setData]=useState([])
    const [input,setInput]=useState([])
    const [result,setResult]=useState([])
    console.log(ID)
    const [appointments, setAppointments] = useState([])
    const [payment, setPayment] = useState('')
    
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
       const response = await fetch("http://localhost:3001/getAppoinmentdet?keyword=Active"); // Add a valid URL here
       const {Appoinment}  = await response.json(); // Add await before response.json()
       console.log(Appoinment);
       setProduct(Appoinment)
       dispatch(setSubject(Appoinment[0].data.Subject))
       dispatch(setSlotDate(Appoinment.data.Date))
       dispatch(setName(Appoinment[0].data.tutorname))
      console.log(Appoinment)
     } catch (err) {
       console.log("Error:", err);
     }
   }
        
   
        const stars=Array(5).fill(0)
        const appointmentRazorpay = async (appointmentId) => {
            try {
                const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
                if (data.success) {
                    initPay(data.order)
                }else{
                    toast.error(data.message)
                }
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
        const cancelAppointment = async (ID) => {

            try {
   
console.log(ID)
let item="Active:cancelled"
console.log(item)
   
    fetch(`http://localhost:3001/updateAppdet/${ID}`,{
        method:'POST',
        headers:{
           'Accept':'application/json' ,
           'Content-Type':'application/json'
        },
        body:JSON.stringify(item)

    }).then((result) =>[
        result.json().then((resp)=>{

            console.log(resp)
        })
    ])
    
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
    
        }
        const EditAppointment = async (ID) => {
            console.log(tutorname,subject)

            try {
   
                console.log(ID)         
console.log(tutorname)
   
    // fetch(`http://localhost:3001/updateAppdetails/${ID}`,{
    //     method:'POST',
    //     headers:{
    //        'Accept':'application/json' ,
    //        'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({tutorname:tutorname,Subject:subject,Date:sDate,Time:sTime})

    // }).then((result) =>[
    //     result.json().then((resp)=>{
    //         console.log(resp)
    //     })
    // ])
    
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
    
        }
    
        return (


            <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
                <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>MY APPOINMENT</p>
                <div>
                    {
                        products && products.map((item,index)=>(
                            <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                                <div>
                                    <img className='w-36 bg-[#EAEFFF]' src={assets.l1}/>
                                </div>
                                <div className='flex-1 text-sm text-[#5E5E5E]'>
                                    <p className='text-[#262626] text-base font-semibold'></p>
                                     <input
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                id="username"
                                                                type="text"
                                                                placeholder="Email"
                                                                defaultValue={tutorname}
                                                                onChange={(e) => dispatch(setName(e.target.value))}
                                                               
                                                            />
                                                             <input
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                id="username"
                                                                type="text"
                                                                defaultValue={item.Subject}
                                                                onChange={(e) => dispatch(setSubject(e.target.value))}
                                                               
                                                            />
                                                                <input
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                id="username"
                                                                type="text"
                                                                defaultValue={item.Date} 
                                                                
                                                              onChange={(e) => dispatch(setSlotDate(e.target.value))}
                                                               
                                                            />
                                                             <input
                                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                id="username"
                                                                type="text"
                                                                defaultValue={item.Time}
                                                               onChange={(e) => dispatch(setsSlotTime(e.target.value))}
                                                               
                                                            />
                                    
                                    
                                </div>
                                <div>
                                <button className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-blue-600 hover:text-white transition-all duration-300'>Pay Online</button>
                                <button onClick={() => appointmentStripe(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="" /></button>
                                <button onClick={() => {navigate("/dashboard/Razorpay/")}} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="" /></button>
                               {!item.cancelled && <button onClick={() => cancelAppointment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>}
                               { <button onClick={() => EditAppointment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Edit appointment</button>}
                        {/* / { <button onClick={() => EditAppointment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Book Online</button>} */}
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
                </div>
                )
            }
export default Details;
