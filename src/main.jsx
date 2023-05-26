import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Bọc provider lên App để React sử dụng được Redux
import { Provider } from "react-redux";
import reduxConfig from "./redux.jsx";

const store = reduxConfig();

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
