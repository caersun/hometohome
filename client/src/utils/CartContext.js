import { createContext, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value="I'm from CartContext!">
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error(`useCartContext must be used within a CartProvider`);
    };

    return context;
}

export { CartProvider, useCartContext };