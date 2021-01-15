import axios from "axios";

// TODO: How to make it so URL is NOT at localhost:3001? Does not register/login without it
const domain = "http://localhost:3001";

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
    getCooks: () => {
        return axios.get(domain + "/api/cooks");
    },
    getCook: () => {
        return axios.get(domain + "/api/cooks/:id");
    },
    updateCook: () => {
        return axios.put(domain + "/api/cooks/:id");
    },
    deleteCook: () => {
        return axios.delete(domain + "/api/cooks/:id");
    },
    getListings: () => {
        return axios.get(domain + "/api/listings");
    },
    getListing: () => {
        return axios.get(domain + "/api/listings/:id");
    },
    createListing: (listingInfo) => {
        return axios.post(domain + "/api/listings", listingInfo);
    },
    updateListing: () => {
        return axios.put(domain + "/api/listings/:id");
    },
    deleteListing: () => {
        return axios.delete(domain + "/api/listings/:id");
    }
};

export default API;