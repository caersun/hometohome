import * as actionTypes from "./shopping-types";

// TODO: need to get products from individual cooks on modal load
const INITIAL_STATE = {
    products: [
        {
            id: 1,
            food: "Tamales",
            description: "the best tamales you've ever eaten",
            price: 12.00,
            img: "https://stockphoto.com/samples/NzY0MDUxNDUwMDAxMWY1YmNmYjBlZA==/ODgyMjExZjViY2ZiMGVk/homemade-corn-and-chicken-tamales.jpg&size=1024"
        },
        {
            id: 2,
            food: "Tamales",
            description: "the best tamales you've ever eaten",
            price: 12.00,
            img: "https://stockphoto.com/samples/NzY0MDUxNDUwMDAxMWY1YmNmYjBlZA==/ODgyMjExZjViY2ZiMGVk/homemade-corn-and-chicken-tamales.jpg&size=1024"
        },
        {
            id: 3,
            food: "Tamales",
            description: "the best tamales you've ever eaten",
            price: 12.00,
            img: "https://stockphoto.com/samples/NzY0MDUxNDUwMDAxMWY1YmNmYjBlZA==/ODgyMjExZjViY2ZiMGVk/homemade-corn-and-chicken-tamales.jpg&size=1024"
        },
        {
            id: 4,
            food: "Tamales",
            description: "the best tamales you've ever eaten",
            price: 12.00,
            img: "https://stockphoto.com/samples/NzY0MDUxNDUwMDAxMWY1YmNmYjBlZA==/ODgyMjExZjViY2ZiMGVk/homemade-corn-and-chicken-tamales.jpg&size=1024"
        },
    ], // each product should contain id, food, description, price, img
    cart: [], // same as product and qty field
    currentItem: null
};

// setting default state = INITIAL_STATE
const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            // get item's data from the products array
            const item = state.products.find(product => product.id === action.payload.id);
            // check if item is in cart already
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                ...state,
                cart: inCart 
                    ? state.cart.map(item => 
                        item.id === action.payload.id 
                            ? { ...item, qty: item.qty + 1 }
                            : item
                        )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => 
                    item.id === action.payload.id 
                        ? { ...item, qty: action.payload.qty }
                        : item
                )
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;