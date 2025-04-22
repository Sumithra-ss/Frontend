import updinstance from "./updinstance";

const tutor = {
   
    Createtutor: async (data) => {
    return await updinstance.post("/createtutor", data);
        
    },
    getTutorbyid: async (data) => {
        return await updinstance.post("/getTutorbyid/:id", data);
            
        },
}

export default tutor;