import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

import {useState,useEffect

} from "react"
import { selectEmail, selectPassword, setEmail, setPassword } from "../redux/features/auth/loginSlice";
import authServices from "../services/authServices";
import { toast } from "react-toastify";


const LoginPage = () => {

    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const [products,setProduct]=useState([''])
    const [record,setRecords]=useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
console.log( email, password);
        authServices.login({ email, password })
            .then((response) => {
                toast.success(response.data.message);
console.log(response)
                // clear the form
               // dispatch(setEmail(''));
                dispatch(setPassword(''));

                // navigate the user to the dashboard page

                setTimeout(() => {
                     
                    
                    console.log(response.data.user.role)
                    if (response.data.user.role =='tutor') {
                       
                        navigate('/tutor/tutorProfile');
                    }
                    else
                    
                    {
                        navigate('/dashboard');
                   }
                                
                             
                  
                }, 500);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }
   

    async function updateProfile() {
        try {
           
          const response = await fetch(`https://backendconnection-14tc.onrender.com/${email}`); // Add a valid URL here
          const {post}  = await response.json(); // Add await before response.json()
          console.log(post);
          setProduct(post)
          setRecords(post)
          if (post.role=="tutor"){
navigate('/tutor/gettutor');
          }
          else if (post.role=="user")
          {
            navigate('/dashboard');
          }
          else if(post.role=="admin")
          {

            navigate('/admin/dashbaord/getuser');
          }
          
        } catch (err) {
          console.log("Error:", err);
        }
      }

    return (
        <div className="container mt-5 text-center">
            <h1 className="text-4xl text-gray-800">Login to LMS!</h1>
            <h4 className="text-xl text-gray-600">A simple LMS application</h4>

            <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                           
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="*********"
                            value={password}
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                           
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


                <p className="text-center text-gray-600 text-md mt-3">
                    Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage;