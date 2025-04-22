import updinstance from "./updinstance";

const GetAlluser = {
   
    Createtutor: async () => {
    return await updinstance.get("/getuserbtid/:email',getuserbtid");
        
    },
   
}

export default GetAlluser
;