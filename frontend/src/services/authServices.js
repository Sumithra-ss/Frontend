import instance from "./instance";

const authServices = {
    register: async (data) => {
        return await instance.post("/auth/register", data);
    },
    login: async (data) => {
        return await instance.post("/auth/login", data);
    },
    logout: async () => {
        return await instance.post("/auth/logout");
    },
    me: async () => {
        return await instance.get("/auth/me");
    },
    updatePost: async () => {
        return await instance.post("/auth/id");
    },
}

export default authServices;