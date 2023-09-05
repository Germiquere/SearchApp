import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DataApiProvider from "./context/DataApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <DataApiProvider>
                <App />
            </DataApiProvider>
        </BrowserRouter>
    </React.StrictMode>
);
