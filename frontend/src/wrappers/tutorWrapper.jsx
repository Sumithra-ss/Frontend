import {  Outlet ,useLoaderData,useNavigate} from "react-router";
import NavBar from "../component/NavBar";


const tutorWrapper = ()=>
{
    const  user = useLoaderData();
    const Navigate=useNavigate()
    // const user=null
 console.log(user.role);
 
     if (!user) {
         return <Navigate to="/login" />
     }
 
    //  if (user.user.role == 'tutor') {
    //      return <Navigate to="/tutor/tutorProfile" />
    //  }
 
     return (
         <>
             <NavBar
             user={user.user} />
             <Outlet />
             <></>
         </>
     )
}
export default  tutorWrapper