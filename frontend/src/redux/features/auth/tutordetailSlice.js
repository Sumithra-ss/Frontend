import { createSlice } from "@reduxjs/toolkit";
const initialState={
    Name:' ""',
    studentName:"",
    subject: "",
    availability: "",
    email: "",
    Rating:"",
    Feedback:"",
    profilePicture:"",
    
    
}
export const tutordetailSlice = createSlice({
    name: "tutordetail",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.Name = action.payload;
        },
        setStudentName: (state, action) => {
            state.studentName = action.payload;
        },
      
        setSubject: (state, action) => {
            state.subject = action.payload;
        },
        setAvailablity: (state, action) => {
            state.availability = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setRating: (state, action) => {
            state.Rating = action.payload;
        },
        setFeedback: (state, action) => {
            state.Feedback = action.payload;
        },
        setprofilePicture: (state, action) => {
            state.profilePicture = action.payload;
        },
    },
});

export const { setName, setStudentName, setSubject , setAvailablity,setEmail,setRating,setFeedback,setprofilePicture} = tutordetailSlice.actions;

export const selectName = (state) => state.tutordetailSlice.Name
export const selectStudentName = (state) => state.tutordetailSlice.studentName;
export const selectSubject = (state) => state.tutordetailSlice?.subject 
export const selectAvailablity = (state) => state.tutordetailSlice?.availability 
export const selectEmail = (state) => state.tutordetailSlice.email;
export const selectRating = (state) => state.tutordetailSlice?.Rating;
export const selectFeedback = (state) => state.tutordetailSlice?.Feedback;
export const selectPicture = (state) => state.tutordetailSlice.profilePicture;

export default tutordetailSlice.reducer;
