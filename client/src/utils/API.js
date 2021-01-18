import axios from "axios";

// TODO: How to make it so URL is NOT at localhost:3001? Does not register/login without it
// const domain = "http://localhost:3001";
const domain = "";

const API = {
    // auth api
    register: (userInfo) => {
        return axios.post(domain + "/api/auth/signup", userInfo);
    },
    login: (user) => {
        return axios.post(domain + "/api/auth/login", user);
    },
    logout: () => {
        return axios.get(domain + "/api/auth/logout");
    },
    // cook api
    getCooks: () => {
        return axios.get(domain + "/api/cooks");
    },
    getCook: (id) => {
        return axios.get(domain + "/api/cooks/" + id);
    },
    updateCook: (id, updateData) => {
        return axios.put(domain + "/api/cooks/" + id, updateData);
    },
    deleteCook: (id) => {
        return axios.delete(domain + "/api/cooks/" + id);
    },
    // profile api
    getProfiles: () => {
        return axios.get(domain + "/api/profile");
    },
    getProfileById: (id) => {
        return axios.get(domain + "/api/profile/" + id);
    },
    getProfileByCookId: (cookId) => {
        return axios.get(domain + "/api/profile/cook/" + cookId)
    },
    createProfile: (profileInfo) => {
        return axios.post(domain + "/api/profile", profileInfo);
    },
    updateProfile: (id, updateData) => {
        return axios.put(domain + "/api/profile/" + id, updateData);
    },
    deleteProfile: (id) => {
        return axios.delete(domain + "/api/profile/" + id);
    },
    // listings api
    getListings: () => {
        return axios.get(domain + "/api/listings");
    },
    getListing: (id) => {
        return axios.get(domain + "/api/listings/" + id);
    },
    getListingsByCook: (cookId) => {
        return axios.get(domain + "/api/listings/cook/" + cookId);
    },
    createListing: (listingInfo) => {
        return axios.post(domain + "/api/listings", listingInfo);
    },
    updateListing: (id, updateData) => {
        return axios.put(domain + "/api/listings/" + id, updateData);
    },
    deleteListing: (id) => {
        return axios.delete(domain + "/api/listings/" + id);
    },
    // images api
    uploadImage: (formData) => {
        return axios.post("https://api.cloudinary.com/v1_1/dxpy2lt0i/image/upload", formData);
    },
    // createCookImage: (info) => {
    //     return axios.post(domain + "/api/images/cookImage", info);
    // },
    // updateCookImage: (id, info) => {
    //     return axios.put(domain + "/api/images/cookImage/" + id, info);
    // },
    // createListingImage: (info) => {
    //     return axios.post(domain + "/api/images/listingImage", info);
    // },
    // updateListingImage: (id, info) => {
    //     return axios.put(domain + "/api/images/listingImage/" + id, info);
    // },
};

export default API;