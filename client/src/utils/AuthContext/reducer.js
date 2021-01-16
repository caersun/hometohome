// import React, { useState, useReducer } from "react";

let user = localStorage.getItem("currentUser") 
    ? JSON.parse(localStorage.getItem("currentUser")).user
    : "";

export const initialState = {
    user: "" || user,
    loading: false,
    errorMessage: null
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true,
            };
        case "LOGIN_SUCCESS":
            // console.log("success!!", action.payload);
            return {
                ...initialState,
                user: action.payload,
                loading: false
            };
        case "LOGOUT": 
            return {
                ...initialState,
                user: ""
            };
        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };
        // case "REQUEST_UPDATE":
        //     return {
        //         ...initialState,
        //         loading: true
        //     };
        // case "UPDATE_SUCCESS":
        //     console.log("in reducer ~ update_success ~ action.payload", action.payload);
        //     return {
        //         ...initialState,
        //         user: action.payload,
        //         loading: false
        //     };
        // case "UPDATE_ERROR":
        //     return {
        //         ...initialState,
        //         loading: false,
        //         errorMessage: action.error
        //     };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};