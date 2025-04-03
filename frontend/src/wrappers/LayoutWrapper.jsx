import {  Outlet } from "react-router";
import NavBar from "../component/NavBar";

const LayoutWrapper = () => {
return (
    <>
    <NavBar />
    <outlet />
    </>
)
}
    


export default LayoutWrapper;