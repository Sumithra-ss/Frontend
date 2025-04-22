

import updinstance from "./updinstance";

const upload = {
   
    Createtutor: async (data) => {
    return await updinstance.post("/createuploadetails", data);
        
    },
    
}

export default upload;