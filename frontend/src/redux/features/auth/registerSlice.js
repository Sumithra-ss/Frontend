import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        name: "",
        email: "",
        password: "",
        role:""
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
    },
});

export const { setName, setEmail, setPassword,setRole } = registerSlice.actions;

export const selectName = (state) => state.register.name;
export const selectEmail = (state) => state.register.email;
export const selectPassword = (state) => state.register.password;
export const selectRole = (state) => state.register.role;

export default registerSlice.reducer;