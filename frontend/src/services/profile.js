
import profileins from "./profileins"
const profile = {
    createstudentdetails: async (data) => {
        return await profileins.post("createstudentdetails", data);
    }
}
export default profile;