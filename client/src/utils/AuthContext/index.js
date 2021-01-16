// Modified from:
// See https://soshace.com/react-user-login-authentication-using-usecontext-and-usereducer/
// See https://github.com/nero2009/login-auth-useContext

import { login, logout, update } from "./actions";
import { AuthProvider, useAuthDispatch, useAuthState } from "./context";

export { AuthProvider, useAuthState, useAuthDispatch, login, logout };