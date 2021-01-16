import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./utils/Redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

// if we want to render is strict mode, wrap app component in <React.StrictMode />
ReactDOM.render(<Provider store={store}><App /></Provider>,  document.getElementById('root'));