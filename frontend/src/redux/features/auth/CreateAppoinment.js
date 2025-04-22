import { createSlice } from "@reduxjs/toolkit";
const initialState= {
           
    name:"",
    subject:"",
    slotDate:"",
     slotTime:"10:00",
     Active1:""
}

export const CreateAppoinment = createSlice({
    name: "Appoinment",
    initialState,
    reducers: {
       
        setName: (state, action) => {
            state.name=action.payload
        },
        setSubject: (state, action) => {
            state.subject=action.payload
        },
        setSlotDate: (state, action) => {
            state.slotDate=action.payload
        },
        setsSlotTime: (state, action) => {
            state.slotTime=action.payload
        },
        setsACtive1: (state, action) => {
            state.Active1=action.payload
        }
    }
});

export const { setName ,setSubject,setSlotDate,setsSlotTime,setsACive1} = CreateAppoinment.actions;


export const selectName = (state) => state.CreateAppoinment?.name;
export const selectSubject = (state) => state.CreateAppoinment?.subject;
export const selectSlotDate = (state) => state.CreateAppoinment?.slotDate;
export const selectSlotTime = (state) => state.CreateAppoinment?.slotTime;
export const selectACtive1 = (state )=> state.CreateAppoinment?.Active1;


export default CreateAppoinment.reducer;