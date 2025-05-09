import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice"
 import loginReducer from "../features/auth/loginSlice";
 import CreateAppoinment  from "../features/auth/CreateAppoinment";
 import  tutorSlice from "../features/auth/tutorSlice";
// import createPostReducer from "../features/post/createPostSlice";
// import confirmationReducer from "../features/dialog/confirmationSlice";
// import { thunk } from "redux-thunk";

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        Appoinment:CreateAppoinment,
        tutorSlice:tutorSlice
        // createPost: createPostReducer,
        // confirmation: confirmationReducer,
    }
   //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;