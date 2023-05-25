import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Bọc provider lên App để React sử dụng được Redux
import { Provider } from "react-redux";
import reduxConfig from "./redux";

const store = reduxConfig();

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
