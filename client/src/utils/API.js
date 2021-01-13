import axios from "axios";

const domain = "http://localhost:3001";
// TODO: How to make it so URL is NOT at localhost:3001? Does not register/login without it
const API = {
    register: (userInfo) => {
        return axios.post(domain + "/api/auth/signup", userInfo);
    },
    login: (user) => {
        return axios.post(domain + "/api/auth/login", user);
    },
    logout: () => {
        return axios.get(domain + "/api/auth/logout");
    },
    // TODO: Doesn't work??? req.user does not exist
    // getCurrentUser: () => {
    //     return axios.get(domain + "/api/auth/user");
    // },
};

export default API;