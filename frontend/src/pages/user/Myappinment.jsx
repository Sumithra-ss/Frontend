
import Appoinment from '../../services/Appoinment';
import Dashboard from '../user/DashboardPage'
import { assets } from '../../assets/assets'
import { Link } from "react-router";

import { selectName,selectSubject,selectSlotDate,selectSlotTime,selectACtive1,setName,setSubject,setSlotDate,setsSlotTime, setsACive1} from "../../redux/features/auth/CreateAppoinment";
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { toast } from 'react-toastify'
const Myappinment = () => {
    const[result1,setResult1]=useState([])
    const dispatch=useDispatch()
    //const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
    const name=useSelector(selectName);
    const subject = useSelector(selectSubject);
     const slotDate = useSelector(selectSlotDate);
    const slottime = useSelector(selectSlotTime);
    const [products,setProduct]=useState()
    const Active = useSelector(selectACtive1);
     const [tutorinfo, setTutorinfo] = useState({})
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')
    const [tutorname, setTutorname] = useState('')
    const {ID}=useParams();
    const navigate = useNavigate()
    console.log(ID)
   console.log(slotTime)
   
  
    //console.log(name,subject,Active)
    useEffect(()=>{
        getTutor()
           },[ID])
           
       
        useEffect(()=>
            {
                getAvailableSolts()
            }
            ,[tutorinfo])
            useEffect(()=>
                {
                   console.log(docSlots)
                }
                ,[docSlots])
             
              async function getTutor() {
                
                try {
                    console.log('Hellow')
                  const response = await fetch(`http://localhost:3001/getTutordetbyid/67fff15dd174f3726012b831`); // Add a valid URL here
                  const data  = await response.json(); // Add await before response.json()
                  console.log(data);
                 setProduct(data)
                 setTutorinfo(data)
                
          
                } catch (err) {
                  console.log("Error:", err);
                }
        
              }
       
          const getAvailableSolts = async () => {

            setDocSlots([])
    
            // getting current date
            let today = new Date()
    
            for (let i = 0; i < 7; i++) {
    
                // getting date with index 
                let currentDate = new Date(today)
                console.log(currentDate)
                currentDate.setDate(today.getDate() + i)
    
                // setting end time of the date with index
                let endTime = new Date()
                endTime.setDate(today.getDate() + i)
                endTime.setHours(21, 0, 0, 0)
    
                // setting hours 
                if (today.getDate() === currentDate.getDate()) {
                    currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                    currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
                } else {
                    currentDate.setHours(10)
                    currentDate.setMinutes(0)
                }
    
                let timeSlots = [];
    
    
                while (currentDate < endTime) {
                    let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
                    // let day = currentDate.getDate()
                    // let month = currentDate.getMonth() + 1
                    // let year = currentDate.getFullYear()
    
                    // const slotDate = day + "_" + month + "_" + year
                    // const slotTime = formattedTime
    
                   // const isSlotAvailable = tutorinfo.slots_booked[slotDate] && tutorinfo.slots_booked[slotDate].includes(slotTime) ? false : true
    
                    
    
                        // Add slot to array
                        timeSlots.push({
                            datetime: new Date(currentDate),
                            time: formattedTime
                        })
                   
    
                    // Increment current time by 30 minutes
                    currentDate.setMinutes(currentDate.getMinutes() + 30);
                }
    
                setDocSlots(prev => ([...prev, timeSlots]))
    
            }

    
        }

        useEffect(()=>{
            console.log(docSlots)
        
          },[docSlots])
          const bookAppointment = async () => {

            
            const date = docSlots[slotIndex][0].datetime
    
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()
    
            const slotDate = day + "_" + month + "_" + year
           
            dispatch(setSlotDate(slotDate))
         
            console.log(tutorname)
            console.log(name)
           console.log(slottime)
            console.log(slotDate)
        
            Appoinment.createtutorAppdet({ Date: slotDate,Time:slotTime,tutorname:tutorinfo.Name,Subject:tutorinfo.subject,Active:"Active",Appid:"05" })
            .then((response) => {
                toast.success(response.data.message);

             

                // navigate the user to the dashboard page
                setTimeout(() => {
                      navigate('/dashboard');
                }, 500);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    

        }
        
   
 return (
        
        <div >
{/* ---------- Doctor Details ----------- */}
 {/* ---------- Doctor Details ----------- */}
 <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={assets.l1} alt="" />
                </div>

                <div className='flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>

                    {/* ----- Doc Info : name, degree, experience ----- */}
                    {
                        products && products.map((item,index)=>(
                            <div key={index}>
                                 <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{products[0].Name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
                    <div className='flex items-center gap-2 mt-1 text-gray-600'>
                        <p>{products[0].subject}</p>
                       
                    </div>

                            </div>

                        )
                        )
                    }

                   

                    {/* ----- Doc About ----- */}
                   

                 
                </div>
            </div>

            {/* Booking slots */}
            
            <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]'>
                <p >Booking slots</p>
                
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {docSlots.length && docSlots.map((item, index) => (
                       
                        <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-blue' : 'border border-[#DDDDDD]'}`}>
                            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {docSlots.length && docSlots[slotIndex].map((item, index) => (
                        <p onClick={() => setSlotTime(item.time)} key={index} className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-blue' : 'text-[#949494] border border-[#B4B4B4]'}`}>{item.time.toLowerCase()}</p>
                    ))}
                </div>

                <button onClick={bookAppointment} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Book an appointment</button>
                
            </div>

            
           
        </div>
    )
}

export default Myappinment
