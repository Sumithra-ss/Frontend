import updinstance from "./updinstance";

const GetAlltutors = {
   
    createtutorsetails: async (data) => {
    return await updinstance.post("/createtutorsetails",data);
        
    },
    Gettutorbyid: async (data) => {
        return await updinstance.get("/getTutorbyid/:id",data);
        

    },
   
}

export default GetAlltutors
;