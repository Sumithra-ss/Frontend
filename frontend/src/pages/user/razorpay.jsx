import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import GetAlltutors from "../../services/GetAlltutors";
import { data } from "react-router";
import { assets } from "../../assets/assets";
import Rating from "react"
import Typography from 'react'
import {FaStar} from "react-icons/fa"
import { useNavigate } from "react-router"; 
import { Link, useRevalidator } from "react-router-dom"
import MyAppoinment from '../user/Myappinment'
import {  Outlet ,useLoaderData} from "react-router";
import payment from "../../services/payment";
const Razorpay = () => {
const [amount,setAmount] = useState('');
const  {user} = useLoaderData();
    // const user=null
 console.log(user.name);
    // const password = useSelector(selectPassword);

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

const handleSubmit = (e) => {
 e.preventDefault();
console.log( amount);
if (amount==="")
    {
        alert("Please Enter the Amount")
    }else
    {
        var options = {
            key: "rzp_test_n0CSc3U7N6Y3a2",
            key_secret:"0wLGQD8xaNISQB0juAoRAUFv5",
            amount: amount *1,
            currency:"INR",
            name:"STARTUP_PROJECTS",
            description:"for testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"Sumithra",
              email:"sumithra321@gmail.com",
              contact:"1234567891"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
           
          payment.createpaymentdet({studentName:user.name,Amount:amount,Mode:"Online"})
          .then((response) => {
                         toast.success(response.data.message);
         
                      
         
                         // navigate the user to the dashboard page
                         setTimeout(() => {
                             //navigate("/dashboard");
                         }, 500);
                     })
                     .catch((error) => {
                         toast.error(error.response.data.message);
                     });
             
        }
       
       

  }
    return (
        <div className="container mt-5 text-center">
        <h1 className="text-4xl text-gray-800">Welcome  to Razorpay!</h1>
      
        <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
            <form 
            onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Amount
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Enter the Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                       
                    />
                </div>
                
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>


            
        </div>
    </div>
)
}


export default Razorpay