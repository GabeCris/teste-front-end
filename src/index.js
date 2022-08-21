import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./contexts/useModal/useModal";
import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
);
