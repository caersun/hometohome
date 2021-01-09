import { useContext, useState, createContext } from "react";
import API from "./API";

const authenticationContext = createContext();

function ProvideAuth({ children }) {
    const authentication = useProvideAuth();
    return <authenticationContext.Provider value={authentication}>{children}</authenticationContext.Provider>
};

function useAuthentication() {
    return useContext(authenticationContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (email, password, cb) => {
        return API.signin({ email, password }).then(res => {
            setUser(res.data);
            cb();
        });
    };

    return { user, signin };
};

export { ProvideAuth, useAuthentication, useProvideAuth };