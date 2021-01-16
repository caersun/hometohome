import API from "../API";

export async function login(dispatch, loginPayload) {
    try {
        dispatch({ type: "REQUEST_LOGIN" });
        let response = await API.login(loginPayload);
        // console.log("actions.js ~ response from API.login", response);
        if (response.data) {
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
            localStorage.setItem("currentUser", JSON.stringify(response.data));
            return response;
        };

        dispatch({ type: "LOGIN_ERROR", error: response.errors[0] });
        console.log(response.errors);
        return;
    } catch (error) {
        dispatch({ type: "LOGIN_ERROR", error: error });
        console.log(error);
    }
};

export async function logout(dispatch) {
    dispatch({ type: "LOGOUT" });
    API.logout();
    localStorage.removeItem("currentUser");
};

// export async function update(dispatch, id, updatePayload) {
//     try {
//         dispatch({ type: "REQUEST_UPDATE" });
//         let response = await API.updateCook(id, updatePayload);
//         console.log("in actions.js ~ response from API.updateCook:", response);

//         if (response.data) {
//             dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
//             localStorage.setItem("currentUser", JSON.stringify(response.data));
//             return response;
//         };

//         dispatch({ type: "UPDATE_ERROR", error: response.errors[0] });
//         console.log(response.errors);
//         return;
//     } catch (error) {
//         dispatch({ type: "UPDATE_ERROR", error: error });
//         console.log(error);
//     };
// }