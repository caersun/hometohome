import axios from "axios";

// const domain = "http://localhost:3001";
// const domain = "";

const API = {
    // auth api
    register: (userInfo) => {
        return axios.post("/api/auth/signup", userInfo);
    },
    login: (user) => {
        return axios.post("/api/auth/login", user);
    },
    logout: () => {
        return axios.get("/api/auth/logout");
    },
    // cook api
    getCooks: () => {
        return axios.get("/api/cooks");
    },
    getCook: (id) => {
        return axios.get("/api/cooks/" + id);
    },
    updateCook: (id, updateData) => {
        return axios.put("/api/cooks/" + id, updateData);
    },
    deleteCook: (id) => {
        return axios.delete("/api/cooks/" + id);
    },
    // profile api
    getProfiles: () => {
        return axios.get("/api/profile");
    },
    getProfileById: (id) => {
        return axios.get("/api/profile/" + id);
    },
    getProfileByCookId: (cookId) => {
        return axios.get("/api/profile/cook/" + cookId)
    },
    createProfile: (profileInfo) => {
        return axios.post("/api/profile", profileInfo);
    },
    updateProfile: (id, updateData) => {
        return axios.put("/api/profile/" + id, updateData);
    },
    deleteProfile: (id) => {
        return axios.delete("/api/profile/" + id);
    },
    // listings api
    getListings: () => {
        return axios.get("/api/listings");
    },
    getListing: (id) => {
        return axios.get("/api/listings/" + id);
    },
    getListingsByCook: (cookId) => {
        return axios.get("/api/listings/cook/" + cookId);
    },
    createListing: (listingInfo) => {
        return axios.post("/api/listings", listingInfo);
    },
    updateListing: (id, updateData) => {
        return axios.put("/api/listings/" + id, updateData);
    },
    deleteListing: (id) => {
        return axios.delete("/api/listings/" + id);
    },
    // images api
    uploadImage: (formData) => {
        return axios.post("https://api.cloudinary.com/v1_1/dxpy2lt0i/image/upload", formData);
    },
};

export default API;