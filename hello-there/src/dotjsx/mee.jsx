import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "../dotcss/mee.css";

createRoot(document.querySelector(".--mee")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
