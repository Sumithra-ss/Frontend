import { Navigate, Outlet,useLoaderData} from "react-router";
import NavBar from "../component/NavBar";

const DashboardWrapper = () => {


    const  user = useLoaderData();
   // const user=null
//console.log(user.role);

    if (!user) {
        return <Navigate to="/login" />
    }

    // if (user.user.role == 'admin') {
    //     return <Navigate to="/admin" />
    // }

    return (
        <>
            <NavBar
            user={user.user} />
            <Outlet />
        </>
    )
}

export default DashboardWrapper;