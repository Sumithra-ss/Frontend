import { Navigate, Outlet, useLoaderData } from "react-router";
import NavBar from "../component/NavBar";

const 
AdminWrapper = () => {

    const user = useLoaderData();
    console.log(user.role)

    if (!user) {
        return <Navigate to="/login" />
    }
    // if (user.user.role != 'admin') {
    //     return <Navigate to="/dashboard" />
    // }
    if (user.user.role == 'admin') {
        return <Navigate to="/admin/dashboard" />
    }

    return (
        <>
            <NavBar
                user={user.user}
            />
            <Outlet />
        </>
    );
}

export default AdminWrapper;