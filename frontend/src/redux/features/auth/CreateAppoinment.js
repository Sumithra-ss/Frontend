import { createSlice } from "@reduxjs/toolkit";

export const CreateAppoinment = createSlice({
    name: "Appoinment",
    initialState: {
           
        name:"",
        subject:"",
        slotDate:"",
         slotTime:"10:00",
         Active1:""
    },
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


export const selectName = (state) => state.Appoinment.name;
export const selectSubject = (state) => state.Appoinment.subject;
export const selectSlotDate = (state) => state.Appoinment.slotDate;
export const selectSlotTime = (state) => state.Appoinment.slotTime;
export const selectACtive1 = (state )=> state.Appoinment.Active1;


export default CreateAppoinment.reducer;