import axios from "axios";
// import qs from "qs";

//setting up environment variables
// const clientID = process.env.REACT_APP_API_KEY;
// const secret = process.env.REACT_APP_API_SECRET; 

export default {
    registerUser: function (payload, history) {
        console.log("payload", payload);
        axios.post("/auth/register", payload)
        .then(data => {
            console.log('successful post', data);
            localStorage.setItem('login_token', data.data.token);  
        })
    },

    loginUser: function (payload, history) {
        axios.post("/auth/login", payload)
        .then(data => {
            console.log(data);
            localStorage.setItem('login_token', data.data.token);
            axios({
                method:'GET',
                url: '/auth/isLoggedInTest',
                headers:{
                    common:{
                        "login_token" : localStorage.getItem('login_token')
                    }
                }
            })
            .then(data => {
                console.log('proof that youre logged in', data);
            });
        })
        .catch(err => console.log(err));
    }
}
