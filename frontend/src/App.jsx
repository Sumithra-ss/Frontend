import { createBrowserRouter } from "react-router";
import {RouterProvider} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePages";
import LoginPages from "./pages/LoginPages";
import ToastProvider from "./component/ToastProvider"
import RegisterPage from "./pages/RegisterPage";
import LayoutWrapper from "./wrappers/LayoutWrapper";
import { Children } from "react";
import { Provider } from "react-redux";
import store from "./redux/App/store";
import DashboardWrappers from "./wrappers/DashboardWrappers"
import Logout from "./component/Logout";
import authLoader from "./loaders/unit/authLoader";
import AdminWrpper from "./wrappers/AdminWrpper";
import AdminDashboard from "./wrappers/AdminWrpper";
import Dashboard from "./pages/user/DashboardPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage"
import ProfilePage from "./pages/user/ProfilePage";
import Appoinment from "./pages/user/Myappinment";
import BookedAppoinment from "./pages/user/Appoinment"
import Razorpay from "./pages/user/razorpay";
const route=[
  {
    
      path: "/dashboard",
      element: <DashboardWrappers />,
      loader: authLoader,
      hydrateFallbackElement: <p>Loading...</p>,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: "logout",
          element: <Logout />,
          hydrateFallbackElement: <p>Please wait...</p>
        },
        // {
        //   path: "feed",
        //   element: <UserFeed />,
        //   hydrateFallbackElement: <p>Loading Feed...</p>,
        //   loader: userFeedLoader
        // },
        // {
        //   path: "create-post",
        //   element: <CreatePost />
        // },
         {

          path: "Profile",
          element: <ProfilePage />,
          loader: authLoader,
          hydrateFallbackElement: <p>Loading profile...</p>
        },
        
        {

          path: "Appoinment/:ID",
          element: <Appoinment />,
          loader: authLoader,
          hydrateFallbackElement: <p>Loading profile...</p>
        },
        {

          path: "Appoinmentdetail/",
          element: <BookedAppoinment/>,
          loader: authLoader,
          hydrateFallbackElement: <p>Loading profile...</p>
        },
        {

          // path: "Razorpay/",
          // element: <BookedRazorpayAppoinment/>,
          // loader: authLoader,
          // hydrateFallbackElement: <p>Loading profile...</p>
        },
      ]
    
  },
  {
    path:"/", 
    element:<HomePage />,
  },
      {
    
        path: "/register",
        element: <RegisterPage />
      
    },
    {
      path: "/login",
      element: <LoginPages />
    },
    
    {
      path: "/admin",
      element: <p>Admin dashboard</p>
      // loader: authLoader,
      // hydrateFallbackElement: <p>Loading profile...</p>
    },
    {
      path: "/admin/dashbaord/logout",
      element: <Logout />,
      hydrateFallbackElement: <p>Please wait...</p>
    },
    {
      path:"admin/",
      element:<AdminWrpper />,
   
      loader:authLoader,
      hydrateFallbackElement:<p>Please wait...</p>,
      Children:[
         {
          
            path:"",
            element: <AdminDashboardPage />
          },
          {
            path: "/admin/dashbaord/logout",
            element: <Logout />,
            hydrateFallbackElement: <p>Please wait...</p>
          }
      ]
      
    },
    {
      path:"/admin/dashboard",
      element:<AdminWrpper />,
   
      loader:authLoader,
      hydrateFallbackElement:<p>Please wait...</p>,
      Children:[
         {
          path: "",
          element: <AdminDashboard />
          },
          {
            path: "/admin/dashbaord/logout",
            element: <Logout />,
            hydrateFallbackElement: <p>Please wait...</p>
          }
      ]
      
    }

    ]

  
  

const router = createBrowserRouter(route,{
future:{
  v7_relativeSplatPath: true,
  v7_fetcherPersist: true,
  v7_normalizeFormMethod: true,
  v7_partialHydration: true,
  v7_skipActionErrorRevalidation: true

}
}
 
)

const App = ()=>{
return <>
 <Provider store={store}>
 <ToastProvider />
  
  <RouterProvider router={router} />
 </Provider>
      
   
</>
}
export default App