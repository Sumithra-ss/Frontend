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
import store from "./redux/app/store";
import DashboardWrappers from "./wrappers/DashboardWrappers"
import Logout from "./component/Logout";
import authLoader from "./loaders/unit/authLoader";
import AdminWrpper from "./wrappers/AdminWrpper";
import AdminDashboard from "./wrappers/AdminWrpper";
import Dashboard from "./pages/user/DashboardPage";
import Layout from "./wrappers/LayoutWrapper"
import ProfilePage4 from "./wrappers/tutorWrapper";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage"
import ProfilePage from "./pages/user/ProfilePage";
import Appoinment from "./pages/user/Myappinment";
import BookedAppoinment from "./pages/user/Appoinment"
import Razorpay from "./pages/user/razorpay";
import ProfilePage1 from "./pages/Tutor/upload";
import ProfilePage2 from "./pages/Tutor/tutorProfile";
import Profiletuto from "./pages/Tutor/GetAlltutor";
import Onlinceclass1 from "./pages/user/Myonlineclass";
import Profiletutoedit from "./pages/Tutor/createtutor"
import Review from "./pages/Tutor/FeedbackReview"
import Feedback from "./pages/user/Feedback";
import Profilec from "./pages/Tutor/createlesson";
import Profilec1 from "./pages/Tutor/editlesson";
import Profilec2 from "./pages/Tutor/editbyid";
import Profilec3 from "./pages/user/editappoinment"
import Profilec4 from "./pages/user/Appoinmenteditbyid"
import Profile5 from "./pages/Tutor/paymenthistory"
import Profile6 from "./pages/admin/userdet"

import Profile7 from "./pages/admin/editRole"
const route=[
  {
    
      path: "/",
      element: <Layout />,
      loader: authLoader,
      hydrateFallbackElement: <p>Loading...</p>,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
              path: "/login",
             element: <LoginPages />
            },
                {
    
        path: "/register",
        element: <RegisterPage />
      
    },
   

      ]
    },
    {
      path:"/dashboard",
      element:<DashboardWrappers/>,
    loader:authLoader,
    hydrateFallbackElement:<p>Loading...</p>,
    children:[
      {
        index: true,
        loader:authLoader,
        element: <Dashboard />
      },
      {
        index: true,
        path: "tutor/tutorProfile/tutor/tutorProfile/:ID",
       
        element: <ProfilePage2 />
      },
      
      {

        path: "Profile",
       element: <ProfilePage />,
loader: authLoader,
   hydrateFallbackElement: <p>Loading profile...</p>
  },
  {

     path: "Appoinment",
     element: <BookedAppoinment />,
     loader: authLoader,
      hydrateFallbackElement: <p>Loading profile...</p>
     },
     {
      path: "onlineclass1",
      element: <Onlinceclass1/>,
       loader: authLoader,
      hydrateFallbackElement: <p>Loading profile...</p>
    
      },
      {
         path: "Feedback",
       element: <Feedback/>,
       loader: authLoader,
      hydrateFallbackElement: <p>Loading profile...</p>
      
         },
         {
          path: "editappoinment",
        element: <Profilec3/>,
        loader: authLoader,
       hydrateFallbackElement: <p>Loading profile...</p>
       
          },
          
          {
            index: true,
        path: "editappoinment/Appoinmenteditbyid/:ID",
           
          element: <Profilec4/>,
          loader: authLoader,
         hydrateFallbackElement: <p>Loading profile...</p>
         
            },
            {

              path: "Razorpay/",
              element: <Razorpay/>,
              loader: authLoader,
              hydrateFallbackElement: <p>Loading profile...</p>
              },
              {
                path: "logout",
                element: <Logout />,
                 hydrateFallbackElement: <p>Please wait...</p>
                }
     
    ]


    },
    {
        
      path: "dashboard/dashboard/Appoinment/:ID",
     
      element: <Appoinment />
    },
    {
      path:"/admin",
      element:<AdminWrpper/>,
      loader: authLoader,
      hydrateFallbackElement:<p>Loading...</p>,
      children:[
        {
          index: true,
          element:<Profile6/>,
          loader: authLoader,
      hydrateFallbackElement:<p>Loading...</p>,
        },
        {
          inpath: "dashbaord/logout",
          element:<Profile6/>,
          loader: authLoader,
      hydrateFallbackElement:<p>Loading...</p>,
        },
      ]
    },
    {
      path:"admin/dashbaord/getuser",
      element:<Profile6/>,
      loader: authLoader,
  hydrateFallbackElement:<p>Loading...</p>,
    },
    {
      path:"editRole/:ID",
      element:<Profile7/>,
      loader: authLoader,
  hydrateFallbackElement:<p>Loading...</p>,
     },
   
    {
      path:"/tutor",
      element:<ProfilePage4 />,
      loader: authLoader,
      hydrateFallbackElement:<p>Loading...</p>,
      children: [
        {
          index: true,
          element: <ProfilePage1 />
          //   element: <ProfilePage1 />
        },
        {
          path: "upload",
            element: <ProfilePage1 />,
            loader: authLoader,
            
        }
       ,
       {

                 path: "tutorProfile",
                element: <Profiletuto />,
               loader: authLoader,
               hydrateFallbackElement: <p>Loading profile...</p>
             },
             {
             
               path: "creatlesson",
            element: <Profiletutoedit />,
            loader: authLoader,
            hydrateFallbackElement: <p>Loading profile...</p>
             },

             {
             
              path: "FeedbackReview",
           element: <Review />,
           loader: authLoader,
           hydrateFallbackElement: <p>Loading profile...</p>
            },
            {
              index:true,
              path:"tutor/tutorProfile/tutor/tutorProfile/ID/FeedbackReview/ID",
              element:<Feedback />
            }
            ,
            {
              path:"editlesson",
              element:< Profilec1/>,
              loader: authLoader,
              hydrateFallbackElement: <p>Loading profile...</p>

            },
            {
              index:true,
              path:"tutor/editlesson/editappoinmentbyid/ID"
            },
            {
              path:"tutor/payment",
              element:< Profile5/>,
              loader: authLoader,
              hydrateFallbackElement: <p>Loading profile...</p>

            },
            
             
      ],
      
    },
    
    {
      index: true,
      path: "tutor/tutorProfile/tutor/tutorProfile/:ID",
      //tutor/tutorProfile/tutor/tutorProfile/67fe579a60dbd8c84b255d79
      element: <ProfilePage2 />
    },
    {
      index: true,
      path: "tutor/tutorProfile/tutor/tutorProfile/:ID/createinglesson/:ID",
      //tutor/tutorProfile/tutor/tutorProfile/67fe579a60dbd8c84b255d79
      element: <Profilec />
    },
{
  index: true,
  path: "tutor/editlesson/editappoinmentbyid/:ID",
  element:<Profilec2 />
},

    
  
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
 <ToastProvider >

  <RouterProvider router={router} />
  </ToastProvider >
 </Provider>
      
   
</>
}
export default App