import { Mee } from "./mee";
import { Routes, Route, Navigate } from "react-router";
import { MoreMe } from "./more.me";
import { Wish } from "./posts/wish";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Mee />} />
            <Route path="/~more" element={<MoreMe />} />
            <Route path="/posts/wish" element={<Wish />} />
            <Route
                path="*"
                element={
                    <div className="flex justify-center w-full text-text-1 items-center mt-10">
                        <a href="/" className="underline hover:text-text-0">
                            I'm here
                        </a>
                    </div>
                }
            />
        </Routes>
    );
}
