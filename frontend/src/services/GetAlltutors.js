import updinstance from "./updinstance";

const GetAlltutors = {
    getTutors: async () => {
        return await updinstance.get("http://localhost:3001/gettutor");
    },
    
}

export default GetAlltutors;