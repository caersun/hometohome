import axios from "axios";

const API = {
    register: (fullName, email, password) => {
        axios({
            method: "POST",
            data: { fullName, email, password },
            withCredentials: true,
            url: "http://localhost:3001/api/auth/register"
        })
            .then(res => console.log("inside API.register() and registered!", res))
            .catch(err => console.log("error with registration:", err));
    },
    login: (email, password) => {
        axios({
            method: "POST", 
            data: { email, password },
            withCredentials: true,
            url: "http://localhost:3001/api/auth/login"
        })
            .then(res => console.log("inside API.login() and logged in!", res))
            .catch(err => console.log("error with login:", err));
    },
};

export default API;