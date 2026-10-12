import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "../dotcss/mee.css";
import { BrowserRouter } from "react-router";

createRoot(document.querySelector(".--mee")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
