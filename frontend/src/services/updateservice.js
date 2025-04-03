import updinstance from "./updinstance";

const updateservice = {
    updatePost: async (data) => {
        return await updinstance.post("/api_url_lsm/posts/id", data);
    },
    
}

export default updateservice;