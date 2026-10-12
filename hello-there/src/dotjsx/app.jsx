import { Mee } from "./mee";
import { Routes, Route, Navigate } from "react-router";
import { MoreMe } from "./more.me";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Mee />} />
            <Route path="/more-me" element={<MoreMe />} />
        </Routes>
    );
}
