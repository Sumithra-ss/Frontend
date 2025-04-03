import updinstance from "./updinstance";

const Appoinment = {
   
    CreateAppoinment: async (data) => {
    return await updinstance.post("/createtutorApp", data);
        
    },
    createtutorAppdet: async (data) => {
        return await updinstance.post("/createtutorAppdet", data);
            
        },
        updateAppdetails: async (data) => {
            return await updinstance.post("/updateAppdetails/:Appid", data);
                
            },
}

export default Appoinment;