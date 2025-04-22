import updinstance from "./updinstance";

const tutordetail= {
   
    createtutorsetails: async (data) => {
    return await updinstance.post("/createtutorsetails", data);
        
    },
   
}

export default tutordetail;