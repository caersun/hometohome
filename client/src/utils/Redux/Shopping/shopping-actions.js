import *  as actionTypes from "./shopping-types";
import API from "../../API";

export const addToCart = (itemID) => async (dispatch, getState) => {
    const { data } = await API.getListing(itemID);
    // console.log("in shoppingactions ~ async addtocart ~ after api.getlisting ~ data", data);
    
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
            food: data.food,
            description: data.description,
            price: data.price,
            imgURL: data.imgURL
        }
    });
    
}; 

export const removeFromCart = (itemID) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    });
};

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    };
};

// export const loadCurrentItem = (item) => {
//     return {
//         type: actionTypes.LOAD_CURRENT_ITEM,
//         payload: item
//     };
// };