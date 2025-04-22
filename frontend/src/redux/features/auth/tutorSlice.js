import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    Name:' ""',
    email: "",
    password: "",
    Experience: "",
    Expertise: "",
    Qualifications: "",
    
    
}

export const tutorSlice = createSlice({
    name: "tutor",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.Name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setExper: (state, action) => {
            state.Experience = action.payload;
        },
        setExpert: (state, action) => {
            state.Expertise = action.payload;
        },
        setQualificat: (state, action) => {
            state.Qualifications = action.payload;
        },
    },
});

export const { setName, setEmail, setPassword , setExper,setExpert,setQualificat} = tutorSlice.actions;

export const selectName = (state) => state.tutorSlice?.Name
export const selectEmail = (state) => state.tutorSlice?.email;
export const selectPassword = (state) => state.tutorSlice?.password;
export const selectexperience = (state) => state.tutorSlice?.Experience;
export const selectexpertise = (state) => state.tutorSlice?.Expertise;
export const selectqualificat = (state) => state.tutorSlice?.Qualifications;

export default tutorSlice.reducer;