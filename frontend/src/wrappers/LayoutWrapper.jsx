import {  Outlet} from "react-router";
import NavBar from "../component/NavBar";

const LayoutWrapper = () => {
           
    // const user = useLoaderData()
    // // if (user.user.role == 'admin') {
    // //     return <Navigate to="/admin" />
    // // }

    return (
        <>
            <NavBar/>,
            <ToastProvider />
                <Outlet />
            
            
        </>
    )

}



export default LayoutWrapper;