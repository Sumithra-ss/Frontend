import {ToastContainer} from "react-toastify"
const ToastProvider = ()=>{
    return (
        <ToastContainer 
        position="top-right"
        autoclose={300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnclick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
        />
    );
};
export default ToastProvider;